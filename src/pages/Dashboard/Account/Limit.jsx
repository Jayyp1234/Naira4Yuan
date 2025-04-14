import React, { useState } from "react";
import { Bell } from "lucide-react";
import { SwitchBusinessAccountModal } from "@/components/LayoutComponents/AllModals";
import { useNavigate } from "react-router";
import { ChevronLeftIcon } from "@/data/Icons";

export const Limit = () => {
  const navigate = useNavigate();

  const [isSwitchModalOpen, setIsSwitchModalOpen] = useState(false);

  const toggleModal = (type, value) => {
    if (type === "SWITCH_BUSINESS_ACCOUNT") {
      setIsSwitchModalOpen(value);
    }
  };

  return (
    <div className="mb-14 max-w-3xl">
      <nav className="flex items-center flex-1 mb-3">
        <button
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
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
        <div className="flex flex-col space-y-3 mt-8">
          <div className="bg-[#F8F9FD] p-4 rounded-lg">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-8">

              {/* Left Section */}
              <div className="flex-1">
                <h2 className="text-lg font-medium">Your level</h2>
                <h3 className="text-lg font-medium mt-1">Tier 1: Basic Account</h3>

                <ul className="mt-2 space-y-2 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span>Daily Incoming Transactions: ¥1,000 - ¥10,000</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span>Daily Outgoing Transactions: ¥1 - ¥500</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span>Total Monthly Incoming Limit: ¥100,000</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span>Total Monthly Outgoing Limit: ¥5,000</span>
                  </li>
                </ul>
              </div>

              {/* Right Section */}
              <div className="bg-[#013930] text-white px-8 py-3 rounded-lg rounded-no-tl self-start">
                <p className="text-base">Verified</p>
              </div>
            </div>
          </div>
          <div className="bg-[#F8F9FD] p-4 rounded-lg">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-8">

              {/* Left Section */}
              <div className="flex-1">
                <h3 className="text-lg font-medium mt-1">Tier 2: Individual Account</h3>

                <ul className="mt-2 space-y-2 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span>Daily Incoming Transactions: ¥1,000 - ¥10,000</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span>Daily Outgoing Transactions: ¥1 - ¥500</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span>Total Monthly Incoming Limit: ¥100,000</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span>Total Monthly Outgoing Limit: ¥5,000</span>
                  </li>
                </ul>
              </div>

              {/* Right Section */}
              <div className="bg-[#013930] text-white px-8 py-3 rounded-lg rounded-no-tl self-start">
                <p className="text-base">Verified</p>
              </div>
            </div>
          </div>
        </div>
        <button onClick={() => toggleModal("SWITCH_BUSINESS_ACCOUNT", true)} className="bg-[#F8F9FD] w-full border border-dashed border-gray-300 rounded-xl rounded-no-tl p-4 flex items-center">
          <div className="bg-white p-4 rounded-full mr-4">
            <Bell className="w-5 h-5 text-gray-800" />
          </div>
          <p className="text-lg font-medium text-gray-800">
            Want more limit? Open a business account
          </p>
        </button>
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
