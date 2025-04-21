import React from "react";
import { ArrowRightIcon, ChevronLeftIcon, IconWrapper } from "@/data/Icons";
import { NotificationAlertComponent } from "./NotificationAlertComponent";
import { Link, useNavigate } from "react-router";
import { ArrowDownIcon } from "lucide-react";
import { Graph } from "@/data";

const commonLinkStyle = `hover:bg-slate-100/50 rounded-lg transition-all ease-in-out duration-300 py-3 px-2 border-2 border-solid border-transparent bg-transparent active:border-black active:bg-[#D9D9D966]`;

export const MarketAlerts = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-y-5 mb-10 max-w-4xl mx-auto">
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
        <h2 className="text-2xl font-bold">Market alert details</h2>
      </header>
      <section className="flex flex-col gap-y-2 mb-3">
        <div className="flex flex-col gap-y-1 mb-4">
          <h2 className="font-bold text-2xl flex gap-x-2">
            NGN
            <IconWrapper>
              <ArrowRightIcon />
            </IconWrapper>
            CNY
          </h2>
          <span className="text-slate-500">We’ll notify you when NGN to CNY drops or increases</span>
        </div>
        <div className="mb-3">
          <header className="border-b border-solid pb-1">
            <h6 className="text-lg text-slate-700">Notification settings</h6>
          </header>
          <NotificationAlertComponent />
        </div>

        <div className="mb-3">
          <header className="border-b border-solid pb-1">
            <h6 className="text-lg text-slate-700">Rate Log (Last 5 changes)</h6>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4 mt-5">
            <aside>
              <ul className="flex flex-col gap-y-2">
                <li>
                  <Link className={`flex items-center gap-3.5 flex-grow ${commonLinkStyle}`}>
                    <IconWrapper className="bg-slate-200/50 text-slate-600 p-2.5 rounded-full">
                      <ArrowDownIcon className="-rotate-90 w-5 h-5" />
                    </IconWrapper>
                    <div className="flex items-center justify-between flex-grow gap-3">
                      <aside className="text-start">
                        <h3 className="text-lg leading-tight font-medium">Rate Change</h3>
                        <p className="text-gray-500 text-sm">12/April/2025 10:00am</p>
                      </aside>
                      <aside className="text-end">
                        <h3 className="text-lg leading-tight font-medium">230 NGN/CNY</h3>
                        <p className="text-gray-500 text-sm">229 NGN/CNY</p>
                      </aside>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link className={`flex items-center gap-3.5 flex-grow ${commonLinkStyle}`}>
                    <IconWrapper className="bg-slate-200/50 text-slate-600 p-2.5 rounded-full">
                      <ArrowDownIcon className="-rotate-90 w-5 h-5" />
                    </IconWrapper>
                    <div className="flex items-center justify-between flex-grow gap-3">
                      <aside className="text-start">
                        <h3 className="text-lg leading-tight font-medium">Rate Change</h3>
                        <p className="text-gray-500 text-sm">12/April/2025 10:00am</p>
                      </aside>
                      <aside className="text-end">
                        <h3 className="text-lg leading-tight font-medium">230 NGN/CNY</h3>
                        <p className="text-gray-500 text-sm">229 NGN/CNY</p>
                      </aside>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link className={`flex items-center gap-3.5 flex-grow ${commonLinkStyle}`}>
                    <IconWrapper className="bg-slate-200/50 text-slate-600 p-2.5 rounded-full">
                      <ArrowDownIcon className="-rotate-90 w-5 h-5" />
                    </IconWrapper>
                    <div className="flex items-center justify-between flex-grow gap-3">
                      <aside className="text-start">
                        <h3 className="text-lg leading-tight font-medium">Rate Change</h3>
                        <p className="text-gray-500 text-sm">12/April/2025 10:00am</p>
                      </aside>
                      <aside className="text-end">
                        <h3 className="text-lg leading-tight font-medium">230 NGN/CNY</h3>
                        <p className="text-gray-500 text-sm">229 NGN/CNY</p>
                      </aside>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link className={`flex items-center gap-3.5 flex-grow ${commonLinkStyle}`}>
                    <IconWrapper className="bg-slate-200/50 text-slate-600 p-2.5 rounded-full">
                      <ArrowDownIcon className="-rotate-90 w-5 h-5" />
                    </IconWrapper>
                    <div className="flex items-center justify-between flex-grow gap-3">
                      <aside className="text-start">
                        <h3 className="text-lg leading-tight font-medium">Rate Change</h3>
                        <p className="text-gray-500 text-sm">12/April/2025 10:00am</p>
                      </aside>
                      <aside className="text-end">
                        <h3 className="text-lg leading-tight font-medium">230 NGN/CNY</h3>
                        <p className="text-gray-500 text-sm">229 NGN/CNY</p>
                      </aside>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link className={`flex items-center gap-3.5 flex-grow ${commonLinkStyle}`}>
                    <IconWrapper className="bg-slate-200/50 text-slate-600 p-2.5 rounded-full">
                      <ArrowDownIcon className="-rotate-90 w-5 h-5" />
                    </IconWrapper>
                    <div className="flex items-center justify-between flex-grow gap-3">
                      <aside className="text-start">
                        <h3 className="text-lg leading-tight font-medium">Rate Change</h3>
                        <p className="text-gray-500 text-sm">12/April/2025 10:00am</p>
                      </aside>
                      <aside className="text-end">
                        <h3 className="text-lg leading-tight font-medium">230 NGN/CNY</h3>
                        <p className="text-gray-500 text-sm">229 NGN/CNY</p>
                      </aside>
                    </div>
                  </Link>
                </li>
              </ul>
            </aside>
            <aside className="bg-[#F8F9FD]">
              <figure className="h-full flex flex-col items-center">
                <img className="mx-auto my-auto" src={Graph} alt="" />
              </figure>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};
