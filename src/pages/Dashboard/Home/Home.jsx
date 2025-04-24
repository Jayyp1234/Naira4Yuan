import React, { useState } from "react";
import { ArrowDownIcon, BankIcon, BellIcon, CautionIcon, Chart, ChartIcon, ChatIcon, ChevronRightIcon, IconWrapper, MedalIcon, OpenEyeIconVar } from "@/data/Icons";
import { Link, useNavigate } from "react-router";
import { Xchange } from "../../../components/LayoutComponents/Xchange";
import { FooterButton } from "../../../components/BaseComponents/FooterButton";
import { ProfileImage } from "../../../components/PageComponents/Dashboard/ProfileImage";
import { avatar1, Graph } from "@/data";
import { routes } from "@/data/routes";
import { BankTransferModal, CalculatorModal, FollowModal, IndividualAccModal } from "@/components/LayoutComponents/AllModals";

const commonLinkStyle = `hover:bg-slate-100/50 rounded-lg transition-all ease-in-out duration-300 py-4 px-3 border-2 border-solid border-transparent bg-transparent active:border-black active:bg-[#D9D9D966]`;
const balanceBoardTriggerBtnStyle =
  "flex items-center text-[.78rem] sm:text-sm md:text-sm hover:bg-gray-100 transition-all ease-in-out duration-300 justify-center py-3 px-3";

