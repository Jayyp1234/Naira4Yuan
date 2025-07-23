import React, { useCallback, useEffect, useState } from "react";
import { FormControl } from "@/components/BaseComponents/FormInputs";
import { StateDataContext } from "@/App";
import { useNavigate } from "react-router";
import { CHN, CompletedIcon, FRA, NGN, NigeriaIcon } from "@/data";
import { ChevronDownIcon, CloseEyeIcon, IconWrapper, OpenEyeIcon } from "@/data/Icons";
import { useModalTrigger } from "../../hooks/useModalTrigger";
import {
  EmailVerificationModal,
  HowToUseNaira4YuanModal,
  NumberVerificationModal,
  SelectCountryModal,
  SelectIdTypeModal,
  SelectReferralMethodModal,
  SetPasswordModal,
} from "../../components/LayoutComponents/AllModals";
import { useFinalizeRegistrationMutation, useSendEmailOtpMutation, useSendSmsOtpMutation } from "@/states/services/authApi";
import { toast } from "react-toastify";
import { routes } from "@/data/routes";
import { AlertNotification } from "@/components/BaseComponents/Error";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

// export default function Register() {
//   const {
//     stateData: {
//       auth: { register },
//     },
//     stateData,
//     setStateData,
//   } = React.useContext(StateDataContext);

//   return (
//     <div className="w-full pt-10 mx-auto md:w-9/12 lg:w-8/12 xl:w-3/6 sm:py-14 md:py-20">
//       {!register.isVerified && (
//         <header className="flex items-center justify-between gap-x-3">
//           <h2 className="text-3xl font-bold">
//             {!register.isRegistered && <>{register.stepperVal === 1 && "Register"}</>}
//             {register.isRegistered && <>{register.stepperVal === 2 && "Individual Verification"}</>}
//           </h2>
//           <div className="flex flex-col gap-y-1.5 text-end">
//             {(!register.isRegistered && register.stepperVal === 1) || (register.isRegistered && register.stepperVal === 2) ? (
//               <span className="bg-slate-200 flex items-center justify-center select-none rounded-md py-1.5 px-2 leading-tighter text-sm text-main">
//                 {register.stepperVal} of 2
//               </span>
//             ) : null}
//             {register.stepperVal === 2 && (
//               <button type="button" className="text-xs text-main">
//                 Skip this step
//               </button>
//             )}
//           </div>
//         </header>
//       )}

//       {register.isVerified ? (
//         <Verified />
//       ) : register.isRegistered && register.stepperVal !== 2 ? (
//         <Registered />
//       ) : (
//         <main className="mt-12">
//           {register.stepperVal === 1 && <RegisterStepper1 />}
//           {register.stepperVal === 2 && <RegisterStepper2 />}
//         </main>
//       )}
//     </div>
//   );
// }

const inputModalStyle =
  "!bg-[#F8F9FD] !focus:bg-[#eff1f7] flex-1 rounded-lg !min-h-[3.2rem] !text-2xl";

export default function Register() {
  const {
    stateData: {
      auth: { register },
    },
    stateData,
    setStateData,
  } = React.useContext(StateDataContext);
  const isRegistered = register?.isRegistered;

  return (
    <div className="w-full pt-10 mx-auto md:w-9/12 lg:w-8/12 xl:w-3/6 sm:py-14 md:py-20">
      {/* ─── Header Step Indicator ───────────────────────────── */}
      {!isRegistered && (
        <header className="flex items-center justify-between gap-x-3">
          <h2 className="text-3xl font-bold">Register</h2>
          <div className="flex flex-col gap-y-1.5 text-end">
            <span className="bg-slate-200 flex items-center justify-center select-none rounded-md py-1.5 px-2 leading-tighter text-sm text-main">
              Step 1 of 1
            </span>
          </div>
        </header>
      )}

      {/* ─── Main Content ───────────────────────────────────── */}
      <main className="mt-10">
        {isRegistered ? <Registered /> : <RegisterStepper1 />}
      </main>
    </div>
  );
}

