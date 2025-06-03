
import React, { useState } from "react";
import { BankIcon } from "@/data/Icons";
import { IconWrapper } from "@/data/Icons";
import { NigeriaIcon, ChinaIcon } from "@/data";
import { FundWalletVerificationModal } from "/src/components/LayoutComponents/AllModals";
import { BasicVerificationModal, BvnVerificationModal, FundWalletBankTransferModal, FundWalletManualBVNVerificationModal, IndividualVerificationModal, IndividualVerificationTypeModal, IndividualVerifyModal, SelectIdTypeModal, SimpleVerificationModal } from "@/components/LayoutComponents/AllModals";
import { FundWalletSkeleton } from "@/components/Skeleton/Skeleton";

// export const FundWallet = () => {
//   const [amount, setAmount] = useState("10000");
//   const [showVerification, setShowVerification] = useState(false);
//   const [currency, setCurrency] = useState("NGN");

//   const currencyOptions = [
//     { value: "NGN", label: "NGN", icon: NigeriaIcon },
//     { value: "CNY", label: "CNY", icon: ChinaIcon },
//   ];

//   return (
//     <>
//       <div className="w-full max-w-lg px-4 py-12 mx-auto sm:px-6 lg:px-8">
//         <h1 className="mb-8 text-2xl font-semibold text-center">Fund Wallet</h1>

//         {/* Amount Input */}
//         <div className="mb-6">
//           <label htmlFor="amount" className="block mb-2 font-medium text-gray-700">
//             Amount to Add
//           </label>
//           <div className="flex items-center overflow-hidden bg-white border border-gray-300 rounded-lg">
//             <input
//               id="amount"
//               type="text"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//               className="flex-1 w-full p-3 text-sm outline-none"
//             />
//             <div className="relative w-24">
//               <select
//                 value={currency}
//                 onChange={(e) => setCurrency(e.target.value)}
//                 className="w-full h-full py-3 text-sm font-medium text-gray-600 bg-white outline-none appearance-none cursor-pointer pl-9"
//               >
//                 {currencyOptions.map((option) => (
//                   <option key={option.value} value={option.value}>
//                     {option.label}
//                   </option>
//                 ))}
//               </select>
//               <div className="absolute transform -translate-y-1/2 pointer-events-none right-3 top-1/2">
//                 <svg
//                   className="w-4 h-4 text-gray-500"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                 </svg>
//               </div>
//               <div className="absolute transform -translate-y-1/2 left-3 top-1/2">
//                 <figure className="w-5 h-5">
//                   <img
//                     src={currencyOptions.find((c) => c.value === currency)?.icon}
//                     alt={currency}
//                     className="img-fluid"
//                   />
//                 </figure>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Payment Method */}
//         <div className="mb-6">
//           <label className="block mb-2 font-medium text-gray-700">Payment Method</label>
//           <div className="flex items-center gap-3 bg-[#F9FAFC] p-4 rounded-xl border border-gray-200">
//             <IconWrapper>
//               <BankIcon className="w-6 h-6 text-gray-600" />
//             </IconWrapper>
//             <span className="font-medium text-gray-700">Bank Transfer</span>
//           </div>
//         </div>

//         {/* Continue Button */}
//         <button
//           type="button"
//           onClick={() => setShowVerification(true)}
//           className="w-full py-3 text-center rounded-xl font-medium text-black bg-[#F1C34E] hover:bg-[#e3b938] transition"
//         >
//           Continue
//         </button>
//       </div>

//       {/* Modal */}
//       <FundWalletVerificationModal
//         open={showVerification}
//         modalData={{
//           toggleModal: (type, isOpen) => setShowVerification(isOpen),
//         }}
//         action={() => {
//           console.log("Transfer completed");
//           setShowVerification(false);
//         }}
//       />
//     </>
//   );
// };

