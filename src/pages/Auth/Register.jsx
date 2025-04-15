import React, { useState } from "react";
import { FormControl } from "@/components/BaseComponents/FormInputs";
import { StateDataContext } from "@/App";
import { useNavigate } from "react-router";
import { CompletedIcon, NigeriaIcon } from "@/data";
import { ChevronDownIcon, IconWrapper } from "@/data/Icons";
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

// export default function Register() {
//   const {
//     stateData: {
//       auth: { register },
//     },
//     stateData,
//     setStateData,
//   } = React.useContext(StateDataContext);

//   return (
//     <div className="w-full md:w-9/12 lg:w-8/12 xl:w-3/6 pt-10 sm:py-14 md:py-20 mx-auto">
//       {!register.isVerified && (
//         <header className="flex justify-between items-center gap-x-3">
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

export default function Register() {
  const {
    stateData: {
      auth: { register },
    },
    stateData,
    setStateData,
  } = React.useContext(StateDataContext);

  return (
    <div className="w-full md:w-9/12 lg:w-8/12 xl:w-3/6 pt-10 sm:py-14 md:py-20 mx-auto">
      {!register.isRegistered && (
        <header className="flex justify-between items-center gap-x-3">
          <h2 className="text-3xl font-bold">
            Register
          </h2>
          <div className="flex flex-col gap-y-1.5 text-end">
            <span className="bg-slate-200 flex items-center justify-center select-none rounded-md py-1.5 px-2 leading-tighter text-sm text-main">
              Step 1 of 1
            </span>
          </div>
        </header>
      )}

      {register.isRegistered ? (
        <Registered />
      ) : (
        <main className="mt-12">
            <RegisterStepper1 />
        </main>
      )}
    </div>
  );
};

