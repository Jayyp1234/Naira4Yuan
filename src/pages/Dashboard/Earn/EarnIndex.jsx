import React, { useState } from "react";
import { BorderWrapper } from "@/components/PageComponents/Dashboard/Items";
import { EarnGift, EmptyImage } from "@/data";
import { FormControl } from "@/components/BaseComponents/FormInputs";
import { BankIcon, IconWrapper } from "@/data/Icons";
import Badge from "@/components/BaseComponents/Badge";
import { BarChart3 } from "lucide-react";
import { WithdrawalModal } from "@/components/LayoutComponents/AllModals";

export const EarnIndex = () => {
  const cashbackData = [
    { label: "Cashback by invite", color: "bg-[#DBF5FF] text-[#1552FD]" },
    { label: "Cashback by transaction", color: "bg-[#E8FFF0] text-[#1B7339]" },
    { label: "Cashback Withdrawal", color: "bg-[#FFF9EB] text-[#E2A71B]" },
    { label: "Cashback Withdrawal", color: "bg-[#FFF9EB] text-[#E2A71B]" },
    { label: "Cashback by transaction", color: "bg-[#E8FFF0] text-[#1B7339]" },
    { label: "Cashback Withdrawal", color: "bg-[#FFF9EB] text-[#E2A71B]" },
    { label: "Cashback by invite", color: "bg-[#DBF5FF] text-[#1552FD]" },
  ];

  const [isWithdrawalOpen, setIsWithdrawalOpen] = useState(false);

  const toggleModal = (type, value) => {
    if (type === "WITHDRAWAL") {
      setIsWithdrawalOpen(value);
    }
  };

  const handleProceed = () => {
    // handle withdrawal action here
    console.log("Proceed with withdrawal");
    setIsWithdrawalOpen(false);
  };
  return (
    <main className="flex flex-col gap-y-7 mb-10">
      <BorderWrapper cn="grid bg-main p-3 md:px-5 md:py-3" noBorderAt="rounded-no-tl" radiusSize="3xl">
        <div className="grid grid-cols-1 lg:grid-cols-5">
          <aside className="md:col-span-3">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-balance text-amber-50 tracking-tighter leading-tight md:leading-tight block">
                SHARE NAIRA4YUAN AND EARN ¥10
              </h2>
              <span className="text-amber-50 text-[1.1rem]">
                Share Naira4Yuan with 5 active friends (with at least one transaction) and earn ¥10, you can see the total amount earned below.
              </span>
            </div>
          </aside>
          <aside className="lg:col-span-1 flex items-center">
            <figure className="flex items-center justify-center m-auto max-w-48 lg:ms-auto lg:me-8 md:max-w-52">
              <img src={EarnGift} alt="" className="h-auto max-w-full" />
            </figure>
          </aside>
          <div className="lg:col-span-1 self-end text-left lg:text-right">
            <button className="bg-[#F5F5DC] text-[#122231] rounded-lg rounded-no-tl text-sm py-2 px-6">Share link</button>
          </div>
        </div>
      </BorderWrapper>
      <BorderWrapper noBorderAt="rounded-no-tl" cn="p-5 border-black min-h-72" radiusSize="3xl">
        <div className="flex justify-between items-center pb-3 border-b flex-wrap gap-y-2">
          <h2 className="text-[#3D4F60] text-lg font-medium">Invited friends</h2>
          <button className="text-[#3D4F60] text-base font-medium">See all</button>
        </div>

        <div>
          {cashbackData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row justify-between sm:items-center py-4 border-b last:border-none gap-2"
            >
              <div className="flex flex-col">
                <p className="text-black font-medium text-lg">Cashback Earned</p>
                <p className="text-gray-500 text-sm">Reward</p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <span className={`px-2 py-0.5 text-xs rounded-md font-medium w-fit ${item.color}`}>
                  {item.label}
                </span>
                <div className="text-right sm:text-left">
                  <p className="text-black font-medium text-sm">120 CNY</p>
                  <p className="text-gray-400 text-sm">120 CNY</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="flex flex-col items-center space-y-3 flex-grow m-auto justify-center h-full">
          <figure className="max-w-48 flex items-center justify-center m-auto mt-5">
							<img src={EmptyImage} alt="" />
          </figure>
          <span className="text-center">No referrals yet</span>
        </div> */}
      </BorderWrapper>

      <div className="flex flex-col space-y-4">
        <div className="max-w-60">
          <p className="text-gray-500 text-sm mb-1">Total cashback</p>
          <div className="flex items-center justify-between">
            <p className="text-black text-3xl font-bold">00.00 NGN</p>
            <BarChart3 className="w-5 h-5 text-gray-500" />
          </div>
        </div>
        <div>
          <button
            onClick={() => toggleModal("WITHDRAWAL", true)}
            type="button"
            className="animate-active bg-[#F1C34E] border-solid border-[#F1C34E] border flex items-center justify-center py-2 px-5 font-medium rounded-xl rounded-no-tl">
            Widthdraw
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row bg-[#F8F9FD] border border-[#E2E8F0] rounded-xl rounded-no-tl">
        <div className="flex-1 bg-white rounded-xl rounded-no-tl rounded-no-br rounded-no-tr border-r shadow-sm p-6">
          <div className="text-gray-500 text-sm font-medium">
            All Time Cashback Earned
          </div>
          <div className="mt-1 text-4xl font-bold">
            ₦0.00
          </div>
        </div>

        <div className="flex-1 bg-white rounded-xl rounded-no-bl rounded-no-tl shadow-sm p-6">
          <div className="text-gray-500 text-sm font-medium">
            All Time Cashback Withdrawn
          </div>
          <div className="mt-1 text-4xl font-bold">
            ₦0.00
          </div>
        </div>
      </div>

      <WithdrawalModal
        open={isWithdrawalOpen}
        modalData={{ toggleModal }}
        action={handleProceed}
      />
    </main>
  );
};
