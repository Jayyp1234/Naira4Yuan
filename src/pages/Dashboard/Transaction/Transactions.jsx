import React from "react";
import { FormControl } from "@/components/BaseComponents/FormInputs";
import { DownloadIcon, FilterIcon, IconWrapper, SearchIcon } from "@/data/Icons";
import { RecipientsFilter } from "@/components/PageComponents/Dashboard/RecipientsFilter";
import { StateDataContext } from "@/App";
import { Link } from "react-router";
import { ArrowDown, ArrowRight, ArrowUp } from "lucide-react";
import { routes } from "@/data/routes";

export const Transactions = () => {
  const { stateData, setStateData } = React.useContext(StateDataContext);

  function triggerFilterSidebar() {
    const newData = structuredClone(stateData);
    newData.dashboard.recipients.filterSidebar = true;
    setStateData(newData);
  }

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
      id: 4,
      title: "Alipay",
      subtitle: "Sent Out",
      amount: "1,200 NGN",
      balance: "1,204 NGN",
      icon: <ArrowUp className="text-gray-600" />,
      type: "debit"
    },
    {
      id: 5,
      title: "NGN Deposit",
      subtitle: "Sent In",
      amount: "+ 1,200 NGN",
      balance: "1,204 NGN",
      icon: <ArrowDown className="text-gray-600" />,
      type: "credit"
    },
  ];

  return (
    <>
      <div>
        <header className="flex items-center justify-between flex-wrap gap-4">
          <h2 className="text-3xl font-semibold">Transactions</h2>
          <div className="flex-grow flex flex-wrap gap-3 gap-x-10 [&>div]:w-full md:[&>div]:w-auto justify-end">
            <FormControl
              style="!bg-transparent border border-solid w-full !min-h-[unset] h-10 !rounded-lg border-stone-400"
              type="Search"
              floatEle={{
                exist: true,
                position: "left",
                children: (
                  <IconWrapper>
                    <SearchIcon />
                  </IconWrapper>
                ),
              }}
              placeholder="Search"
            />
            <div className="flex items-center gap-x-4">
              <button
                type="button"
                onClick={triggerFilterSidebar}
                className="flex items-center justify-center font-medium gap-x-2.5 bg-[#F1C34E] py-2 px-4 rounded-xl rounded-tl-sm text-sm animate-active">
                <IconWrapper className="text-slate-600">
                  <FilterIcon />
                </IconWrapper>
                <span>Filter</span>
              </button>
              <button
                type="button"
                className="flex items-center justify-center font-medium gap-x-2.5 bg-slate-200/80 py-2 px-4 rounded-xl rounded-tl-sm text-sm animate-active">
                <IconWrapper className="text-slate-600">
                  <DownloadIcon className="w-4 h-4" />
                </IconWrapper>
                <span>Download</span>
              </button>
            </div>
          </div>
        </header>
        <main className="mt-8">
          <div className="mb-5">
            <h4 className="mb-1 text-lg font-normal">Today</h4>
            <hr />
            <div className="space-y-1 mt-3">
              {transactions.map((transaction) => (
                <Link
                  to={routes.DASHBOARD.transaction.index.abs}
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
              ))}
            </div>
          </div>
          <div className="mb-4">
            <h4 className="mb-1 text-lg font-normal">18th January, 2025</h4>
            <hr />
            <div className="space-y-1 mt-3">
              {transactions.map((transaction) => (
                <Link
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
              ))}
            </div>
          </div>
        </main>
      </div>

      <RecipientsFilter />
    </>
  );
};
