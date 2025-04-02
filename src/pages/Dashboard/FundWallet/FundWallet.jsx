import React, { useState } from "react";
import { BankIcon } from "@/data/Icons";
import { IconWrapper } from "@/data/Icons";

export const FundWallet = () => {
  const [amount, setAmount] = useState("10000");

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <h1 className="text-center text-2xl font-semibold mb-8">Fund wallet</h1>

      <div className="mb-6">
        <label htmlFor="amount" className="block mb-2 font-medium text-gray-700">
          Amount to add
        </label>
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
          <input
            id="amount"
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="flex-1 p-3 outline-none text-sm"
          />
          <div className="flex items-center px-4 text-sm font-medium text-gray-600 border-l border-gray-300">
            <img src="/ngn-icon.svg" alt="NGN" className="w-4 h-4 mr-1" /> NGN
          </div>
        </div>
      </div>

      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-700">Payment method</label>
        <div className="flex items-center gap-3 bg-[#F9FAFC] p-4 rounded-xl border border-gray-100">
          <IconWrapper>
            <BankIcon className="w-5 h-5 text-gray-600" />
          </IconWrapper>
          <span className="font-medium text-gray-700">Bank transfer</span>
        </div>
      </div>

      <button
        type="button"
        className="w-full py-3 text-center rounded-xl font-medium text-black bg-[#F1C34E] hover:bg-[#e3b938] transition"
      >
        Continue
      </button>
    </div>
  );
};
