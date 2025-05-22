import React, { useEffect, useState } from "react";
import { BorderWrapper } from "@/components/PageComponents/Dashboard/Items";
import { avatar1, avatar2, avatar3, avatar4, avatar5, cutGreenPlus, display1, Dollar, EarnGift, EmptyImage, EmptyImageVar2, EmptyImageVar3, Image1, Image2, Image3, whiteCircle } from "@/data";
import { FormControl } from "@/components/BaseComponents/FormInputs";
import { BankIcon, CustomImageIcon, IconWrapper } from "@/data/Icons";
import Badge from "@/components/BaseComponents/Badge";
import { BarChart3, Check, Copy } from "lucide-react";
import { ProofModal, ProofVerificationModal, WithdrawalModal } from "@/components/LayoutComponents/AllModals";
import { Link, useNavigate } from "react-router";
import { routes } from "@/data/routes";
import { CashbackReferralSkeleton, ReferralPageSkeleton, WalletPageSkeleton } from "@/components/Skeleton/Skeleton";

export const CashbackIndex = () => {
  const navigate = useNavigate();

  const [isWithdrawalOpen, setIsWithdrawalOpen] = useState(false);

  const toggleModal = (type, value) => {
    switch (type) {
      case "WITHDRAWAL":
        setIsWithdrawalOpen(value);
        break;
      case "PROOF":
        setIsProofModalOpen(value);
        break;
      case "PROOF_VERIFICATION":
        setIsProofVerificationOpen(value);
        break;
      default:
        break;
    }
  };


  const handleProceed = () => {
    // handle withdrawal action here
    console.log("Proceed with withdrawal");
    setIsWithdrawalOpen(false);
  };


  const [isProofVerificationOpen, setIsProofVerificationOpen] = useState(false);

  const handleGoBackHome = () => {
    setIsProofModalOpen(false);
    navigate(routes.DASHBOARD.index.abs); // adjust route if needed
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const [copied, setCopied] = useState(false);
  const inviteLink = "naira4yuan/invite/adremiT";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(inviteLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const [isProofModalOpen, setIsProofModalOpen] = useState(false);

  const modalData = {
    toggleModal: (name, value) => {
      if (name === "PROOF") setIsProofModalOpen(value);
    },
  };

  const slides = [
    {
      id: 0,
      content: (
        <BorderWrapper
          cn="grid bg-main p-3 pt-5 md:px-5 md:pb-3 md-pt-14"
          noBorderAt="rounded-no-tl"
          radiusSize="3xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 items-center justify-between">
            <aside className="md:col-span-4">
              <div className="mb-2">
                <h2 className="text-xl md:text-2xl font-extrabold text-balance text-amber-50 tracking-wide leading-tight md:leading-tight block">
                  SHARE NAIRA4YUAN AND EARN ¥10
                </h2>
                <div className="max-w-xl">
                  <span className="text-amber-50 text-sm">
                    Share Naira4Yuan with 5 active friends (with at least one
                    transaction) and earn ¥10, you can see the total amount
                    earned below.
                  </span>
                </div>
              </div>
              <div className="flex flex-col sm:items-center sm:flex-row gap-4 max-w-2xl">
                <div className="flex-grow flex items-center rounded-lg bg-transparent border border-[#F5F5DC] p-1 pr-3">
                  <div className="flex-grow px-2 py-3 text-[#F5F5DC] font-medium text-xl overflow-hidden text-ellipsis whitespace-nowrap">
                    {inviteLink}
                  </div>
                  <button
                    onClick={handleCopy}
                    className="bg-[#F5F5DC80] hover:bg-[#F5F5DC99] text-white rounded-lg px-2 py-1 transition-colors"
                  >
                    {copied ? (
                      <span className="flex items-center">Copied</span>
                    ) : (
                      <span className="flex items-center">Copy</span>
                    )}
                  </button>
                </div>
                <button className="bg-[#F5F5DC] text-[#122231] rounded-lg rounded-no-tl text-base py-4 px-6">
                  Share link
                </button>
              </div>
            </aside>
            <aside className="lg:col-span-1 flex items-end justify-end">
              <figure className="flex items-center justify-end max-w-48 lg:ms-8 md:max-w-52">
                <img src={EarnGift} alt="" className="h-auto max-w-full" />
              </figure>
            </aside>
          </div>
        </BorderWrapper>
      ),
    },
    {
      id: 1,
      content: (
        <BorderWrapper
          cn="grid bg-black p-3 pt-5 md:px-5 md:pb-3 md-pt-14"
          noBorderAt="rounded-no-tl"
          radiusSize="3xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 items-center justify-between">
            <aside className="md:col-span-4">
              <div className="mb-2">
                <h2 className="text-xl md:text-2xl font-extrabold text-balance text-amber-50 tracking-wide leading-tight md:leading-tight block">
                  REVIEW NAIRA4YUAN AND WIN 1000NGN
                </h2>
                <div className="max-w-xl">
                  <span className="text-amber-50 text-sm">
                    Give us a 5 star detailed review through the three channels
                    below and upload your review to get an instant 1000NGN. Only
                    for active users.
                  </span>
                </div>
              </div>
              <div className="flex flex-col sm:items-center sm:flex-row flex-wrap gap-4">
                <button className="bg-transparent text-[#F5F5DC] rounded-lg border outline outline-1 outline-[#F5F5DC] transition-shadow border-[#F5F5DC] text-base py-4 px-6">
                  Trustpilot
                </button>
                <button className="bg-transparent text-[#F5F5DC] rounded-lg border outline outline-1 outline-[#F5F5DC] transition-shadow border-[#F5F5DC] text-base py-4 px-6">
                  Google My Business
                </button>
                <button
                  onClick={() => modalData.toggleModal("PROOF", true)}
                  className="bg-[#F5F5DC] text-[#122231] rounded-lg rounded-no-tl text-base py-4 px-6"
                >
                  Upload Proof to Win
                </button>
              </div>
            </aside>
            <aside className="lg:col-span-1 flex items-end justify-end">
              <figure className="flex items-center justify-end max-w-48 lg:ms-8 md:max-w-52">
                <img src={EarnGift} alt="" className="h-auto max-w-full" />
              </figure>
            </aside>
          </div>
        </BorderWrapper>
      ),
    },
  ];

  useEffect(() => {
    if (isProofModalOpen) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length, isProofModalOpen]);

  const handleProofSubmit = () => {
    // Add your logic here – e.g., send uploaded files to an API
    console.log("Proof submitted");

    // Close modal
    setIsProofModalOpen(false);
    setIsProofVerificationOpen(true);
  };

  const filterOptions = ["All", "Pending", "Successful", "Failed", "Queued"];

  // const cashbackData = [
  //   { label: "Cashback by invite", color: "bg-[#DBF5FF] text-[#1552FD]" },
  //   { label: "Cashback by transaction", color: "bg-[#E8FFF0] text-[#1B7339]" },
  //   { label: "Cashback Withdrawal", color: "bg-[#FFF9EB] text-[#E2A71B]" },
  //   { label: "Cashback Withdrawal", color: "bg-[#FFF9EB] text-[#E2A71B]" },
  //   { label: "Cashback by transaction", color: "bg-[#E8FFF0] text-[#1B7339]" },
  //   { label: "Cashback Withdrawal", color: "bg-[#FFF9EB] text-[#E2A71B]" },
  //   { label: "Cashback by invite", color: "bg-[#DBF5FF] text-[#1552FD]" },
  // ];

  const cashbackData = [
    {
      id: 1,
      name: "Cashback Earned",
      code: "Cashback by invite",
      date: "13-May-2025 01:07pm",
      amount: "120 CNY",
      status: "Successful",
    },
    {
      id: 2,
      name: "Cashback Earned",
      code: "Cashback by transaction",
      date: "13-May-2025 09:50am",
      amount: "30 CNY",
      status: "Pending",
    },
    {
      id: 3,
      name: "Cashback Earned",
      code: "Cashback Withdrawal",
      date: "12-May-2025 08:45am",
      amount: "15 CNY",
      status: "Failed",
    },
    // {
    //   id: 4,
    //   name: "Cashback Earned",
    //   code: "Cashback by transaction",
    //   date: "11-May-2025 07:30am",
    //   amount: "50 CNY",
    //   status: "Queued",
    // },
    {
      id: 5,
      name: "Cashback Earned",
      code: "Cashback by invite",
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

  const [activeFilter, setActiveFilter] = useState("All");

  const filteredData =
    activeFilter === "All"
      ? cashbackData
      : cashbackData.filter((item) => item.status === activeFilter);

  const [isDashboardLoading, setIsDashboardLoading] = useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsDashboardLoading(false);
    }, 2000); // 2000ms = 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isDashboardLoading) {
    return <CashbackReferralSkeleton />;
  }

  return (
    <main className="flex flex-col gap-y-7">
      <div className="space-y-2">
        <div className="transition-all duration-500 ease-in-out">
          {slides[currentSlide].content}
        </div>
        <div className="flex gap-2 justify-center mb-5">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${currentSlide === index
                ? "bg-[#636317]"
                : "bg-[#a0a072b0] hover:bg-[#a0a072]"
                } transition-all`}
            ></button>
          ))}
        </div>
      </div>

      <div className="flex flex-col space-y-4">
        <div className="max-w-60">
          <p className="text-gray-500 text-sm mb-1">Total cashback</p>
          <div className="flex items-center justify-between">
            <p className="text-black text-3xl font-bold">00.00 NGN</p>
            <BarChart3 className="w-5 h-5 text-gray-500" />
          </div>
        </div>
        <div>
          <button
            onClick={() => toggleModal("WITHDRAWAL", true)}
            type="button"
            className="animate-active bg-[#F1C34E] border-solid border-[#F1C34E] border flex items-center justify-center py-2 px-5 font-medium rounded-xl rounded-no-tl">
            Widthdraw
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row bg-[#F8F9FD] border border-[#E2E8F0] rounded-xl rounded-no-tl">
        <div className="flex-1 bg-[#F8F9FD] rounded-xl rounded-no-tl rounded-no-br rounded-no-tr border-r shadow-sm p-6">
          <div className="text-gray-500 text-sm font-medium">
            All Time Cashback Earned
          </div>
          <div className="mt-1 text-4xl font-bold">
            ₦0.00
          </div>
        </div>

        <div className="flex-1 bg-[#F8F9FD] rounded-xl rounded-no-bl rounded-no-tl shadow-sm p-6">
          <div className="text-gray-500 text-sm font-medium">
            All Time Cashback Withdrawn
          </div>
          <div className="mt-1 text-4xl font-bold">
            ₦0.00
          </div>
        </div>
      </div>

      {/* <BorderWrapper noBorderAt="rounded-no-tl" cn="p-5 border-black min-h-72 mb-10" radiusSize="3xl">
        <div className="flex justify-between items-center pb-3 border-b flex-wrap gap-y-2">
          <h2 className="text-[#3D4F60] text-lg font-medium">Invited friends</h2>
          <button className="text-[#3D4F60] text-base font-medium">See all</button>
        </div>

        <div className="flex flex-col gap-y-1">
          {cashbackData.slice(0, 5).map((item, index) => (
            <Link
              key={index}
              className="flex flex-col sm:flex-row justify-between sm:items-center py-3 px-2 border-b last:border-none gap-2 hover:bg-slate-100/50 rounded-lg transition-all ease-in-out duration-300 bg-transparent active:bg-[#D9D9D966]"
            >
              <div className="flex flex-col">
                <p className="text-black font-medium text-lg">Cashback Earned</p>
                <p className="text-gray-500 text-sm">Reward</p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <span className={`px-2 py-0.5 text-xs rounded-md font-medium w-fit ${item.color}`}>
                  {item.label}
                </span>
                <div className="text-right sm:text-left">
                  <p className="text-black font-medium text-sm">120 CNY</p>
                  <p className="text-gray-400 text-sm">120 CNY</p>
                </div>
              </div>
            </Link>
          ))}
        </div>


        <div className="flex flex-col items-center space-y-3 flex-grow m-auto justify-center h-full">
          <figure className="max-w-48 flex items-center justify-center m-auto mt-5">
            <img src={EmptyImage} alt="" />
          </figure>
          <span className="text-center">No referrals yet</span>
        </div>
      </BorderWrapper> */}

      <div className="space-y-4">
        <div className="flex justify-between items-center pb-3 border-b flex-wrap gap-y-2">
          <h2 className="text-[#3D4F60] text-lg font-medium">Invited friends</h2>
          <button className="text-[#3D4F60] text-base font-medium">See all</button>
        </div>

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
                {filteredData.slice(0, 5).map((item) => (
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
              <div className="flex flex-col items-center space-y-3 flex-grow m-auto justify-center h-full">
                <figure className="max-w-48 flex items-center justify-center m-auto mt-5">
                  <img src={EmptyImage} alt="" />
                </figure>
                <span className="text-center">No referrals yet</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <WithdrawalModal
        open={isWithdrawalOpen}
        modalData={{ toggleModal }}
        action={handleProceed}
      />
      <ProofModal
        open={isProofModalOpen}
        modalData={modalData}
        action={handleProofSubmit}
      />
      <ProofVerificationModal
        open={isProofVerificationOpen}
        modalData={{ toggleModal }}
        action={handleGoBackHome}
      />
    </main>
  );
};

export const EarnIndex = () => {
  const navigate = useNavigate();

  const [isWithdrawalOpen, setIsWithdrawalOpen] = useState(false);

  const toggleModal = (type, value) => {
    switch (type) {
      case "WITHDRAWAL":
        setIsWithdrawalOpen(value);
        break;
      case "PROOF":
        setIsProofModalOpen(value);
        break;
      case "PROOF_VERIFICATION":
        setIsProofVerificationOpen(value);
        break;
      default:
        break;
    }
  };


  const handleProceed = () => {
    // handle withdrawal action here
    console.log("Proceed with withdrawal");
    setIsWithdrawalOpen(false);
  };


  const [isProofVerificationOpen, setIsProofVerificationOpen] = useState(false);

  const handleGoBackHome = () => {
    setIsProofModalOpen(false);
    navigate(routes.DASHBOARD.index.abs); // adjust route if needed
  };

  const [copied, setCopied] = useState(false);
  const inviteLink = "naira4yuan/invite/adremiT";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(inviteLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const [isProofModalOpen, setIsProofModalOpen] = useState(false);

  const modalData = {
    toggleModal: (name, value) => {
      if (name === "PROOF") setIsProofModalOpen(value);
    },
  };

  const handleProofSubmit = () => {
    // Add your logic here – e.g., send uploaded files to an API
    console.log("Proof submitted");

    // Close modal
    setIsProofModalOpen(false);
    setIsProofVerificationOpen(true);
  };

  const cashbackItems = [
    { id: 1, code: "CEBISEGUN234", amount: "120 CNY" },
    { id: 2, code: "CEBISEGUN234", amount: "120 CNY" },
    { id: 3, code: "CEBISEGUN234", amount: "120 CNY" },
    { id: 4, code: "CEBISEGUN234", amount: "120 CNY" },
    { id: 3, code: "CEBISEGUN234", amount: "120 CNY" },
    { id: 4, code: "CEBISEGUN234", amount: "120 CNY" },
    { id: 3, code: "CEBISEGUN234", amount: "120 CNY" },
    { id: 4, code: "CEBISEGUN234", amount: "120 CNY" },
  ];

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

  const [activeFilter, setActiveFilter] = useState("All");

  const filteredData =
    activeFilter === "All"
      ? cashbackData
      : cashbackData.filter((item) => item.status === activeFilter);

  const [isDashboardLoading, setIsDashboardLoading] = useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsDashboardLoading(false);
    }, 2000); // 2000ms = 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isDashboardLoading) {
    return <ReferralPageSkeleton />;
  }

  return (
    <main className="w-full xl:w-11/12 flex flex-col space-y-6 mx-auto">
      <div className="space-y-12 mb-5">
        <BorderWrapper
          cn="bg-[#013B33] p-5 rounded-3xl"
          radiusSize="3xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 items-start justify-between lg:items-center gap-3">
            {/* Left Content */}
            <aside className="lg:col-span-3 space-y-3">
              <h2 className="text-3xl sm:text-4xl md:text-[3rem] font-extrabold text-[#FDF8E5] leading-tight">
                Share Naira4yuan<br className="block sm:hidden" />
                <span className="sm:inline"> & earn CN¥10</span>
              </h2>

              <p className="text-[#E8EBE6] text-sm leading-relaxed max-w-2xl">
                Refer 3 friends to Naira4yuan and earn ¥10!<br />
                Once your friends become active, you can track their progress below.<br />
                As soon as all 3 are active, you’ll receive your reward automatically.
              </p>

              <div className="">
                <p className="text-[#E8EBE6] text-sm leading-relaxed max-w-2xl mb-1">Share your link</p>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                  <div className="flex-grow flex items-center justify-between rounded-xl border border-[#CBD9C3] px-2 py-2">
                    <span className="text-[#9FE870] font-medium text-base truncate">
                      naira4yuan.com/invite/333aderemit1
                    </span>
                    <button
                      onClick={handleCopy}
                      className="ml-2 sm:ml-4 bg-[#FFFFFF1A] hover:bg-[#2B6C5F] text-[#9FE870] font-medium px-3 py-1.5 rounded-full transition"
                    >
                      {copied ? "Copied" : "Copy"}
                    </button>
                  </div>
                  <button className="bg-[#B6FF6B] text-[#013B33] font-semibold text-sm sm:text-base px-6 py-3 rounded-full w-full sm:w-auto">
                    Share
                  </button>
                </div>
              </div>
            </aside>

            {/* Avatars */}
            <aside className="lg:col-span-2 flex justify-center mt-6 lg:mt-0">
              <div className="flex space-x-4">
                <div className="rounded-2xl bg-white overflow-hidden p-3">
                  <img src={Image2} alt="Friend 1" className="w-8 h-8 sm:w-10 sm:h-10 object-cover rounded-full" />
                </div>
                <div className="rounded-2xl bg-white overflow-hidden p-3">
                  <img src={avatar1} alt="Friend 1" className="w-8 h-8 sm:w-10 sm:h-10 object-cover rounded-full" />
                </div>
                <div className="rounded-2xl bg-white overflow-hidden p-3">
                  <img src={avatar3} alt="Friend 1" className="w-8 h-8 sm:w-10 sm:h-10 object-cover rounded-full" />
                </div>
              </div>
            </aside>
          </div>
        </BorderWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-5 items-center bg-white">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-1">Invite 3 friends</h2>
            <p className="text-base text-gray-600">
              You{`'`}ll earn a reward once three friends sign up using your link, open an individual account, and complete at least one transaction. You can track their progress anytime.
            </p>
          </div>
          <div className="lg:col-span-2 flex justify-center order-last lg:order-first">
            <div className="flex flex-row relative bg-[#ECEFEB] rounded-full p-5 w-fit mx-auto">
              <div className="flex -space-x-4 relative z-10">
                <div className="w-[4.5rem] h-[4.5rem] rounded-full overflow-hidden">
                  <img
                    src={Image2}
                    alt="Friend 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[4.5rem] h-[4.5rem] rounded-full overflow-hidden">
                  <img
                    src={Image1}
                    alt="Friend 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[4.5rem] h-[4.5rem] rounded-full overflow-hidden">
                  <img
                    src={Image2}
                    alt="Friend 3"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="absolute right-5 top-0 -mt-3 -mr-4">
                <div className="flex items-center justify-center w-10 h-10 bg-green-400 rounded-full">
                  <img src={Dollar} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-5 items-center bg-white">
          <div className="lg:col-span-2 lg:max-w-72 mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-1">They have to be active.</h2>
            <p className="text-base text-gray-600">
              A friend is considered active once they open an individual account and complete at least one transaction.
            </p>
          </div>
          <div className="lg:col-span-2 flex justify-center lg:justify-start">
            <div className="flex space-x-2">
              <div className="rounded-3xl bg-[#ECEFEB] overflow-hidden p-5">
                <img src={Image2} alt="Friend 1" className="w-16 h-16 sm:w-16 sm:h-16 object-cover rounded-full" />
              </div>
              <div className="rounded-3xl bg-[#ECEFEB] overflow-hidden p-5">
                <img src={avatar1} alt="Friend 1" className="w-16 h-16 sm:w-16 sm:h-16 object-cover rounded-full" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-5 items-center bg-white">
          <div className="lg:col-span-2 lg:max-w-72">
            <h2 className="text-3xl font-bold text-gray-900 mb-1">You earn ¥10</h2>
            <p className="text-base text-gray-600">
              Once all 3 friends becomes active. You earn 10 chinese yuan.
            </p>
          </div>
          <div className="lg:col-span-2 flex justify-center order-last lg:order-first">
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <img src={Dollar} alt="" />
            </div>
          </div>
        </div>

        {/* <BorderWrapper cn="p-4 border-black min-h-72" radiusSize="3xl">
          <div className="flex justify-between items-center pb-1 border-b flex-wrap gap-y-3">
            <h2 className="text-[#3D4F60] text-sm font-medium">Referrals</h2>
            <Link to={routes.DASHBOARD.transaction.cashback.abs} className="text-[#3D4F60] text-sm font-medium underline">Goto Cashback Page</Link>
          </div>

          <div className="flex flex-col gap-y-2 mt-2">
            {cashbackItems.slice(0, 4).map((item) => (
              <>
                <div
                  key={item.id}
                  className="border-b border-gray-200 py-3 px-2.5 hover:bg-gray-50 transition-colors duration-200"
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
              </>

            ))}
          </div>

          <div className="flex flex-col items-center space-y-1 flex-grow m-auto justify-center h-full">
            <figure className="max-w-56 flex items-center justify-center m-auto mt-5">
              <img src={EmptyImageVar3} alt="" />
            </figure>
            <span className="text-center text-xl font-semibold">No referrals yet</span>
            <span className="text-center">Sounds like a great time to get someone new on board</span>
          </div>
        </BorderWrapper> */}

        <div className="space-y-4">
          <div className="flex justify-between items-center pb-3 border-b ">
            <h2 className="text-[#3D4F60] text-sm font-medium">Referrals</h2>
            <Link to={routes.DASHBOARD.transaction.cashback.abs} className="text-[#3D4F60] text-sm font-medium underline">Goto Cashback Page</Link>
          </div>

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
                  {filteredData.slice(0, 5).map((item) => (
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

      </div>

      <WithdrawalModal
        open={isWithdrawalOpen}
        modalData={{ toggleModal }}
        action={handleProceed}
      />
      <ProofModal
        open={isProofModalOpen}
        modalData={modalData}
        action={handleProofSubmit}
      />
      <ProofVerificationModal
        open={isProofVerificationOpen}
        modalData={{ toggleModal }}
        action={handleGoBackHome}
      />
    </main>
  );
};
