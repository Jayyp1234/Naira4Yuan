import React, { useState } from "react";
import { Bell } from "lucide-react";
import { SwitchBusinessAccountModal } from "@/components/LayoutComponents/AllModals";
import { useNavigate } from "react-router";
import { ChevronLeftIcon } from "@/data/Icons";
import { LimitsSkeleton } from "@/components/Skeleton/Skeleton";

export const Limit = () => {
  const navigate = useNavigate();

  const [isSwitchModalOpen, setIsSwitchModalOpen] = useState(false);

  const toggleModal = (type, value) => {
    if (type === "SWITCH_BUSINESS_ACCOUNT") {
      setIsSwitchModalOpen(value);
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
    return <LimitsSkeleton />;
  }


  return (
    <div className="max-w-3xl mb-14">
      <nav className="flex items-center flex-1 mb-3">
        <button
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
          onClick={() => navigate(-1)}
        >
          <ChevronLeftIcon className="w-4 h-4" />
          <span>Back</span>
        </button>
      </nav>
      <header>
        <h2 className="text-2xl font-bold">Limits</h2>
      </header>
      <div className="space-y-10">
        <div className="flex flex-col mt-8 space-y-3">
          {/* <div className="bg-[#F8F9FD] p-4 rounded-lg">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:gap-8">
              <div className="flex-1">
                <h2 className="text-lg font-medium">Your level</h2>
                <h3 className="mt-1 text-lg font-medium">Tier 1: Basic Account</h3>

                <ul className="mt-2 space-y-2 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="mr-2 text-black">•</span>
                    <span>Daily Incoming Transactions: ¥1,000 - ¥10,000</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-black">•</span>
                    <span>Daily Outgoing Transactions: ¥1 - ¥500</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-black">•</span>
                    <span>Total Monthly Incoming Limit: ¥100,000</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-black">•</span>
                    <span>Total Monthly Outgoing Limit: ¥5,000</span>
                  </li>
                </ul>
              </div>

              <button className="bg-[#013930] text-white text-sm px-8 py-3 rounded-lg rounded-no-tl self-start">
                Verified
              </button>
            </div>
          </div> */}
          <div className="bg-[#F8F9FD] p-4 rounded-lg">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:gap-8">

              {/* Left Section */}
              <div className="flex-1">
                <h3 className="mt-1 text-xl font-medium">Individual Account</h3>

                <ul className="mt-2 space-y-2 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="mr-2 text-black">•</span>
                    <span>Daily Incoming Transactions: ¥1,000 - ¥10,000</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-black">•</span>
                    <span>Daily Outgoing Transactions: ¥1 - ¥500</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-black">•</span>
                    <span>Total Monthly Incoming Limit: ¥100,000</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-black">•</span>
                    <span>Total Monthly Outgoing Limit: ¥5,000</span>
                  </li>
                </ul>
              </div>

              {/* Right Section */}
              <button onClick={() => navigate("/dashboard/account/limit/individual")} className="bg-[#1C5A31] text-[#fff] text-sm px-8 py-3 rounded-lg rounded-no-tl self-start">
                Verify Now
              </button>
            </div>
          </div>
        </div>

        <div className="relative">
          <button onClick={() => toggleModal("SWITCH_BUSINESS_ACCOUNT", true)} className="bg-[#F8F9FD] w-full border border-dashed border-gray-300 rounded-xl rounded-no-tl p-2 py-4 flex items-center gap-x-2">
            <div className="p-3 bg-white rounded-full">
              <Bell className="w-4 h-4 text-gray-800" />
            </div>
            <p className="text-lg font-normal text-[#122231] text-start">
              Want more limit? Open a business account
            </p>
          </button>
          <div className="w-20 sm:w-32 h-2 bg-[#013930] rounded-b-2xl absolute right-4"></div>
        </div>
      </div>

      <SwitchBusinessAccountModal
        open={isSwitchModalOpen}
        modalData={{ toggleModal, isBusinessVerified: true }} // or false depending on state
        action={() => {
          toggleModal("SWITCH_BUSINESS_ACCOUNT", false); // optionally close modal
          navigate("/dashboard/account/limit/upgrade");
        }}
      />
    </div>
  );
};