export const FundWallet = () => {
  const [amount, setAmount] = useState("10000");
  const [isShowVerification, setIsShowVerification] = useState(false);
  const [isShowVerificationType, setIsShowVerificationType] = useState(false);
  const [isShowKycVerification, setIsShowKycVerification] = useState(false);
  const [isShowBvnVerification, setIsShowBvnVerification] = useState(false);
  const [isShowBankTransferModal, setIsShowBankTransferModal] = useState(false);
  const [isShowManualBvnModal, setIsShowManualBvnModal] = useState(false);

  const [currency, setCurrency] = useState("NGN");

  const currencyOptions = [
    { value: "NGN", label: "NGN", icon: NigeriaIcon },
    { value: "CNY", label: "CNY", icon: ChinaIcon },
  ];

  const toggleModal = (type, value) => {
    switch (type) {
      case "INDIVIDUAL_VERIFICATION":
        setIsShowVerification(value);
        break;
      case "INDIVIDUAL_TYPE_VERIFICATION":
        setIsShowVerificationType(value);
        break;
      case "KYC_VERIFICATION":
        setIsShowKycVerification(value);
        break;
      case "AUTH_BVN_VERIFICATION":
        setIsShowBvnVerification(value);
        break;
      case "DASHBOARD_BANK_TRANSFER":
        setIsShowBankTransferModal(value);
        break;
      case "MANUAL_BVN_VERIFICATION":
        setIsShowManualBvnModal(value);
        break;
      default:
        break;
    }
  };

  const [isDashboardLoading, setIsDashboardLoading] = useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsDashboardLoading(false);
    }, 2000); // 2000ms = 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isDashboardLoading) {
    return <FundWalletSkeleton />;
  }

  return (
    <>
      <div className="max-w-md px-4 py-12 mx-auto">
        <h1 className="mb-8 text-2xl font-semibold text-center">Fund Wallet</h1>

        {/* Amount Input */}
        <div className="mb-6">
          <label htmlFor="amount" className="block mb-2 font-medium text-gray-700">
            Amount to Add
          </label>
          <div className="flex items-center overflow-hidden bg-white border border-gray-300 rounded-lg">
            <input
              id="amount"
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="flex-1 w-full p-3 text-2xl font-bold outline-none"
            />
            <div className="relative w-24">
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full h-full py-3 text-sm font-medium text-gray-600 bg-white outline-none appearance-none cursor-pointer pl-9"
              >
                {currencyOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <div className="absolute transform -translate-y-1/2 pointer-events-none right-3 top-1/2">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="absolute transform -translate-y-1/2 left-3 top-1/2">
                <figure className="w-5 h-5">
                  <img
                    src={currencyOptions.find((c) => c.value === currency)?.icon}
                    alt={currency}
                    className="img-fluid"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="mb-6">
          <label className="block mb-2 font-medium text-gray-700">Payment Method</label>
          <div className="flex items-center gap-3 bg-[#F9FAFC] p-4 rounded-xl border border-gray-200">
            <IconWrapper>
              <BankIcon className="w-6 h-6 text-gray-600" />
            </IconWrapper>
            <span className="font-medium text-gray-700">Bank Transfer</span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => toggleModal("INDIVIDUAL_VERIFICATION", true)}
          className="w-full py-3 text-center rounded-xl font-medium text-black bg-[#F1C34E] hover:bg-[#e3b938] transition"
        >
          Continue
        </button>
      </div>

      <IndividualVerificationModal
        open={isShowVerification}
        modalData={{ toggleModal }}
        action={() => {
          toggleModal("INDIVIDUAL_VERIFICATION", false);
          toggleModal("INDIVIDUAL_TYPE_VERIFICATION", true);
        }}
      />

      <IndividualVerificationTypeModal
        open={isShowVerificationType}
        modalData={{ toggleModal }}
        action={() => {
          toggleModal("INDIVIDUAL_TYPE_VERIFICATION", false);
          toggleModal("KYC_VERIFICATION", true);
        }}
      />

      <IndividualVerifyModal
        open={isShowKycVerification}
        modalData={{ toggleModal }}
        action={() => {
          toggleModal("KYC_VERIFICATION", false);
          toggleModal("AUTH_BVN_VERIFICATION", true);
        }}
      />

      <BvnVerificationModal
        open={isShowBvnVerification}
        modalData={{ toggleModal }}
        action={() => {
          toggleModal("AUTH_BVN_VERIFICATION", false);
          toggleModal("DASHBOARD_BANK_TRANSFER", true);
        }}
      />

      <FundWalletManualBVNVerificationModal
        open={isShowManualBvnModal}
        modalData={{ toggleModal }}
        action={() => {
          toggleModal("MANUAL_BVN_VERIFICATION", false);
          toggleModal("DASHBOARD_BANK_TRANSFER", true);
        }}
      />

      <FundWalletBankTransferModal
        open={isShowBankTransferModal}
        modalData={{ toggleModal }}
        action={() => {
          toggleModal("DASHBOARD_BANK_TRANSFER", false);
        }}
      />
    </>
  );
};