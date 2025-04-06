import React from "react";
import { useNavigate } from "react-router";
import { DefaultAvatarImage, LogoFullDarkVariant } from "@/data";
import { ChevronRightIcon, IconWrapper } from "@/data/Icons";

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
  steps = ["Amount", "Review", "Payment"],
  currentStepIndex = 0,
}) => {
  const navigate = useNavigate();
  const progressWidth =
    steps.length > 1
      ? `${(currentStepIndex / (steps.length - 1)) * 100}%`
      : "0%";

  return (
    <header className="px-5 sm:px-0 w-full sm:w-11/12 lg:w-10/12 xl:pr-10 xl:pl-10 mx-auto flex items-center justify-between pt-8 pb-3">
      {/* Left Section */}
      <div className="flex items-center gap-8 w-full">
        <img
          src={LogoFullDarkVariant}
          alt="Naira4Yuan"
          className="w-28 sm:w-32 object-contain"
        />

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
                    <span className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-[#013930] rounded-full border-2 border-[#013930] shadow"></span>
                  </div>
                </div>
              </div>

              {/* Steps */}
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

      {/* Right Section */}
      <div>
        <button
          type="button"
          onClick={() => navigate(routes.DASHBOARD.account.index.rel)}
          className="flex items-center gap-x-2 whitespace-nowrap"
        >
          <figure className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
            <img
              src={user.avatar || DefaultAvatarImage}
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </figure>

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
