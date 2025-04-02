import React from "react";
import { ChatIcon, ChevronDownIcon, IconWrapper } from "@/data/Icons";
import { StateDataContext } from "@/App";
import { useModalTrigger } from "@/hooks/useModalTrigger";
import { TwoFAMessageAlertPreferenceModal } from "../../../../components/LayoutComponents/AllModals";

export const TextMessage = () => {
	const { stateData, setStateData } = React.useContext(StateDataContext);
	const {
		data: { modals },
		toggleModal,
		switchModal,
	} = useModalTrigger(stateData);

	return (
		<>
			<div>
				<header className="flex flex-col gap-y-5">
					<h2 className="text-2xl font-bold">Text message</h2>
					<span>Manage the phone numbers you use to receive text messages for 2-step verification.</span>
				</header>
				<section className="my-8">
					<header className="flex items-center justify-between border-b border-solid pb-1">
						<h6 className="text-lg text-slate-700 font-medium">Phone number</h6>
						<button type="button" className="underline text-black underline-offset-2">
							Edit default
						</button>
					</header>
					<div className="py-4 w-full flex flex-col gap-y-6 mt-1 mb-10">
						<div className="flex items-center gap-4 flex-grow">
							<IconWrapper className="bg-slate-200/50 text-slate-600 p-2.5 rounded-full">
								<ChatIcon className="w-[1.3rem] h-[1.3rem]" />
							</IconWrapper>
							<div className="flex items-center justify-between flex-grow gap-3">
								<aside className="text-start flex flex-col gap-y-1">
									<h3 className="text-lg leading-tight font-medium">+2348180688157</h3>
									<p className="text-gray-500 text-sm leading-tight">
										When text is your default 2-step verification method, we’ll send a code here first.
									</p>
								</aside>
							</div>
						</div>
						<div className="flex flex-col gap-y-0.5 mb-8 max-w-xl mt-2">
							<span>Preferred method</span>
							<button
								onClick={() => toggleModal("DASHBOARD_2FA_VERIFICATION_ALERT_METHOD", true)}
								type="button"
								className="flex items-center justify-between bg-[#F8F9FD] px-3.5 py-3 w-full rounded-lg">
								<span>Select method of delivery</span>
								<IconWrapper>
									<ChevronDownIcon />
								</IconWrapper>
							</button>
						</div>
					</div>
				</section>
			</div>

			<TwoFAMessageAlertPreferenceModal open={modals.DASHBOARD_2FA_VERIFICATION_ALERT_METHOD} modalData={{ toggleModal }} />
		</>
	);
};
