import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router";
import { routes } from "@/data/routes";
import { FormControl } from "@/components/BaseComponents/FormInputs";
import { CloseEyeIcon, OpenEyeIcon } from "@/data/Icons";
import { GoogleIcon } from "@/data";
import { StateDataContext } from "@/App";
import { useModalTrigger } from "@/hooks/useModalTrigger";
import { ResetPasswordModal } from "../../components/LayoutComponents/AllModals";
import { AlertNotification } from "@/components/BaseComponents/Error";
import { useForgotPasswordOtpMutation, useLoginMutation } from "@/states/services/authApi";
import { toast } from "react-toastify";
import { Spinner } from "@/components/BaseComponents/Spinner";

const postFormBtnTextStyle = "text-[.92rem] text-main font-semibold";

const Login = () => {
  const passwordInputRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const { stateData } = useContext(StateDataContext);
  const [showAlert, setShowAlert] = useState(false);
  const { data: { modals }, toggleModal } = useModalTrigger(stateData);
  const navigate = useNavigate();

  const [alertContent, setAlertContent] = useState({
    type: "default",
    message: "Account logged out.",
    subMessage: "We logged you out because you were inactive for 5 minutes — it’s to help keep your account secure.",
  });

  const [formData, setFormData] = useState({ email: "", password: "" });

  const [login, { isLoading, error }] = useLoginMutation();
  const [resendOtp] = useForgotPasswordOtpMutation();

  const isFormValid = formData.email.trim() !== "" && formData.password.trim() !== "";

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    try {
      const response = await login(formData).unwrap();

      if (response?.success && response?.data?.access_token) {
        localStorage.setItem("user_token", response.data.access_token);
        toast.success("Login successful");
        navigate(routes.DASHBOARD.abs);
      } else {
        toast.error(response?.message || "Login failed");
        setAlertContent({
          type: "danger",
          message: "Invalid credentials.",
          subMessage: response?.message || "Login failed",
        });
        setShowAlert(true);
      }
    } catch (err) {
      const message = err?.data?.message || "Something went wrong";
      toast.error(message);
      setAlertContent({
        type: "danger",
        message: "Login Failed",
        subMessage: message,
      });
      setShowAlert(true);
    }
  };

  return (
    <div className="w-full pt-10 mx-auto md:w-9/12 lg:w-8/12 xl:w-3/6 2xl:w-2/5 sm:py-14 md:pb-20 md:pt-10">
      <header className="flex flex-col items-center text-center gap-y-3">
        <h2 className="text-3xl font-bold">Welcome Back.</h2>
        <span>
          New to Naira4yuan?
          <Link to={routes.AUTH.register.abs} className="ml-2 font-semibold text-black underline underline-offset-2">
            Sign up
          </Link>
        </span>
      </header>
      <main className="mt-14">
        <div className="mb-4">
          {showAlert && (
            <AlertNotification
              type={alertContent.type}
              message={alertContent.message}
              subMessage={alertContent.subMessage}
              onClose={() => setShowAlert(false)}
            />
          )}
        </div>
        <form onSubmit={handleLogin} className="flex flex-col gap-y-5">
          <FormControl
            type={"text"}
            style="w-full"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="Enter your email address or phone number"
            label={{ exist: true, text: "Enter Address or phone number" }}
          />
          <div className="flex flex-col gap-y-2">
            <FormControl
              type={isVisible ? "text" : "password"}
              style="w-full"
              value={formData.password}
              onChange={(e) => handleChange("password", e.target.value)}
              icon={{
                exist: true,
                action: () => setIsVisible((prev) => !prev),
                element: isVisible ? OpenEyeIcon : CloseEyeIcon,
              }}
              ref={passwordInputRef}
              placeholder="Enter your password"
              label={{ exist: true, text: "Password" }}
            />

            {error?.data?.message && (
              <p className="text-sm text-red-500">{error.data.message}</p>
            )}
          </div>

          <div className="mt-2">
            <button
              type="submit"
              disabled={isLoading || !isFormValid}
              className={`transition-all ease-in-out flex items-center justify-center w-full rounded-lg py-3.5 text-[.9rem] font-medium ${isLoading || !isFormValid
                ? "bg-[#F1C34E]/60 cursor-not-allowed"
                : "bg-[#F1C34E] enabled:active:scale-95"
                }`}
            >
              {isLoading ? (
                <Spinner className="!border-black w-6 h-6" />
              ) : (
                "Proceed"
              )}
            </button>
            <div className="flex items-center justify-between mt-2.5">
              <button
                type="button"
                onClick={() => navigate(routes.AUTH.loginErr.abs)}
                className={postFormBtnTextStyle}
              >
                Trouble logging in
              </button>
              <button
                type="button"
                onClick={async () => {
                  const email = formData.email.trim();
                  if (!email) {
                    toast.error("Please enter your email address first");
                    return;
                  }

                  try {
                    toast.dismiss();
                    await resendOtp({ email }).unwrap();
                    toast.success("OTP sent to your email");
                    toggleModal("AUTH_RESET_PASSWORD", true);
                  } catch (err) {
                    const msg = err?.data?.message || "Failed to send OTP";
                    toast.error(msg);
                  }
                }}
                className={postFormBtnTextStyle}
              >
                Forgot Password
              </button>
            </div>
          </div>
        </form>

        <footer className="flex flex-col items-center text-center gap-y-4 mt-3.5 mb-5">
          <span>Or log in with</span>
          <button
            type="button"
            className="enabled:active:scale-95 transition-all ease-in-out w-full border border-solid border-black/30 rounded-lg p-2.5 py-3 flex items-center justify-center gap-x-2"
          >
            <figure className="flex items-center w-6 h-6">
              <img src={GoogleIcon} alt="Google icon" className="w-full h-full" />
            </figure>
            <span className="text-[.9rem]">Continue with Google</span>
          </button>
        </footer>
      </main>

      <ResetPasswordModal
        modalData={{ toggleModal }}
        open={modals.AUTH_RESET_PASSWORD}
        email={formData.email}
      />
    </div>
  );
};

export default Login;
