
import { useState } from "react";
import { ArrowUp, ArrowDown, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from "react-router";
import { routes } from "@/data/routes";
import { ChevronLeftIcon } from "@/data/Icons";

export const HelpTransaction = () => {
  const navigate = useNavigate();

  const transactions = [
    {
      id: 1,
      title: "Alipay",
      subtitle: "Sent Out",
      amount: "1,200 NGN",
      balance: "1,204 NGN",
      icon: <ArrowUp className="text-gray-600" />,
      type: "debit"
    },
    {
      id: 2,
      title: "NGN Deposit",
      subtitle: "Sent In",
      amount: "+ 1,200 NGN",
      balance: "1,204 NGN",
      icon: <ArrowDown className="text-gray-600" />,
      type: "credit"
    },
    {
      id: 3,
      title: "Cashback Earned",
      subtitle: "Reward",
      amount: "1,200 NGN",
      balance: "1,204 NGN",
      icon: <ArrowRight className="text-gray-600" />,
      type: "reward"
    },
    {
      id: 1,
      title: "Alipay",
      subtitle: "Sent Out",
      amount: "1,200 NGN",
      balance: "1,204 NGN",
      icon: <ArrowUp className="text-gray-600" />,
      type: "debit"
    },
    {
      id: 2,
      title: "NGN Deposit",
      subtitle: "Sent In",
      amount: "+ 1,200 NGN",
      balance: "1,204 NGN",
      icon: <ArrowDown className="text-gray-600" />,
      type: "credit"
    },
    {
      id: 3,
      title: "Cashback Earned",
      subtitle: "Reward",
      amount: "1,200 NGN",
      balance: "1,204 NGN",
      icon: <ArrowRight className="text-gray-600" />,
      type: "reward"
    },
    {
      id: 1,
      title: "Alipay",
      subtitle: "Sent Out",
      amount: "1,200 NGN",
      balance: "1,204 NGN",
      icon: <ArrowUp className="text-gray-600" />,
      type: "debit"
    },
    {
      id: 2,
      title: "NGN Deposit",
      subtitle: "Sent In",
      amount: "+ 1,200 NGN",
      balance: "1,204 NGN",
      icon: <ArrowDown className="text-gray-600" />,
      type: "credit"
    },
    {
      id: 3,
      title: "Cashback Earned",
      subtitle: "Reward",
      amount: "1,200 NGN",
      balance: "1,204 NGN",
      icon: <ArrowRight className="text-gray-600" />,
      type: "reward"
    },
  ];

  return (
    <>
      <div className="xs:w-11/12 xl:w-5/6 mx-auto">
        <div className="">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg sm:text-xl md:text-2xl text-center text-black w-full font-medium">Hello, how can we help?</h2>
          </div>

          <div className="mb-2 mt-8 sm:mt-12">
            <div className="flex justify-between items-center">
              <h3 className="text-sm sm:text-base md:text-lg font-medium">Recent transactions</h3>
            </div>
          </div>

          <div className="space-y-2 sm:space-y-4">
            {transactions.map((transaction) => {
              let route;
              if (transaction.subtitle === "Sent Out") {
                route = routes.DASHBOARD.transaction.index.abs;
              } else if (transaction.subtitle === "Sent In") {
                route = routes.DASHBOARD.transaction.send.abs;
              } else if (transaction.subtitle === "Reward") {
                route = routes.DASHBOARD.transaction.cashback.abs;
              }

              return (
                <Link
                  to={route}
                  key={transaction.id}
                  className="flex justify-between items-center hover:bg-slate-100/50 rounded-lg transition-all ease-in-out duration-300 py-3 px-2 border-2 border-solid border-transparent bg-transparent active:border-black active:bg-stone-100"
                >
                  <div className="flex items-center">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center bg-gray-100 rounded-full mr-2 sm:mr-4">
                      {transaction.icon}
                    </div>
                    <div>
                      <h5 className="text-sm sm:text-base md:text-regular font-normal">{transaction.title}</h5>
                      <p className="text-xs sm:text-sm text-[#3D4F60]">{transaction.subtitle}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <h5 className={`text-sm sm:text-base md:text-regular font-normal ${transaction.type === "credit" ? "text-green-600" : "text-gray-800"}`}>
                      {transaction.amount}
                    </h5>
                    <p className="text-xs sm:text-sm text-[#3D4F60]">{transaction.balance}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-8 sm:mt-12 mb-12">
          <Link to={routes.DASHBOARD.help.contact.abs} className="text-black underline text-sm sm:text-base">Contact us</Link>
        </div>
      </div>
    </>
  );
};