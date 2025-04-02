import React from "react";
import { ArrowDownIcon, CloseIcon, IconWrapper } from "@/data/Icons";
import { CheckBox, RadioInput, SwitchInput } from "../../BaseComponents/FormInputs";
import { ProfileImage } from "./ProfileImage";
import { avatar4, NigeriaIcon } from "@/data";
import { BorderWrapper } from "./Items";
import { StateDataContext } from "../../../App";
import useOutsideClick from "../../../hooks/useOutsideClick";

export const RecipientsFilter = () => {
	const {
		stateData,
		stateData: {
			dashboard: { recipients },
		},
		setStateData,
	} = React.useContext(StateDataContext);
	const sidebarRef = React.useRef(null);

	function closeFilterSidebar() {
		const newData = structuredClone(stateData);
		newData.dashboard.recipients.filterSidebar = false;
		setStateData(newData);
	}

	useOutsideClick(sidebarRef, () => closeFilterSidebar(), recipients?.filterSidebar);

	return (
		<aside
			className={`bg-black/50 fixed flex justify-end h-full w-full z-50 top-0 right-0 transition-[opacity] duration-300 ease-in-out ${
				recipients?.filterSidebar
					? "opacity-100 pointer-events-auto backdrop-blur-sm"
					: "backdrop-blur-none opacity-0 bg:transparent pointer-events-none"
			}`}>
			<div
				ref={sidebarRef}
				className={`${
					recipients?.filterSidebar ? "translate-x-0" : "translate-x-full"
				} sticky top-0 bg-white md:p-0 transition-[transform] duration-300 ease-in-out shadow-lg h-full w-full sm:w-4/6 md:w-4/6 lg:w-3/6 xl:w-2/6`}>
				<header className="flex items-center justify-between px-4 py-3 border-b">
					<h2 className="font-semibold">Filters</h2>
					<button
						type="button"
						className="bg-transparent hover:bg-slate-100 p-1.5 transition duration-300 ease-in-out rounded-full"
						onClick={closeFilterSidebar}>
						<IconWrapper>
							<CloseIcon className="w-5 h-5" />
						</IconWrapper>
					</button>
				</header>
				<div className="p-5 flex flex-col gap-y-1 overflow-y-auto max-h-[90dvh]">
					<div className="flex items-center justify-between">
						<span>Show hidden transactions</span>
						<SwitchInput isOn={false} />
					</div>
					<section className="my-4">
						<header className="border-b pb-1.5">
							<h4 className="text-slate-600">Account settings</h4>
						</header>
						<div className="flex items-center gap-x-3 mt-3">
							<button
								type="button"
								className="bg-slate-100 hover:bg-slate-200 py-2 px-4 text-sm rounded-tl-sm animate-active  rounded-lg flex items-center justify-center font-medium">
								Last month
							</button>
							<button
								type="button"
								className="bg-slate-100 hover:bg-slate-200 py-2 px-4 text-sm rounded-tl-sm animate-active rounded-lg flex items-center justify-center font-medium">
								Last quarter
							</button>
							<button
								type="button"
								className="bg-slate-100 hover:bg-slate-200 py-2 px-4 text-sm rounded-tl-sm animate-active rounded-lg flex items-center justify-center font-medium">
								Last year
							</button>
						</div>
					</section>
					<section className="my-4">
						<header className="border-b pb-1.5 flex items-center justify-between">
							<h4 className="text-slate-600">Recipients</h4>
							<button type="button" className="underline text-[.94rem] font-medium">
								View all
							</button>
						</header>
						<ul className="flex flex-col gap-y-3 mt-3">
							<li className="flex items-center justify-between gap-x-4">
								<ProfileImage AvatarImage={avatar4} extraImage={NigeriaIcon} hasExtraImage={true} size="lg" />
								<aside className="flex flex-grow flex-col text-start items-start">
									<span className="font-medium leading-tight">{"Adam R. ACC"}</span>
									<small className="text-[.8rem] text-slate-600">{"Alipay ID: 7939383939382"}</small>
								</aside>
								<CheckBox />
							</li>
						</ul>
					</section>
					<section className="my-4">
						<header className="border-b pb-1.5">
							<h4 className="text-slate-600">Type</h4>
						</header>
						<div className="flex items-center gap-x-3 mt-3">
							<button
								type="button"
								className="bg-slate-100 hover:bg-slate-200 py-2 px-4 text-sm rounded-tl-sm animate-active rounded-lg flex items-center justify-center font-medium">
								Send In
							</button>
							<button
								type="button"
								className="bg-slate-100 hover:bg-slate-200 py-2 px-4 text-sm rounded-tl-sm animate-active rounded-lg flex items-center justify-center font-medium">
								Send Out
							</button>
							<button
								type="button"
								className="bg-slate-100 hover:bg-slate-200 py-2 px-4 text-sm rounded-tl-sm animate-active rounded-lg flex items-center justify-center font-medium">
								Rewards
							</button>
						</div>
					</section>
					<section className="my-4">
						<header className="border-b pb-1.5">
							<h4 className="text-slate-600">Status</h4>
						</header>
						<div className="flex items-center gap-x-3 mt-3">
							<button
								type="button"
								className="bg-slate-100 hover:bg-slate-200 py-2 px-4 text-sm rounded-tl-sm animate-active rounded-lg flex items-center justify-center font-medium">
								Completed
							</button>
							<button
								type="button"
								className="bg-slate-100 hover:bg-slate-200 py-2 px-4 text-sm rounded-tl-sm animate-active rounded-lg flex items-center justify-center font-medium">
								Cancelled
							</button>
						</div>
					</section>
					<section className="my-4">
						<header className="border-b pb-1.5">
							<h4 className="text-slate-600">Direction</h4>
						</header>
						<div className="flex flex-col gap-y-2 mt-3">
							<label htmlFor="all" className="cursor-pointer flex items-center justify-between gap-x-4 select-none">
								<div className="flex items-center gap-x-3 flex-grow">
									<IconWrapper className="bg-slate-200 p-2 rounded-full">
										<ArrowDownIcon className="rotate-180" />
									</IconWrapper>
									<span className="font-medium">All</span>
								</div>
								<RadioInput id="all" name="direction" />
							</label>
							<label htmlFor="money-in" className="cursor-pointer flex items-center justify-between gap-x-4 select-none">
								<div className="flex items-center gap-x-3 flex-grow">
									<IconWrapper className="bg-slate-200 p-2 rounded-full">
										<ArrowDownIcon />
									</IconWrapper>
									<span className="font-medium">Money In</span>
								</div>
								<RadioInput id="money-in" name="direction" />
							</label>
							<label htmlFor="money-out" className="cursor-pointer flex items-center justify-between gap-x-4 select-none">
								<div className="flex items-center gap-x-3 flex-grow">
									<IconWrapper className="bg-slate-200 p-2 rounded-full">
										<ArrowDownIcon className="rotate-180" />
									</IconWrapper>
									<span className="font-medium">Money out</span>
								</div>
								<RadioInput id="money-out" name="direction" />
							</label>
						</div>
					</section>

					<footer className="flex items-center justify-center gap-x-3 pt-3 mt-4">
						<BorderWrapper
							onClick={closeFilterSidebar}
							as="button"
							radiusSize="md"
							type="button"
							cn="flex-grow animate-active font-medium border-main py-3 flex items-center justify-center text-sm">
							Cancel
						</BorderWrapper>
						<BorderWrapper
							disabled="true"
							as="button"
							radiusSize="md"
							type="button"
							cn="flex-grow font-medium disabled:cursor-not-allowed disabled:opacity-60 enabled:active:scale-95 transition-all ease-in-out enabled:bg-main enabled:text-white enabled:border-main disabled:border-slate-200 py-3 disabled:bg-gray-300 flex items-center justify-center text-sm">
							Apply
						</BorderWrapper>
					</footer>
				</div>
			</div>
		</aside>
	);
};
