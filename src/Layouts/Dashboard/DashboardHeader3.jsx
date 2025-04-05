
// import React from "react";
// import { Link, useNavigate } from "react-router";
// import { DefaultAvatarImage, LogoFullDarkVariant } from "@/data";
// import { ChevronRightIcon, IconWrapper } from "@/data/Icons";

// // Dummy routes object (Replace this with actual route imports)
// const routes = {
//   DASHBOARD: {
//     account: {
//       index: {
//         rel: "/dashboard/account",
//       },
//     },
//   },
// };

// // Steps component for progress navigation
// const StepProgress = ({ steps, currentStepIndex }) => {
//   return (
//     <div className="relative flex items-center w-full">
//       {/* Background Progress Line */}
//       <div className="absolute left-1/2 -translate-x-1/2 top-2 -translate-y-1/2 w-3/4 h-1 bg-[#F7F9FD] rounded-full z-0"></div>

//       {/* Steps */}
//       {steps.map((step, index) => {
//         const isActive = index === currentStepIndex;
//         return (
//           <div key={index} className="relative z-10 flex flex-col items-center flex-1 text-center">
//             {/* Step Indicator */}
//             <div
//               className={`w-4 h-4 rounded-full mb-1 transition-all duration-300 ${isActive ? "bg-[#0B2C25] scale-110 shadow-md" : "bg-gray-300"
//                 }`}
//               aria-label={`Step ${index + 1}: ${step}`}
//             ></div>

//             {/* Step Label */}
//             <span className={`text-sm font-medium transition-all duration-300 ${isActive ? "text-black font-semibold" : "text-gray-500"}`}>
//               {step}
//             </span>
//           </div>
//         );
//       })}
//     </div>
//   );
// };



// export const DashboardHeader3 = ({ user = { name: "ADEREMI IBRAHIM TUNDE", avatar: DefaultAvatarImage } }) => {
//   const navigate = useNavigate();
//   const steps = ["Amount", "Review", "Payment"];
//   const currentStepIndex = 0; // This can be dynamically updated

//   return (
//     <header className="px-5 sm:px-0 w-full sm:w-11/12 lg:w-10/12 xl:pr-10 xl:pl-10 mx-auto flex items-center justify-between pt-6 pb-3">
//       {/* Left Section: Logo & Steps */}
//       <div className="flex items-center gap-8 w-full">
//         {/* Logo */}
//         <img src={LogoFullDarkVariant} alt="Naira4Yuan" className="w-28 sm:w-32 object-contain" />

//         {/* Step Navigation (Hidden on Mobile) */}
//         <nav className="hidden sm:flex items-center flex-1">
//           <StepProgress steps={steps} currentStepIndex={currentStepIndex} />
//         </nav>
//       </div>

//       {/* Right Section: Profile */}
//       <div>
//         <button
//           type="button"
//           onClick={() => navigate(routes.DASHBOARD.account.index.rel)}
//           className="flex items-center gap-x-2 whitespace-nowrap"
//         >
//           {/* User Avatar */}
//           <figure className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
//             <img src={user.avatar || DefaultAvatarImage} alt="User Avatar" className="w-full h-full object-cover" />
//           </figure>

//           {/* User Name & Icon */}
//           <div className="flex items-center gap-x-1.5 flex-nowrap">
//             <span className="hidden sm:block uppercase font-semibold text-sm">{user.name}</span>
//             <IconWrapper>
//               <ChevronRightIcon />
//             </IconWrapper>
//           </div>
//         </button>
//       </div>
//     </header>
//   );
// };

import React from "react";
import { useNavigate } from "react-router";
import { DefaultAvatarImage, LogoFullDarkVariant } from "@/data";
import { ChevronRightIcon, IconWrapper } from "@/data/Icons";

// Dummy routes object (Replace this with actual route imports)
const routes = {
  DASHBOARD: {
    account: {
      index: {
        rel: "/dashboard/account",
      },
    },
  },
};

export const DashboardHeader3 = ({
  user = { name: "ADEREMI IBRAHIM TUNDE", avatar: DefaultAvatarImage },
}) => {
  const navigate = useNavigate();
  const steps = ["Amount", "Review", "Payment"];
  const currentStepIndex = 0; // You can update this dynamically
  const progressWidth = `${(currentStepIndex / (steps.length - 1)) * 100}%`;

  return (
    <header className="px-5 sm:px-0 w-full sm:w-11/12 lg:w-10/12 xl:pr-10 xl:pl-10 mx-auto flex items-center justify-between pt-6 pb-3">
      {/* Left Section: Logo & Steps */}
      <div className="flex items-center gap-8 w-full">
        {/* Logo */}
        <img
          src={LogoFullDarkVariant}
          alt="Naira4Yuan"
          className="w-28 sm:w-32 object-contain"
        />

        {/* Step Navigation (Hidden on Mobile) */}
        <nav className="hidden sm:flex items-center flex-1">
          <div className="flex items-center justify-center w-full relative">
            <div className="w-4/5">
              {/* Progress bar */}
              <div className="px-6">
                <div className="w-full mb-1 bg-[#F8F9FD] rounded-full h-[8px]">
                  <div
                    className="bg-[#013930] h-full rounded-full relative transition-all duration-300 ease-in-out"
                    style={{ width: progressWidth }}
                  >
                    <span
                      className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-[#013930] rounded-full border-2 border-[#013930] shadow"
                    ></span>
                  </div>
                </div>
              </div>

              {/* Steps container */}
              <div className="flex justify-between w-full">
                {steps.map((step, index) => (
                  <div key={index}>
                    <span
                      className={`text-sm font-medium ${index === currentStepIndex
                        ? "text-black font-semibold"
                        : "text-gray-500"
                        }`}
                    >
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Right Section: Profile */}
      <div>
        <button
          type="button"
          onClick={() => navigate(routes.DASHBOARD.account.index.rel)}
          className="flex items-center gap-x-2 whitespace-nowrap"
        >
          {/* User Avatar */}
          <figure className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
            <img
              src={user.avatar || DefaultAvatarImage}
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </figure>

          {/* User Name & Icon */}
          <div className="flex items-center gap-x-1.5 flex-nowrap">
            <span className="hidden sm:block uppercase font-semibold text-sm">
              {user.name}
            </span>
            <IconWrapper>
              <ChevronRightIcon />
            </IconWrapper>
          </div>
        </button>
      </div>
    </header>
  );
};
