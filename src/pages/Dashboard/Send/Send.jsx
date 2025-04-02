import React from "react";
import { BorderWrapper } from "../../../components/PageComponents/Dashboard/Items";
import { ChevronDownIcon, GalleryImageIcon, IconWrapper, WalletVariantIcon } from "@/data/Icons";
import { Link, useNavigate } from "react-router";
import { StateDataContext } from "../../../App";
import { useModalTrigger } from "../../../hooks/useModalTrigger";
import { Xchange } from "../../../components/LayoutComponents/Xchange";
import { BankTransferModal } from "../../../components/LayoutComponents/AllModals";
import { CompletedIcon } from "@/data";
import { routes } from "@/data/routes";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../../components/ui/accordion";
import { Beneficiary } from "../../../components/PageComponents/Dashboard/Beneficiary";

export const Send = () => {
	const {
		stateData: {
			dashboard: { send },
		},
		setStateData,
	} = React.useContext(StateDataContext);

	return (
		<div className="max-w-lg mx-auto">
			{send.stepperVal === 1 && <SendStep1 />}
			{send.stepperVal === 2 && <SendStep2 />}
			{send.stepperVal === 3 && <SendStep3 />}
		</div>
	);
};

export const SendStep1 = () => {
	const [openItem, setOpenItem] = React.useState(null);

	const {
		stateData: {
			dashboard: { send },
		},
		setStateData,
	} = React.useContext(StateDataContext);

	const toggleAccordion = (value) => {
		setOpenItem(openItem === value ? null : value);
	};
	return (
		<div className="flex flex-col gap-y-5 mb-10">
			<header>
				<h2 className="text-2xl">How much are you sending?</h2>
			</header>
			<section className="flex flex-col gap-y-2">
				<Xchange />
			</section>
			<section className="my-2">
				<Accordion type="single" collapsible className="w-full flex flex-col gap-y-4">
					<AccordionItem value="item-1" className="border border-solid border-slate-300 rounded-lg rounded-no-tl">
						<AccordionTrigger onClick={() => toggleAccordion("item-1")} className="hover:no-underline px-4 [&>svg]:hidden">
							<span> Select recipient from beneficiary </span>
							<IconWrapper>
								<ChevronDownIcon className={`w-7 h-7 ${openItem == `item-1` ? "rotate-180" : "rotate-0"}`} />
							</IconWrapper>
						</AccordionTrigger>
						<AccordionContent>
							<div className="px-4">
								<ul className="flex flex-col gap-y-2.5">
									{Array.from({ length: 4 }).map((_, index) => {
										return <Beneficiary key={index} itemAs="button" onClick={() => console.log("love")} />;
									})}
								</ul>
								<div className="text-end pe-3 mt-3">
									<button className="text-slate-600 font-semibold text-lg hover:underline">See all</button>
								</div>
							</div>
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-2" className="border border-solid border-slate-300 rounded-lg rounded-no-tl">
						<AccordionTrigger onClick={() => toggleAccordion("item-2")} className="hover:no-underline px-4 [&>svg]:hidden">
							<span>Add a new recipient</span>
							<IconWrapper>
								<ChevronDownIcon className={`w-7 h-7 ${openItem == `item-2` ? "rotate-180" : "rotate-0"}`} />
							</IconWrapper>
						</AccordionTrigger>
						<AccordionContent>{/* Content for adding a new recipient */}</AccordionContent>
					</AccordionItem>
				</Accordion>
			</section>
		</div>
	);
};

