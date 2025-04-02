import React from "react";
import { Link, useNavigate } from "react-router";
import { DefaultAvatarImage, LogoFullDarkVariant } from "@/data";
import { ChevronRightIcon, IconWrapper } from "@/data/Icons";
import { routes } from "../../data/routes";
import { XIcon } from "lucide-react"; // Assuming you're using lucide icons

export const DashboardHeader3 = () => {
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
    <header className="flex items-center justify-between px-4 md:px-8 pt-4 pb-3 w-full">
      <div className="flex items-center gap-8 w-full">
        <img src={LogoFullDarkVariant} alt="Naira4Yuan" className="w-28 sm:w-32 object-contain" />

        <nav className="hidden sm:flex items-center flex-1">
          <div className="flex items-center w-full relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-[#F7F9FD] rounded-full z-0"></div>
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative z-10 flex flex-col items-center justify-center flex-1 text-center"
              >
                <div
                  className={`w-4 h-4 rounded-full mb-1 ${
                    index === currentStepIndex ? "bg-[#0B2C25]" : "bg-gray-300"
                  }`}
                ></div>
                <span
                  className={`text-sm font-medium ${
                    index === currentStepIndex ? "text-black font-semibold" : "text-gray-500"
                  }`}
                >
                  {step}
                </span>
              </div>
            ))}
          </div>
        </nav>
      </div>

      <div className="flex items-center gap-3">
        <img
          src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126"
          alt="User"
          className="w-10 h-10 rounded-full object-cover"
        />
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

