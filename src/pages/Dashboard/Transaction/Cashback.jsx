import React from "react";

const cashbackItems = [
  { id: 1, code: "CEBISEGUN234", amount: "120 CNY" },
  { id: 2, code: "CEBISEGUN234", amount: "120 CNY" },
  { id: 3, code: "CEBISEGUN234", amount: "120 CNY" },
  { id: 4, code: "CEBISEGUN234", amount: "120 CNY" },
  { id: 5, code: "CEBISEGUN234", amount: "120 CNY" },
  { id: 6, code: "CEBISEGUN234", amount: "120 CNY" },
  { id: 7, code: "CEBISEGUN234", amount: "120 CNY" },
  { id: 8, code: "CEBISEGUN234", amount: "120 CNY" },
];

export const CashBack = () => {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">Cashback</h2>
      <div className="space-y-2">
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
      </div>
    </div>
  );
};