import { useState } from "react";
import { routes } from "@/data/routes";
import {
  ArrowDownIcon,
  ArrowUpSlimIcon,
  BankIcon,
  ChevronRightIcon,
  DownloadIcon,
  FilterIcon,
  IconWrapper,
  PlusSlimIcon,
  SearchIcon,
} from "@/data/Icons";
import { FormControl } from "@/components/BaseComponents/FormInputs";
import { BorderWrapper } from "../../../components/PageComponents/Dashboard/Items";
import { Link, useNavigate } from "react-router";
import { MoreVertical } from 'lucide-react';
import { WalletOptionModal } from "/src/components/LayoutComponents/AllModals";
import { BankTransferModal } from "@/components/LayoutComponents/AllModals";

export const Wallet = () => {
  const navigate = useNavigate();

  const styleButtonInner = "p-2 rounded-full bg-[#F1C34E] animate-active";

  const [isWalletModalOpen, setWalletModalOpen] = useState(false);
  const [showBankTransferModal, setShowBankTransferModal] = useState(false);

  const toggleModal = (type, status) => {
    switch (type) {
      case "Wallet":
      setWalletModalOpen(status);
        break;
      case "DASHBOARD_BANK_TRANSFER":
        setShowBankTransferModal(status);
        break;
      default:
        break;
    }
  };

  const transactions = [
    {
      id: 1,
      title: "AliPay",
      subtitle: "Sent Out",
      amount: "1,200 NGN",
      balance: "1,204 NGN",
      iconClass: "rotate-180",
    },
    {
      id: 2,
      title: "NGN Deposit",
      subtitle: "Sent In",
      amount: "1,200 NGN",
      balance: "1,204 NGN",
      iconClass: "",
    },
    {
      id: 3,
      title: "Cashback Earned",
      subtitle: "Reward",
      amount: "1,200 NGN",
      balance: "1,204 NGN",
      iconClass: "-rotate-90",
    },
    {
      id: 4,
      title: "NGN Deposit",
      subtitle: "Sent In",
      amount: "1,200 NGN",
      balance: "1,204 NGN",
      iconClass: "",
    },
    {
      id: 5,
      title: "Cashback Earned",
      subtitle: "Reward",
      amount: "1,200 NGN",
      balance: "1,204 NGN",
      iconClass: "-rotate-90",
    },
  ];

  return (
    <div>
      <div className="flex justify-end mb-10">
        <button onClick={() => toggleModal("Wallet", true)}>
          <MoreVertical />
        </button>
      </div>
      <header className="flex flex-col items-center sm:flex-row gap-8 justify-between pb-5 border-b">
        <div className="flex flex-col gap-y-1">
          <span className="font-normal text-sm text-slate-500">NGN balance</span>
          <h2 className="text-3xl tracking-tight font-medium">00.00 NGN</h2>
          <div>
            <button
              type="button"
              onClick={() => toggleModal("DASHBOARD_BANK_TRANSFER", true)}
              className="flex items-center gap-x-2 w-max bg-[#DADADA80] rounded-md py-1.5 sm:px-2"
            >
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
        <div className="flex items-center gap-x-3">
          <button onClick={() => toggleModal("DASHBOARD_BANK_TRANSFER", true)} type="button">
            <IconWrapper className={`${styleButtonInner}`}>
              <PlusSlimIcon className="h-7 w-7" />
            </IconWrapper>
            <span className="text-sm">Add </span>
          </button>
          <button onClick={() => navigate(routes.DASHBOARD.send.abs)} type="button">
            <IconWrapper className={`${styleButtonInner}`}>
              <ArrowUpSlimIcon className="h-7 w-7" />
            </IconWrapper>
            <span className="text-sm">Send</span>
          </button>
        </div>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2 pt-10 gap-x-10 gap-y-12">
        <aside>
          <header className="mb-5">
            <h3 className="text-xl font-normal">Transactions</h3>
          </header>
          <div className="flex-grow flex flex-wrap gap-3 [&>div]:flex-grow justify-end">
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
                onClick={() => { }}
                className="flex items-center justify-center font-medium gap-x-2.5 bg-slate-200/80 py-2.5 px-4 rounded-xl rounded-tl-sm text-sm animate-active">
                <IconWrapper className="text-slate-600">
                  <FilterIcon />
                </IconWrapper>
              </button>
              <button
                type="button"
                className="flex items-center justify-center font-medium gap-x-2.5 bg-slate-200/80 py-2.5 px-4 rounded-xl rounded-tl-sm text-sm animate-active">
                <IconWrapper className="text-slate-600">
                  <DownloadIcon className="w-5 h-5" />
                </IconWrapper>
              </button>
            </div>
          </div>
          <div className="mt-3">
            <section className="my-8">
              <header className="flex items-center justify-between gap-x-4 mb-3 pb-1 border-b">
                <h2 className="text-md tracking-tight font-normal">Today</h2>
                <Link to={routes.DASHBOARD.transaction.transactions.abs} className=" font-medium text-slate-600">
                  See all
                </Link>
              </header>
              <div>
                <ul className="flex flex-col gap-y-3">
                  {transactions.map((tx) => {
                    let route;
                    if (tx.subtitle === "Sent Out") {
                      route = routes.DASHBOARD.transaction.index.abs;
                    } else if (tx.subtitle === "Sent In") {
                      route = routes.DASHBOARD.transaction.send.abs;
                    } else if (tx.subtitle === "Reward") {
                      route = routes.DASHBOARD.transaction.cashback.abs;
                    }

                    return (
                      <li key={tx.id}>
                        <Link
                          to={route}
                          className="flex justify-between items-center gap-3 hover:bg-slate-100/50 rounded-lg transition-all ease-in-out duration-300 py-3 px-2 border-2 border-solid border-transparent bg-transparent active:border-black active:bg-stone-100"
                        >
                          <IconWrapper className="bg-slate-200/50 text-slate-600 p-2.5 rounded-full">
                            <ArrowDownIcon className={`${tx.iconClass} w-5 h-5`} />
                          </IconWrapper>
                          <div className="flex items-center justify-between flex-grow gap-3">
                            <aside className="text-start">
                              <h3 className="leading-tight font-medium">{tx.title}</h3>
                              <p className="text-gray-500 text-sm">{tx.subtitle}</p>
                            </aside>
                            <aside className="text-end">
                              <h3 className="leading-tight font-medium">{tx.amount}</h3>
                              <p className="text-gray-500 text-sm">{tx.balance}</p>
                            </aside>
                          </div>
                        </Link>
                      </li>
                    );
                  })}
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
                    <Link
                      to={routes.DASHBOARD.transaction.cashback.abs}
                      className="flex justify-between items-center gap-3 hover:bg-slate-100/50 rounded-lg transition-all ease-in-out duration-300 py-3 px-2 border-2 border-solid border-transparent bg-transparent active:border-black active:bg-stone-100"
                    >
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
        </aside>
        <aside>
          <header className="mb-5">
            <h3 className="text-xl font-normal">Options</h3>
          </header>
          <BorderWrapper
            onClick={() => navigate(routes.DASHBOARD.earn.abs)}
            radiusSize="2xl"
            type="button"
            as="button"
            borderStyle="border-slate-300"
            noBorderAt="rounded-tl-none"
            cn="border-2 py-4 px-3 bg-slate-100/80 flex items-center w-full gap-x-3.5">
            <IconWrapper className="p-2 bg-white rounded-full">
              <PlusSlimIcon />
            </IconWrapper>
            <div className="flex flex-grow flex-col space-y-1 items-start text-start">
              <span className="font-semibold">Refer to earn</span>
              <span className="text-sm text-slate-600"> Boost your NGN with a 4.18% variable rate</span>
            </div>
            <IconWrapper>
              <ChevronRightIcon />
            </IconWrapper>
          </BorderWrapper>
          <div className="mt-3">
            <span className="text-sm">Investment options are provided by Naira4yuan.</span>
          </div>
        </aside>
      </main>

      <WalletOptionModal
        open={isWalletModalOpen}
        modalData={{ toggleModal }}
        action={() => console.log("Modal action triggered")}
      />
      <BankTransferModal
        open={showBankTransferModal}
        modalData={{ toggleModal }}
        action={() => {
          setShowBankTransferModal(false);
        }}
      />

    </div>
  );
};