export const RegisterStepper1 = () => {
  const { stateData, setStateData } = React.useContext(StateDataContext);
  const [showSetPinModal, setShowSetPinModal] = useState(false);
  const [showPhoneModal, setShowPhoneModal] = useState(false);

  const {
    data: { modals },
    toggleModal,
  } = useModalTrigger(stateData);

  const navigate = useNavigate();

  function registerUser() {
    const newStates = structuredClone(stateData);
    newStates.auth.register.isRegistered = true;
    setStateData(newStates);
  }

  return (
    <>
      <form action="" className="flex flex-col gap-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormControl type="text" placeholder="Enter your first name" label={{ exist: true, text: "First name" }} />
          <FormControl type="text" placeholder="Enter your last name" label={{ exist: true, text: "Last name" }} />
        </div>

        <FormControl
          floatEle={{
            exist: true,
            position: "right",
            children: (
              <button
                type="button"
                className="text-[.68rem] sm:text-xs px-2.5 py-2 text-green disabled:bg-slate-300 disabled:opacity-50 font-medium disabled:text-black disabled:cursor-not-allowed bg-green-100 text-main hover:bg-green-200 transition ease-in-out duration-300 rounded-[5px] animate-active"
                onClick={() => toggleModal("AUTH_EMAIL_VERIFICATION", true)}
              >
                Send Email OTP
              </button>
            ),
          }}
          type="email"
          placeholder="Enter your email address"
          label={{ exist: true, text: "Email address" }}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormControl type="password" placeholder="Enter your password" label={{ exist: true, text: "Password" }} />
          <div onClick={() => setShowSetPinModal(true)}>
            <FormControl
              type="tel"
              inputMode="numeric"
              maxLength="4"
              placeholder="Enter your 4 digit pin"
              label={{ exist: true, text: "Pin" }}
              readOnly // Optional, if you want it just to trigger the modal
            />
          </div>
        </div>

        <div>
          <label className="text-[.94rem] font-medium text-gray-700 dark:text-gray-300">Phone number</label>
          <div className="flex items-stretch gap-x-3">
            <button
              type="button"
              className="min-h-[3rem] flex-shrink-1 p-3 gap-x-1.5 select-none transition ease-in-out duration-300 text-sm flex items-center justify-between border-gray-300 rounded-lg bg-[#F8F9FD] hover:bg-[#eff1f7]"
              onClick={() => toggleModal("SELECT_COUNTRY", true)}
            >
              <figure className="w-5 h-5 rounded-full">
                <img src={NigeriaIcon} alt="" />
              </figure>
              <IconWrapper>
                <ChevronDownIcon />
              </IconWrapper>
            </button>

            <aside className="flex-grow">
              <FormControl
                type="tel"
                floatEle={{
                  position: "right",
                  exist: true,
                  children: (
                    <button
                      type="button"
                      className="text-[.5rem] font-bold sm:font-normal sm:text-xs px-2.5 py-2 text-green disabled:bg-slate-300 disabled:opacity-50 disabled:text-black disabled:cursor-not-allowed bg-green-100 text-main hover:bg-green-200 transition ease-in-out duration-300 rounded-[5px] animate-active"
                      onClick={() => setShowPhoneModal(true)}
                    >
                      Send Phone OTP
                    </button>
                  ),
                }}
                inputMode="numeric"
                style="w-full"
                placeholder="Enter your phone number"
                label={{ exist: false }}
              />
            </aside>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-[.94rem] font-medium text-gray-700 dark:text-gray-300">How did you hear about us?</label>
            <button
              type="button"
              className="w-full min-h-[3rem] h-auto outline-none p-4 transition ease-in-out duration-300 text-sm flex items-center justify-between border-gray-300 rounded-lg bg-[#F8F9FD] hover:bg-[#eff1f7]"
              onClick={() => toggleModal("SELECT_REFERRAL_METHOD", true)}
            >
              <span>Select</span>
              <IconWrapper>
                <ChevronDownIcon />
              </IconWrapper>
            </button>
          </div>
          <FormControl type="text" placeholder="Enter referral code" label={{ exist: true, text: "Referral Code (Optional)" }} />
        </div>
      </form>

      <div className="mt-10">
        <button
          type="button"
          className="enabled:active:scale-95 disabled:bg-[#DADADA] disabled:cursor-not-allowed transition-all ease-in-out bg-[#F1C34E] flex items-center justify-center w-full rounded-lg py-3.5 text-[.9rem] font-medium"
          onClick={registerUser}
        >
          Proceed
        </button>
      </div>

      {/* Modals */}
      <SelectCountryModal modalData={{ toggleModal }} open={modals.SELECT_COUNTRY} />
      <EmailVerificationModal modalData={{ toggleModal }} open={modals.AUTH_EMAIL_VERIFICATION} />
      <SelectReferralMethodModal modalData={{ toggleModal }} open={modals.SELECT_REFERRAL_METHOD} />
      <SetPasswordModal
        open={showSetPinModal}
        modalData={{ toggleModal: (type, state) => setShowSetPinModal(state) }}
        action={(pin) => {
          console.log("PIN set to:", pin); // or update some state
        }}
      />
      <NumberVerificationModal
        open={showPhoneModal}
        modalData={{
          toggleModal: (type, state) => setShowPhoneModal(state)
        }}
        action={(otpCode) => {
          console.log("Verified OTP:", otpCode);
        }}
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

  function completeVerification() {
    const newStates = structuredClone(stateData);
    newStates.auth.register.isVerified = true;
    setStateData(newStates);
  }

  return (
    <div>
      <div className="flex flex-col gap-y-1">
        <label className="text-[.96rem] font-medium text-gray-700 dark:text-gray-300">Verification type</label>
        <button
          type="button"
          className="w-full min-h-[3rem] h-auto outline-none p-4 transition ease-in-out duration-300 text-sm flex items-center justify-between border-gray-300 rounded-lg bg-[#F8F9FD] hover:bg-[#eff1f7] "
          onClick={() => toggleModal("SELECT_ID", true)}>
          <span className="text-slate-500">Select id type</span>
          <IconWrapper>
            <ChevronDownIcon />
          </IconWrapper>
        </button>
      </div>

      <div className="mt-10">
        <button
          type="button"
          className="enabled:active:scale-95 disabled:bg-[#DADADA] disabled:cursor-not-allowed transition-all ease-in-out bg-[#F1C34E] flex items-center justify-center w-full rounded-lg py-3.5 text-[.96rem]"
          onClick={completeVerification}>
          Proceed
        </button>
      </div>

      <SelectIdTypeModal modalData={{ toggleModal }} open={modals.SELECT_ID} />
    </div>
  );
};

export const Registered = () => {
  const { stateData, setStateData } = React.useContext(StateDataContext);
  const {
    data: { modals },
    toggleModal,
    switchModal,
  } = useModalTrigger(stateData);

  function proceedWithAction() {
    // do the necessary function kini
    const newStates = structuredClone(stateData);
    newStates.auth.register.stepperVal = 2;
    setStateData(newStates);
  }
  return (
    <>
      <section className="flex flex-col items-center text-center">
        <figure className="max-w-56">
          <img src={CompletedIcon} alt="" />
        </figure>
        <div className="mb-5 mt-6">
          <h1 className="text-3xl font-semibold">Registration Complete</h1>
          <span className="text-sm text-slate-500">You successfully registered</span>
        </div>
        <div className="flex flex-col gap-y-3 w-full">
          <button
            type="button"
            onClick={proceedWithAction}
            className="border-[#f1c34e] border-solid border enabled:active:scale-95 transition-all ease-in-out bg-[#F1C34E] flex items-center justify-center w-full rounded-lg py-3.5 text-[.95rem] font-semibold">
            Continue
          </button>
          <button
            type="button"
            onClick={() => toggleModal("HOW_TO_NAIRA4YUAN", true)}
            className="border-[#f1c34e] border-solid border enabled:active:scale-95 transition-all ease-in-out text-main flex items-center justify-center w-full rounded-lg py-3.5 text-[.95rem] font-semibold">
            How to use Naira4Yuan
          </button>
        </div>
      </section>

      <HowToUseNaira4YuanModal open={modals.HOW_TO_NAIRA4YUAN} modalData={{ toggleModal }} />
    </>
  );
};

export const Verified = () => {
  const { stateData, setStateData } = React.useContext(StateDataContext);

  return (
    <>
      <section className="flex flex-col items-center text-center">
        <figure className="max-w-56">
          <img src={CompletedIcon} alt="" />
        </figure>
        <div className="mb-5 mt-6">
          <h1 className="text-3xl font-semibold">Individual Verification Complete</h1>
          <span className="text-sm text-slate-500">You will receive an email shortly</span>
        </div>
        <div className="flex flex-col gap-y-3 w-full">
          <button
            type="button"
            className="border-[#f1c34e] border-solid border enabled:active:scale-95 transition-all ease-in-out bg-[#F1C34E] flex items-center justify-center w-full rounded-lg py-3.5 text-[.95rem] font-semibold">
            Continue
          </button>
        </div>
      </section>

    </>
  );
};
