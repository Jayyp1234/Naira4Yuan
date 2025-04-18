import React, { useEffect, useState } from "react";
import { BorderWrapper } from "@/components/PageComponents/Dashboard/Items";
import { EarnGift, EmptyImage } from "@/data";
import { FormControl } from "@/components/BaseComponents/FormInputs";
import { BankIcon, IconWrapper } from "@/data/Icons";
import Badge from "@/components/BaseComponents/Badge";
import { BarChart3, Check, Copy } from "lucide-react";
import { ProofModal, ProofVerificationModal, WithdrawalModal } from "@/components/LayoutComponents/AllModals";
import { useNavigate } from "react-router";
import { routes } from "@/data/routes";

export const EarnIndex = () => {
  const navigate = useNavigate();

  const cashbackData = [
    { label: "Cashback by invite", color: "bg-[#DBF5FF] text-[#1552FD]" },
    { label: "Cashback by transaction", color: "bg-[#E8FFF0] text-[#1B7339]" },
    { label: "Cashback Withdrawal", color: "bg-[#FFF9EB] text-[#E2A71B]" },
    { label: "Cashback Withdrawal", color: "bg-[#FFF9EB] text-[#E2A71B]" },
    { label: "Cashback by transaction", color: "bg-[#E8FFF0] text-[#1B7339]" },
    { label: "Cashback Withdrawal", color: "bg-[#FFF9EB] text-[#E2A71B]" },
    { label: "Cashback by invite", color: "bg-[#DBF5FF] text-[#1552FD]" },
  ];

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
          <div className="grid grid-cols-1 lg:grid-cols-5 justify-between">
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
          <div className="grid grid-cols-1 lg:grid-cols-5 justify-between">
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
                ? "bg-[#F5F5DC]"
                : "bg-[#F5F5DC40] hover:bg-[#F5F5DC80]"
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

      <BorderWrapper noBorderAt="rounded-no-tl" cn="p-5 border-black min-h-72 mb-10" radiusSize="3xl">
        <div className="flex justify-between items-center pb-3 border-b flex-wrap gap-y-2">
          <h2 className="text-[#3D4F60] text-lg font-medium">Invited friends</h2>
          <button className="text-[#3D4F60] text-base font-medium">See all</button>
        </div>

        <div>
          {cashbackData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row justify-between sm:items-center py-4 border-b last:border-none gap-2"
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
            </div>
          ))}
        </div>

        {/* <div className="flex flex-col items-center space-y-3 flex-grow m-auto justify-center h-full">
          <figure className="max-w-48 flex items-center justify-center m-auto mt-5">
							<img src={EmptyImage} alt="" />
          </figure>
          <span className="text-center">No referrals yet</span>
        </div> */}
      </BorderWrapper>

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
