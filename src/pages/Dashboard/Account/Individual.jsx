import React, { useState } from "react";
import { CompletedIcon } from "@/data";
import { ChevronDownIcon, ChevronLeftIcon, IconWrapper } from "@/data/Icons";
import { StateDataContext } from "@/App";
import { useModalTrigger } from "@/hooks/useModalTrigger";
import { BvnModal, BvnVerificationModal, FundWalletManualBVNVerificationModal, NinVerificationModal, SelectIdTypeModal } from "@/components/LayoutComponents/AllModals";
import { useNavigate } from "react-router";
import { IndividualVerificationSkeleton, LimitsSkeleton, SelectIdTypeSkeleton } from "@/components/Skeleton/Skeleton";

export default function Individual() {
  const navigate = useNavigate();
  const [isVerified, setIsVerified] = useState(false);

  return (
    <div className="w-full mx-auto md:w-9/12">
      <nav className="flex items-center flex-1 mb-5">
        <button
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
          onClick={() => navigate(-1)}
        >
          <ChevronLeftIcon className="w-4 h-4" />
          <span>Back</span>
        </button>
      </nav>
      {!isVerified && (
        <header className="flex items-center justify-between gap-x-3">
          <h2 className="text-xl font-bold">Individual Verification</h2>
          <div className="flex flex-col gap-y-1.5 text-end">
            <span className="bg-slate-200 flex items-center justify-center text-break select-none rounded-md py-1.5 px-2 leading-tighter text-sm text-main">
              Step 2 of 2
            </span>
          </div>
        </header>
      )}

      <main className="mt-12">
        {!isVerified ? (
          <IndividualStepper onComplete={() => setIsVerified(true)} />
        ) : (
          <Verified />
        )}
      </main>
    </div>
  );
}

const IndividualStepper = ({ onComplete }) => {
  const { stateData } = React.useContext(StateDataContext);
  const [isSelectIdOpen, setIsSelectIdOpen] = useState(false);
  const [isBvnModalOpen, setIsBvnModalOpen] = useState(false);
  const [isBvnVerificationOpen, setIsBvnVerificationOpen] = useState(false);
  const [isNinVerificationOpen, setIsNinVerificationOpen] = useState(false);
  const [isManualBvnVerificationOpen, setIsManualBvnVerificationOpen] = useState(false);
  const [selectedIdType, setSelectedIdType] = useState("");

  const toggleModal = (key, state) => {
    if (key === "SELECT_ID_TYPE") setIsSelectIdOpen(state);
    if (key === "BVN_VERIFICATION") setIsBvnModalOpen(state);
    if (key === "AUTH_BVN_VERIFICATION") setIsBvnVerificationOpen(state);
    if (key === "MANUAL_BVN_VERIFICATION") setIsManualBvnVerificationOpen(state);
    if (key === "AUTH_NIN_VERIFICATION") setIsNinVerificationOpen(state);
  };

  const handleIdTypeSelection = (idType) => {
    setSelectedIdType(idType);
    toggleModal("SELECT_ID_TYPE", false);
    if (idType === "bvn") {
      toggleModal("BVN_VERIFICATION", true);
    } else if (idType === "nin") {
      toggleModal("AUTH_NIN_VERIFICATION", true);
    }
  };


  const [isDashboardLoading, setIsDashboardLoading] = useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsDashboardLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isDashboardLoading) {
    return <SelectIdTypeSkeleton />;
  }

  return (
    <div>
      <div className="flex flex-col gap-y-1">
        <label className="text-[.96rem] font-medium text-gray-700 dark:text-gray-300">
          Verification type
        </label>
        <button
          type="button"
          onClick={() => toggleModal("SELECT_ID_TYPE", true)}
          className="w-full min-h-[3rem] h-auto outline-none p-4 transition ease-in-out duration-300 text-sm flex items-center justify-between border-gray-300 rounded-lg bg-[#F8F9FD] hover:bg-[#eff1f7]"
        >
          <span className="text-slate-500">
            {selectedIdType ? (selectedIdType === "bvn" ? "BVN" : "NIN") : "Select ID type"}
          </span>
          <IconWrapper>
            <ChevronDownIcon />
          </IconWrapper>
        </button>
      </div>

      <div className="mt-10">
        <button
          type="button"
          className="enabled:active:scale-95 text-white disabled:bg-[#DADADA] disabled:cursor-not-allowed transition-all ease-in-out bg-[#F1C34E] flex items-center justify-center w-full rounded-lg py-3.5 text-[.96rem]"
          onClick={onComplete}
        >
          Register
        </button>
      </div>

      <SelectIdTypeModal
        open={isSelectIdOpen}
        modalData={{ toggleModal }}
        action={handleIdTypeSelection}
      />

      <BvnModal
        open={isBvnModalOpen}
        modalData={{ toggleModal }}
        action={() => {
          toggleModal("BVN_VERIFICATION", false);
          toggleModal("AUTH_BVN_VERIFICATION", true);
        }}
      />

      <NinVerificationModal
        open={isNinVerificationOpen}
        modalData={{ toggleModal }}
        action={() => {
          toggleModal("AUTH_NIN_VERIFICATION", false);
        }}
      />

      <BvnVerificationModal
        open={isBvnVerificationOpen}
        modalData={{ toggleModal }}
        action={() => {
          toggleModal("AUTH_BVN_VERIFICATION", false);
        }}
      />

      <FundWalletManualBVNVerificationModal
        open={isManualBvnVerificationOpen}
        modalData={{ toggleModal }}
        action={() => {
          toggleModal("MANUAL_BVN_VERIFICATION", false);
        }}
      />
    </div>
  );
};

const Verified = () => {
  const navigate = useNavigate();
  const [isDashboardLoading, setIsDashboardLoading] = useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsDashboardLoading(false);
    }, 2000); // 2000ms = 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isDashboardLoading) {
    return <IndividualVerificationSkeleton />;
  }

  return (
    <section className="flex flex-col items-center text-center">
      <figure className="max-w-56">
        <img src={CompletedIcon} alt="" />
      </figure>
      <div className="mt-6 mb-5">
        <h1 className="text-3xl font-semibold">Individual Verification Complete</h1>
        <span className="text-sm text-slate-500">You will receive an email shortly</span>
      </div>
      <div className="flex flex-col w-full gap-y-3">
        <button
          type="button"
          onClick={() => navigate("/dashboard/account/limit")}
          className="border-[#f1c34e] border-solid border enabled:active:scale-95 transition-all ease-in-out bg-[#F1C34E] flex items-center justify-center w-full rounded-lg py-3.5 text-[.95rem] font-semibold"
        >
          Continue
        </button>
      </div>
    </section>
  );
};
