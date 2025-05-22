
import React, { useState } from "react";
import { BankIcon } from "@/data/Icons";
import { IconWrapper } from "@/data/Icons";
import { NigeriaIcon, ChinaIcon } from "@/data";
import { FundWalletVerificationModal } from "/src/components/LayoutComponents/AllModals";
import { BasicVerificationModal, BvnVerificationModal, FundWalletBankTransferModal, FundWalletManualBVNVerificationModal, SelectIdTypeModal, SimpleVerificationModal } from "@/components/LayoutComponents/AllModals";
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
//       <div className="max-w-lg w-full mx-auto px-4 py-12 sm:px-6 lg:px-8">
//         <h1 className="text-center text-2xl font-semibold mb-8">Fund Wallet</h1>

//         {/* Amount Input */}
//         <div className="mb-6">
//           <label htmlFor="amount" className="block mb-2 font-medium text-gray-700">
//             Amount to Add
//           </label>
//           <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white">
//             <input
//               id="amount"
//               type="text"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//               className="flex-1 p-3 outline-none text-sm w-full"
//             />
//             <div className="relative w-24">
//               <select
//                 value={currency}
//                 onChange={(e) => setCurrency(e.target.value)}
//                 className="appearance-none w-full h-full pl-9 py-3 text-sm font-medium text-gray-600 bg-white outline-none cursor-pointer"
//               >
//                 {currencyOptions.map((option) => (
//                   <option key={option.value} value={option.value}>
//                     {option.label}
//                   </option>
//                 ))}
//               </select>
//               <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
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
//               <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
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
  const [isBasicVerification, setIsBasicVerification] = useState(false);
  const [isIdTypeVerification, setIsIdTypeVerification] = useState(false);
  const [isIdVerification, setIsIdVerification] = useState(false);
  const [isBvnVerification, setIsBvnVerification] = useState(false);
  const [isManualVerification, setIsManualVerification] = useState(false);
  const [isAccVerification, setIsAccVerification] = useState(false);
  const [currency, setCurrency] = useState("NGN");

  const currencyOptions = [
    { value: "NGN", label: "NGN", icon: NigeriaIcon },
    { value: "CNY", label: "CNY", icon: ChinaIcon },
  ];

  const toggleModal = (type, value) => {
    switch (type) {
      case "KYC_VERIFICATION":
        setIsShowVerification(value);
        break;
      case "BASIC_VERIFICATION":
        setIsBasicVerification(value);
        break;
      case "SELECT_ID_TYPE":
        setIsBasicVerification(value);
        break;
      case "SELECT_ID":
        setIsIdVerification(value);
        break;
      case "AUTH_BVN_VERIFICATION":
        setIsBvnVerification(value);
        break;
      case "MANUAL_BVN_VERIFICATION":
        setIsManualVerification(value);
        break;
      case "DASHBOARD_BANK_TRANSFER":
        setIsAccVerification(value);
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
      <div className="max-w-md mx-auto px-4 py-12">
        <h1 className="text-center text-2xl font-semibold mb-8">Fund Wallet</h1>

        {/* Amount Input */}
        <div className="mb-6">
          <label htmlFor="amount" className="block mb-2 font-medium text-gray-700">
            Amount to Add
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white">
            <input
              id="amount"
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="flex-1 p-3 outline-none text-2xl font-bold w-full"
            />
            <div className="relative w-24">
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="appearance-none w-full h-full pl-9 py-3 text-sm font-medium text-gray-600 bg-white outline-none cursor-pointer"
              >
                {currencyOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
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
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
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
          onClick={() => toggleModal("KYC_VERIFICATION", true)}
          className="w-full py-3 text-center rounded-xl font-medium text-black bg-[#F1C34E] hover:bg-[#e3b938] transition"
        >
          Continue
        </button>
      </div>

      <FundWalletVerificationModal
        open={isShowVerification}
        modalData={{ toggleModal }}
        action={() => {
          setIsShowVerification(false);
          setIsBasicVerification(true);
        }}
      />
      <SimpleVerificationModal
        open={isBasicVerification}
        modalData={{ toggleModal }}
        action={() => {
          setIsBasicVerification(false);
          setIsIdTypeVerification(true);
        }}
      />
      <SelectIdTypeModal
        open={isIdTypeVerification}
        modalData={{ toggleModal }}
        action={() => {
          setIsIdTypeVerification(false);
          setIsIdVerification(true);
        }}
      />
      <BasicVerificationModal
        open={isIdVerification}
        modalData={{ toggleModal }}
        action={() => {
          setIsIdVerification(false);
          setIsBvnVerification(true);
        }}
      />
      <BvnVerificationModal
        open={isBvnVerification}
        modalData={{ toggleModal }}
        action={() => {
          setIsBvnVerification(false);
          setIsAccVerification(true);
        }}
      />
      <FundWalletManualBVNVerificationModal
        open={isManualVerification}
        modalData={{ toggleModal }}
        action={() => {
          setIsBvnVerification(false);
          setIsManualVerification(false);
          setIsAccVerification(true);
        }}
      />
      <FundWalletBankTransferModal
        open={isAccVerification}
        modalData={{ toggleModal }}
        action={() => {
          setIsAccVerification(false);
        }}
      />
    </>
  );
};