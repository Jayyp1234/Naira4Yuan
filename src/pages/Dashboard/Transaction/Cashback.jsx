import { EmptyImageVar3 } from "@/data";
import React, { useState } from "react";

// const cashbackItems = [
//   { id: 1, code: "CEBISEGUN234", amount: "120 CNY" },
//   { id: 2, code: "CEBISEGUN234", amount: "120 CNY" },
//   { id: 3, code: "CEBISEGUN234", amount: "120 CNY" },
//   { id: 4, code: "CEBISEGUN234", amount: "120 CNY" },
//   { id: 5, code: "CEBISEGUN234", amount: "120 CNY" },
//   { id: 6, code: "CEBISEGUN234", amount: "120 CNY" },
//   { id: 7, code: "CEBISEGUN234", amount: "120 CNY" },
//   { id: 8, code: "CEBISEGUN234", amount: "120 CNY" },
// ];

const filterOptions = ["All", "Pending", "Successful", "Failed", "Queued"];

const cashbackData = [
  {
    id: 1,
    name: "Cashback Earned",
    code: "CEBISEGUN234",
    date: "13-May-2025 01:07pm",
    amount: "120 CNY",
    status: "Successful",
  },
  {
    id: 2,
    name: "Reward Bonus",
    code: "PEND345X",
    date: "13-May-2025 09:50am",
    amount: "30 CNY",
    status: "Pending",
  },
  {
    id: 3,
    name: "Referral Bonus",
    code: "FAIL002",
    date: "12-May-2025 08:45am",
    amount: "15 CNY",
    status: "Failed",
  },
  {
    id: 4,
    name: "Queued Cashback",
    code: "QUEUE777",
    date: "11-May-2025 07:30am",
    amount: "50 CNY",
    status: "Queued",
  },
  {
    id: 5,
    name: "Sales Cashback",
    code: "SUCCESS899",
    date: "10-May-2025 03:15pm",
    amount: "90 CNY",
    status: "Successful",
  },
];

const statusColors = {
  Successful: "text-green-600",
  Failed: "text-red-600",
  Pending: "text-yellow-500",
  Queued: "text-blue-500",
};

export const CashBack = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredData =
    activeFilter === "All"
      ? cashbackData
      : cashbackData.filter((item) => item.status === activeFilter);
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">Cashback</h2>
      {/* <div className="space-y-2">
        {cashbackItems.map((item) => (
          <div
            key={item.id}
            className="border-b border-gray-200 py-3 px-2.5 hover:bg-gray-50 transition-colors duration-200 rounded-md"
          >
            <div className="flex flex-col sm:flex-row justify-between">
              <div className="mb-2 sm:mb-0">
                <h3 className="text-xl font-normal text-gray-900">Cashback Earned</h3>
                <p className="text-base text-gray-500">{item.code}</p>
              </div>

              <div className="my-2 sm:my-0">
                <div className="bg-blue-100 text-blue-600 text-sm px-2 py-2 rounded-lg inline-block">
                  Cashback by active <br className="hidden lg:block" /> referral
                </div>
              </div>

              <div className="text-left sm:text-right">
                <p className="text-xl font-medium text-gray-900">{item.amount}</p>
                <p className="text-base text-gray-500">{item.amount}</p>
              </div>
            </div>
          </div>
        ))}
      </div> */}
      <div>
        {/* Filter Buttons */}
        <div className="flex items-center gap-3 flex-wrap">
          <ul className="flex items-center gap-x-3 gap-y-1 flex-wrap grow lg:grow-0">
            {filterOptions.map((filter) => (
              <li key={filter} className="grow">
                <button
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`w-full px-4 py-2 text-base font-medium rounded-md border border-gray-300 focus:outline-none hover:bg-gray-100 ${activeFilter === filter
                    ? "bg-gray-200 text-black font-semibold"
                    : ""
                    }`}
                >
                  {filter}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Cashback List */}
        <div className="mt-5">
          {filteredData.length > 0 ? (
            <ul className="space-y-2">
              {filteredData.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    className="w-full flex items-center justify-between gap-3 hover:bg-slate-100/50 rounded-lg transition-all ease-in-out duration-300 py-3 px-2 border-2 border-solid border-transparent bg-transparent active:border-black active:bg-stone-100"
                  >
                    {/* Left section */}
                    <div className="flex items-start gap-3">
                      <span className="text-green-600 p-3 bg-gray-300 rounded-full">
                        <svg
                          fill="none"
                          height="15"
                          viewBox="0 0 15 15"
                          width="15"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            clipRule="evenodd"
                            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                            fill="currentColor"
                            fillRule="evenodd"
                          />
                        </svg>
                      </span>

                      <div className="flex flex-col text-left">
                        <h6 className="text-lg font-semibold text-gray-800">
                          {item.name}
                        </h6>
                        <span className="text-base text-gray-500">
                          {item.code}
                        </span>
                        <span className="text-base text-gray-400">
                          {item.date}
                        </span>
                      </div>
                    </div>

                    {/* Right section */}
                    <div className="text-right">
                      <span className="block font-bold text-lg text-gray-800">
                        {item.amount}
                      </span>
                      <small className={`text-base ${statusColors[item.status]}`}>
                        {item.status}
                      </small>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex flex-col items-center space-y-1 flex-grow m-auto justify-center h-full">
              <figure className="max-w-56 flex items-center justify-center m-auto mt-5">
                <img src={EmptyImageVar3} alt="" />
              </figure>
              <span className="text-center text-xl font-semibold">No referrals yet</span>
              <span className="text-center">Sounds like a great time to get someone new on board</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};