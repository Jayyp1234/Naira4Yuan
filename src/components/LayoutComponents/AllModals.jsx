import { useState, useEffect } from "react";
import { Modal } from "../BaseComponents/Modal";
import { FormControl, RadioInput } from "../BaseComponents/FormInputs";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import { CHN, CompletedIcon, FRA, NGN, Step1, Step2, Step3, Step4 } from "@/data";
import { FooterButton } from "../BaseComponents/FooterButton";
import { CopyIcon2, IconWrapper, WarningIcon, tickCircle, ShareIcon } from "../../data/Icons";
import { BorderWrapper } from "../PageComponents/Dashboard/Items";
import Iframe from "../BaseComponents/Iframe";
import { routes } from "../../data/routes";
import { ArrowDownToLine, ChevronLeft, ChevronRight, Download, Plus } from 'lucide-react';
import { Link, useNavigate } from "react-router";
import { Xchange } from "./Xchange";

const inputModalStyle =
  "bg-slate-200 rounded-lg !min-w-14 !min-h-14 focus:!outline-main !outline-main !ring-main focus:!border-main focus:!ring-main !text-2xl";

export const BasicVerificationModal = ({ open, modalData, action }) => {
  const { toggleModal } = modalData;
  return (
    <Modal
      isOpen={open}
      onRequestClose={() => toggleModal("SELECT_ID", false)}
      modalHeader={{ hasHeader: true, modalTitle: "Basic Verification", style: "border-b", textStyle: "text-main" }}>
      <div className="py-6 flex flex-col gap-y-4 w-full sm:w-10/12 md:w-9/12 mx-auto">
        <div className="flex flex-col flex-grow gap-y-3 min-h-72">
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
  return (
    <Modal
      isOpen={open}
      onRequestClose={() => toggleModal("SELECT_ID_TYPE", false)}
      modalHeader={{ hasHeader: true, modalTitle: "Basic Verification", style: "", textStyle: "text-main" }}>
      <div className="py-6 flex flex-col gap-y-4 w-full sm:w-10/12 md:w-9/12 mx-auto">
        <div className="flex flex-col flex-grow gap-y-4 min-h-72">
          <label htmlFor="bvn" className="flex items-center justify-between cursor-pointer border-b pb-3">
            <div className="flex items-center gap-2">
              <RadioInput name="referral" id="bvn" />
              <span className="text-xl leading-tight flex">Bank Verification Number (BVN)</span>
            </div>
          </label>
          <label htmlFor="nin" className="flex items-center justify-between cursor-pointer border-b pb-2">
            <div className="flex items-center gap-2">
              <RadioInput name="referral" id="nin" />
              <span className="text-xl leading-tight flex">National Identity Number (NIN)</span>
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

export const SetPasswordModal = ({ open, modalData, action }) => {
  const { toggleModal } = modalData;
  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (pin.length !== 4 || confirmPin.length !== 4) {
      setError("PIN must be exactly 4 digits.");
    } else if (pin !== confirmPin) {
      setError("PINs do not match.");
    } else {
      setError("");
      action(pin);
      toggleModal("SET_PASSWORD", false);
    }
  };
  return (
    <Modal
      isOpen={open}
      onRequestClose={() => toggleModal("SET_PASSWORD", false)}
      modalHeader={{ hasHeader: true, modalTitle: "Enter a pin", style: "border-b", textStyle: "text-main" }}
    >
      <div className="py-6 flex flex-col gap-y-4 w-full sm:w-10/12 md:w-9/12 mx-auto">
        <div className="flex flex-col flex-grow gap-y-3 min-h-72">
          <section>
            <span>
              Enter your preferred 4-digit pin for your Naira4Yuan account.
            </span>
            <div className="flex flex-col gap-y-2 mt-6">
              <FormControl
                type="password"
                inputMode="numeric"
                label={{ exist: true, text: "Pin *" }}
                placeholder="Enter your pin"
                value={pin}
                onChange={(e) => setPin(e.target.value.replace(/\D/g, '').slice(0, 4))}
              />
              <FormControl
                type="password"
                inputMode="numeric"
                label={{ exist: true, text: "Repeat Pin *" }}
                placeholder="Enter your pin again"
                value={confirmPin}
                onChange={(e) => setConfirmPin(e.target.value.replace(/\D/g, '').slice(0, 4))}
              />
            </div>
            {error && <span className="text-xs text-[#FF0000]">{error}</span>}
          </section>
        </div>
        <div>
          <FooterButton
            text="Continue"
            className="!text-[1.05rem]"
            onClick={handleSubmit}
            disabled={pin.length < 4 || confirmPin.length < 4}
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
      <div className="p-6 flex flex-col gap-y-4 w-full sm:w-10/12 md:w-9/12 mx-auto">
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

export const EmailVerificationModal = ({ open, modalData, action }) => {
  const { toggleModal } = modalData;

  return (
    <Modal
      isOpen={open}
      onRequestClose={() => toggleModal("AUTH_EMAIL_VERIFICATION", false)}
      modalHeader={{ hasHeader: true, modalTitle: "Verify email address", style: "border-b", textStyle: "text-main" }}>
      <div className="p-6 flex flex-col gap-y-4 w-full sm:w-10/12 md:w-9/12 mx-auto">
        <div className="flex flex-col flex-grow gap-y-3 min-h-72">
          <section>
            <span>
              We sent a code to <b>tundeburemo@gmail.com</b>
            </span>
            <div className="flex flex-col gap-y-2 mt-6">
              <div>
                <label htmlFor="code" className="text-[.94rem]">
                  Enter code
                </label>
                <InputOTP maxLength={4} className="flex flex-col" id="email-verification-otp">
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
          <div className="mt-6">
            <span className="text-[.95rem]">
              Didn{`'`}t receive a code?
              <button type="button" className="ms-2 font-semibold underline text-main">
                Click to resend in 0:58
              </button>
            </span>
          </div>
        </div>
        <div>
          <FooterButton text="Continue" className="!text-[1.05rem] uppercase" />
        </div>
      </div>
    </Modal>
  );
};

export const NumberVerificationModal = ({ open, modalData, action }) => {
  const { toggleModal } = modalData;
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (otp.length !== 4) {
      setError("Please enter the 4-digit code.");
    } else {
      setError("");
      action(otp); // Send OTP to parent handler
      toggleModal("AUTH_NUMBER_VERIFICATION", false); // Close modal
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
      <div className="p-6 flex flex-col gap-y-4 w-full sm:w-10/12 md:w-9/12 mx-auto">
        <div className="flex flex-col flex-grow gap-y-3 min-h-72">
          <section>
            <span>
              We sent a code to <b>2348068745750</b> on text and WhatsApp
            </span>
            <div className="flex flex-col gap-y-2 mt-6">
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
              Didn{`'`}t receive a code?
              <button type="button" className="ms-2 font-semibold underline text-main">
                Click to resend in 0:58
              </button>
            </span>
          </div>
        </div>
        <div>
          <FooterButton
            text="Continue"
            className="!text-[1.05rem] uppercase"
            onClick={handleSubmit}
            disabled={otp.length !== 4}
          />
        </div>
      </div>
    </Modal>
  );
};

export const ResetPasswordModal = ({ open, modalData, action }) => {
  const { toggleModal } = modalData;

  return (
    <Modal
      isOpen={open}
      onRequestClose={() => toggleModal("AUTH_RESET_PASSWORD", false)}
      modalHeader={{ hasHeader: true, modalTitle: "", style: "", textStyle: "text-main" }}>
      <div className="pb-6 flex flex-col gap-y-4 w-full sm:w-10/12 md:w-9/12 mx-auto">
        <div className="flex flex-col flex-grow gap-y-3 min-h-72">
          <section>
            <div className="text-center">
              <h2 className="text-2xl font-semibold">Reset Password</h2>
              <span className="text-sm">
                We sent a code to <b className="underline underline-offset-2 font-semibold">tundeburemo@gmail.com</b>
              </span>
            </div>
            <div className="min-h-72 flex-grow">
              <div className="my-5 flex flex-col gap-y-3.5">
                <div>
                  <label htmlFor="code" className="text-[.94rem]">
                    Enter code
                  </label>
                  <InputOTP maxLength={4} className="flex flex-col">
                    <InputOTPGroup className="flex gap-x-4">
                      <InputOTPSlot index={0} className={inputModalStyle} />
                      <InputOTPSlot index={1} className={inputModalStyle} />
                      <InputOTPSlot index={2} className={inputModalStyle} />
                      <InputOTPSlot index={3} className={inputModalStyle} />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
                <FormControl
                  type="password"
                  label={{
                    exist: true,
                    text: "New password",
                  }}
                  placeholder="Enter new password"
                />
                <FormControl
                  type="password"
                  label={{
                    exist: true,
                    text: "Retype New Password",
                  }}
                  placeholder="Retype new password"
                />
                <div className="mb-6">
                  <span className="text-[.95rem]">
                    Didn't receive a code?
                    <button type="button" className="ml-2 underline text-base font-semibold">
                      Click to resend
                    </button>
                  </span>
                </div>
              </div>
            </div>
            <div>
              <FooterButton text="Continue" className="!text-[1.05rem] uppercase" />
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

  return (
    <Modal
      isOpen={open}
      onRequestClose={() => toggleModal("SELECT_REFERRAL_METHOD", false)}
      modalHeader={{ hasHeader: true, modalTitle: "Select referral method", style: "", textStyle: "text-main" }}>
      <div className="p-6 flex flex-col gap-y-4 w-full sm:w-10/12 md:w-9/12 mx-auto">
        <div className="flex flex-col flex-grow gap-y-3 min-h-72">
          {referralSources.map((referral, index) => (
            <label
              key={referral.id}
              htmlFor={referral.id}
              className="flex items-center justify-between cursor-pointer border-b border-gray-200 last:border-b-0 pb-2">
              <div className="flex items-center gap-2">
                <RadioInput name="referral" id={referral.id} />
                <span className="text-sm leading-tight flex">{referral.label}</span>
              </div>
            </label>
          ))}
        </div>
        <div>
          <FooterButton text="Continue" className="!text-[1.05rem] uppercase" />
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
//       <div className="p-6 flex flex-col gap-y-4 w-full sm:w-10/12 md:w-9/12 mx-auto">
//         <div className="flex flex-col flex-grow gap-y-3 min-h-72 pt-6">
//           {countries.map((country, index) => (
//             <label
//               key={country.id || index}
//               htmlFor={country.id}
//               className="flex items-center justify-between cursor-pointer border-b border-gray-200 pb-2">
//               <div className="flex items-center gap-2">
//                 <RadioInput name="country" id={country.id} />
//                 <span className="text-sm leading-tight flex">{country.label}</span>
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
//       <div className="p-6 flex flex-col gap-y-4 w-full sm:w-10/12 md:w-9/12 mx-auto">
//         <div className="flex flex-col flex-grow gap-y-3 min-h-72 pt-6">
//           {countries.map((country) => (
//             <label
//               key={country.id}
//               htmlFor={country.id}
//               className="flex items-center justify-between cursor-pointer border-b border-gray-200 pb-2"
//             >
//               <div className="flex items-center gap-2">
//                 <RadioInput
//                   name="country"
//                   id={country.id}
//                   checked={selectedBalance === country.id}
//                   onChange={() => setSelectedBalance(country.id)}
//                 />
//                 <span className="text-sm leading-tight flex">{country.label}</span>
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
      <div className="p-6 flex flex-col gap-y-4 w-full sm:w-10/12 md:w-9/12 mx-auto">
        <div className="flex flex-col flex-grow gap-y-3 min-h-72 pt-6">
          {countries.map((country) => (
            <label
              key={country.id}
              htmlFor={country.id}
              className="flex items-center justify-between cursor-pointer border-b border-gray-200 pb-2"
            >
              <div className="flex items-center gap-2">
                <RadioInput
                  name="country"
                  id={country.id}
                  checked={selectedBalance === country.id}
                  onChange={() => setSelectedBalance(country.id)} // This is where the state is updated
                />
                <span className="text-sm leading-tight flex">{country.label}</span>
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
    { id: "ngn", label: "NGN", icon: NGN },
    { id: "chn", label: "CHN", icon: CHN },
    { id: "fra", label: "FRA", icon: FRA },
  ];

  return (
    <Modal
      isOpen={open}
      onRequestClose={() => toggleModal("SELECT_COUNTRY", false)}
      modalHeader={{ hasHeader: true, modalTitle: "Basic Verification", style: "", textStyle: "text-main" }}>
      <div className="p-6 flex flex-col gap-y-4 w-full sm:w-10/12 md:w-9/12 mx-auto">
        <div className="flex flex-col flex-grow gap-y-3 min-h-72">
          {countries.map((country, index) => (
            <label
              key={country.id || index}
              htmlFor={country.id}
              className="flex items-center justify-between cursor-pointer border-b border-gray-200 last:border-b-0 pb-2">
              <div className="flex items-center gap-2">
                <RadioInput name="country" id={country.id} />
                <span className="text-sm leading-tight flex">{country.label}</span>
              </div>
              <figure className="w-5 h-5">
                <img src={country.icon} alt="" className="img-fluid" />
              </figure>
            </label>
          ))}
        </div>
        <div>
          <FooterButton text="Continue" className="!text-[1.05rem] uppercase" />
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
      <div className="p-6 flex flex-col gap-y-4 w-full sm:w-10/12 md:w-9/12 mx-auto">
        <div className="flex flex-col flex-grow gap-y-3 min-h-72">
          {preferences.map((preferences, index) => (
            <label
              key={preferences.id || index}
              htmlFor={preferences.id}
              className="flex items-center justify-between cursor-pointer border-b border-gray-200 last:border-b-0 pb-2">
              <div className="flex items-center gap-2">
                <RadioInput name="preferences" id={preferences.id} />
                <span className="text-sm leading-tight flex">{preferences.label}</span>
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
      <div className="p-6 pb-10 flex flex-col gap-y-4 w-full sm:w-10/12 md:w-9/12 mx-auto">
        <div className="flex flex-col flex-grow gap-y-3 min-h-72">
          <header className="text-center">
            <h2 className="text-3xl font-semibold">Bank transfer details</h2>
          </header>
          <div className="flex flex-col gap-y-3">
            <span>
              Transfer funds from any Nigerian bank to the account details below. Once the payment is made, the amount will automatically be credited
              to your Gate Africa wallet, ready for use on the platform.
            </span>
            <div className="flex items-center gap-x-2 rounded-lg p-2 bg-yellow-100 mb-2">
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
      <div className="p-6 pb-10 flex flex-col gap-y-4 w-full mx-auto">
        <div className="flex flex-col flex-grow gap-y-5">
          <Iframe srcLink={routes.EXTERNAL.youtube} />
        </div>
        <div className="w-10/12 xl:w-7/12 mx-auto text-center">
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
      <div className="p-6 flex flex-col gap-y-4 w-full sm:w-10/12 md:w-9/12 mx-auto">
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
        <div className="p-6 flex flex-col gap-y-4 w-full sm:w-10/12 md:w-9/12 mx-auto">
          <div className="flex flex-col flex-grow gap-y-3 min-h-72">
            <section>
              <span className="block text-center text-lg">
                We sent a code to <b>08132*****157</b> to confirm your BVN
              </span>
              <div className="flex flex-col gap-y-2 mt-6">
                <div>
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
                <button type="button" className="ms-2 font-semibold underline text-main">
                  Click to resend
                </button>
              </span>
            </div>
            <div className="mt-6 text-center">
              <span className="text-base">
                I don{`'`}t have access to my BVN phone number
                <button
                  onClick={() => toggleModal("MANUAL_BVN_VERIFICATION", true)}
                  type="button"
                  className="ms-2 font-semibold underline text-main"
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
      </Modal>
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
        <div className="py-6 flex flex-col gap-y-4 w-full sm:w-10/12 md:w-9/12 mx-auto">
          <div className="flex flex-col flex-grow gap-y-3 min-h-72">
            <label htmlFor="bvn" className="flex items-center justify-between cursor-pointer border-b pb-2">
              <div className="flex items-center gap-2">
                <RadioInput name="referral" id="bvn" />
                <span className="text-lg font-medium leading-tight flex">Bank Verification Number (BVN)</span>
              </div>
            </label>
            <label htmlFor="nin" className="flex items-center justify-between cursor-pointer border-b last:border-b-0 pb-2">
              <div className="flex items-center gap-2">
                <RadioInput name="referral" id="nin" />
                <span className="text-lg font-medium leading-tight flex">National Identity Number (NIN)</span>
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
        <div className="p-6 pb-10 flex flex-col gap-y-8 w-full mx-auto">
          <div className="flex flex-col flex-grow gap-y-5 min-h-60">
            {preferences.map((preference) => (
              <label
                key={preference.id}
                htmlFor={preference.id}
                className="flex items-center justify-between cursor-pointer border-b border-gray-200 pb-3"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <RadioInput
                      name="preferences"
                      id={preference.id}
                      checked={selectedOption === preference.id}
                      onChange={() => handleOptionChange(preference.id)}
                    />
                    <span className="text-2xl font-medium leading-tight flex">{preference.label}</span>
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
      <div className="p-6 pb-10 flex flex-col gap-y-4 w-full sm:w-10/12 md:w-9/12 mx-auto">
        <div className="flex flex-col flex-grow gap-y-3 min-h-72">
          <header className="text-center">
            <h2 className="text-3xl font-semibold">Bank transfer details</h2>
          </header>
          <div className="flex flex-col gap-y-3">
            <span className="text-base">
              Transfer funds from any Nigerian bank to the account details below. Once the payment is made, the amount will automatically be credited
              to your Gate Africa wallet, ready for use on the platform.
            </span>
            <div className="flex items-center gap-x-2 rounded-lg p-2 bg-yellow-100 mb-2">
              <IconWrapper className="text-yellow-400">
                <WarningIcon />
              </IconWrapper>
              <span className="leading-tight text-base">NB: A fee of ¥1 will be charged</span>
            </div>
            <button
              type="button"
              className="flex justify-center mx-auto items-center font-medium bg-slate-200 rounded-lg rounded-no-tl py-2.5 px-5 gap-x-2"
              onClick={() => navigator.clipboard.writeText('0050924366')}
            >
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
        <div className="p-6 pb-10 flex flex-col gap-y-10 w-full mx-auto">
          <div className="w-full xl:w-9/12 mx-auto text-center">
            <span className="text-xl">
              You have to be verified to proceed with this transaction.
            </span>
          </div>

          <div className="flex flex-col flex-grow gap-y-5 min-h-60">
            {preferences.map((preference) => (
              <label
                key={preference.id}
                htmlFor={preference.id}
                className="flex items-center justify-between cursor-pointer border-b border-gray-200 pb-3"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <RadioInput
                      name="preferences"
                      id={preference.id}
                      checked={selectedOption === preference.id}
                      onChange={() => handleOptionChange(preference.id)}
                    />
                    <span className="text-2xl font-medium leading-tight flex">{preference.label}</span>
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
        <div className="py-6 flex flex-col gap-y-4 w-full sm:w-10/12 md:w-9/12 mx-auto">
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
                <div key={day} className="w-10 h-10 flex items-center justify-center text-sm text-gray-500">
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
        <div className="p-6 pb-10 flex flex-col gap-y-8 w-full mx-auto">
          <div className="flex flex-col flex-grow gap-y-3 mb-10">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className="w-full flex items-center justify-between p-4 py-2 text-left hover:bg-gray-50 transition-colors"
                onClick={() => console.log(`Selected: ${item}`)}
              >
                <span className="text-lg font-normal text-gray-800">{item}</span>
                <ChevronRight className="h-5 w-5 text-gray-400" />
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
      <div className="p-6 pb-10 flex flex-col gap-y-8 w-full mx-auto">
        <div className="flex flex-col gap-y-3 min-h-60">
          {preferences.map((pref) => (
            <label key={pref.id} htmlFor={pref.id} className="flex items-center justify-between pb-3 cursor-pointer border-b">
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
      <div className="p-6 pb-10 flex flex-col gap-y-8 w-full mx-auto">
        <div className="flex flex-col gap-y-3 min-h-60">
          {preferences.map((pref) => (
            <label key={pref.id} htmlFor={pref.id} className="flex items-center justify-between pb-3 cursor-pointer border-b">
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
      <div className="p-6 pb-10 flex flex-col gap-y-4 w-full mx-auto">
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
              <p className="font-bold text-lg">Step {currentStep} of {totalSteps}</p>
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

        <div className="flex items-center space-x-3 mt-1">
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
      <div className="p-6 pb-10 flex flex-col gap-y-4 w-full">
        <div className="flex flex-col space-y-3">
          <div className="bg-[#F8F9FD] p-4 rounded-lg">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-8">

              {/* Left Section */}
              <div className="flex-1">
                <h3 className="text-lg font-medium mt-1">Business Account</h3>

                <ul className="mt-2 space-y-2 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span>Daily Incoming Transactions: ₦10,000 - ₦5,000,000</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span>Daily Outgoing Transactions: ¥50 - ¥10,000</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span>Total Monthly Incoming Limit: ₦50,000,000</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span>Total Monthly Outgoing Limit: ¥100,000</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-[#F8F9FD] p-4 rounded-lg">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-8">

              {/* Left Section */}
              <div className="flex-1">
                <h3 className="text-lg font-medium mt-1">What you’ll need</h3>

                <ul className="mt-2 space-y-2 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span>You must be individual verified before attempting to switch to a business account</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span>Regulatory ID Card</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span>Your Selfie</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
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
      modalHeader={{ hasHeader: true, modalTitle: "Select means of identification", style: "", textStyle: "text-main" }}>
      <div className="py-6 flex flex-col gap-y-4 w-full sm:w-10/12 md:w-9/12 mx-auto">
        <div className="flex flex-col flex-grow gap-y-3 min-h-72">
          <label htmlFor="bvn" className="flex items-center justify-between cursor-pointer border-b last:border-b-0 pb-2">
            <div className="flex items-center gap-2">
              <RadioInput name="referral" id="bvn" />
              <span className="text-sm leading-tight flex">National ID Card</span>
            </div>
          </label>
          <label htmlFor="nin" className="flex items-center justify-between cursor-pointer border-b last:border-b-0 pb-2">
            <div className="flex items-center gap-2">
              <RadioInput name="referral" id="nin" />
              <span className="text-sm leading-tight flex">NIN</span>
            </div>
          </label>
          <label htmlFor="nin" className="flex items-center justify-between cursor-pointer border-b last:border-b-0 pb-2">
            <div className="flex items-center gap-2">
              <RadioInput name="referral" id="nin" />
              <span className="text-sm leading-tight flex">Voter’s card</span>
            </div>
          </label>
          <label htmlFor="nin" className="flex items-center justify-between cursor-pointer border-b last:border-b-0 pb-2">
            <div className="flex items-center gap-2">
              <RadioInput name="referral" id="nin" />
              <span className="text-sm leading-tight flex">International passport</span>
            </div>
          </label>
        </div>
        <div>
          <FooterButton text="Continue" className="!text-[1.05rem] uppercase" />
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
        style: "",
        textStyle: "text-main"
      }}
    >
      <div className="py-6 flex flex-col gap-y-4 w-full sm:w-10/12 md:w-9/12 mx-auto">
        <div className="flex flex-col flex-grow gap-y-3 min-h-72 mb-8">
          {states.map((state) => (
            <label
              key={state}
              htmlFor={state.toLowerCase()}
              className="flex items-center justify-between cursor-pointer border-b last:border-b-0 pb-2"
            >
              <div className="flex items-center gap-2">
                <RadioInput
                  name="referral"
                  id={state.toLowerCase()}
                  value={state}
                  checked={selectedState === state}
                  onChange={handleSelect}
                />
                <span className="text-sm leading-tight flex">{state}</span>
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
        style: "",
        textStyle: "text-main"
      }}
    >
      <div className="py-6 flex flex-col gap-y-4 w-full sm:w-10/12 md:w-9/12 mx-auto">
        <div className="flex flex-col flex-grow gap-y-3 min-h-72">
          {states.map((state) => (
            <label
              key={state}
              htmlFor={state.toLowerCase()}
              className="flex items-center justify-between cursor-pointer border-b last:border-b-0 pb-2"
            >
              <div className="flex items-center gap-2">
                <RadioInput
                  name="referral"
                  id={state.toLowerCase()}
                  value={state}
                  checked={selectedState === state}
                  onChange={handleSelect}
                />
                <span className="text-sm leading-tight flex">{state}</span>
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
        style: "",
        textStyle: "text-main",
      }}
    >
      <div className="py-6 flex flex-col gap-y-4 w-full sm:w-10/12 md:w-9/12 mx-auto">
        <div className="flex flex-col flex-grow gap-y-3 min-h-72">
          {/* Repeatable labels for each city */}
          {["Ibadan", "Ogbomoso", "Ado-awaye", "Eruwa", "Benin", "Fiditi", "Igbo-ora", "Iseyin", "Egbeda"].map(
            (city, index) => (
              <label key={index} className="flex items-center justify-between cursor-pointer border-b last:border-b-0 pb-2">
                <div className="flex items-center gap-2">
                  <RadioInput name="referral" id={city} />
                  <span className="text-sm leading-tight flex">{city}</span>
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
      <div className="p-6 pb-10 flex flex-col gap-y-4 w-full">
        <div className="flex flex-col space-y-3">
          <div className="bg-[#F8F9FD] p-4 rounded-lg">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-8">

              {/* Left Section */}
              <div className="flex-1">
                <h3 className="text-lg font-medium mt-1">Individual Account</h3>

                <ul className="mt-2 space-y-2 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span>Daily Incoming Transactions: ₦1,000 - ₦500,000</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span>Daily Outgoing Transactions: ¥20 - ¥3,000</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span>Total Monthly Incoming Limit: ₦2,000,000</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span>Total Monthly Outgoing Limit: ¥30,000</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-[#F8F9FD] p-4 rounded-lg">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-8">

              {/* Left Section */}
              <div className="flex-1">
                <h3 className="text-lg font-medium mt-1">What’s Required</h3>

                <ul className="mt-2 space-y-2 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span>Basic Identity Verification (BVN or NIN)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span>A valid ID (e.g. National ID, Voter’s Card, Driver’s License)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
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
      <div className="p-6 pb-10 flex flex-col gap-y-4 w-full">
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
      <div className="p-6 w-full max-w-xl mx-auto flex flex-col gap-y-6">
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
      <div className="p-6 w-full max-w-xl mx-auto">
        <form onSubmit={handleSubmit}>
          {/* Trustpilot */}
          <div className="mb-2">
            <div className="flex items-center">
              <h2 className="text-lg font-normal mr-1">Trustpilot Review</h2>
              <Link
                className="text-xs underline"
              >
                (Review Here)
              </Link>
            </div>

            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 cursor-pointer">
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
                    className="mt-2 w-auto h-32 rounded-md object-contain border"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Google Review */}
          <div className="mb-2">
            <div className="flex items-center">
              <h2 className="text-lg font-normal mr-1">Google My Business Review</h2>
              <Link
                className="text-xs underline"
              >
                (Review Here)
              </Link>
            </div>

            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 cursor-pointer">
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
                    className="mt-2 w-auto h-32 rounded-md object-contain border"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="mb-10">
            <p className="text-xs">*Kindly note that you only get rewarded if you are an active user.</p>
          </div>

          <div className="mt-10 px-6">
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
      <div className="p-6 w-full max-w-xl mx-auto">
        <div className="flex flex-col gap-2 items-center">
          <figure className="max-w-40">
            <img src={CompletedIcon} alt="" />
          </figure>
          <p className="text-2xl text-black text-center">Submitted.
            Verification Pending</p>
          <span className="block text-center mb-8">Your review proof has been successfully submitted. We’ll verify it shortly,
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
      <div className="p-6 w-full max-w-xl mx-auto flex flex-col gap-y-6">
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
      <div className="pb-6 flex flex-col gap-y-4 w-full sm:w-10/12 md:w-9/12 mx-auto">
        <div className="flex flex-col flex-grow gap-y-3 min-h-60">
          <section className="mt-4">
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-red-600">Delete Confirmation</h2>
              <p className="text-base mt-2 text-gray-700">
                Are you sure you want to delete this item? This action cannot be undone.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => toggleModal("DELETE_CONFIRMATION", false)}
                className="w-full sm:w-40 py-3 rounded-lg border bg-gray-100 border-gray-300 hover:bg-gray-300 text-gray-800 transition-all duration-200"
              >
                Cancel
              </button>
              <button
                onClick={action}
                className="w-full sm:w-40 py-3 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition-all duration-200"
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
      <div className="pb-6 flex flex-col gap-y-4 w-full sm:w-10/12 md:w-9/12 mx-auto">
        <div className="flex flex-col flex-grow gap-y-3 min-h-60">
          <section className="mt-4">
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-red-600">Close Account</h2>
              <p className="text-base mt-2 text-gray-700">
                Are you sure you want to permanently close your account? This action is irreversible and all your data will be lost.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => toggleModal("CLOSE_ACCOUNT", false)}
                className="w-full sm:w-40 py-3 rounded-lg border bg-gray-100 border-gray-300 hover:bg-gray-300 text-gray-800 transition-all duration-200"
              >
                Cancel
              </button>
              <button
                onClick={action}
                className="w-full sm:w-40 py-3 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition-all duration-200"
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
        <div className="flex flex-col gap-y-4 w-full sm:w-10/12 mx-auto mb-5">
          <div className="flex flex-col flex-grow gap-y-3 min-h-60">
            <section className="mt-4">
              <div className="">
                <p className="text-xs font-semibold text-[#013930]">1 Chinese Yuan equals</p>
                <h1 className="text-2xl mt-1 text-gray-700">
                  202.58 Nigerian Naira
                </h1>
              </div>
              <div className="mt-2">
                <Xchange />
              </div>
              <div className="flex items-center gap-x-3 mt-4">
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
        <div className="flex gap-2 justify-end">
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
      <div className="p-6 flex flex-col gap-y-4 w-full mx-auto">
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