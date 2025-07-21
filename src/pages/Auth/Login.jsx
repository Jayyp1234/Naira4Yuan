import React from "react";
import { Link, useNavigate } from "react-router";
import { routes } from "@/data/routes";
import { FormControl } from "@/components/BaseComponents/FormInputs";
import { CloseEyeIcon, OpenEyeIcon } from "@/data/Icons";
import { GoogleIcon } from "@/data";
import { StateDataContext } from "@/App";
import { useModalTrigger } from "@/hooks/useModalTrigger";
import { ResetPasswordModal } from "../../components/LayoutComponents/AllModals";
import { AlertNotification } from "@/components/BaseComponents/Error";
import { useLoginMutation } from "@/states/services/authApi";
import { toast } from "react-toastify";
import { Spinner } from "@/components/BaseComponents/Spinner";

const postFormBtnTextStyle = "text-[.92rem] text-main font-semibold";

const Login = () => {
  const passwordInputRef = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);
  const { stateData, setStateData } = React.useContext(StateDataContext);
  const [showAlert, setShowAlert] = React.useState(true);

  const {
    data: { modals },
    toggleModal,
    switchModal,
  } = useModalTrigger(stateData);

  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [login, { isLoading }] = useLoginMutation();

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("Please enter both email and password.");
      return;
    }

    try {
      const res = await login({ email, password }).unwrap();

      toast.success("Login successful!");

      localStorage.setItem("token", res?.data?.access_token);

      navigate(routes.DASHBOARD.abs);
    } catch (err) {
      const message =
        err?.data?.message || "Login failed. Please check your credentials.";
      toast.error(message);
      console.error("Login error:", err);
    }
  };

  return (
    <div className="w-full pt-10 mx-auto md:w-9/12 lg:w-8/12 xl:w-3/6 2xl:w-2/5 sm:py-14 md:pb-20 md:pt-10">
      <header className="flex flex-col items-center text-center gap-y-3">
        <h2 className="text-3xl font-bold">Welcome Back.</h2>
        <span>
          New to Naira4yuan?
          <Link to={routes.AUTH.register.abs} className="ml-2 font-semibold text-black underline">
            Sign up
          </Link>
        </span>
      </header>
      <main className="mt-14">
        <div className="mb-4">
          {showAlert && (
            <AlertNotification
              message="Account logged out."
              subMessage="We logged you out because you were inactive for 5 minutes — it’s to help keep your account secure."
              onClose={() => setShowAlert(false)}
            />
          )}
        </div>
        <form className="flex flex-col gap-y-5">
          <FormControl
            type="text"
            style="w-full"
            placeholder="Enter your email address"
            label={{ exist: true, text: "Email Address" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <FormControl
            type={isVisible ? "text" : "password"}
            style="w-full"
            icon={{
              exist: true,
              action: () => setIsVisible((prev) => !prev),
              element: isVisible ? OpenEyeIcon : CloseEyeIcon,
            }}
            ref={passwordInputRef}
            placeholder="Enter your password"
            label={{ exist: true, text: "Password" }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="mt-2">
            <button
              type="button"
              disabled={isLoading}
              onClick={handleLogin}
              className="enabled:active:scale-95 transition-all ease-in-out bg-[#F1C34E] flex items-center justify-center w-full rounded-lg py-3.5 text-[.9rem] font-medium"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <Spinner className="w-4 h-4 !border-black" />
                  Logging in
                </span>
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
                onClick={() => toggleModal("AUTH_RESET_PASSWORD", true)}
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
              <img src={GoogleIcon} alt="Google login icon" className="w-full h-full" />
            </figure>
            <span className="text-[.9rem]">Continue with Google</span>
          </button>
        </footer>
      </main>

      <ResetPasswordModal modalData={{ toggleModal }} open={modals.AUTH_RESET_PASSWORD} />
    </div>
  );
};

export default Login;
