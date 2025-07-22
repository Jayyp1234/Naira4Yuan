import { useState, useEffect } from "react";
import { Modal } from "../BaseComponents/Modal";
import { FormControl, RadioInput, SelectBox } from "../BaseComponents/FormInputs";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import { CHN, CompletedIcon, FRA, NGN, Step1, Step2, Step3, Step4 } from "@/data";
import { FooterButton } from "../BaseComponents/FooterButton";
import { CopyIcon2, IconWrapper, WarningIcon, tickCircle, ShareIcon } from "../../data/Icons";
import { BorderWrapper } from "../PageComponents/Dashboard/Items";
import Iframe from "../BaseComponents/Iframe";
import { routes } from "../../data/routes";
import { ArrowDownToLine, ChevronLeft, ChevronRight, Download, Plus } from 'lucide-react';
import { Link, useNavigate } from "react-router";
import { Xchange, XchangeCard } from "./Xchange";
import { toast } from "react-toastify";
import { useForgotPasswordOtpMutation, useResetPasswordWithOtpMutation, useSendEmailOtpMutation, useSendSmsOtpMutation, useVerifyEmailOtpMutation, useVerifyPhoneOtpMutation } from "@/states/services/authApi";
import { Spinner } from "../BaseComponents/Spinner";

const inputModalStyle =
  "bg-slate-200 rounded-lg !min-w-14 !min-h-14 focus:!outline-main !outline-main !ring-main focus:!border-main focus:!ring-main !text-2xl";

export const BasicVerificationModal = ({ open, modalData, action }) => {
  const { toggleModal } = modalData;
  return (
    <Modal
      isOpen={open}
      onRequestClose={() => toggleModal("SELECT_ID", false)}
      modalHeader={{ hasHeader: true, modalTitle: "Basic Verification", style: "border-b", textStyle: "text-main" }}>
      <div className="flex flex-col w-full px-6 py-6 mx-auto gap-y-4 sm:w-10/12 md:w-9/12">
        <div className="flex flex-col flex-grow gap-y-3 min-h-40">
          <FormControl
            type="tel"
            inputMode="numeric"
            label={{
              exist: true,
              text: "ID type",
            }}
            placeholder="Enter your phone number"
          />
        </div>
        <div>
          <FooterButton onClick={action} text="Proceed" className="!text-[1.05rem] uppercase" />
        </div>
      </div>
    </Modal>
  );
};

export const SelectIdTypeModal = ({ open, modalData, action }) => {
  const { toggleModal } = modalData;
  const [selectedIdType, setSelectedIdType] = useState('');

  const handleSelection = (e) => setSelectedIdType(e.target.id);
  const handleContinue = () => {
    if (!selectedIdType) return alert("Please select an ID type.");
    action(selectedIdType);
  };

  return (
    <Modal
      isOpen={open}
      onRequestClose={() => toggleModal("SELECT_ID_TYPE", false)}
      modalHeader={{ hasHeader: true, modalTitle: "Basic Verification", style: "border-b", textStyle: "text-main" }}
    >
      <div className="flex flex-col w-full px-6 py-6 mx-auto gap-y-4 sm:w-10/12 md:w-9/12">
        <div className="flex flex-col flex-grow gap-y-4 min-h-72">
          <label htmlFor="bvn" className="flex items-center justify-between pb-3 border-b cursor-pointer">
            <div className="flex items-center gap-2">
              <RadioInput name="referral" id="bvn" checked={selectedIdType === 'bvn'} onChange={handleSelection} />
              <span className="flex text-base leading-tight">Bank Verification Number (BVN)</span>
            </div>
          </label>
          <label htmlFor="nin" className="flex items-center justify-between pb-2 border-b cursor-pointer">
            <div className="flex items-center gap-2">
              <RadioInput name="referral" id="nin" checked={selectedIdType === 'nin'} onChange={handleSelection} />
              <span className="flex text-base leading-tight">National Identity Number (NIN)</span>
            </div>
          </label>
        </div>
        <div>
          <FooterButton onClick={handleContinue} text="Continue" className="!text-[1.05rem] uppercase" />
        </div>
      </div>
    </Modal>
  );
};

export const SetPasswordModal = ({ open, modalData, action }) => {
  const { toggleModal } = modalData;

  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [error, setError] = useState("");

  const isValid = pin.length === 4 && confirmPin.length === 4 && pin === confirmPin;

  const handleSubmit = () => {
    if (!isValid) {
      if (pin.length !== 4 || confirmPin.length !== 4) {
        setError("PIN must be exactly 4 digits.");
      } else if (pin !== confirmPin) {
        setError("PINs do not match.");
      }
    } else {
      setError("");
      action?.(pin);
      toggleModal("SET_PASSWORD", false);
    }
  };

  return (
    <Modal
      isOpen={open}
      onRequestClose={() => toggleModal("SET_PASSWORD", false)}
      modalHeader={{
        hasHeader: true,
        modalTitle: "Enter a pin",
        style: "border-b",
        textStyle: "text-main",
      }}
    >
      <div className="flex flex-col w-full py-6 mx-auto gap-y-4 sm:w-10/12 md:w-9/12">
        <div className="flex flex-col flex-grow gap-y-3 min-h-72">
          <section>
            <span>
              Enter your preferred 4-digit pin for your Naira4Yuan account.
            </span>
            <div className="flex flex-col mt-6 gap-y-2">
              <FormControl
                type="password"
                inputMode="numeric"
                label={{ exist: true, text: "Pin *" }}
                placeholder="Enter your pin"
                value={pin}
                onChange={(e) => setPin(e.target.value.replace(/\D/g, "").slice(0, 4))}
              />
              <FormControl
                type="password"
                inputMode="numeric"
                label={{ exist: true, text: "Repeat Pin *" }}
                placeholder="Enter your pin again"
                value={confirmPin}
                onChange={(e) => setConfirmPin(e.target.value.replace(/\D/g, "").slice(0, 4))}
              />
            </div>
            {error && <span className="text-xs text-[#FF0000] mt-2">{error}</span>}
          </section>
        </div>
        <div>
          <FooterButton
            text="Continue"
            className="!text-[1.05rem]"
            onClick={handleSubmit}
            disabled={!isValid}
          />
        </div>
      </div>
    </Modal>
  );
};

export const ManualBVNVerificationModal = ({ open, modalData, action }) => {
  const { toggleModal } = modalData;

  return (
    <Modal
      isOpen={open}
      onRequestClose={() => toggleModal("SELECT_BANK", false)}
      modalHeader={{ hasHeader: true, modalTitle: "Basic Verification", style: "border-b", textStyle: "text-main" }}>
      <div className="flex flex-col w-full p-6 mx-auto gap-y-4 sm:w-10/12 md:w-9/12">
        <div className="flex flex-col flex-grow gap-y-3 min-h-72">
          <FormControl
            type="text"
            label={{
              exist: true,
              text: "Full name",
            }}
            placeholder="Enter your full name"
          />
          <FormControl
            type="tel"
            inputMode="numeric"
            label={{
              exist: true,
              text: "Phone number",
            }}
            placeholder="Enter your phone number"
          />
          <FormControl
            type="date"
            inputMode="numeric"
            label={{
              exist: true,
              text: "Phone number",
            }}
            placeholder="Enter your phone number"
          />
        </div>
        <div>
          <FooterButton text="Verify" className="!text-[1.05rem] uppercase" />
        </div>
      </div>
    </Modal>
  );
};

export const EmailVerificationModal = ({ open, modalData, action, email, first_name, last_name }) => {
  const { toggleModal } = modalData;

  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(60);

  const [verifyOtp, { isLoading }] = useVerifyEmailOtpMutation();
  const [resendOtp, { isLoading: isResending }] = useSendEmailOtpMutation();

  const isOtpValid = otp.trim().length === 4;

  useEffect(() => {
    if (!open) return;
    setTimer(60);
    setOtp("");
  }, [open]);

  useEffect(() => {
    if (timer <= 0) return;
    const countdown = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(countdown);
  }, [timer]);

  const handleSubmit = async () => {
    if (!isOtpValid) return;

    try {
      const res = await verifyOtp({
        email,
        first_name,
        last_name,
        code: otp,
      }).unwrap();

      if (res?.success) {
        toast.success("Email verified successfully");
        action();
        toggleModal("AUTH_EMAIL_VERIFICATION", false);
      } else {
        toast.error(res?.message || "Verification failed");
      }
    } catch (err) {
      const msg = err?.data?.message || "Something went wrong";
      toast.error(msg);
    }
  };

  const handleResend = async () => {
    try {
      await resendOtp({ email, first_name, last_name }).unwrap();
      toast.success("Verification code resent");
      setTimer(60);
    } catch (err) {
      const msg = err?.data?.message || "Failed to resend code";
      toast.error(msg);
    }
  };

  return (
    <Modal
      isOpen={open}
      onRequestClose={() => toggleModal("AUTH_EMAIL_VERIFICATION", false)}
      modalHeader={{
        hasHeader: true,
        modalTitle: "Verify email address",
        style: "border-b",
        textStyle: "text-main",
      }}
    >
      <div className="flex flex-col w-full p-6 mx-auto gap-y-4 sm:w-10/12 md:w-9/12">
        <div className="flex flex-col flex-grow gap-y-3 min-h-72">
          <section>
            <span>
              We sent a code to <b>{email}</b>
            </span>
            <div className="flex flex-col mt-6 gap-y-2">
              <div>
                <label htmlFor="code" className="text-[.94rem]">
                  Enter code
                </label>
                <InputOTP
                  maxLength={4}
                  value={otp}
                  onChange={setOtp}
                  className="flex flex-col"
                  id="email-verification-otp"
                >
                  <InputOTPGroup className="flex gap-x-4">
                    {[0, 1, 2, 3].map((index) => (
                      <InputOTPSlot key={index} index={index} className={inputModalStyle} />
                    ))}
                  </InputOTPGroup>
                </InputOTP>
              </div>
            </div>
          </section>
          <div className="mt-6">
            <span className="text-[.95rem]">
              Didn&apos;t receive a code?
              <button
                type="button"
                disabled={timer > 0 || isResending}
                onClick={handleResend}
                className={`font-semibold underline ms-2 text-main ${timer > 0 || isResending ? "opacity-50 cursor-not-allowed" : ""
                  }`}
              >
                {isResending
                  ? "Resending..."
                  : timer > 0
                    ? `Click to resend in 0:${timer < 10 ? `0${timer}` : timer}`
                    : "Click to resend"}
              </button>
            </span>
          </div>
        </div>
        <div>
          <FooterButton
            text={isLoading ? <Spinner className="!border-black w-6 h-6" /> : "Continue"}
            onClick={handleSubmit}
            className="!text-[1.05rem] uppercase"
            disabled={!isOtpValid || isLoading}
          />
        </div>
      </div>
    </Modal>
  );
};