export const RegisterStepper1 = () => {
  const { stateData, setStateData } = React.useContext(StateDataContext);
  const navigate = useNavigate();
  const {
    data: { modals },
    toggleModal,
  } = useModalTrigger(stateData);

  // ─── State Hooks ──────────────────────────────────────────────
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pin, setPin] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedReferral, setSelectedReferral] = useState("");
  const [userRefCode, setUserRefCode] = useState("WZLDA");

  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);

  const [showSetPinModal, setShowSetPinModal] = useState(false);
  const [showPhoneModal, setShowPhoneModal] = useState(false);

  const [showAlert, setShowAlert] = useState(false);

  const [isVisible, setIsVisible] = useState(false);

  const [alertContent, setAlertContent] = useState({
    type: "danger",
    message: "",
    subMessage: "",
  });

  // ─── RTK Query Hooks ──────────────────────────────────────────
  const [sendEmailOtp, { isLoading: sendingEmail }] = useSendEmailOtpMutation();
  const [sendSmsOtp, { isLoading: sendingSms }] = useSendSmsOtpMutation();
  const [finalizeRegistration, { isLoading: submitting }] = useFinalizeRegistrationMutation();

  // ─── Map for Referral Source Display ──────────────────────────
  const referralSourcesMap = {
    twitter: "Twitter",
    friends_or_family: "Friends or Family",
    linkedin: "LinkedIn",
    instagram: "Instagram",
    tiktok: "Tiktok",
    word_of_mouth: "Word of mouth",
  };

  // ─── Final Registration Handler ───────────────────────────────
  async function registerUser() {
    try {
      const response = await finalizeRegistration({
        userRefCode,
        hear_about_us: selectedReferral,
        referred_by: "",
      }).unwrap();

      if (response?.success) {
        const newStates = structuredClone(stateData);
        newStates.auth.register.isRegistered = true;
        setStateData(newStates);
        toast.success("Registration completed");
        setShowAlert(false);
      } else {
        const msg = response?.message || "Failed to finalize registration";
        toast.error(msg);
        setAlertContent({
          type: "danger",
          message: "Registration Error",
          subMessage: msg.includes("already exists")
            ? "It looks like you're already registered with this information."
            : msg,
        });
        setShowAlert(true);
      }
    } catch (err) {
      const msg = err?.data?.message || "Error finalizing registration";
      toast.error(msg);
      setAlertContent({
        type: "danger",
        message: "Registration Failed",
        subMessage: msg.includes("network")
          ? "Please check your internet connection and try again."
          : msg,
      });
      setShowAlert(true);
    }
  }

  const handleSelectCountry = useCallback((countryObj) => {
    setSelectedCountry(countryObj);
  }, []);

  // ─── Component JSX ─────────────────────────────────────────────
  return (
    <>
      <div className="mb-5">
        {showAlert && (
          <AlertNotification
            type={alertContent.type}
            message={alertContent.message}
            subMessage={alertContent.subMessage}
            onClose={() => setShowAlert(false)}
          />
        )}
      </div>

      <form className="flex flex-col gap-y-4">
        {/* Name Fields */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormControl
            type="text"
            placeholder="Enter your first name"
            label={{ exist: true, text: "First name" }}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <FormControl
            type="text"
            placeholder="Enter your last name"
            label={{ exist: true, text: "Last name" }}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        {/* Email Field with OTP */}
        <FormControl
          type="email"
          placeholder="Enter your email address"
          label={{ exist: true, text: "Email address" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          floatEle={{
            exist: true,
            position: "right",
            children: (
              <button
                type="button"
                onClick={async () => {
                  if (!email || !firstName || !lastName) {
                    toast.error("Please fill in your first name, last name, and email first.");
                    setAlertContent({
                      type: "warning",
                      message: "Missing Fields",
                      subMessage: "Please fill in your first name, last name, and email first.",
                    });
                    setShowAlert(true);
                    return;
                  }
                  try {
                    const res = await sendEmailOtp({ email, first_name: firstName, last_name: lastName }).unwrap();
                    if (res?.success) {
                      toast.success("OTP sent to your email");
                      setShowAlert(false);
                      toggleModal("AUTH_EMAIL_VERIFICATION", true);
                    } else {
                      toast.error(res?.message || "Failed to send email OTP");
                      setAlertContent({
                        type: "danger",
                        message: "Email OTP Failed",
                        subMessage: res?.message || "Failed to send email OTP",
                      });
                      setShowAlert(true);
                    }
                  } catch (err) {
                    toast.error(err?.data?.message || "Failed to send email OTP");
                    setAlertContent({
                      type: "danger",
                      message: "Email OTP Error",
                      subMessage: err?.data?.message || "Failed to send email OTP",
                    });
                    setShowAlert(true);
                  }
                }}
                className="text-[.68rem] sm:text-xs px-2.5 py-2 text-green disabled:bg-slate-300 disabled:opacity-50 font-medium disabled:text-black disabled:cursor-not-allowed bg-green-100 text-main hover:bg-green-200 transition ease-in-out duration-300 rounded-[5px] animate-active"
              >
                {isEmailVerified ? "Verified" : "Send Email OTP"}
              </button>
            ),
          }}
        />

        <FormControl
          type="text"
          placeholder="Enter your username"
          label={{ exist: true, text: "Username" }}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        {/* Password + PIN */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormControl
            type={isVisible ? "text" : "password"}
            value={password}
            icon={{
              exist: true,
              action: () => setIsVisible((prev) => !prev),
              element: isVisible ? OpenEyeIcon : CloseEyeIcon,
            }}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            label={{ exist: true, text: "Password" }}
          />
          <div>
            <label className="text-[.94rem] block">Enter PIN</label>
            <InputOTP
              maxLength={4}
              value={pin}
              onChange={(val) => {
                if (/^\d*$/.test(val)) setPin(val);
              }}
              className="flex flex-col position-relative"
              id="pin-entry"
            >
              <InputOTPGroup className="flex w-full gap-x-2">
                {[0, 1, 2, 3].map((index) => (
                  <InputOTPSlot key={index} index={index} className={inputModalStyle} />
                ))}
              </InputOTPGroup>
            </InputOTP>
          </div>
        </div>

        {/* Phone Number with OTP */}
        <div>
          <label className="text-[.94rem]">Phone number</label>
          <div className="flex items-stretch gap-x-3">
            {/* Country Selector */}
            <button
              type="button"
              onClick={() => toggleModal("SELECT_COUNTRY", true)}
              className="min-h-[3rem] flex-shrink-1 p-3 gap-x-1.5 transition ease-in-out duration-300 text-sm flex items-center justify-between border-gray-300 rounded-lg bg-[#F8F9FD] hover:bg-[#eff1f7]"
            >
              <figure className="w-5 h-5 rounded-full">
                <img src={selectedCountry?.icon} alt="" className="object-cover w-full h-full rounded-full" />
              </figure>
              <IconWrapper>
                <ChevronDownIcon />
              </IconWrapper>
            </button>

            {/* Phone Input */}
            <aside className="flex-grow">
              <FormControl
                type="tel"
                inputMode="numeric"
                value={phoneNumber}
                onChange={(e) => {
                  let input = e.target.value.replace(/\D/g, "");
                  if (input.length > 11) input = input.slice(0, 11);
                  if (input.length > 0 && input[0] !== "0") {
                    input = "0" + input;
                  }
                  setPhoneNumber(input);
                }}
                placeholder="Enter your phone number"
                style="w-full"
                label={{ exist: false }}
                floatEle={{
                  exist: true,
                  position: "right",
                  children: (
                    <button
                      type="button"
                      disabled={isPhoneVerified}
                      className={`text-[.5rem] font-medium sm:text-xs px-2.5 py-2 ${isPhoneVerified
                        ? "bg-green-200 text-green-800 cursor-default"
                        : "bg-green-100 text-main hover:bg-green-200"
                        } transition ease-in-out duration-300 rounded-[5px] animate-active`}
                      onClick={async () => {
                        if (isPhoneVerified) return;

                        if (!phoneNumber || !username || !pin || !password || !selectedCountry || !userRefCode) {
                          toast.error("Fill all required fields first before sending OTP.");
                          setAlertContent({
                            type: "warning",
                            message: "Missing Fields",
                            subMessage: "Fill all required fields first before sending OTP.",
                          });
                          setShowAlert(true);
                          return;
                        }

                        try {
                          const res = await sendSmsOtp({
                            phone_number: phoneNumber,
                            username,
                            pin,
                            password,
                            userRefCode,
                            country_id: selectedCountry?.id || 1,
                            method: "sms",
                          }).unwrap();

                          if (res?.success) {
                            toast.success("OTP sent to your phone");
                            setShowAlert(false);
                            setShowPhoneModal(true);
                          } else {
                            toast.error(res?.message || "Failed to send phone OTP");
                            setAlertContent({
                              type: "danger",
                              message: "Phone OTP Failed",
                              subMessage: res?.message || "Failed to send phone OTP",
                            });
                            setShowAlert(true);
                          }
                        } catch (err) {
                          toast.error(err?.data?.message || "Failed to send phone OTP");
                          setAlertContent({
                            type: "danger",
                            message: "Phone OTP Error",
                            subMessage: err?.data?.message || "Failed to send phone OTP",
                          });
                          setShowAlert(true);
                        }
                      }}
                    >
                      {isPhoneVerified ? "Verified" : "Send Phone OTP"}
                    </button>
                  ),
                }}
              />
            </aside>
          </div>
        </div>

        {/* Referral & Referral Code */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex flex-col">
            <label className="text-[.94rem]">How did you hear about us?</label>
            <button
              type="button"
              onClick={() => toggleModal("SELECT_REFERRAL_METHOD", true)}
              className="w-full min-h-[3rem] h-auto outline-none p-4 transition ease-in-out duration-300 text-sm flex items-center justify-between border-gray-300 rounded-lg bg-[#F8F9FD] hover:bg-[#eff1f7]"
            >
              <span>{selectedReferral ? referralSourcesMap[selectedReferral] : "Select"}</span>
              <IconWrapper>
                <ChevronDownIcon />
              </IconWrapper>
            </button>
          </div>
          <FormControl
            type="text"
            placeholder="Enter referral code"
            label={{ exist: true, text: "Referral Code (Optional)" }}
          />
        </div>
      </form>

      {/* Submit Button */}
      <div className="mt-10">
        <button
          type="button"
          onClick={registerUser}
          disabled={submitting}
          className="enabled:active:scale-95 disabled:bg-[#DADADA] disabled:cursor-not-allowed transition-all ease-in-out bg-[#F1C34E] flex items-center justify-center w-full rounded-lg py-3.5 text-[.9rem] font-medium"
        >
          Proceed
        </button>
      </div>

      {/* ─── Modals ─────────────────────────────────────────────── */}
      <SelectCountryModal
        open={modals.SELECT_COUNTRY}
        modalData={{ toggleModal }}
        action={handleSelectCountry}
      />

      <EmailVerificationModal
        open={modals.AUTH_EMAIL_VERIFICATION}
        modalData={{ toggleModal }}
        email={email}
        first_name={firstName}
        last_name={lastName}
        action={() => setIsEmailVerified(true)}
      />

      <SelectReferralMethodModal
        open={modals.SELECT_REFERRAL_METHOD}
        modalData={{ toggleModal }}
        action={(referral) => setSelectedReferral(referral)}
      />

      <SetPasswordModal
        open={showSetPinModal}
        modalData={{ toggleModal: (_, state) => setShowSetPinModal(state) }}
        action={(newPin) => setPin(newPin)}
      />

      <NumberVerificationModal
        open={showPhoneModal}
        modalData={{ toggleModal: (_, state) => setShowPhoneModal(state) }}
        action={() => setIsPhoneVerified(true)}
        phone_number={phoneNumber}
        userRefCode={userRefCode}
        username={username}
        dialCode={selectedCountry?.dialCode || "234"}
        country_id={selectedCountry?.id || 1}
        password={password}
        pin={pin}
      />
    </>
  );
};

export const RegisterStepper2 = () => {
  const { stateData, setStateData } = React.useContext(StateDataContext);

  const {
    data: { modals },
    toggleModal,
    switchModal,
  } = useModalTrigger(stateData);

  // ─── Handler to Complete Verification ────────────────────────
  function completeVerification() {
    const newStates = structuredClone(stateData);
    newStates.auth.register.isVerified = true;
    setStateData(newStates);
  }

  return (
    <div>
      {/* ─── Select ID Type ───────────────────────────────────── */}
      <div className="flex flex-col gap-y-1">
        <label className="text-[.96rem] font-medium text-gray-700 dark:text-gray-300">
          Verification type
        </label>
        <button
          type="button"
          onClick={() => toggleModal("SELECT_ID", true)}
          className="w-full min-h-[3rem] h-auto outline-none p-4 transition ease-in-out duration-300 text-sm flex items-center justify-between border-gray-300 rounded-lg bg-[#F8F9FD] hover:bg-[#eff1f7]"
        >
          <span className="text-slate-500">Select ID type</span>
          <IconWrapper>
            <ChevronDownIcon />
          </IconWrapper>
        </button>
      </div>

      {/* ─── Proceed Button ───────────────────────────────────── */}
      <div className="mt-10">
        <button
          type="button"
          onClick={completeVerification}
          className="enabled:active:scale-95 disabled:bg-[#DADADA] disabled:cursor-not-allowed transition-all ease-in-out bg-[#F1C34E] flex items-center justify-center w-full rounded-lg py-3.5 text-[.96rem]"
        >
          Proceed
        </button>
      </div>

      {/* ─── Modals ───────────────────────────────────────────── */}
      <SelectIdTypeModal
        open={modals.SELECT_ID}
        modalData={{ toggleModal }}
      />
    </div>
  );
};

export const Registered = () => {
  const navigate = useNavigate();
  const { stateData, setStateData } = React.useContext(StateDataContext);

  const {
    data: { modals },
    toggleModal,
    switchModal,
  } = useModalTrigger(stateData);

  // ─── Handler to Proceed After Registration ─────────────────────
  function proceedWithAction() {
    const newStates = structuredClone(stateData);
    newStates.auth.register.stepperVal = 2;
    setStateData(newStates);
    navigate(routes.DASHBOARD.abs);
  }

  return (
    <>
      {/* ─── Success Message & Actions ───────────────────────────── */}
      <section className="flex flex-col items-center text-center">
        <figure className="max-w-56">
          <img src={CompletedIcon} alt="Completed icon" />
        </figure>

        <div className="mt-6 mb-5">
          <h1 className="text-3xl font-semibold">Registration Complete</h1>
          <span className="text-sm text-slate-500">You successfully registered</span>
        </div>

        <div className="flex flex-col w-full gap-y-3">
          <button
            type="button"
            onClick={proceedWithAction}
            className="border border-[#f1c34e] bg-[#F1C34E] enabled:active:scale-95 transition-all ease-in-out flex items-center justify-center w-full rounded-lg py-3.5 text-[.95rem] font-semibold"
          >
            Continue
          </button>

          <button
            type="button"
            onClick={() => toggleModal("HOW_TO_NAIRA4YUAN", true)}
            className="border border-[#f1c34e] text-main enabled:active:scale-95 transition-all ease-in-out flex items-center justify-center w-full rounded-lg py-3.5 text-[.95rem] font-semibold"
          >
            How to use Naira4Yuan
          </button>
        </div>
      </section>

      {/* ─── How-To Modal ───────────────────────────────────────── */}
      <HowToUseNaira4YuanModal
        open={modals.HOW_TO_NAIRA4YUAN}
        modalData={{ toggleModal }}
      />
    </>
  );
};

export const Verified = () => {
  const { stateData, setStateData } = React.useContext(StateDataContext);

  return (
    <>
      <section className="flex flex-col items-center text-center">
        {/* ─── Success Icon ───────────────────── */}
        <figure className="max-w-56">
          <img src={CompletedIcon} alt="Verification complete" />
        </figure>

        {/* ─── Message ───────────────────────── */}
        <div className="mt-6 mb-5">
          <h1 className="text-3xl font-semibold">Individual Verification Complete</h1>
          <span className="text-sm text-slate-500">You will receive an email shortly</span>
        </div>

        {/* ─── Continue Button ────────────────── */}
        <div className="flex flex-col w-full gap-y-3">
          <button
            type="button"
            className="border border-[#f1c34e] bg-[#F1C34E] enabled:active:scale-95 transition-all ease-in-out flex items-center justify-center w-full rounded-lg py-3.5 text-[.95rem] font-semibold"
          >
            Continue
          </button>
        </div>
      </section>
    </>
  );
};

