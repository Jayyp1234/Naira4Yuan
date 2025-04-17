import React from "react";
import { FormControl } from "@/components/BaseComponents/FormInputs";
import { DownloadIcon, ArrowDownIcon, FilterIcon, IconWrapper, SearchIcon } from "@/data/Icons";
import { RecipientsFilter } from "@/components/PageComponents/Dashboard/RecipientsFilter";
import { StateDataContext } from "@/App";
import { Link } from "react-router";

export const WalletTransaction = () => {
  const { stateData, setStateData } = React.useContext(StateDataContext);

  function triggerFilterSidebar() {
    const newData = structuredClone(stateData);
    newData.dashboard.recipients.filterSidebar = true;
    setStateData(newData);
  }

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
                className="flex items-center justify-center font-medium gap-x-2.5 bg-slate-200/80 py-2 px-4 rounded-xl rounded-tl-sm text-sm animate-active">
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
        <main className="">
          <div className="mt-3">
            <section className="my-8">
              <header className="flex items-center justify-between gap-x-4 mb-3 pb-1 border-b">
                <h2 className="text-md tracking-tight font-normal">Today</h2>
              </header>
              <div>
                <ul className="flex flex-col gap-y-3">
                  <li>
                    <Link className={`flex items-center gap-3.5 flex-grow`}>
                      <IconWrapper className="bg-slate-200/50 text-slate-600 p-2.5 rounded-full">
                        <ArrowDownIcon className="rotate-180 w-5 h-5" />
                      </IconWrapper>
                      <div className="flex items-center justify-between flex-grow gap-3">
                        <aside className="text-start">
                          <h3 className="leading-tight font-medium">AliPay</h3>
                          <p className="text-gray-500 text-sm">Sent out</p>
                        </aside>
                        <aside className="text-end">
                          <h3 className="leading-tight font-medium">1,200 NGN</h3>
                          <p className="text-gray-500 text-sm">1,204 NGN</p>
                        </aside>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link className={`flex items-center gap-3.5 flex-grow`}>
                      <IconWrapper className="bg-slate-200/50 text-slate-600 p-2.5 rounded-full">
                        <ArrowDownIcon className="w-5 h-5" />
                      </IconWrapper>
                      <div className="flex items-center justify-between flex-grow gap-3">
                        <aside className="text-start">
                          <h3 className="leading-tight font-medium">NGN Deposit</h3>
                          <p className="text-gray-500 text-sm">Sent In</p>
                        </aside>
                        <aside className="text-end">
                          <h3 className="leading-tight font-medium">1,200 NGN</h3>
                          <p className="text-gray-500 text-sm">1,204 NGN</p>
                        </aside>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link className={`flex items-center gap-3.5 flex-grow`}>
                      <IconWrapper className="bg-slate-200/50 text-slate-600 p-2.5 rounded-full">
                        <ArrowDownIcon className="-rotate-90 w-5 h-5" />
                      </IconWrapper>
                      <div className="flex items-center justify-between flex-grow gap-3">
                        <aside className="text-start">
                          <h3 className="leading-tight font-medium">Cashback Earned</h3>
                          <p className="text-gray-500 text-sm">Reward</p>
                        </aside>
                        <aside className="text-end">
                          <h3 className="leading-tight font-medium">1,200 NGN</h3>
                          <p className="text-gray-500 text-sm">1,204 NGN</p>
                        </aside>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link className={`flex items-center gap-3.5 flex-grow`}>
                      <IconWrapper className="bg-slate-200/50 text-slate-600 p-2.5 rounded-full">
                        <ArrowDownIcon className="w-5 h-5" />
                      </IconWrapper>
                      <div className="flex items-center justify-between flex-grow gap-3">
                        <aside className="text-start">
                          <h3 className="leading-tight font-medium">NGN Deposit</h3>
                          <p className="text-gray-500 text-sm">Sent In</p>
                        </aside>
                        <aside className="text-end">
                          <h3 className="leading-tight font-medium">1,200 NGN</h3>
                          <p className="text-gray-500 text-sm">1,204 NGN</p>
                        </aside>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link className={`flex items-center gap-3.5 flex-grow`}>
                      <IconWrapper className="bg-slate-200/50 text-slate-600 p-2.5 rounded-full">
                        <ArrowDownIcon className="-rotate-90 w-5 h-5" />
                      </IconWrapper>
                      <div className="flex items-center justify-between flex-grow gap-3">
                        <aside className="text-start">
                          <h3 className="leading-tight font-medium">Cashback Earned</h3>
                          <p className="text-gray-500 text-sm">Reward</p>
                        </aside>
                        <aside className="text-end">
                          <h3 className="leading-tight font-medium">1,200 NGN</h3>
                          <p className="text-gray-500 text-sm">1,204 NGN</p>
                        </aside>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </section>
            <section className="my-8">
              <header className="flex items-center justify-between gap-x-4 mb-3 pb-1 border-b">
                <h2 className="text-md tracking-tight font-normal">18th January, 2025</h2>
              </header>
              <div>
                <ul className="flex flex-col gap-y-3">
                  <li>
                    <Link className={`flex items-center gap-3.5 flex-grow`}>
                      <IconWrapper className="bg-slate-200/50 text-slate-600 p-2.5 rounded-full">
                        <ArrowDownIcon className="-rotate-90 w-5 h-5" />
                      </IconWrapper>
                      <div className="flex items-center justify-between flex-grow gap-3">
                        <aside className="text-start">
                          <h3 className="leading-tight font-medium">Cashback Earned</h3>
                          <p className="text-gray-500 text-sm">Reward</p>
                        </aside>
                        <aside className="text-end">
                          <h3 className="leading-tight font-medium">1,200 NGN</h3>
                          <p className="text-gray-500 text-sm">1,204 NGN</p>
                        </aside>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link className={`flex items-center gap-3.5 flex-grow`}>
                      <IconWrapper className="bg-slate-200/50 text-slate-600 p-2.5 rounded-full">
                        <ArrowDownIcon className="-rotate-90 w-5 h-5" />
                      </IconWrapper>
                      <div className="flex items-center justify-between flex-grow gap-3">
                        <aside className="text-start">
                          <h3 className="leading-tight font-medium">Cashback Earned</h3>
                          <p className="text-gray-500 text-sm">Reward</p>
                        </aside>
                        <aside className="text-end">
                          <h3 className="leading-tight font-medium">1,200 NGN</h3>
                          <p className="text-gray-500 text-sm">1,204 NGN</p>
                        </aside>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link className={`flex items-center gap-3.5 flex-grow`}>
                      <IconWrapper className="bg-slate-200/50 text-slate-600 p-2.5 rounded-full">
                        <ArrowDownIcon className="-rotate-90 w-5 h-5" />
                      </IconWrapper>
                      <div className="flex items-center justify-between flex-grow gap-3">
                        <aside className="text-start">
                          <h3 className="leading-tight font-medium">Cashback Earned</h3>
                          <p className="text-gray-500 text-sm">Reward</p>
                        </aside>
                        <aside className="text-end">
                          <h3 className="leading-tight font-medium">1,200 NGN</h3>
                          <p className="text-gray-500 text-sm">1,204 NGN</p>
                        </aside>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link className={`flex items-center gap-3.5 flex-grow`}>
                      <IconWrapper className="bg-slate-200/50 text-slate-600 p-2.5 rounded-full">
                        <ArrowDownIcon className="-rotate-90 w-5 h-5" />
                      </IconWrapper>
                      <div className="flex items-center justify-between flex-grow gap-3">
                        <aside className="text-start">
                          <h3 className="leading-tight font-medium">Cashback Earned</h3>
                          <p className="text-gray-500 text-sm">Reward</p>
                        </aside>
                        <aside className="text-end">
                          <h3 className="leading-tight font-medium">1,200 NGN</h3>
                          <p className="text-gray-500 text-sm">1,204 NGN</p>
                        </aside>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </main>
      </div>

      <RecipientsFilter />
    </>
  );
};