export const SendStep2 = () => {
	const { stateData, setStateData } = React.useContext(StateDataContext);

	const {
		data: { modals },
		toggleModal,
		switchModal,
	} = useModalTrigger(stateData);

	function closeAndRedirection() {
		const newStates = structuredClone(stateData);
		newStates.dashboard.send.stepperVal = 3;

		setStateData(newStates);
	}
	return (
		<>
			<div className="flex flex-col gap-y-5 mb-10">
				<section className="flex flex-col gap-y-2">
					<span className="text-lg text-slate-600">Payment Method</span>
					<BorderWrapper borderColor="border-stone-400" cn="py-2 px-4 flex items-center gap-x-3" radiusSize="2xl" noBorderAt="rounded-tl-sm">
						<IconWrapper className="rounded-full bg-gray-100 p-2">
							<WalletVariantIcon className="w-6 h-6" />
						</IconWrapper>
						<div className="flex-grow flex flex-col text-start ">
							<span className="text-lg">Wallet</span>
							<small className="text-slate-500">201,540.98 NGN</small>
						</div>
						<button
							type="button"
							className="bg-gray-200 flex items-center px-3.5 animate-active hover:bg-main rounded-md hover:text-white text-[.95rem] leading-tight py-2">
							Fund
						</button>
					</BorderWrapper>
				</section>
				<section className="my-2">
					<header className="flex items-center justify-between">
						<span className="font-bold text-xl">Transfer details</span>
						<button className="font-bold underline text-xl" type="button">
							Edit
						</button>
					</header>
					<div className="mt-4 flex flex-col gap-y-1">
						<div className="flex justify-between">
							<span className="text-slate-600">You send</span>
							<span className="font-semibold text-slate-600">1,352 NGN</span>
						</div>
						<div className="flex justify-between">
							<span className="text-slate-600">Total fees (included)</span>
							<span className="font-semibold text-slate-600">0 NGN</span>
						</div>
						<div className="flex justify-between">
							<span className="text-slate-600">Total amount we'll deduct</span>
							<span className="font-semibold text-slate-600">1,200 NGN</span>
						</div>
						<div className="flex justify-between">
							<span className="text-slate-600">Yan Teng gets exactly</span>
							<span className="font-semibold text-slate-600">120 CNY</span>
						</div>
					</div>
				</section>
				<hr />
				<section className="my-2">
					<header>
						<h3 className="font-bold text-xl">Recipient details</h3>
					</header>
					<div className="mt-2 flex flex-col gap-y-1">
						<div className="flex justify-between">
							<span className="text-slate-600">Account Channel</span>
							<span className="font-semibold text-slate-600">ALIPAY</span>
						</div>
						<div className="flex justify-between">
							<span className="text-slate-600">Account holder name</span>
							<span className="font-semibold text-slate-600">YAN TENG</span>
						</div>
						<div className="flex justify-between">
							<span className="text-slate-600">Alipay ID</span>
							<span className="font-semibold text-slate-600">0829820478493769</span>
						</div>
						<div className="flex justify-between">
							<span className="text-slate-600">Screenshot </span>
							<div className="flex items-center gap-x-2 text-slate-600">
								<span className="font-semibold ">Uploaded</span>
								<IconWrapper>
									<GalleryImageIcon />
								</IconWrapper>
							</div>
						</div>
					</div>
				</section>
				<hr />
				<section className="my-2">
					<header className="flex items-center justify-between">
						<h3 className="font-bold text-xl">Schedule details</h3>
						<button className="font-bold underline text-xl" type="button">
							Edit
						</button>
					</header>
					<div className="mt-2 flex flex-col gap-y-1">
						<div className="flex justify-between">
							<span className="text-slate-600">Sending</span>
							<span className="font-semibold text-slate-600">Now</span>
						</div>
						<div className="flex justify-between">
							<span className="text-slate-600">Should arrive</span>
							<span className="font-semibold text-slate-600">in 5 hours</span>
						</div>
						<div className="flex justify-between">
							<span className="text-slate-600">Repeats</span>
							<span className="font-semibold text-slate-600">Never</span>
						</div>
					</div>
				</section>
				<section>
					<span className="font-bold text-lg text-slate-700">Reference</span>
					<BorderWrapper borderColor="border-stone-400" cn="py-3 px-4 flex items-center gap-x-3" radiusSize="xl" noBorderAt="rounded-tl-sm">
						<span>Tunde</span>
					</BorderWrapper>
				</section>
				<div className="mt-4">
					<button
						onClick={() => toggleModal("DASHBOARD_BANK_TRANSFER", true)}
						className="w-full bg-main rounded-no-tl py-3.5 font-semibold text-white rounded-lg animate-active"
						type="button">
						Confirm
					</button>
				</div>
			</div>

			<BankTransferModal
				modalData={{ toggleModal }}
				open={modals.DASHBOARD_BANK_TRANSFER}
				action={() => [closeAndRedirection(), toggleModal("DASHBOARD_BANK_TRANSFER", false)]}
			/>
		</>
	);
};

export const SendStep3 = () => {
	const navigate = useNavigate();
	return (
		<>
			<section className="flex flex-col items-center text-center">
				<figure className="max-w-56">
					<img src={CompletedIcon} alt="" />
				</figure>
				<div className="mb-5 mt-6">
					<h1 className="text-3xl font-semibold">Payment on the way🎉</h1>
					<span className="text-slate-700">
						You can track your payment on the
						<Link
							to={routes.DASHBOARD.transaction.abs}
							className="underline mx-1 underline-offset-[1.5px] hover:font-bold transition-all ease-in-out duration-300">
							transaction
						</Link>
						page
					</span>
				</div>
				<div className="flex flex-col gap-y-2 w-full mt-4">
					<button
						type="button"
						onClick={() => navigate(routes.DASHBOARD.index.abs)}
						className="animate-active text-white bg-main rounded-no-tl border border-solid border-main flex items-center justify-center w-full rounded-lg py-3.5 text-[.95rem] font-bold">
						Go back home
					</button>
					<button
						type="button"
						// onClick={}
						className="animate-active bg-white text-main rounded-no-tl border border-solid border-main flex items-center justify-center w-full rounded-lg py-3.5 text-[.95rem] font-bold">
						Download receipt
					</button>
				</div>
			</section>
		</>
	);
};
