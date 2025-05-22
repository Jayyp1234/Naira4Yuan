import React, { useState } from "react";
import { Link } from "react-router";
import { BankIcon, BellIconVar, CameraIcon, ChevronRightIcon, CopyIcon, IconWrapper } from "@/data/Icons";
import { accountArray } from "@/data/dataArray";
import { BorderWrapper } from "../../../components/PageComponents/Dashboard/Items";
import { avatar2 } from "@/data";
import { CloseAccountModal, SwitchBusinessAccountModal } from "@/components/LayoutComponents/AllModals";
import { routes } from "@/data/routes";
import { AccountOverviewSkeleton, ReferralPageSkeleton } from "@/components/Skeleton/Skeleton";

const commonLinkStyle =
  "rounded-lg transition-all ease-in-out duration-300 border border-solid border-transparent bg-transparent active:border-slate-400 active:bg-stone-100";

export const AccountIndex = () => {
  const fileInputRef = React.useRef(null);

  function openFileSelectionPanel() {
    if (!fileInputRef.current) return;
    fileInputRef.current.click();
  }

  const [modalState, setModalState] = useState({
    CLOSE_ACCOUNT: false,
    SWITCH_BUSINESS_ACCOUNT: false,
  });

  const toggleModal = (type, value) => {
    setModalState((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const modalData = { toggleModal };

  const [isDashboardLoading, setIsDashboardLoading] = useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsDashboardLoading(false);
    }, 2000); // 2000ms = 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isDashboardLoading) {
    return <AccountOverviewSkeleton />;
  }

  return (
    <div className="flex flex-col lg:flex-row items-start gap-6 mb-10">
      <aside className="w-full lg:w-1/2 lg:sticky lg:top-4 flex flex-col gap-y-5">
        <div className="bg-gray-100/80 p-6 lg:p-8 rounded-xl rounded-tl-none">
          <div className="w-11/12 mx-auto flex items-center flex-col gap-y-4 text-center">
            <div className="relative">
              <figure className="flex items-center justify-center rounded-full w-20 h-20 overflow-hidden">
                <img src={avatar2} alt="" className="w-full h-full object-cover object-center" />
              </figure>
              <input type="file" hidden ref={fileInputRef} accept="image/png, image/jpg, image/jpeg, image/webp" />
              <button
                type="button"
                onClick={openFileSelectionPanel}
                className="text-black/80 rounded-full p-1.5 bg-slate-200 shadow absolute bottom-0 right-0">
                <IconWrapper>
                  <CameraIcon className="w-4 h-4" />
                </IconWrapper>
              </button>
            </div>
            <h2 className="text-3xl lg:text-4xl xl:text-[2.75rem] tracking-tighter font-extrabold uppercase">oladimeji olanrewaju isihaq</h2>
            <span>Your personal account</span>
            <button type="button" className="flex items-center gap-x-2 w-max bg-gray-200 rounded-md py-2 px-1.5">
              <IconWrapper>
                <BankIcon className="w-4 h-4" />
              </IconWrapper>
              <span className="uppercase text-xs">SUDO 002345678</span>
              <IconWrapper>
                <ChevronRightIcon className="w-4 h-4" />
              </IconWrapper>
            </button>
          </div>
        </div>
        <BorderWrapper
          onClick={() => toggleModal("SWITCH_BUSINESS_ACCOUNT", true)}
          radiusSize="lg"
          type="button"
          as="button"
          borderStyle="border-dashed border-slate-300"
          noBorderAt="rounded-tl-none"
          cn="border-2 py-2.5 px-3 bg-slate-100/60 flex items-center w-full gap-x-3.5"
        >
          <IconWrapper className="mt-1 bg-white p-2 rounded-full">
            <BellIconVar />
          </IconWrapper>
          <div className="flex flex-grow flex-col items-start text-start">
            <span className="font-medium">Open a business account</span>
          </div>
          <IconWrapper>
            <ChevronRightIcon />
          </IconWrapper>
        </BorderWrapper>

        <div className="text-center flex flex-col items-center gap-y-2">
          <div className="flex items-center gap-x-2">
            <span>Membership number:</span>
            <div className="flex items-center">
              <span className="uppercase">L215348765</span>
              <button type="button">
                <IconWrapper>
                  <CopyIcon className="w-4 h-4 mb-1 text-slate-500 ml-0.5" />
                </IconWrapper>
              </button>
            </div>
          </div>
          <button type="button" className="bg-gray-200 leading-tight py-1 px-2 rounded-lg rounded-tl-none">
            Log out
          </button>
        </div>
      </aside>
      <aside className="w-full lg:w-1/2">
        <div className="flex flex-col gap-y-5">
          {accountArray.map((each, index) => {
            return (
              <div className="flex flex-col gap-y-3.5" key={index}>
                <header>
                  <h2 className="text-2xl font-medium">{each.title}</h2>
                </header>
                <ul className="flex flex-col gap-y-3">
                  {each.list.map((e, i) => {
                    const content = (
                      <>
                        <IconWrapper className="bg-slate-200/50 p-2.5 rounded-full">
                          {React.createElement(e.icon, { className: "w-[1.3rem] h-[1.3rem]" })}
                        </IconWrapper>
                        <div className="flex items-center justify-between flex-grow gap-3">
                          <aside className="text-start">
                            <h3 className="leading-tight font-medium">{e.title}</h3>
                            {e.description && (
                              <span className="text-gray-500 text-sm leading-tight">
                                {e.description}
                              </span>
                            )}
                          </aside>
                          <IconWrapper>
                            <ChevronRightIcon className="w-5 h-5" />
                          </IconWrapper>
                        </div>
                      </>
                    );

                    return (
                      <li key={`${index}${i}`}>
                        {e.modal ? (
                          <button
                            onClick={() => toggleModal(e.modal, true)}
                            className={`flex items-center gap-3.5 w-full text-left hover:text-slate-800 text-slate-600 ${commonLinkStyle}`}
                          >
                            {content}
                          </button>
                        ) : (
                          <Link
                            to={e.to}
                            className={`flex items-center gap-3.5 hover:text-slate-800 text-slate-600 ${commonLinkStyle}`}
                          >
                            {content}
                            </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-5">
          <Link to={routes.DASHBOARD.help.index.abs} className="underline font-medium">
            Give us feedback
          </Link>
        </div>
      </aside>

      <CloseAccountModal
        open={modalState.CLOSE_ACCOUNT}
        modalData={modalData}
        action={() => {
          console.log("Closing account...");
          toggleModal("CLOSE_ACCOUNT", false);
        }}
      />
      <SwitchBusinessAccountModal
        open={modalState.SWITCH_BUSINESS_ACCOUNT}
        modalData={modalData}
        action={() => {
          console.log("Switching to business account...");
          toggleModal("SWITCH_BUSINESS_ACCOUNT", false);
        }}
      />
    </div >
  );
};