export const NumberVerificationModal = ({
  open,
  modalData,
  action,
  phone_number,
  userRefCode,
  username,
  country_id,
  password,
  pin,
  dialCode,
}) => {
  const { toggleModal } = modalData;
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const [timer, setTimer] = useState(60);
  const [verifyOtp, { isLoading }] = useVerifyPhoneOtpMutation();
  const [resendOtp, { isLoading: isResending }] = useSendSmsOtpMutation();

  const isValidOtp = otp.length === 4;

  useEffect(() => {
    if (!open) return;
    setOtp("");
    setTimer(60);
  }, [open]);

  useEffect(() => {
    if (timer <= 0) return;
    const interval = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleSubmit = async () => {
    if (!isValidOtp) {
      setError("Please enter the 4-digit code.");
      return;
    }

    setError("");
    try {
      const res = await verifyOtp({
        userRefCode,
        password,
        pin,
        phone_number,
        country_id,
        username,
        code: otp,
      }).unwrap();

      if (res?.success) {
        toast.success("Phone number verified successfully");
        action?.(otp); // optional callback
        toggleModal("AUTH_NUMBER_VERIFICATION", false);
      } else {
        toast.error(res?.message || "Verification failed");
      }
    } catch (err) {
      const msg = err?.data?.message || "Something went wrong";
      toast.error(msg);
    }
  };

  const handleResend = async () => {
    try {
      await resendOtp({
        userRefCode,
        password,
        pin,
        phone_number,
        country_id,
        method: "sms", // or 'whatsapp', 'call'
        username,
      }).unwrap();
      toast.success("OTP sent to your phone");
      setTimer(60);
    } catch (err) {
      const msg = err?.data?.message || "Failed to resend code";
      toast.error(msg);
    }
  };

  return (
    <Modal
      isOpen={open}
      onRequestClose={() => toggleModal("AUTH_NUMBER_VERIFICATION", false)}
      modalHeader={{
        hasHeader: true,
        modalTitle: "Verify phone number",
        style: "border-b",
        textStyle: "text-main",
      }}
    >
      <div className="flex flex-col w-full p-6 mx-auto gap-y-4 sm:w-10/12 md:w-9/12">
        <div className="flex flex-col flex-grow gap-y-3 min-h-72">
          <section>
            <span>
              We sent a code to <b>{`${dialCode || ""}${phone_number?.slice(1) || ""}`}</b> on text and WhatsApp
            </span>

            <div className="flex flex-col mt-6 gap-y-2">
              <div>
                <label htmlFor="code" className="text-[.94rem]">
                  Enter code
                </label>
                <InputOTP
                  maxLength={4}
                  className="flex flex-col"
                  id="phone-verification-otp"
                  value={otp}
                  onChange={(val) => setOtp(val)}
                >
                  <InputOTPGroup className="flex gap-x-4">
                    <InputOTPSlot index={0} className={inputModalStyle} />
                    <InputOTPSlot index={1} className={inputModalStyle} />
                    <InputOTPSlot index={2} className={inputModalStyle} />
                    <InputOTPSlot index={3} className={inputModalStyle} />
                  </InputOTPGroup>
                </InputOTP>
                {error && <span className="text-xs text-[#FF0000]">{error}</span>}
              </div>
            </div>
          </section>

          <div className="mt-6">
            <span className="text-[.95rem]">
              Didn&apos;t receive a code?
              <button
                type="button"
                onClick={handleResend}
                disabled={timer > 0 || isResending}
                className={`font-semibold underline ms-2 text-main ${timer > 0 || isResending ? "opacity-50 cursor-not-allowed" : ""
                  }`}
              >
                {isResending
                  ? "Resending..."
                  : timer > 0
                    ? `Click to resend in 0:${timer < 10 ? `0${timer}` : timer}`
                    : "Click to resend"}
              </button>
            </span>
          </div>
        </div>
        <div>
          <FooterButton
            text={isLoading ? <Spinner className="!border-black w-6 h-6" /> : "Continue"}
            className="!text-[1.05rem] uppercase"
            onClick={handleSubmit}
            disabled={!isValidOtp || isLoading}
          />
        </div>
      </div>
    </Modal>
  );
};

export const ResetPasswordModal = ({ open, modalData, action, email }) => {
  const { toggleModal } = modalData;

  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resetPassword, { isLoading }] = useResetPasswordWithOtpMutation();
  const [resendOtp, { isLoading: isResending }] = useForgotPasswordOtpMutation();

  const [timer, setTimer] = useState(60);

  useEffect(() => {
    if (!open) return;
    setTimer(60);
  }, [open]);

  useEffect(() => {
    if (!open || timer <= 0) return;
    const interval = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [open, timer]);

  const isPasswordStrong = password.length >= 6;

  const isFormValid =
    otp.trim().length === 4 &&
    isPasswordStrong &&
    confirmPassword.trim().length >= 6 &&
    password === confirmPassword;

  const handleSubmit = async () => {
    if (!isFormValid) return;

    toast.dismiss();

    try {
      const res = await resetPassword({
        email,
        otp,
        password,
        confirm_password: confirmPassword,
      }).unwrap();

      if (res?.success) {
        toast.success("Password reset successful");
        toggleModal("AUTH_RESET_PASSWORD", false);
      } else {
        toast.error(res?.message || "Password reset failed");
      }
    } catch (err) {
      const msg = err?.data?.message || "Something went wrong";
      toast.error(msg);
    }
  };

  const handleResend = async () => {
    toast.dismiss();

    try {
      await resendOtp({ email }).unwrap();
      toast.success("OTP resent to your email");
      setTimer(60);
    } catch (err) {
      const msg = err?.data?.message || "Failed to resend OTP";
      toast.error(msg);
    }
  };

  return (
    <Modal
      isOpen={open}
      onRequestClose={() => toggleModal("AUTH_RESET_PASSWORD", false)}
      modalHeader={{ hasHeader: true, modalTitle: "", style: "", textStyle: "text-main" }}
    >
      <div className="flex flex-col w-full pb-6 mx-auto gap-y-4 sm:w-10/12 md:w-9/12">
        <div className="flex flex-col flex-grow gap-y-3 min-h-72">
          <section>
            <div className="text-center">
              <h2 className="text-2xl font-semibold">Reset Password</h2>
              <span className="text-sm">
                We sent a code to <b className="font-semibold underline underline-offset-2">{email}</b>
              </span>
            </div>

            <div className="my-5 flex flex-col gap-y-3.5">
              <div>
                <label htmlFor="code" className="text-[.94rem]">
                  Enter code
                </label>
                <InputOTP
                  maxLength={4}
                  value={otp}
                  onChange={setOtp}
                  className="flex flex-col"
                  aria-label="Enter 4-digit OTP code"
                >
                  <InputOTPGroup className="flex gap-x-4" role="group" aria-label="OTP input group">
                    {[0, 1, 2, 3].map((index) => (
                      <InputOTPSlot key={index} index={index} className={inputModalStyle} />
                    ))}
                  </InputOTPGroup>
                </InputOTP>
              </div>

              <FormControl
                type="password"
                label={{ exist: true, text: "New password" }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter new password"
              />
              <div className="flex flex-col gap-y-1">
                <FormControl
                  type="password"
                  label={{ exist: true, text: "Retype New Password" }}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Retype new password"
                />

                {password && confirmPassword && password !== confirmPassword && (
                  <span className="text-sm text-red-500">Passwords do not match</span>
                )}
              </div>

              <div className="mb-6">
                <span className="text-[.95rem]">
                  Didn&apos;t receive a code?
                  <button
                    type="button"
                    onClick={handleResend}
                    disabled={timer > 0 || isResending}
                    className={`ml-2 text-base font-semibold underline ${timer > 0 || isResending ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                  >
                    {isResending
                      ? "Resending..."
                      : timer > 0
                        ? `Click to resend in 0:${timer < 10 ? `0${timer}` : timer}`
                        : "Click to resend"}
                  </button>
                </span>
              </div>
            </div>

            <div>
              <FooterButton
                text={isLoading ? <Spinner className="!border-black w-6 h-6" /> : "Continue"}
                className="!text-[1.05rem] uppercase"
                onClick={handleSubmit}
                disabled={!isFormValid || isLoading}
              />
            </div>
          </section>
        </div>
      </div>
    </Modal>
  );
};

export const SelectReferralMethodModal = ({ open, modalData, action }) => {
  const { toggleModal } = modalData;

  const referralSources = [
    { id: "twitter", label: "Twitter" },
    { id: "friends_or_family", label: "Friends or Family" },
    { id: "linkedin", label: "LinkedIn" },
    { id: "instagram", label: "Instagram" },
    { id: "tiktok", label: "Tiktok" },
    { id: "word_of_mouth", label: "Word of mouth" },
  ];

  const [selected, setSelected] = useState("");

  const handleContinue = () => {
    if (selected) {
      action(selected);
      toggleModal("SELECT_REFERRAL_METHOD", false);
    }
  };

  return (
    <Modal
      isOpen={open}
      onRequestClose={() => toggleModal("SELECT_REFERRAL_METHOD", false)}
      modalHeader={{
        hasHeader: true,
        modalTitle: "Select referral method",
        style: "",
        textStyle: "text-main",
      }}
    >
      <div className="flex flex-col w-full p-6 mx-auto gap-y-4 sm:w-10/12 md:w-9/12">
        <div className="flex flex-col flex-grow gap-y-3 min-h-72">
          {referralSources.map((referral) => (
            <label
              key={referral.id}
              htmlFor={referral.id}
              className={`flex items-center justify-between pb-2 border-b border-gray-200 cursor-pointer last:border-b-0 ${selected === referral.id ? "" : ""
                }`}
              onClick={() => setSelected(referral.id)}
            >
              <div className="flex items-center gap-2">
                <RadioInput name="referral" id={referral.id} checked={selected === referral.id} />
                <span className="flex text-sm leading-tight">{referral.label}</span>
              </div>
            </label>
          ))}
        </div>
        <div>
          <FooterButton
            text="Continue"
            className="!text-[1.05rem] uppercase"
            onClick={handleContinue}
            disabled={!selected}
          />
        </div>
      </div>
    </Modal>
  );
};

// export const AccountOwnershipSelectBalanceModal = ({ open, modalData, action }) => {
//   const { toggleModal } = modalData;
//   const countries = [{ id: "ngn", label: "NGN-Balance", icon: NGN }];

//   return (
//     <Modal
//       isOpen={open}
//       onRequestClose={() => toggleModal("DASHBOARD_ACCOUNT_OWNERSHIP", false)}
//       modalHeader={{ hasHeader: true, modalTitle: "Select balance", style: "border-b", textStyle: "text-black" }}>
//       <div className="flex flex-col w-full p-6 mx-auto gap-y-4 sm:w-10/12 md:w-9/12">
//         <div className="flex flex-col flex-grow pt-6 gap-y-3 min-h-72">
//           {countries.map((country, index) => (
//             <label
//               key={country.id || index}
//               htmlFor={country.id}
//               className="flex items-center justify-between pb-2 border-b border-gray-200 cursor-pointer">
//               <div className="flex items-center gap-2">
//                 <RadioInput name="country" id={country.id} />
//                 <span className="flex text-sm leading-tight">{country.label}</span>
//               </div>
//               <figure className="w-5 h-5">
//                 <img src={country.icon} alt="" className="img-fluid" />
//               </figure>
//             </label>
//           ))}
//         </div>
//         <div>
//           <FooterButton text="Continue" onClick={() => toggleModal("DASHBOARD_ACCOUNT_OWNERSHIP", false)} className="!text-[1.05rem]" />
//         </div>
//       </div>
//     </Modal>
//   );
// };

// export const AccountOwnershipSelectBalanceModal = ({ open, modalData, action }) => {
//   const { toggleModal } = modalData;

//   const countries = [
//     { id: "ngn", label: "NGN-Balance", icon: NGN }
//     // You can add more balances like { id: "usd", label: "USD-Balance", icon: USD }
//   ];

//   const [selectedBalance, setSelectedBalance] = useState("ngn");

//   const handleContinue = () => {
//     toggleModal("DASHBOARD_ACCOUNT_OWNERSHIP", false);
//     if (action) action(selectedBalance);
//   };

//   return (
//     <Modal
//       isOpen={open}
//       onRequestClose={() => toggleModal("DASHBOARD_ACCOUNT_OWNERSHIP", false)}
//       modalHeader={{
//         hasHeader: true,
//         modalTitle: "Select balance",
//         style: "border-b",
//         textStyle: "text-black",
//       }}
//     >
//       <div className="flex flex-col w-full p-6 mx-auto gap-y-4 sm:w-10/12 md:w-9/12">
//         <div className="flex flex-col flex-grow pt-6 gap-y-3 min-h-72">
//           {countries.map((country) => (
//             <label
//               key={country.id}
//               htmlFor={country.id}
//               className="flex items-center justify-between pb-2 border-b border-gray-200 cursor-pointer"
//             >
//               <div className="flex items-center gap-2">
//                 <RadioInput
//                   name="country"
//                   id={country.id}
//                   checked={selectedBalance === country.id}
//                   onChange={() => setSelectedBalance(country.id)}
//                 />
//                 <span className="flex text-sm leading-tight">{country.label}</span>
//               </div>
//               <figure className="w-5 h-5">
//                 <img src={country.icon} alt={`${country.label} icon`} className="img-fluid" />
//               </figure>
//             </label>
//           ))}
//         </div>
//         <div>
//           <FooterButton
//             text="Continue"
//             onClick={handleContinue}
//             className="!text-[1.05rem]"
//           />
//         </div>
//       </div>
//     </Modal>
//   );
// };


export const AccountOwnershipSelectBalanceModal = ({ open, modalData, action }) => {
  const { toggleModal } = modalData;

  const countries = [
    { id: "ngn", label: "NGN-Balance", icon: NGN },
  ];

  const [selectedBalance, setSelectedBalance] = useState("ngn");

  const handleContinue = () => {
    toggleModal("DASHBOARD_ACCOUNT_OWNERSHIP", false);
    if (action) {
      action(selectedBalance);
    }
  };

  return (
    <Modal
      isOpen={open}
      onRequestClose={() => toggleModal("DASHBOARD_ACCOUNT_OWNERSHIP", false)}
      modalHeader={{
        hasHeader: true,
        modalTitle: "Select balance",
        style: "border-b",
        textStyle: "text-black",
      }}
    >
      <div className="flex flex-col w-full p-6 mx-auto gap-y-4 sm:w-10/12 md:w-9/12">
        <div className="flex flex-col flex-grow pt-6 gap-y-3 min-h-72">
          {countries.map((country) => (
            <label
              key={country.id}
              htmlFor={country.id}
              className="flex items-center justify-between pb-2 border-b border-gray-200 cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <RadioInput
                  name="country"
                  id={country.id}
                  checked={selectedBalance === country.id}
                  onChange={() => setSelectedBalance(country.id)} // This is where the state is updated
                />
                <span className="flex text-sm leading-tight">{country.label}</span>
              </div>
              <figure className="w-5 h-5">
                <img src={country.icon} alt={`${country.label} icon`} className="img-fluid" />
              </figure>
            </label>
          ))}
        </div>
        <div>
          <FooterButton
            text="Continue"
            onClick={handleContinue}
            className="!text-[1.05rem]"
            disabled={!selectedBalance} // Disable the button if no balance is selected
          />
        </div>
      </div>
    </Modal>
  );
};

export const SelectCountryModal = ({ open, modalData, action }) => {
  const { toggleModal } = modalData;

  const countries = [
    { id: 1, label: "NGN", dialCode: "234", icon: NGN },
    { id: 2, label: "CHN", dialCode: "86", icon: CHN },
    { id: 3, label: "FRA", dialCode: "33", icon: FRA },
  ];

  const [selected, setSelected] = useState("1");

  const handleContinue = () => {
    const selectedCountry = countries.find((c) => c.id === selected);
    if (selectedCountry) {
      action(selectedCountry); t
      toggleModal("SELECT_COUNTRY", false);
    }
  };

  return (
    <Modal
      isOpen={open}
      onRequestClose={() => toggleModal("SELECT_COUNTRY", false)}
      modalHeader={{
        hasHeader: true,
        modalTitle: "Basic Verification",
        style: "",
        textStyle: "text-main",
      }}
    >
      <div className="flex flex-col w-full p-6 mx-auto gap-y-4 sm:w-10/12 md:w-9/12">
        <div className="flex flex-col flex-grow gap-y-3 min-h-72">
          {countries.map((country) => (
            <label
              key={country.id}
              htmlFor={country.id}
              className={`flex items-center justify-between pb-2 border-b border-gray-200 cursor-pointer`}
              onClick={() => setSelected(country.id)}
            >
              <div className="flex items-center gap-2">
                <RadioInput name="country" id={country.id} checked={selected === country.id} />
                <span className="flex text-sm leading-tight">{country.label}</span>
              </div>
              <figure className="w-5 h-5">
                <img src={country.icon} alt="" className="img-fluid" />
              </figure>
            </label>
          ))}
        </div>
        <div>
          <FooterButton
            text="Continue"
            className="!text-[1.05rem] uppercase"
            onClick={handleContinue}
            disabled={!selected}
          />
        </div>
      </div>
    </Modal>
  );
};


export const TwoFAMessageAlertPreferenceModal = ({ open, modalData, action }) => {
  const preferences = [
    { id: "sms", label: "SMS" },
    { id: "voice-call", label: "Voice call" },
    { id: "whatsapp", label: "Whatsapp" },
  ];

  return (
    <Modal
      isOpen={open}
      onRequestClose={() => toggleModal("DASHBOARD_2FA_VERFICATION_ALERT_METHOD", false)}
      modalHeader={{ hasHeader: true, modalTitle: "Select Preference Method", style: "border-b" }}>
      <div className="flex flex-col w-full p-6 mx-auto gap-y-4 sm:w-10/12 md:w-9/12">
        <div className="flex flex-col flex-grow gap-y-3 min-h-72">
          {preferences.map((preferences, index) => (
            <label
              key={preferences.id || index}
              htmlFor={preferences.id}
              className="flex items-center justify-between pb-2 border-b border-gray-200 cursor-pointer last:border-b-0">
              <div className="flex items-center gap-2">
                <RadioInput name="preferences" id={preferences.id} />
                <span className="flex text-sm leading-tight">{preferences.label}</span>
              </div>
            </label>
          ))}
        </div>
        <div>
          <FooterButton text="Continue" className="!text-[1.05rem]" />
        </div>
      </div>
    </Modal>
  );
};

export const BankTransferModal = ({ open, modalData, action }) => {
  const { toggleModal } = modalData;

  return (
    <Modal
      isOpen={open}
      onRequestClose={() => toggleModal("DASHBOARD_BANK_TRANSFER", false)}
      modalHeader={{ hasHeader: true, modalTitle: "", style: "border-b", textStyle: "" }}>
      <div className="flex flex-col w-full p-6 pb-10 mx-auto gap-y-4 sm:w-10/12 md:w-9/12">
        <div className="flex flex-col flex-grow gap-y-3 min-h-72">
          <header className="text-center">
            <h2 className="text-3xl font-semibold">Bank transfer details</h2>
          </header>
          <div className="flex flex-col gap-y-3">
            <span>
              Transfer funds from any Nigerian bank to the account details below. Once the payment is made, the amount will automatically be credited
              to your Gate Africa wallet, ready for use on the platform.
            </span>
            <div className="flex items-center p-2 mb-2 bg-yellow-100 rounded-lg gap-x-2">
              <IconWrapper className="text-yellow-400">
                <WarningIcon />
              </IconWrapper>
              <span className="leading-tight text-[.95rem]">NB: A fee of ¥1 will be charge </span>
            </div>
            <button
              type="button"
              className="flex justify-center mx-auto items-center font-medium bg-slate-200 rounded-lg rounded-no-tl py-2.5 px-5 gap-x-2">
              <h4 className="text-xl">0050924366</h4>
              <IconWrapper>
                <CopyIcon2 />
              </IconWrapper>
            </button>
            <BorderWrapper cn="py-3 px-4 flex flex-col items-start rounded-tl-sm mt-2" radiusSize="lg">
              <span className="flex items-center gap-x-2">
                <span className="font-medium">Bank:</span>
                <span className="text-slate-500">Safe Haven Microfinance Bank</span>
              </span>
              <span className="flex items-center gap-x-2">
                <span className="font-medium">Acc Name:</span>
                <span className="text-slate-500">Gate Africa KORA</span>
              </span>
            </BorderWrapper>
          </div>
        </div>
        <div className="mt-4">
          <FooterButton text="I have made the transfer" onClick={action ? action : null} className="!text-[1.05rem] animate-active" />
        </div>
      </div>
    </Modal>
  );
};

export const HowToUseNaira4YuanModal = ({ open, modalData, action }) => {
  const { toggleModal } = modalData;

  return (
    <Modal
      isOpen={open}
      onRequestClose={() => toggleModal("HOW_TO_NAIRA4YUAN", false)}
      modalHeader={{ hasHeader: true, modalTitle: "How to use Naira4Yuan", style: "border-b", textStyle: "" }}>
      <div className="flex flex-col w-full p-6 pb-10 mx-auto gap-y-4">
        <div className="flex flex-col flex-grow gap-y-5">
          <Iframe srcLink={routes.EXTERNAL.youtube} />
        </div>
        <div className="w-10/12 mx-auto text-center xl:w-7/12">
          <span className="text-[.95rem]">
            This video shows the process of sending USDT from an external wallet. Click "Watch, Proceed" to continue to sell.
          </span>
        </div>
        <div className="mt-4">
          <FooterButton text="Watch, Proceed" onClick={action ? action : null} className="!text-[1.05rem] animate-active" />
        </div>
      </div>
    </Modal>
  );
};

export const FundWalletManualBVNVerificationModal = ({ open, modalData, action }) => {
  const { toggleModal } = modalData;

  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    dateOfBirth: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Modal
      isOpen={open}
      onRequestClose={() => toggleModal("MANUAL_BVN_VERIFICATION", false)}
      modalHeader={{
        hasHeader: true,
        modalTitle: "Manual BVN Verification",
        style: "border-b",
        textStyle: "text-main"
      }}
    >
      <div className="flex flex-col w-full p-6 mx-auto gap-y-4 md:w-11/12">
        <div className="flex flex-col flex-grow gap-y-3 min-h-72">
          <FormControl
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            label={{
              exist: true,
              text: "Full name",
            }}
            placeholder="Enter your full name"
          />
          <FormControl
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            inputMode="numeric"
            label={{
              exist: true,
              text: "Phone number",
            }}
            placeholder="Enter your phone number"
          />
          <FormControl
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            label={{
              exist: true,
              text: "Date of birth",
            }}
            placeholder="MM/DD/YY"
          />
        </div>
        <div>
          <FooterButton
            text="Verify"
            onClick={action}
            className="!text-[1.05rem] uppercase"
          />
        </div>
      </div>
    </Modal>
  );
};

export const BvnVerificationModal = ({ open, modalData, action }) => {
  const { toggleModal } = modalData;
  const [otp, setOtp] = useState("");

  return (
    <>
      <Modal
        isOpen={open}
        onRequestClose={() => toggleModal("AUTH_BVN_VERIFICATION", false)}
        modalHeader={{
          hasHeader: true,
          modalTitle: "Verify BVN",
          style: "border-b",
          textStyle: "text-main"
        }}
      >
        <div className="flex flex-col w-full p-6 mx-auto gap-y-4">
          <div className="flex flex-col flex-grow gap-y-3 min-h-72">
            <section>
              <span className="block text-lg text-center">
                We sent a code to <b>08132*****157</b> to confirm your BVN
              </span>
              <div className="flex flex-col mt-6 gap-y-2">
                <div className="mx-auto">
                  <label htmlFor="code" className="text-base">
                    Enter code
                  </label>
                  <InputOTP
                    maxLength={4}
                    className="flex flex-col"
                    value={otp}
                    onChange={(value) => setOtp(value)}
                  >
                    <InputOTPGroup className="flex gap-x-4">
                      <InputOTPSlot index={0} className={inputModalStyle} />
                      <InputOTPSlot index={1} className={inputModalStyle} />
                      <InputOTPSlot index={2} className={inputModalStyle} />
                      <InputOTPSlot index={3} className={inputModalStyle} />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
              </div>
            </section>
            <div className="mt-6 text-center">
              <span className="text-base">
                Didn{`'`}t receive a code?
                <button type="button" className="font-semibold underline ms-2 text-main">
                  Click to resend in 0:58
                </button>
              </span>
            </div>
            <div className="mt-6 text-center">
              <span className="text-base">
                I don{`'`}t have access to my BVN phone number
                <button
                  onClick={() => {
                    toggleModal("AUTH_BVN_VERIFICATION", false);
                    toggleModal("MANUAL_BVN_VERIFICATION", true);
                  }}
                  type="button"
                  className="font-semibold underline ms-2 text-main"
                >
                  Use manual method
                </button>
              </span>
            </div>
          </div>
          <div>
            <FooterButton
              text="Continue"
              onClick={action}
              className="!text-[1.05rem] uppercase"
            />
          </div>
        </div>
      </Modal >
    </>
  );
};

export const NinVerificationModal = ({ open, modalData, action }) => {
  const { toggleModal } = modalData;
  const [otp, setOtp] = useState("");

  return (
    <>
      <Modal
        isOpen={open}
        onRequestClose={() => toggleModal("AUTH_NIN_VERIFICATION", false)}
        modalHeader={{
          hasHeader: true,
          modalTitle: "Verify Nin",
          style: "border-b",
          textStyle: "text-main"
        }}
      >
        <div className="flex flex-col w-full p-6 mx-auto gap-y-4">
          <div className="flex flex-col flex-grow gap-y-3 min-h-72">
            <section>
              <span className="block text-lg text-center">
                We sent a code to <b>08132*****157</b> to confirm your NIN
              </span>
              <div className="flex flex-col mt-6 gap-y-2">
                <div className="mx-auto">
                  <label htmlFor="code" className="text-base">
                    Enter code
                  </label>
                  <InputOTP
                    maxLength={4}
                    className="flex flex-col"
                    value={otp}
                    onChange={(value) => setOtp(value)}
                  >
                    <InputOTPGroup className="flex gap-x-4">
                      <InputOTPSlot index={0} className={inputModalStyle} />
                      <InputOTPSlot index={1} className={inputModalStyle} />
                      <InputOTPSlot index={2} className={inputModalStyle} />
                      <InputOTPSlot index={3} className={inputModalStyle} />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
              </div>
            </section>
            <div className="mt-6 text-center">
              <span className="text-base">
                Didn{`'`}t receive a code?
                <button type="button" className="font-semibold underline ms-2 text-main">
                  Click to resend in 0:58
                </button>
              </span>
            </div>
          </div>
          <div>
            <FooterButton
              text="Continue"
              onClick={action}
              className="!text-[1.05rem] uppercase"
            />
          </div>
        </div>
      </Modal >
    </>
  );
};

export const BvnModal = ({ open, modalData, action }) => {
  const { toggleModal } = modalData;

  return (
    <>
      <Modal
        isOpen={open}
        onRequestClose={() => toggleModal("BVN_VERIFICATION", false)}
        modalHeader={{
          hasHeader: true,
          modalTitle: "Basic Verification",
          style: "border-b",
          textStyle: "text-main"
        }}
      >
        <div className="flex flex-col w-full p-6 mx-auto gap-y-4">
          <div className="flex flex-col flex-grow gap-y-3 min-h-72">
            <FormControl
              type="text"
              name="bvn"
              label={{
                exist: true,
                text: "Enter BVN",
              }}
              placeholder="Enter your BVN"
            />
          </div>
          <div>
            <FooterButton
              text="Proceed"
              onClick={action}
              className="!text-[1.05rem] uppercase"
            />
          </div>
        </div>
      </Modal >
    </>
  );
};

export const SimpleVerificationIdModal = ({ open, modalData, action }) => {
  const { toggleModal } = modalData;

  return (
    <>
      <Modal
        isOpen={open}
        onRequestClose={() => toggleModal("SELECT_BANK", false)}
        modalHeader={{
          hasHeader: true,
          modalTitle: "Simple Verification",
          style: "border-b",
          textStyle: "text-main"
        }}
      >
        <div className="flex flex-col w-full py-6 mx-auto gap-y-4 sm:w-10/12 md:w-9/12">
          <div className="flex flex-col flex-grow gap-y-3 min-h-72">
            <label htmlFor="bvn" className="flex items-center justify-between pb-2 border-b cursor-pointer">
              <div className="flex items-center gap-2">
                <RadioInput name="referral" id="bvn" />
                <span className="flex text-lg font-medium leading-tight">Bank Verification Number (BVN)</span>
              </div>
            </label>
            <label htmlFor="nin" className="flex items-center justify-between pb-2 border-b cursor-pointer last:border-b-0">
              <div className="flex items-center gap-2">
                <RadioInput name="referral" id="nin" />
                <span className="flex text-lg font-medium leading-tight">National Identity Number (NIN)</span>
              </div>
            </label>
          </div>
          <div>
            <FooterButton
              onClick={action}
              text="Continue" className="!text-[1.05rem] uppercase" />
          </div>
        </div>
      </Modal>
    </>
  );
};

export const SimpleVerificationModal = ({ open, modalData, action }) => {
  const { toggleModal } = modalData;
  const [selectedOption, setSelectedOption] = useState("basic-verification");

  const preferences = [
    { id: "basic-verification", label: "Basic Verification" },
    { id: "individual-account-verification", label: "Individual Account Verification" },
  ];

  const handleOptionChange = (id) => {
    setSelectedOption(id);
  };

  return (
    <>
      <Modal
        isOpen={open}
        onRequestClose={() => toggleModal("BASIC_VERIFICATION", false)}
        modalHeader={{
          hasHeader: true,
          modalTitle: "Basic Verification",
          style: "border-b",
          textStyle: ""
        }}
      >
        <div className="flex flex-col w-full p-6 pb-10 mx-auto gap-y-8">
          <div className="flex flex-col flex-grow gap-y-5 min-h-60">
            {preferences.map((preference) => (
              <label
                key={preference.id}
                htmlFor={preference.id}
                className="flex items-center justify-between pb-3 border-b border-gray-200 cursor-pointer"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <RadioInput
                      name="preferences"
                      id={preference.id}
                      checked={selectedOption === preference.id}
                      onChange={() => handleOptionChange(preference.id)}
                    />
                    <span className="flex text-2xl font-medium leading-tight">{preference.label}</span>
                  </div>
                </div>
              </label>
            ))}
          </div>
          <div className="mt-2">
            <FooterButton
              text="Proceed"
              onClick={action}
              className="!text-[1.05rem] animate-active"
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export const FundWalletBankTransferModal = ({ open, modalData, action }) => {
  const { toggleModal } = modalData;

  return (
    <Modal
      isOpen={open}
      onRequestClose={() => toggleModal("DASHBOARD_BANK_TRANSFER", false)}
      modalHeader={{
        hasHeader: true,
        modalTitle: "",
        style: "border-b",
        textStyle: ""
      }}
    >
      <div className="flex flex-col w-full p-6 pb-10 mx-auto gap-y-4 sm:w-10/12 md:w-11/12">
        <div className="flex flex-col flex-grow gap-y-3 min-h-72">
          <header className="text-center">
            <h2 className="text-3xl font-semibold">Bank transfer details</h2>
          </header>
          <div className="flex flex-col gap-y-3">
            <span className="text-base">
              Transfer funds from any Nigerian bank to the account details below. Once the payment is made, the amount will automatically be credited
              to your Gate Africa wallet, ready for use on the platform.
            </span>
            <div className="flex items-center p-2 mb-2 bg-[#FCD55440] rounded-lg gap-x-2">
              <IconWrapper className="text-[#F1C34E]">
                <WarningIcon />
              </IconWrapper>
              <span className="text-base leading-tight text-[#3D4F60]">NB: A fee of ¥1 will be charged</span>
            </div>
            <button
              type="button"
              className="flex justify-center mx-auto items-center bg-[#F8F9FD] rounded-lg rounded-no-tl py-2.5 px-5 gap-x-2"
              onClick={() => navigator.clipboard.writeText('0050924366')}
            >
              <h4 className="text-2xl text-[#0F172A]">0050924366</h4>
              <IconWrapper>
                <CopyIcon2 />
              </IconWrapper>
            </button>
            <BorderWrapper cn="py-3 px-4 flex flex-col items-start rounded-tl-sm mt-2" radiusSize="lg">
              <span className="flex items-center gap-x-2">
                <span className="font-medium">Bank:</span>
                <span className="text-slate-500">Safe Haven Microfinance Bank</span>
              </span>
              <span className="flex items-center gap-x-2">
                <span className="font-medium">Acc Name:</span>
                <span className="text-slate-500">Gate Africa KORA</span>
              </span>
            </BorderWrapper>
          </div>
        </div>
        <div className="mt-4">
          <FooterButton
            text="I have made the transfer"
            onClick={action}
            className="!text-[1.05rem] animate-active"
          />
        </div>
      </div>
    </Modal>
  );
};

export const FundWalletVerificationModal = ({ open, modalData, action }) => {
  const { toggleModal } = modalData;
  const [selectedOption, setSelectedOption] = useState("");

  const preferences = [
    { id: "basic-verification", label: "Basic Verification" },
    { id: "individual-account-verification", label: "Individual Account Verification" },
  ];

  const handleOptionChange = (id) => {
    setSelectedOption(id);
  };

  return (
    <>
      <Modal
        isOpen={open}
        onRequestClose={() => toggleModal("KYC_VERIFICATION", false)}
        modalHeader={{
          hasHeader: true,
          modalTitle: "KYC Verification",
          style: "border-b",
          textStyle: ""
        }}
      >
        <div className="flex flex-col w-full p-6 pb-10 mx-auto gap-y-10">
          <div className="w-full mx-auto text-center xl:w-9/12">
            <span className="text-xl">
              You have to be verified to proceed with this transaction.
            </span>
          </div>

          <div className="flex flex-col flex-grow gap-y-5 min-h-60">
            {preferences.map((preference) => (
              <label
                key={preference.id}
                htmlFor={preference.id}
                className="flex items-center justify-between pb-3 border-b border-gray-200 cursor-pointer"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <RadioInput
                      name="preferences"
                      id={preference.id}
                      checked={selectedOption === preference.id}
                      onChange={() => handleOptionChange(preference.id)}
                    />
                    <span className="flex text-2xl font-medium leading-tight">{preference.label}</span>
                  </div>
                  {selectedOption === preference.id && (
                    <div className="ml-2">
                      {tickCircle({})}
                    </div>
                  )}
                </div>
              </label>
            ))}
          </div>

          <div className="mt-2">
            <FooterButton
              text="Proceed"
              onClick={action}
              className="!text-[1.05rem] animate-active"
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export const IndividualVerificationModal = ({ open, modalData, action }) => {
  const { toggleModal } = modalData;
  const [selectedOption, setSelectedOption] = useState("");

  const preferences = [
    { id: "individual-account-verification", label: "Individual Account Verification" },
  ];

  const handleOptionChange = (id) => {
    setSelectedOption(id);
  };

  return (
    <>
      <Modal
        isOpen={open}
        onRequestClose={() => toggleModal("INDIVIDUAL_VERIFICATION", false)}
        modalHeader={{
          hasHeader: true,
          modalTitle: "Individual Verification",
          style: "border-b",
          textStyle: ""
        }}
      >
        <div className="flex flex-col w-full p-6 pb-10 mx-auto gap-y-10">
          <div className="w-full mx-auto text-center xl:w-9/12">
            <span className="text-xl">
              You have to be verified to proceed with this transaction.
            </span>
          </div>

          <div className="flex flex-col flex-grow gap-y-5 min-h-60">
            {preferences.map((preference) => (
              <label
                key={preference.id}
                htmlFor={preference.id}
                className="flex items-center justify-between pb-3 border-b border-gray-200 cursor-pointer"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <RadioInput
                      name="preferences"
                      id={preference.id}
                      checked={selectedOption === preference.id}
                      onChange={() => handleOptionChange(preference.id)}
                    />
                    <span className="flex text-base font-normal leading-tight text-[#64748B]">{preference.label}</span>
                  </div>
                  <button className="bg-[#FCD55440] px-4 py-2.5 text-[#3D4F60] rounded-xl text-sm">
                    Not Verified
                  </button>
                </div>
              </label>
            ))}
          </div>

          <div className="mt-2">
            <FooterButton
              text="Proceed to Verify"
              onClick={action}
              className="!text-[1.05rem] animate-active"
              disabled={!selectedOption}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export const IndividualVerificationTypeModal = ({ open, modalData, action }) => {
  const { toggleModal } = modalData;

  return (
    <>
      <Modal
        isOpen={open}
        onRequestClose={() => toggleModal("INDIVIDUAL_TYPE_VERIFICATION", false)}
        modalHeader={{
          hasHeader: true,
          modalTitle: "Individual Verification",
          style: "border-b",
          textStyle: ""
        }}
      >
        <div className="flex flex-col w-full p-6 pb-10 mx-auto gap-y-10">
          <SelectBox
            label="Verification Type"
            placeholder="Choose verification type"
            options={[
              { label: "NIN", value: "nin" },
              { label: "BVN", value: "bvn" },
            ]}
            onChange={(val) => console.log("Selected:", val)}
          />

          <div className="mt-20">
            <FooterButton
              text="Proceed to Verify"
              onClick={action}
              className="!text-[1.05rem] animate-active"
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export const IndividualVerifyModal = ({ open, modalData, action }) => {
  const { toggleModal } = modalData;
  const [selectedOption, setSelectedOption] = useState("");

  const preferences = [
    { id: "basic-verification", label: "Basic Verification" },
    { id: "individual-account-verification", label: "Individual Account Verification" },
  ];

  const handleOptionChange = (id) => {
    setSelectedOption(id);
  };

  return (
    <>
      <Modal
        isOpen={open}
        onRequestClose={() => toggleModal("KYC_VERIFICATION", false)}
        modalHeader={{
          hasHeader: true,
          modalTitle: "Individual Verification",
          style: "border-b",
          textStyle: ""
        }}
      >
        <div className="flex flex-col w-full p-6 pb-10 mx-auto gap-y-10">

          <div className="flex flex-col flex-grow gap-y-5 min-h-60">
            {preferences.map((preference) => (
              <label
                key={preference.id}
                htmlFor={preference.id}
                className="flex items-center justify-between pb-3 border-b border-gray-200 cursor-pointer"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <RadioInput
                      name="preferences"
                      id={preference.id}
                      checked={selectedOption === preference.id}
                      onChange={() => handleOptionChange(preference.id)}
                    />
                    <span className="flex text-base text-[#64748B] font-medium leading-tight">{preference.label}</span>
                  </div>
                  {selectedOption === preference.id && (
                    <div className="ml-2">
                      {tickCircle({})}
                    </div>
                  )}
                </div>
              </label>
            ))}
          </div>

          <div className="mt-2">
            <FooterButton
              text="Proceed to Verify"
              onClick={action}
              className="!text-[1.05rem] animate-active"
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export function DatePickerModal({ open, modalData, onDateSelect, dateType, currentValue }) {
  const { toggleModal } = modalData;
  const [selectedDate, setSelectedDate] = useState(currentValue || null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  useEffect(() => {
    setSelectedDate(currentValue);
  }, [currentValue]);

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const getFirstDayOfMonth = (date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="w-10 h-10" />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
      const isSelected = selectedDate?.toDateString() === date.toDateString();

      days.push(
        <button
          key={day}
          onClick={() => setSelectedDate(date)}
          className={`w-10 h-10 rounded-full flex items-center justify-center text-sm 
            ${isSelected ? "bg-[#004D40] text-white" : "hover:bg-gray-100"}`}
        >
          {day}
        </button>
      );
    }

    return days;
  };

  const navigateMonth = (direction) => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + (direction === "next" ? 1 : -1)));
  };

  const handleConfirm = () => {
    if (selectedDate) {
      onDateSelect(dateType, selectedDate); // Pass both dateType and selected date
      toggleModal("DATE_PICKER", false);
    }
  };

  return (
    <div>
      <Modal
        isOpen={open}
        onRequestClose={() => toggleModal("DATE_PICKER", false)}
        modalHeader={{
          hasHeader: true,
          modalTitle: "Select Start/End date",
          style: "border-b",
          textStyle: "text-black",
        }}
      >
        <div className="flex flex-col w-full py-6 mx-auto gap-y-4 sm:w-10/12 md:w-9/12">
          <div className="flex flex-col flex-grow gap-y-3 min-h-72">
            <div className="flex items-center justify-between mb-6">
              <button onClick={() => navigateMonth("prev")} className="p-2 bg-gray-200 hover:bg-[#004D40] hover:text-white rounded-full">
                <ChevronLeft size={24} />
              </button>
              <span className="text-lg font-medium">
                {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
              </span>
              <button onClick={() => navigateMonth("next")} className="p-2 bg-gray-200 hover:bg-[#004D40] hover:text-white rounded-full">
                <ChevronRight size={24} />
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1 mb-4">
              {["M", "T", "W", "T", "F", "S", "S"].map((day) => (
                <div key={day} className="flex items-center justify-center w-10 h-10 text-sm text-gray-500">
                  {day}
                </div>
              ))}
              {generateCalendarDays()}
            </div>
          </div>

          <div>
            <FooterButton
              text="Choose date"
              onClick={handleConfirm}
              className="!text-[1.05rem]"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}

export const WalletOptionModal = ({ open, modalData, action }) => {
  const { toggleModal } = modalData;
  const menuItems = [
    "Statements and reports",
    "Direct Debits",
    "Auto conversions",
    "Get proof of account details",
    "Close balance"
  ];

  return (
    <>
      <Modal
        isOpen={open}
        onRequestClose={() => toggleModal("Wallet", false)}
        modalHeader={{
          hasHeader: true,
          modalTitle: "",
          style: "border-b",
          textStyle: ""
        }}
      >
        <div className="flex flex-col w-full p-6 pb-10 mx-auto gap-y-8">
          <div className="flex flex-col flex-grow mb-10 gap-y-3">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className="flex items-center justify-between w-full p-4 py-2 text-left transition-colors hover:bg-gray-50"
                onClick={() => console.log(`Selected: ${item}`)}
              >
                <span className="text-lg font-normal text-gray-800">{item}</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
};

export const FileFormatModal = ({ open, modalData, selectedValue, setSelectedValue }) => {
  const { toggleModal } = modalData;

  const preferences = [
    { id: "pdf", label: "PDF" },
    { id: "xlsx", label: "XLSX (Excel)" },
    { id: "csv", label: "CSV" },
    { id: "word", label: "Word" },
  ];

  const handleContinue = () => {
    toggleModal("PDF", false);
  };

  return (
    <Modal
      isOpen={open}
      onRequestClose={() => toggleModal("PDF", false)}
      modalHeader={{ hasHeader: true, modalTitle: "Select format", style: "border-b", textStyle: "" }}
    >
      <div className="flex flex-col w-full p-6 pb-10 mx-auto gap-y-8">
        <div className="flex flex-col gap-y-3 min-h-60">
          {preferences.map((pref) => (
            <label key={pref.id} htmlFor={pref.id} className="flex items-center justify-between pb-3 border-b cursor-pointer">
              <div className="flex items-center gap-2">
                <RadioInput
                  name="file-format-options"
                  id={pref.id}
                  checked={selectedValue === pref.id}
                  onChange={() => setSelectedValue(pref.id)}
                />
                <span className="text-sm">{pref.label}</span>
              </div>
            </label>
          ))}
        </div>
        <div className="mt-2">
          <FooterButton
            text="Continue"
            className="!text-[1.05rem] animate-active"
            onClick={handleContinue}
            disabled={!selectedValue}
          />
        </div>
      </div>
    </Modal>
  );
};

export const LanguageModal = ({ open, modalData, selectedValue, setSelectedValue }) => {
  const { toggleModal } = modalData;

  const preferences = [
    { id: "english", label: "English" },
    { id: "french", label: "French" },
    { id: "spanish", label: "Spanish" },
    { id: "danish", label: "Danish" },
    { id: "dutch", label: "Dutch" },
    { id: "italian", label: "Italian" },
  ];

  const handleContinue = () => {
    toggleModal(false);
  };

  return (
    <Modal
      isOpen={open}
      onRequestClose={() => toggleModal(false)}
      modalHeader={{ hasHeader: true, modalTitle: "Select Language", style: "border-b", textStyle: "" }}
    >
      <div className="flex flex-col w-full p-6 pb-10 mx-auto gap-y-8">
        <div className="flex flex-col gap-y-3 min-h-60">
          {preferences.map((pref) => (
            <label key={pref.id} htmlFor={pref.id} className="flex items-center justify-between pb-3 border-b cursor-pointer">
              <div className="flex items-center gap-2">
                <RadioInput
                  name="language-options"
                  id={pref.id}
                  checked={selectedValue === pref.id}
                  onChange={() => setSelectedValue(pref.id)}
                />
                <span className="text-sm">{pref.label}</span>
              </div>
            </label>
          ))}
        </div>
        <div className="mt-2">
          <FooterButton
            text="Continue"
            className="!text-[1.05rem] animate-active"
            onClick={handleContinue}
            disabled={!selectedValue}
          />
        </div>
      </div>
    </Modal>
  );
};

export const HowToGetAlipayQrModal = ({ open, modalData, action }) => {
  const { toggleModal } = modalData;
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  // Reset step when modal is closed/reopened
  useEffect(() => {
    if (open) {
      setCurrentStep(1);
    }
  }, [open]);

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // On the last step, complete the process
      toggleModal("HOW_TO_GETALIPAYQR", false);
      action && action();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const stepContent = {
    1: {
      image: Step1, // Make sure this path exists
      text: "Open the Alipay app and tap the \"Pay\" icon located on the home screen."
    },
    2: {
      image: Step4,
      text: "Click on “Receive” on the Pay vendor page.  Receive is just under the Select payment method column."
    },
    3: {
      image: Step2,
      text: "A QR code with an orange background will appear on your screen for receiving funds."
    },
    4: {
      image: Step3,
      text: "Save or share the image to your gallery — it will display with a blue background. Once uploaded, Naira4Yuan will use this code to process a CNY deposit into the linked Alipay account."
    }
  };

  return (
    <Modal
      isOpen={open}
      onRequestClose={() => toggleModal("HOW_TO_GETALIPAYQR", false)}
      modalHeader={{ hasHeader: true, modalTitle: "How to get your Alipay QR Code", style: "border-b", textStyle: "" }}>
      <div className="flex flex-col w-full p-6 pb-10 mx-auto gap-y-4">
        <figure className="bg-[#F5F5DC] rounded-xl pt-4 pb-0 w-full flex justify-center">
          <img
            src={stepContent[currentStep].image}
            alt={`Step ${currentStep} of ${totalSteps}`}
            className="w-auto mx-auto "
          />
        </figure>

        <div className="flex flex-col items-center justify-center mt-4">
          <div className="w-full">
            <div className="mb-4">
              <p className="text-lg font-bold">Step {currentStep} of {totalSteps}</p>
              <div className="flex gap-1 my-2">
                {[...Array(totalSteps)].map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 rounded-full ${index + 1 === currentStep ? 'bg-green-600 w-8' : 'bg-gray-200 w-2'}`}
                  />
                ))}
              </div>
            </div>
            <p className="text-gray-700">{stepContent[currentStep].text}</p>
          </div>
        </div>

        <div className="flex items-center mt-1 space-x-3">
          <button
            onClick={handlePrevious}
            className={`px-8 py-3 bg-[#f9f9e6] text-black rounded-md ${currentStep === 1 ? 'opacity-50' : ''}`}
            disabled={currentStep === 1}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="px-8 py-3 bg-[#f2cc4d] text-black rounded-md"
          >
            {currentStep === totalSteps ? "Finish" : "Next"}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export const SwitchBusinessAccountModal = ({ open, modalData, action }) => {
  const { toggleModal } = modalData;

  return (
    <Modal
      isOpen={open}
      onRequestClose={() => toggleModal("SWITCH_BUSINESS_ACCOUNT", false)}
      modalHeader={{ hasHeader: true, modalTitle: "Switch to a Business Account", style: "border-b", textStyle: "" }}>
      <div className="flex flex-col w-full p-6 pb-10 gap-y-4">
        <div className="flex flex-col space-y-3">
          <div className="bg-[#F8F9FD] p-4 rounded-lg">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:gap-8">

              {/* Left Section */}
              <div className="flex-1">
                <h3 className="mt-1 text-lg font-medium">Business Account</h3>

                <ul className="mt-2 space-y-2 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="mr-2 text-black">•</span>
                    <span>Daily Incoming Transactions: ₦10,000 - ₦5,000,000</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-black">•</span>
                    <span>Daily Outgoing Transactions: ¥50 - ¥10,000</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-black">•</span>
                    <span>Total Monthly Incoming Limit: ₦50,000,000</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-black">•</span>
                    <span>Total Monthly Outgoing Limit: ¥100,000</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-[#F8F9FD] p-4 rounded-lg">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:gap-8">

              {/* Left Section */}
              <div className="flex-1">
                <h3 className="mt-1 text-lg font-medium">What you’ll need</h3>

                <ul className="mt-2 space-y-2 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="mr-2 text-black">•</span>
                    <span>You must be individual verified before attempting to switch to a business account</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-black">•</span>
                    <span>Regulatory ID Card</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-black">•</span>
                    <span>Your Selfie</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-black">•</span>
                    <span>Your Business Details: CAC Certificate, Memart</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <FooterButton onClick={action} text="Proceed" className="!text-[1.05rem] uppercase" />
        </div>
      </div>
    </Modal>
  );
};

export const SelectIdModal = ({ open, modalData, action }) => {
  const { toggleModal } = modalData;
  return (
    <Modal
      isOpen={open}
      onRequestClose={() => toggleModal("SELECT_MEANS_ID", false)}
      modalHeader={{ hasHeader: true, modalTitle: "Select means of identification", style: "border-b", textStyle: "text-main" }}>
      <div className="flex flex-col w-full py-6 mx-auto gap-y-4 sm:w-10/12 md:w-9/12">
        <div className="flex flex-col flex-grow gap-y-3 min-h-72">
          <label htmlFor="id" className="flex items-center justify-between pb-2 border-b cursor-pointer last:border-b-0">
            <div className="flex items-center gap-2">
              <RadioInput name="referral" id="id" />
              <span className="flex text-sm leading-tight">National ID Card</span>
            </div>
          </label>
          <label htmlFor="nin" className="flex items-center justify-between pb-2 border-b cursor-pointer last:border-b-0">
            <div className="flex items-center gap-2">
              <RadioInput name="referral" id="nin" />
              <span className="flex text-sm leading-tight">NIN</span>
            </div>
          </label>
          <label htmlFor="voter" className="flex items-center justify-between pb-2 border-b cursor-pointer last:border-b-0">
            <div className="flex items-center gap-2">
              <RadioInput name="referral" id="voter" />
              <span className="flex text-sm leading-tight">Voter’s card</span>
            </div>
          </label>
          <label htmlFor="passport" className="flex items-center justify-between pb-2 border-b cursor-pointer last:border-b-0">
            <div className="flex items-center gap-2">
              <RadioInput name="referral" id="passport" />
              <span className="flex text-sm leading-tight">International passport</span>
            </div>
          </label>
        </div>
        <div>
          <FooterButton onClick={action} text="Continue" className="!text-[1.05rem] uppercase" />
        </div>
      </div>
    </Modal>
  );
};

export const StateOfOriginModal = ({ open, modalData, action }) => {
  const { toggleModal } = modalData;
  const [selectedState, setSelectedState] = useState("");

  const handleSelect = (e) => setSelectedState(e.target.value);

  const states = [
    "Oyo", "Osun", "Lagos", "Ondo", "Benin", "Bayelsa", "Jos", "Abia"
  ];

  return (
    <Modal
      isOpen={open}
      onRequestClose={() => toggleModal("STATE_ORIGIN", false)}
      modalHeader={{
        hasHeader: true,
        modalTitle: "State of Origin",
        style: "border-b",
        textStyle: "text-main"
      }}
    >
      <div className="flex flex-col w-full py-6 mx-auto gap-y-4 sm:w-10/12 md:w-9/12">
        <div className="flex flex-col flex-grow mb-8 gap-y-3 min-h-72">
          {states.map((state) => (
            <label
              key={state}
              htmlFor={state.toLowerCase()}
              className="flex items-center justify-between pb-2 border-b cursor-pointer last:border-b-0"
            >
              <div className="flex items-center gap-2">
                <RadioInput
                  name="referral"
                  id={state.toLowerCase()}
                  value={state}
                  checked={selectedState === state}
                  onChange={handleSelect}
                />
                <span className="flex text-sm leading-tight">{state}</span>
              </div>
            </label>
          ))}
        </div>
        <div>
          <FooterButton
            text="Continue"
            className="!text-[1.05rem] uppercase"
            onClick={() => action?.(selectedState)}
          />
        </div>
      </div>
    </Modal>
  );
};

export const StateOfResidenceModal = ({ open, modalData, action }) => {
  const { toggleModal } = modalData;
  const [selectedState, setSelectedState] = useState("");

  const handleSelect = (e) => setSelectedState(e.target.value);

  const states = [
    "Oyo", "Osun", "Lagos", "Ondo", "Benin", "Bayelsa", "Jos", "Abia"
  ];

  return (
    <Modal
      isOpen={open}
      onRequestClose={() => toggleModal("STATE_RESIDENCE", false)}
      modalHeader={{
        hasHeader: true,
        modalTitle: "State of residence",
        style: "border-b",
        textStyle: "text-main"
      }}
    >
      <div className="flex flex-col w-full py-6 mx-auto gap-y-4 sm:w-10/12 md:w-9/12">
        <div className="flex flex-col flex-grow gap-y-3 min-h-72">
          {states.map((state) => (
            <label
              key={state}
              htmlFor={state.toLowerCase()}
              className="flex items-center justify-between pb-2 border-b cursor-pointer last:border-b-0"
            >
              <div className="flex items-center gap-2">
                <RadioInput
                  name="referral"
                  id={state.toLowerCase()}
                  value={state}
                  checked={selectedState === state}
                  onChange={handleSelect}
                />
                <span className="flex text-sm leading-tight">{state}</span>
              </div>
            </label>
          ))}
        </div>
        <div>
          <FooterButton
            text="Continue"
            className="!text-[1.05rem] uppercase"
            onClick={() => action?.(selectedState)}
          />
        </div>
      </div>
    </Modal>
  );
};

export const CityModal = ({ open, modalData, action }) => {
  const { toggleModal } = modalData;

  const [selectedCity, setSelectedCity] = useState("");

  const handleCitySelection = (city) => {
    setSelectedCity(city);
    toggleModal("CITY", false); // Close modal
  };

  return (
    <Modal
      isOpen={open}
      onRequestClose={() => toggleModal("CITY", false)}
      modalHeader={{
        hasHeader: true,
        modalTitle: "City",
        style: "border-b",
        textStyle: "text-main",
      }}
    >
      <div className="flex flex-col w-full py-6 mx-auto gap-y-5 sm:w-10/12 md:w-9/12">
        <div className="flex flex-col flex-grow gap-y-3 min-h-72">
          {["Ibadan", "Ogbomoso", "Ado-awaye", "Eruwa", "Fiditi", "Igbo-ora", "Iseyin", "Egbeda"].map(
            (city, index) => (
              <label key={index} className="flex items-center justify-between pb-2 border-b cursor-pointer last:border-b-0">
                <div className="flex items-center gap-2">
                  <RadioInput name="referral" id={city} />
                  <span className="flex text-sm leading-tight">{city}</span>
                </div>
              </label>
            )
          )}
        </div>
        <div>
          <FooterButton
            text="Continue"
            className="!text-[1.05rem] uppercase"
            onClick={() => action(selectedCity)}
          />
        </div>
      </div>
    </Modal>
  );
};

export const IndividualAccModal = ({ open, modalData, action }) => {
  const { toggleModal } = modalData;

  return (
    <Modal
      isOpen={open}
      onRequestClose={() => toggleModal("INDIVIDUAL_ACC", false)}
      modalHeader={{
        hasHeader: true,
        modalTitle: "Individual Account Overview",
        style: "border-b",
        textStyle: ""
      }}
    >
      <div className="flex flex-col w-full p-6 pb-10 gap-y-4">
        <div className="flex flex-col space-y-3">
          <div className="bg-[#F8F9FD] p-4 rounded-lg">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:gap-8">

              {/* Left Section */}
              <div className="flex-1">
                <h3 className="mt-1 text-lg font-medium">Individual Account</h3>

                <ul className="mt-2 space-y-2 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="mr-2 text-black">•</span>
                    <span>Daily Incoming Transactions: ₦1,000 - ₦500,000</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-black">•</span>
                    <span>Daily Outgoing Transactions: ¥20 - ¥3,000</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-black">•</span>
                    <span>Total Monthly Incoming Limit: ₦2,000,000</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-black">•</span>
                    <span>Total Monthly Outgoing Limit: ¥30,000</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-[#F8F9FD] p-4 rounded-lg">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:gap-8">

              {/* Left Section */}
              <div className="flex-1">
                <h3 className="mt-1 text-lg font-medium">What’s Required</h3>

                <ul className="mt-2 space-y-2 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="mr-2 text-black">•</span>
                    <span>Basic Identity Verification (BVN or NIN)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-black">•</span>
                    <span>A valid ID (e.g. National ID, Voter’s Card, Driver’s License)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-black">•</span>
                    <span>Your Selfie for facial verification</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <FooterButton onClick={action} text="Proceed" className="!text-[1.05rem] uppercase" />
        </div>
      </div>
    </Modal>
  );
};

export const AddNicknameModal = ({ open, modalData, action }) => {
  const { toggleModal } = modalData;
  const [nickname, setNickname] = useState("");

  const handleProceed = () => {
    action(nickname); // Send nickname up to parent
    toggleModal("ADD_NICKNAME", false); // Optionally close modal after
  };

  return (
    <Modal
      isOpen={open}
      onRequestClose={() => toggleModal("ADD_NICKNAME", false)}
      modalHeader={{
        hasHeader: true,
        modalTitle: "Add your nickname",
        style: "border-b",
        textStyle: ""
      }}
    >
      <div className="flex flex-col w-full p-6 pb-10 gap-y-4">
        <FormControl
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          label={{
            exist: true,
            text: "Nickname",
          }}
          placeholder="Enter your nickname"
        />
        <div className="mt-5">
          <FooterButton
            onClick={handleProceed}
            text="Proceed"
            className="!text-[1.05rem] uppercase"
          />
        </div>
      </div>
    </Modal>
  );
};

export const WithdrawalModal = ({ open, modalData, action }) => {
  const { toggleModal } = modalData;

  const banks = ["Access Bank", "GTBank", "First Bank", "UBA", "Zenith Bank"]; // Add as needed

  return (
    <Modal
      isOpen={open}
      onRequestClose={() => toggleModal("WITHDRAWAL", false)}
      modalHeader={{
        hasHeader: true,
        modalTitle: "Withdrawal option",
        style: "border-b",
        textStyle: "text-main",
      }}
    >
      <div className="flex flex-col w-full max-w-xl p-6 mx-auto gap-y-6">
        <div className="flex flex-col gap-y-4">
          {/* Bank Dropdown */}
          <div className="flex flex-col gap-y-1">
            <label htmlFor="bank" className="text-base">Bank</label>
            <select
              id="bank"
              name="bank"
              className="w-full bg-[#F8F9FD] focus:bg-[#eff1f7] text-black rounded-lg py-3.5 px-2 text-base"
              defaultValue=""
            >
              <option value="" disabled>Select your bank</option>
              {banks.map((bank) => (
                <option key={bank} value={bank}>{bank}</option>
              ))}
            </select>
          </div>

          {/* Account Number */}
          <FormControl
            type="tel"
            inputMode="numeric"
            label={{
              exist: true,
              text: "Account number",
            }}
            placeholder="Enter your account number"
          />

          {/* Account Name */}
          <div>
            <label htmlFor="accname" className="text-base">Account Name</label>
            <div className="w-full bg-[#0000001F] py-4 px-2 uppercase rounded-lg">BUSAYO OLAITAN</div>
          </div>
        </div>

        <FooterButton
          text="Proceed"
          className="!text-[1.05rem] uppercase"
          onClick={action}
        />
      </div>
    </Modal>
  );
};

export const ProofModal = ({ open, modalData, action }) => {
  const { toggleModal } = modalData;
  const [trustpilotImage, setTrustpilotImage] = useState(null);
  const [googleImage, setGoogleImage] = useState(null);

  const handleTrustpilotUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setTrustpilotImage(file);
    }
  };

  const handleGoogleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setGoogleImage(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting images:", { trustpilotImage, googleImage });
    // TODO: Implement actual upload logic
  };

  return (
    <Modal
      isOpen={open}
      onRequestClose={() => toggleModal("PROOF", false)}
      modalHeader={{
        hasHeader: true,
        modalTitle: "Upload proof of review",
        style: "border-b",
        textStyle: "text-main",
      }}
    >
      <div className="w-full max-w-xl p-6 mx-auto">
        <form onSubmit={handleSubmit}>
          {/* Trustpilot */}
          <div className="mb-2">
            <div className="flex items-center">
              <h2 className="mr-1 text-lg font-normal">Trustpilot Review</h2>
              <Link
                className="text-xs underline"
              >
                (Review Here)
              </Link>
            </div>

            <div className="p-4 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer">
              <label htmlFor="trustpilot-upload" className="flex flex-col cursor-pointer">
                <div className="flex gap-2">
                  <Download className="w-4 h-4 text-gray-700" />
                  <span className="text-sm font-medium text-gray-700">Upload Screenshot of Your Trustpilot Review</span>
                </div>
                <p className="mt-2 text-xs text-gray-500">
                  File size should be a minimum of 2MB and in PNG or JPG format.
                </p>
                <input
                  id="trustpilot-upload"
                  type="file"
                  className="hidden"
                  accept=".png,.jpg,.jpeg"
                  onChange={handleTrustpilotUpload}
                />
              </label>
              {trustpilotImage && (
                <div className="mt-3 text-center">
                  <p className="text-sm text-green-600">File selected: {trustpilotImage.name}</p>
                  <img
                    src={URL.createObjectURL(trustpilotImage)}
                    alt="Trustpilot preview"
                    className="object-contain w-auto h-32 mt-2 border rounded-md"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Google Review */}
          <div className="mb-2">
            <div className="flex items-center">
              <h2 className="mr-1 text-lg font-normal">Google My Business Review</h2>
              <Link
                className="text-xs underline"
              >
                (Review Here)
              </Link>
            </div>

            <div className="p-4 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer">
              <label htmlFor="google-upload" className="flex flex-col cursor-pointer">
                <div className="flex gap-2">
                  <Download className="w-4 h-4 text-gray-700" />
                  <span className="text-sm font-medium text-gray-700">Upload Screenshot of Your Google My Business Review</span>
                </div>
                <p className="mt-2 text-xs text-gray-500">
                  File size should be a minimum of 2MB and in PNG or JPG format.
                </p>
                <input
                  id="google-upload"
                  type="file"
                  className="hidden"
                  accept=".png,.jpg,.jpeg"
                  onChange={handleGoogleUpload}
                />
              </label>
              {googleImage && (
                <div className="mt-3 text-center">
                  <p className="text-sm text-green-600">File selected: {googleImage.name}</p>
                  <img
                    src={URL.createObjectURL(googleImage)}
                    alt="Google review preview"
                    className="object-contain w-auto h-32 mt-2 border rounded-md"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="mb-10">
            <p className="text-xs">*Kindly note that you only get rewarded if you are an active user.</p>
          </div>

          <div className="px-6 mt-10">
            <FooterButton
              text="Submit for verification"
              className="!text-[1rem] uppercase"
              onClick={action}
            />
          </div>
        </form>
      </div>
    </Modal>
  );
};

export const ProofVerificationModal = ({ open, modalData, action }) => {
  const { toggleModal } = modalData;

  return (
    <Modal
      isOpen={open}
      onRequestClose={() => toggleModal("PROOF_VERIFICATION", false)}
      modalHeader={{
        hasHeader: true,
        modalTitle: "Review Proof Submitted",
        style: "border-b",
        textStyle: "text-main",
      }}
    >
      <div className="w-full max-w-xl p-6 mx-auto">
        <div className="flex flex-col items-center gap-2">
          <figure className="max-w-40">
            <img src={CompletedIcon} alt="" />
          </figure>
          <p className="text-2xl text-center text-black">Submitted.
            Verification Pending</p>
          <span className="block mb-8 text-center">Your review proof has been successfully submitted. We’ll verify it shortly,
            and if you’re eligible, your cashback will be credited.
            Please check your email for updates.</span>
          <FooterButton
            text="Go Back Home"
            className="!text-[1rem] uppercase"
            onClick={action}
          />
        </div>
      </div>
    </Modal>
  );
};

export const InboxModal = ({ open, modalData, action, modalContent }) => {
  const { toggleModal } = modalData;

  return (
    <Modal
      isOpen={open}
      onRequestClose={() => toggleModal("INBOX", false)}
      modalHeader={{
        hasHeader: true,
        modalTitle: modalContent?.title || "Withdrawal option",
        style: "border-b",
        textStyle: "text-main",
      }}
    >
      <div className="flex flex-col w-full max-w-xl p-6 mx-auto gap-y-6">
        <h3 className="text-lg font-medium">{modalContent?.title}</h3>
        <p className="text-gray-500">{modalContent?.description}</p>
        <small className="text-slate-600">{modalContent?.date}</small>

        <FooterButton
          text="Proceed"
          className="!text-[1.05rem] uppercase"
          onClick={action}
        />
      </div>
    </Modal>
  );
};

export const DeleteConfirmationModal = ({ open, modalData, action }) => {
  const { toggleModal } = modalData;

  return (
    <Modal
      isOpen={open}
      onRequestClose={() => toggleModal("DELETE_CONFIRMATION", false)}
      modalHeader={{
        hasHeader: true,
        modalTitle: "",
        style: "",
        textStyle: "text-main",
      }}
    >
      <div className="flex flex-col w-full pb-6 mx-auto gap-y-4 sm:w-10/12 md:w-9/12">
        <div className="flex flex-col flex-grow gap-y-3 min-h-60">
          <section className="mt-4">
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-red-600">Delete Confirmation</h2>
              <p className="mt-2 text-base text-gray-700">
                Are you sure you want to delete this item? This action cannot be undone.
              </p>
            </div>

            <div className="flex flex-col justify-center gap-4 mt-8 sm:flex-row">
              <button
                onClick={() => toggleModal("DELETE_CONFIRMATION", false)}
                className="w-full py-3 text-gray-800 transition-all duration-200 bg-gray-100 border border-gray-300 rounded-lg sm:w-40 hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={action}
                className="w-full py-3 font-medium text-white transition-all duration-200 bg-red-600 rounded-lg sm:w-40 hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </section>
        </div>
      </div>
    </Modal>
  );
};

export const CloseAccountModal = ({ open, modalData, action }) => {
  const { toggleModal } = modalData;

  return (
    <Modal
      isOpen={open}
      onRequestClose={() => toggleModal("CLOSE_ACCOUNT", false)}
      modalHeader={{
        hasHeader: true,
        modalTitle: "",
        style: "",
        textStyle: "text-main",
      }}
    >
      <div className="flex flex-col w-full pb-6 mx-auto gap-y-4 sm:w-10/12 md:w-9/12">
        <div className="flex flex-col flex-grow gap-y-3 min-h-60">
          <section className="mt-4">
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-red-600">Close Account</h2>
              <p className="mt-2 text-base text-gray-700">
                Are you sure you want to permanently close your account? This action is irreversible and all your data will be lost.
              </p>
            </div>

            <div className="flex flex-col justify-center gap-4 mt-8 sm:flex-row">
              <button
                onClick={() => toggleModal("CLOSE_ACCOUNT", false)}
                className="w-full py-3 text-gray-800 transition-all duration-200 bg-gray-100 border border-gray-300 rounded-lg sm:w-40 hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={action}
                className="w-full py-3 font-medium text-white transition-all duration-200 bg-red-600 rounded-lg sm:w-40 hover:bg-red-700"
              >
                Close Account
              </button>
            </div>
          </section>
        </div>
      </div>
    </Modal>
  );
};

export const CalculatorModal = ({ open, modalData, action }) => {
  const { toggleModal } = modalData;
  const navigate = useNavigate();

  return (
    <Modal
      isOpen={open}
      onRequestClose={() => toggleModal("CALCULATOR", false)}
      modalHeader={{
        hasHeader: true,
        modalTitle: "Quick Calculator",
        style: "border-b",
        textStyle: "text-main",
      }}
    >
      <div className="p-3">
        <div className="flex flex-col w-full mx-auto mb-5 gap-y-4 sm:w-10/12">
          <div className="flex flex-col flex-grow gap-y-3 min-h-60">
            <section className="mt-4">
              <div className="">
                <p className="text-xs font-semibold text-[#013930]">1 Chinese Yuan equals</p>
                <h1 className="mt-1 text-2xl text-gray-700">
                  202.58 Nigerian Naira
                </h1>
              </div>
              <div className="mt-2">
                <XchangeCard />
              </div>
              <div className="flex items-center mt-4 gap-x-3">
                <button
                  onClick={() => navigate(routes.DASHBOARD.fundwallet.abs)}
                  type="button"
                  className="animate-active rounded-no-tl font-medium flex items-center justify-center py-2.5 px-5 text-sm rounded-xl text-black bg-gray-200">
                  Fund Wallet
                </button>
                <button
                  onClick={() => navigate(routes.DASHBOARD.send.abs)}
                  type="button"
                  className="animate-active rounded-no-tl font-medium flex items-center justify-center py-2.5 px-5 text-sm rounded-xl text-black bg-[#F1C34E]">
                  Send
                </button>
              </div>
            </section>
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <IconWrapper >
            <ShareIcon className="w-4 h-4" />
          </IconWrapper>
          <button
            onClick={action}
            type="button"
            className="animate-active rounded-no-tl font-medium flex items-center justify-center py-1.5 px-3 text-xs rounded-xl text-black bg-[#F1C34E]">
            Follow
            <Plus className="w-3 h-3" />
          </button>
        </div>
      </div>
    </Modal>
  );
};

export const FollowModal = ({ open, modalData, action }) => {
  const { toggleModal } = modalData;

  return (
    <Modal
      isOpen={open}
      onRequestClose={() => toggleModal("FOLLOW", false)}
      modalHeader={{ hasHeader: true, modalTitle: "Enter Email Address to Follow", style: "border-b", textStyle: "text-main" }}>
      <div className="flex flex-col w-full p-6 mx-auto gap-y-4">
        <div className="flex flex-col flex-grow gap-y-10">
          <FormControl
            type="text"
            label={{
              exist: true,
              text: "Email Address",
            }}
            placeholder="Enter your email address or phone number"
          />
          <div>
            <FooterButton onClick={action} text="Subscribe to rate updates" className="!text-sm !text-black !bg-[#F1C34E]" />
          </div>
        </div>
      </div>
    </Modal>
  );
};