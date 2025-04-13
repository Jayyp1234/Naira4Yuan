import { useState, useEffect } from "react";
import { Modal } from "../BaseComponents/Modal";
import { FormControl, RadioInput } from "../BaseComponents/FormInputs";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import { CHN, FRA, NGN } from "@/data";
import { FooterButton } from "../BaseComponents/FooterButton";
import { CopyIcon2, IconWrapper, WarningIcon, tickCircle } from "../../data/Icons";
import { BorderWrapper } from "../PageComponents/Dashboard/Items";
import Iframe from "../BaseComponents/Iframe";
import { routes } from "../../data/routes";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const inputModalStyle =
  "bg-slate-200 rounded-lg !min-w-14 !min-h-14 focus:!outline-main !outline-main !ring-main focus:!border-main focus:!ring-main !text-2xl";

export const BasicVerificationModal = ({ open, modalData, action }) => {
  const { toggleModal } = modalData;
  return (
    <Modal
      isOpen={open}
      onRequestClose={() => toggleModal("SELECT_BANK", false)}
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
          <FooterButton text="Proceed" className="!text-[1.05rem] uppercase" />
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
      onRequestClose={() => toggleModal("SELECT_ID", false)}
      modalHeader={{ hasHeader: true, modalTitle: "Select ID type", style: "", textStyle: "text-main" }}>
      <div className="py-6 flex flex-col gap-y-4 w-full sm:w-10/12 md:w-9/12 mx-auto">
        <div className="flex flex-col flex-grow gap-y-3 min-h-72">
          <label htmlFor="bvn" className="flex items-center justify-between cursor-pointer border-b last:border-b-0 pb-2">
            <div className="flex items-center gap-2">
              <RadioInput name="referral" id="bvn" />
              <span className="text-sm leading-tight flex">Bank Verification Number (BVN)</span>
            </div>
          </label>
          <label htmlFor="nin" className="flex items-center justify-between cursor-pointer border-b last:border-b-0 pb-2">
            <div className="flex items-center gap-2">
              <RadioInput name="referral" id="nin" />
              <span className="text-sm leading-tight flex">National Identity Number (NIN)</span>
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
                <InputOTP maxLength={4} className="flex flex-col">
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
              Didn't receive a code?
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
    // Add more currencies here as needed
  ];

  const [selectedBalance, setSelectedBalance] = useState("ngn");

  const handleContinue = () => {
    toggleModal("DASHBOARD_ACCOUNT_OWNERSHIP", false);
    if (action) {
      action(selectedBalance); // Make sure action is passed and correctly called
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

const FundWalletManualBVNVerificationModal = ({ open, modalData, action }) => {
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
      onRequestClose={() => toggleModal("SELECT_BANK", false)}
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
            onClick={() => {
              action?.();
              toggleModal("SELECT_BANK", false);
            }}
            className="!text-[1.05rem] uppercase"
          />
        </div>
      </div>
    </Modal>
  );
};

const BvnVerificationModal = ({ open, modalData, action }) => {
  const { toggleModal } = modalData;
  const [otp, setOtp] = useState("");
  const [showManualVerification, setShowManualVerification] = useState(false);

  return (
    <>
      <Modal
        isOpen={open && !showManualVerification}
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
              <span className="block text-center">
                We sent a code to <b>08132*****157</b> to confirm your BVN
              </span>
              <div className="flex flex-col gap-y-2 mt-6">
                <div>
                  <label htmlFor="code" className="text-[.94rem]">
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
              <span className="text-[.95rem]">
                Didn't receive a code?
                <button type="button" className="ms-2 font-semibold underline text-main">
                  Click to resend
                </button>
              </span>
            </div>
            <div className="mt-6 text-center">
              <span className="text-[.95rem]">
                I don't have access to my BVN phone number
                <button
                  type="button"
                  className="ms-2 font-semibold underline text-main"
                  onClick={() => setShowManualVerification(true)}
                >
                  Use manual method
                </button>
              </span>
            </div>
          </div>
          <div>
            <FooterButton
              text="Continue"
              onClick={() => {
                action?.();
                toggleModal("AUTH_BVN_VERIFICATION", false);
              }}
              className="!text-[1.05rem] uppercase"
            />
          </div>
        </div>
      </Modal>

      <FundWalletManualBVNVerificationModal
        open={showManualVerification}
        modalData={{
          toggleModal: () => setShowManualVerification(false),
          parentToggleModal: () => toggleModal("AUTH_BVN_VERIFICATION", false)
        }}
        action={action}
      />
    </>
  );
};

const SimpleVerificationIdModal = ({ open, modalData, action }) => {
  const { toggleModal } = modalData;
  const [showBvnVerification, setShowBvnVerification] = useState(false);

  return (
    <>
      <Modal
        isOpen={open && !showBvnVerification}
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
            <FooterButton
              text="Proceed"
              onClick={() => setShowBvnVerification(true)}
              className="!text-[1.05rem] uppercase"
            />
          </div>
        </div>
      </Modal>

      <BvnVerificationModal
        open={showBvnVerification}
        modalData={{
          toggleModal: () => setShowBvnVerification(false),
          parentToggleModal: () => toggleModal("SELECT_BANK", false)
        }}
        action={action}
      />
    </>
  );
};

const SimpleVerificationModal = ({ open, modalData, action }) => {
  const { toggleModal } = modalData;
  const [selectedOption, setSelectedOption] = useState("basic-verification");
  const [showIdVerification, setShowIdVerification] = useState(false);

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
        isOpen={open && !showIdVerification}
        onRequestClose={() => toggleModal("SELECT_BANK", false)}
        modalHeader={{
          hasHeader: true,
          modalTitle: "Simple Verification",
          style: "border-b",
          textStyle: ""
        }}
      >
        <div className="p-6 pb-10 flex flex-col gap-y-8 w-full mx-auto">
          <div className="flex flex-col flex-grow gap-y-4 min-h-60">
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
                    <span className="text-sm leading-tight flex">{preference.label}</span>
                  </div>
                </div>
              </label>
            ))}
          </div>
          <div className="mt-2">
            <FooterButton
              text="Proceed"
              onClick={() => setShowIdVerification(true)}
              className="!text-[1.05rem] animate-active"
            />
          </div>
        </div>
      </Modal>

      <SimpleVerificationIdModal
        open={showIdVerification}
        modalData={{
          toggleModal: () => setShowIdVerification(false),
          parentToggleModal: () => toggleModal("SELECT_BANK", false)
        }}
        action={action}
      />
    </>
  );
};

