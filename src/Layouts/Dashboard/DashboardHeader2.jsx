// import React from "react";
import { Link, useNavigate } from "react-router";
import { DefaultAvatarImage, LogoFullDarkVariant } from "@/data";
import { ChevronRightIcon, IconWrapper } from "@/data/Icons";
import { routes } from "../../data/routes";
import { XIcon } from "lucide-react"; // Assuming you're using lucide icons

export const DashboardHeader4 = () => {
  const navigate = useNavigate();
  return (
    <header className="px-5 sm:px-0 w-full sm:w-11/12 lg:w-10/12 xl:pr-10 xl:pl-10 mx-auto flex items-center justify-between pt-4 pb-3">
      <Link to={""}>
        <figure className="flex items-center justify-center max-w-32">
          <img src={LogoFullDarkVariant} alt="" />
        </figure>
      </Link>
      <aside>
        <button type="button" onClick={() => navigate(routes.DASHBOARD.account.index.rel)} className="flex items-center gap-x-2">
          <figure className="flex items-center justify-center overflow-hidden rounded-full w-10 h-10">
            <img src={DefaultAvatarImage} alt="" />
          </figure>
          <div className="flex items-center gap-x-1.5">
            <span className="hidden sm:inline-flex uppercase font-semibold text-sm">ADEREMI IBRAHIM TUNDE</span>
            <IconWrapper>
              <ChevronRightIcon />
            </IconWrapper>
          </div>
        </button>
      </aside>
    </header>
  );
};

const steps = ["Amount", "Verification", "Payment"];
const currentStepIndex = 0; // You can update this dynamically based on props or route

export const DashboardHeader2 = () => {
  const navigate = useNavigate();

  return (
    <header className="px-5 sm:px-0 w-full sm:w-11/12 lg:w-10/12 xl:pr-10 xl:pl-10 mx-auto flex items-center justify-between pt-6 pb-3">
      <div className="flex items-center gap-8 w-full">
        <img src={LogoFullDarkVariant} alt="Naira4Yuan" className="w-28 sm:w-32 object-contain" />

        <nav className="hidden sm:flex items-center flex-1">
          <div className="flex items-center justify-center w-full relative">
            <div className="w-4/5">
              {/* Progress bar */}
              <div className="px-6">
                <div className="w-full mb-1 bg-[#F8F9FD] rounded-full h-[8px]">
                  <div
                    className="bg-[#013930] h-full rounded-full relative"
                    style={{ width: `0%` }}
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
                  <div
                    key={index}
                    className=""
                  >
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

      <div className="flex items-center gap-3">
        <figure className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
          <img src={DefaultAvatarImage} alt="User Avatar" className="w-full h-full object-cover" />
        </figure>
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="p-2 text-black hover:bg-gray-100 rounded-full"
        >
          <XIcon className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
};