export const Home = () => {
  const navigate = useNavigate();

  const [isBankModalOpen, setIsBankModalOpen] = useState(false);
  const [isIndividualAccModalOpen, setIsIndividualAccModalOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isFollowOpen, setIsFollowOpen] = useState(false);


  const toggleModal = (modalKey, state) => {
    switch (modalKey) {
      case "DASHBOARD_BANK_TRANSFER":
        setIsBankModalOpen(state);
        break;
      case "INDIVIDUAL_ACC":
        setIsIndividualAccModalOpen(state);
        break;
      case "CALCULATOR":
        setIsCalculatorOpen(state);
        break;
      case "FOLLOW":
        setIsFollowOpen(state);
        break;
      default:
        break;
    }
  };


  return (
    <div>
      <header className="flex flex-col gap-y-1">
        <span className="font-bold text-slate-500">Total balance</span>
        <div className="flex items-center gap-x-4">
          <h2 className="text-3xl tracking-tight font-bold">59.43 CN¥</h2>
          <IconWrapper onClick={() => toggleModal("CALCULATOR", true)} className="bg-[#F8F9FD] p-1.5 rounded-full">
            <Chart className="w-4 h-4" />
          </IconWrapper>
        </div>
        <div className="flex items-center gap-x-3 mt-2">
          <button
            onClick={() => navigate(routes.DASHBOARD.fundwallet.abs)}
            type="button"
            className="animate-active rounded-no-tl font-medium flex items-center justify-center py-2.5 px-5 text-sm rounded-xl text-black bg-gray-200">
            Fund Wallet
          </button>
          <button
            onClick={() => navigate(routes.DASHBOARD.send.abs)}
            type="button"
            className="animate-active rounded-no-tl font-medium flex items-center justify-center py-2.5 px-5 text-sm rounded-xl text-black bg-[#F1C34E]">
            Send
          </button>
        </div>
      </header>
      <main>
        <section className="my-8">
          <div className="bg-[#F8F9FD] overflow-hidden rounded-xl rounded-tl-sm">
            <div className="px-4 py-2">
              <header className="mb-1">
                <div className="flex items-center justify-between gap-x-4">
                  <aside className="flex items-center gap-x-2">
                    <span className="font-semibold text-sm text-slate-500">My Naira Balance</span>
                    <button
                      type="button"
                      className="transition ease-in-out duration-300 text-slate-600 p-1.5 rounded-full bg-transparent hover:bg-slate-200">
                      <IconWrapper>
                        <OpenEyeIconVar />
                      </IconWrapper>
                    </button>
                  </aside>
                  <aside className="flex items-center gap-x-1 justfy-end">
                    <div className="hidden sm:flex items-center bg-[#F5F5DC] py-1 px-2.5 rounded-lg">
                      <IconWrapper>
                        <MedalIcon className="w-4 h-4" />
                      </IconWrapper>
                      <span className="text-xs font-medium text-main">Individual Account</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => toggleModal("INDIVIDUAL_ACC", true)}
                      className="transition ease-in-out duration-300 text-slate-600 p-1.5 rounded-full bg-transparent hover:bg-slate-200"
                    >
                      <IconWrapper>
                        <CautionIcon />
                      </IconWrapper>
                    </button>
                  </aside>
                </div>
              </header>
              <footer>
                <h2 className="font-bold text-4xl tracking-tighter truncate max-w-80">&#8358;0.00</h2>
              </footer>
            </div>
            <footer className="grid grid-cols-3 border-t">
              <button
                type="button"
                onClick={() => toggleModal("DASHBOARD_BANK_TRANSFER", true)}
                className={`${balanceBoardTriggerBtnStyle}`}
              >
                <div className="flex items-center gap-x-2 bg-gray-200 rounded-md py-1.5 sm:px-2">
                  <IconWrapper>
                    <BankIcon className="w-4 h-4" />
                  </IconWrapper>
                  <span className="uppercase hidden sm:inline text-xs">SUDO 002345678</span>
                </div>
              </button>
              <button onClick={() => navigate(routes.DASHBOARD.fundwallet.abs)} type="button" className={`${balanceBoardTriggerBtnStyle} border-x border-stone-300/90 border-y-0 border-solid`}>
                Fund NGN Wallet
              </button>
              <button onClick={() => navigate(routes.DASHBOARD.transaction.transactions.abs)} type="button" className={`${balanceBoardTriggerBtnStyle}`}>
                <span>Funding History</span>
              </button>
            </footer>
          </div>
        </section>
        <section className="my-8">
          <header className="flex items-center justify-between gap-x-4 mb-6">
            <h2 className="text-2xl tracking-tight font-bold">Transactions</h2>
            <Link to={routes.DASHBOARD.transaction.transactions.abs} className="font-medium text-slate-600">
              See all
            </Link>
          </header>
          <div>
            <ul className="flex flex-col gap-y-2">
              <li>
                <Link to={routes.DASHBOARD.transaction.index.abs} className={`flex items-center gap-3.5 flex-grow ${commonLinkStyle}`}>
                  <IconWrapper className="bg-slate-200/50 text-slate-600 p-2.5 rounded-full">
                    <ArrowDownIcon className="rotate-180 w-5 h-5" />
                  </IconWrapper>
                  <div className="flex items-center justify-between flex-grow gap-3">
                    <aside className="text-start">
                      <h3 className="text-lg leading-tight font-medium">AliPay</h3>
                      <p className="text-gray-500 text-sm">Sent out</p>
                    </aside>
                    <aside className="text-end">
                      <h3 className="text-lg leading-tight font-medium">1,200 NGN</h3>
                      <p className="text-gray-500 text-sm">1,204 NGN</p>
                    </aside>
                  </div>
                </Link>
              </li>
              <li>
                <Link to={routes.DASHBOARD.transaction.send.abs} className={`flex items-center gap-3.5 flex-grow ${commonLinkStyle}`}>
                  <IconWrapper className="bg-slate-200/50 text-slate-600 p-2.5 rounded-full">
                    <ArrowDownIcon className="w-5 h-5" />
                  </IconWrapper>
                  <div className="flex items-center justify-between flex-grow gap-3">
                    <aside className="text-start">
                      <h3 className="text-lg leading-tight font-medium">NGN Deposit</h3>
                      <p className="text-gray-500 text-sm">Sent In</p>
                    </aside>
                    <aside className="text-end">
                      <h3 className="text-lg leading-tight font-medium">1,200 NGN</h3>
                      <p className="text-gray-500 text-sm">1,204 NGN</p>
                    </aside>
                  </div>
                </Link>
              </li>
              <li>
                <Link to={routes.DASHBOARD.transaction.cashback.abs} className={`flex items-center gap-3.5 flex-grow ${commonLinkStyle}`}>
                  <IconWrapper className="bg-slate-200/50 text-slate-600 p-2.5 rounded-full">
                    <ArrowDownIcon className="-rotate-90 w-5 h-5" />
                  </IconWrapper>
                  <div className="flex items-center justify-between flex-grow gap-3">
                    <aside className="text-start">
                      <h3 className="text-lg leading-tight font-medium">Cashback Earned</h3>
                      <p className="text-gray-500 text-sm">Reward</p>
                    </aside>
                    <aside className="text-end">
                      <h3 className="text-lg leading-tight font-medium">1,200 NGN</h3>
                      <p className="text-gray-500 text-sm">1,204 NGN</p>
                    </aside>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </section>
        <section className="my-8">
          <header className="flex items-center justify-between gap-x-4 mb-4">
            <h2 className="text-xl tracking-tight font-bold">Transfer calculator</h2>
          </header>
          <main>
            <div className="bg-[#F8F9FD] p-6 md:px-7 rounded-2xl">
              <header>
                <h2 className="uppercase font-bold text-2xl">1 usd = 7.2716 cny</h2>
              </header>
              <div className="grid lg:grid-cols-2 mt-5">
                <aside>
                  <figure>
                    <img src={Graph} alt="" />
                  </figure>
                </aside>
                <aside className="flex flex-col gap-y-5">
                  <Xchange />
                  <FooterButton onClick={() => navigate(routes.DASHBOARD.send.abs)} text="Continue" className="!text-base animate-active" />
                </aside>
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-y-3.5">
              <Link to={routes.DASHBOARD.account.notification.exchange.abs} type="button" className={`flex items-center justify-between w-full ${commonLinkStyle}`}>
                <div className="flex items-center gap-3 flex-grow">
                  <IconWrapper className="bg-slate-200/50 text-slate-600 p-2.5 rounded-full">
                    <BellIcon />
                  </IconWrapper>
                  <div>
                    <h3 className="text-lg font-medium">Get exchange rate updates</h3>
                  </div>
                </div>
                <IconWrapper>
                  <ChevronRightIcon />
                </IconWrapper>
              </Link>
              <Link to={routes.DASHBOARD.help.index.abs} type="button" className={`flex items-center justify-between w-full ${commonLinkStyle}`}>
                <div className="flex items-center gap-3 flex-grow">
                  <IconWrapper className="bg-slate-200/50 text-slate-600 p-2.5 rounded-full">
                    <ChatIcon />
                  </IconWrapper>
                  <div>
                    <h3 className="text-lg font-medium">Give us feedback</h3>
                  </div>
                </div>
                <IconWrapper>
                  <ChevronRightIcon />
                </IconWrapper>
              </Link>
            </div>
          </main>
        </section>
        <section className="my-8 flex flex-col gap-y-4">
          <span className="font-semibold text-lg">Recent contacts</span>
          <ul className="flex items-start gap-x-3.5">
            <li className="flex flex-col items-center text-center gap-y-2.5">
              <ProfileImage to={`${routes.DASHBOARD.recipients.recep.abs}/123`} children={<h1>AR</h1>} type="button" as={Link} hasExtraImage={true} size="xl" />
              <span className="w-14 text-sm leading-tight">Adam R. ACC</span>
            </li>
            <li className="flex flex-col items-center text-center gap-y-2.5">
              <ProfileImage to={`${routes.DASHBOARD.recipients.recep.abs}/123`} type="button" as={Link} hasExtraImage={true} size="xl" />
              <span className="w-14 text-sm leading-tight">Adam R. ACC</span>
            </li>
            <li className="flex flex-col items-center text-center gap-y-2.5">
              <ProfileImage AvatarImage={avatar1} to={`${routes.DASHBOARD.recipients.recep.abs}/123`} type="button" as={Link} hasExtraImage={true} size="xl" />
              <span className="w-14 text-sm leading-tight">Adam R. ACC</span>
            </li>
          </ul>
        </section>

        <BankTransferModal
          open={isBankModalOpen}
          modalData={{ toggleModal }}
          action={() => {
            console.log("User confirmed transfer");
            toggleModal("DASHBOARD_BANK_TRANSFER", false);
          }}
        />
        <IndividualAccModal
          open={isIndividualAccModalOpen}
          modalData={{ toggleModal }}
          action={() => {
            console.log("Transfer confirmed");
            toggleModal("INDIVIDUAL_ACC", false);
          }}
        />
        <CalculatorModal
          open={isCalculatorOpen}
          modalData={{ toggleModal }}
          action={() => {
            toggleModal("CALCULATOR", false);
            toggleModal("FOLLOW", true);
          }}
        />
        <FollowModal
          open={isFollowOpen}
          modalData={{ toggleModal }}
          action={() => {
            toggleModal("FOLLOW", false);
          }}
        />
      </main >
    </div >
  );
};
