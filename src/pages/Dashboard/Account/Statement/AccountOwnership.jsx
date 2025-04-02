import { StateDataContext } from "@/App";
import { ChevronDownIcon, IconWrapper } from "@/data/Icons";
import { useModalTrigger } from "@/hooks/useModalTrigger";
import { AccountOwnershipSelectBalanceModal } from "@/components/LayoutComponents/AllModals";
import React from "react";

export const AccountOwnership = () => {
	const { stateData, setStateData } = React.useContext(StateDataContext);

	const {
		data: { modals },
		toggleModal,
		switchModal,
	} = useModalTrigger(stateData);

	return (
		<>
			<div className="max-w-2xl">
				<header className="flex flex-col items-start gap-y-8">
					<h2 className="text-2xl font-bold">Proof of account ownership</h2>
					<span>A document confirming your ownership of your Naira4yuan account, including your account holder name and account details.</span>
				</header>
				<section className="my-8">
					<div className="flex flex-col gap-y-0.5 mt-10 mb-8">
						<span>Select your default language</span>
						<button
							type="button"
							onClick={() => toggleModal("DASHBOARD_ACCOUNT_OWNERSHIP", true)}
							className="flex items-center justify-between bg-[#F8F9FD] px-3.5 py-3 w-full rounded-lg">
							<span>Select account</span>
							<IconWrapper>
								<ChevronDownIcon />
							</IconWrapper>
						</button>
					</div>
					<div className="mt-16 flex flex-col gap-y-5">
						<button
							// disabled
							type="button"
							className="flex items-center justify-center px-3.5 py-3.5 w-full rounded-lg disabled:cursor-not-allowed disabled:opacity-60 enabled:active:scale-95 transition-all ease-in-out enabled:bg-[#F1C34E] enabled:text-black disabled:bg-gray-300 ">
							<span>Download</span>
						</button>
						<button className="underline text-black font-medium" type="button">
							Give us feedback
						</button>
					</div>
				</section>
			</div>

			<AccountOwnershipSelectBalanceModal open={modals.DASHBOARD_ACCOUNT_OWNERSHIP} modalData={{ toggleModal }} />
		</>
	);
};
