import React, { useState } from "react";
import { Bell } from "lucide-react";
import { SwitchBusinessAccountModal } from "@/components/LayoutComponents/AllModals";
import { useNavigate } from "react-router";
import { ChevronLeftIcon } from "@/data/Icons";
import { LimitsSkeleton } from "@/components/Skeleton/Skeleton";
import { useGetSystemOverviewQuery } from "@/states/services/authApi";

export const Limit = () => {
  const navigate = useNavigate();
  const [isSwitchModalOpen, setIsSwitchModalOpen] = useState(false);

  const toggleModal = (type, value) => {
    if (type === "SWITCH_BUSINESS_ACCOUNT") {
      setIsSwitchModalOpen(value);
    }
  };

  const [isDashboardLoading, setIsDashboardLoading] = useState(true);

  // Fetch system overview
  const { data, isLoading: isLimitsLoading } = useGetSystemOverviewQuery();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsDashboardLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isDashboardLoading || isLimitsLoading) {
    return <LimitsSkeleton />;
  }

  // Get unique levels by name (to avoid duplicates)
  const levelLimits = data?.data?.level_limits || [];
  const uniqueLevels = Array.from(
    new Map(levelLimits.map(item => [item.name, item])).values()
  );

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
          {uniqueLevels.map((level, idx) => (
            <div key={level.id || idx} className="bg-[#F8F9FD] p-4 rounded-lg">
              <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:gap-8">
                {/* Left Section */}
                <div className="flex-1">
                  <h3 className="mt-1 text-xl font-medium">{level.name} Account</h3>
                  <ul className="mt-2 space-y-2 text-sm sm:text-base">
                    <li className="flex items-start">
                      <span className="mr-2 text-black">•</span>
                      <span>Daily Incoming Transactions: ¥{parseFloat(level.dailyincometrans).toLocaleString()}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-black">•</span>
                      <span>Daily Outgoing Transactions: ¥{parseFloat(level.dailyoutgoingtrans).toLocaleString()}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-black">•</span>
                      <span>Total Monthly Incoming Limit: ¥{parseFloat(level.monthlyincometrans).toLocaleString()}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-black">•</span>
                      <span>Total Monthly Outgoing Limit: ¥{parseFloat(level.monthlyoutgoingtrans).toLocaleString()}</span>
                    </li>
                  </ul>
                </div>
                {/* Right Section */}
                <button
                  onClick={() => navigate(`/dashboard/account/limit/${level.name.toLowerCase()}`)}
                  className="bg-[#1C5A31] text-[#fff] text-sm px-8 py-3 rounded-lg rounded-no-tl self-start"
                >
                  Verify Now
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="relative">
          <button
            onClick={() => toggleModal("SWITCH_BUSINESS_ACCOUNT", true)}
            className="bg-[#F8F9FD] w-full border border-dashed border-gray-300 rounded-xl rounded-no-tl p-2 py-4 flex items-center gap-x-2"
          >
            <div className="p-3 bg-white rounded-full">
              <Bell className="w-4 h-4 text-gray-800" />
            </div>
            <p className="text-lg font-normal text-[#122231] text-start">
              Want more limit? Open a business account
            </p>
          </button>
        </div>
      </div>
      <SwitchBusinessAccountModal
        open={isSwitchModalOpen}
        modalData={{ toggleModal, isBusinessVerified: true }}
        action={() => {
          toggleModal("SWITCH_BUSINESS_ACCOUNT", false);
          navigate("/dashboard/account/limit/upgrade");
        }}
      />
    </div>
  );
};