const FundWalletBankTransferModal = ({ open, modalData, action }) => {
  const { toggleModal } = modalData;

  const handleTransfer = () => {
    // Execute any provided action
    if (action) action();
    // Close the modal
    toggleModal("DASHBOARD_BANK_TRANSFER", false);
  };

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
            <span className="text-sm">
              Transfer funds from any Nigerian bank to the account details below. Once the payment is made, the amount will automatically be credited
              to your Gate Africa wallet, ready for use on the platform.
            </span>
            <div className="flex items-center gap-x-2 rounded-lg p-2 bg-yellow-100 mb-2">
              <IconWrapper className="text-yellow-400">
                <WarningIcon />
              </IconWrapper>
              <span className="leading-tight text-[.95rem]">NB: A fee of ¥1 will be charged</span>
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
            onClick={handleTransfer}
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
  const [showSimpleVerification, setShowSimpleVerification] = useState(false);
  const [showBankTransfer, setShowBankTransfer] = useState(false);

  const preferences = [
    { id: "basic-verification", label: "Basic Verification" },
    { id: "individual-account-verification", label: "Individual Account Verification" },
  ];

  const handleOptionChange = (id) => {
    setSelectedOption(id);
  };

  const handleProceed = () => {
    if (selectedOption === "basic-verification") {
      setShowSimpleVerification(true);
    } else {
      setShowBankTransfer(true);
    }
  };

  return (
    <>
      <Modal
        isOpen={open && !showSimpleVerification && !showBankTransfer}
        onRequestClose={() => toggleModal("SELECT_BANK", false)}
        modalHeader={{
          hasHeader: true,
          modalTitle: "KYC Verification",
          style: "border-b",
          textStyle: ""
        }}
      >
        <div className="p-6 pb-10 flex flex-col gap-y-8 w-full mx-auto">
          <div className="w-10/12 xl:w-7/12 mx-auto text-center">
            <span className="text-[.95rem]">
              You have to be verified to proceed with this transaction.
            </span>
          </div>

          <div className="flex flex-col flex-grow gap-y-3 min-h-60">
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
                    <span className="text-sm leading-tight flex">{preference.label}</span>
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
              onClick={handleProceed}
              className="!text-[1.05rem] animate-active"
            />
          </div>
        </div>
      </Modal>

      <SimpleVerificationModal
        open={showSimpleVerification}
        modalData={{
          toggleModal: () => setShowSimpleVerification(false),
          parentToggleModal: () => toggleModal("SELECT_BANK", false)
        }}
        action={() => {
          setShowSimpleVerification(false);
          setShowBankTransfer(true);
        }}
      />

      <FundWalletBankTransferModal
        open={showBankTransfer}
        modalData={{
          toggleModal: (type, isOpen) => {
            setShowBankTransfer(isOpen);
            if (!isOpen) {
              toggleModal("SELECT_BANK", false);
            }
          }
        }}
        action={action}
      />
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




