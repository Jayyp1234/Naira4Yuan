import { StateDataContext } from "@/App";
import { ChevronDownIcon, ChevronLeftIcon, IconWrapper } from "@/data/Icons";
import { useModalTrigger } from "@/hooks/useModalTrigger";
import { AccountOwnershipSelectBalanceModal } from "@/components/LayoutComponents/AllModals";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { ProofOfAccountOwnershipSkeleton } from "@/components/Skeleton/Skeleton";

export const AccountOwnership = () => {
  const navigate = useNavigate();
  const { stateData, setStateData } = React.useContext(StateDataContext);

  const {
    data: { modals },
    toggleModal,
    switchModal,
  } = useModalTrigger(stateData);

  const [selectedAccount, setSelectedAccount] = useState(null); // Track the selected account

  // This effect listens to changes in the selected account
  useEffect(() => {
    if (selectedAccount) {
      console.log("Account selected: ", selectedAccount);  // Debugging line
      setStateData((prevState) => ({
        ...prevState,
        selectedAccount, // Store the selected account in the state context
      }));
    }
  }, [selectedAccount, setStateData]);

  // Check if the Download button should be enabled
  const isDownloadEnabled = selectedAccount !== null;

  const [isDashboardLoading, setIsDashboardLoading] = useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsDashboardLoading(false);
    }, 2000); // 2000ms = 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isDashboardLoading) {
    return <ProofOfAccountOwnershipSkeleton />;
  }

  return (
    <>
      <div className="max-w-2xl">
        <nav className="flex items-center flex-1 mb-3">
          <button
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            onClick={() => navigate(-1)}
          >
            <ChevronLeftIcon className="w-4 h-4" />
            <span>Back</span>
          </button>
        </nav>
        <header className="flex flex-col items-start gap-y-8">
          <h2 className="text-2xl font-bold">Proof of account ownership</h2>
          <span>
            A document confirming your ownership of your Naira4yuan account, including your account holder name and account details.
          </span>
        </header>
        <section className="my-8">
          <div className="flex flex-col gap-y-0.5 mt-10 mb-8">
            <span>Select your default language</span>
            <button
              type="button"
              onClick={() => toggleModal("DASHBOARD_ACCOUNT_OWNERSHIP", true)}
              className="flex items-center justify-between bg-[#F8F9FD] px-3.5 py-3 w-full rounded-lg"
            >
              <span>Select account</span>
              <IconWrapper>
                <ChevronDownIcon />
              </IconWrapper>
            </button>
          </div>

          <div className="mt-16 flex flex-col gap-y-5">
            <button
              type="button"
              disabled={!isDownloadEnabled} // Enable only if an account is selected
              className="flex items-center justify-center px-3.5 py-3.5 w-full rounded-lg disabled:cursor-not-allowed disabled:opacity-60 enabled:active:scale-95 transition-all ease-in-out enabled:bg-[#F1C34E] enabled:text-black disabled:bg-gray-300"
            >
              <span>Download</span>
            </button>
            <button className="underline text-black font-medium" type="button">
              Give us feedback
            </button>
          </div>
        </section>
      </div>

      <AccountOwnershipSelectBalanceModal
        open={modals.DASHBOARD_ACCOUNT_OWNERSHIP}
        modalData={{ toggleModal }}
        action={setSelectedAccount}
      />
    </>
  );
};
