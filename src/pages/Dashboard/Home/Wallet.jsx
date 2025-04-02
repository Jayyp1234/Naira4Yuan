import React from "react";
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
import { Link } from "react-router";

export const Wallet = () => {
	const styleButtonInner = "p-2 rounded-full bg-[#F1C34E] animate-active";

	return (
		<div>
			<header className="flex flex-col items-center sm:flex-row gap-8 justify-between pb-5 border-b">
				<div className="flex flex-col gap-y-1">
					<span className="font-bold text-slate-500">NGN balance</span>
					<h2 className="text-3xl tracking-tight font-bold">00.00 NGN</h2>
					<div>
						<button type="button" className="flex items-center gap-x-2 w-max bg-gray-200 rounded-md py-1.5 sm:px-2">
							<IconWrapper>
								<BankIcon className="w-4 h-4" />
							</IconWrapper>
							<span className="uppercase hidden sm:inline text-xs">SUDO 002345678</span>
							<IconWrapper>
								<ChevronRightIcon className="w-4 h-4" />
							</IconWrapper>
						</button>
					</div>
				</div>
				<div className="flex items-center gap-x-3">
					<button type="button">
						<IconWrapper className={`${styleButtonInner}`}>
							<PlusSlimIcon className="h-8 w-8" />
						</IconWrapper>
						<span className="text-sm">Add </span>
					</button>
					<button type="button">
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
						<h3 className="text-xl font-semibold">Transactions</h3>
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
								onClick={() => {}}
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
								<h2 className="text-lg tracking-tight font-medium">Today</h2>
								<Link to="" className=" font-medium text-slate-600">
									See all
								</Link>
							</header>
							<div>
								<ul className="flex flex-col gap-y-3">
									<li>
										<Link className={`flex items-center gap-3.5 flex-grow`}>
											<IconWrapper className="bg-slate-200/50 text-slate-600 p-2.5 rounded-full">
												<ArrowDownIcon className="rotate-180 w-5 h-5" />
											</IconWrapper>
											<div className="flex items-center justify-between flex-grow gap-3">
												<aside className="text-start">
													<h3 className="leading-tight font-medium">AliPay</h3>
													<p className="text-gray-500 text-sm">Sent out</p>
												</aside>
												<aside className="text-end">
													<h3 className="leading-tight font-medium">1,200 NGN</h3>
													<p className="text-gray-500 text-sm">1,204 NGN</p>
												</aside>
											</div>
										</Link>
									</li>
									<li>
										<Link className={`flex items-center gap-3.5 flex-grow`}>
											<IconWrapper className="bg-slate-200/50 text-slate-600 p-2.5 rounded-full">
												<ArrowDownIcon className="w-5 h-5" />
											</IconWrapper>
											<div className="flex items-center justify-between flex-grow gap-3">
												<aside className="text-start">
													<h3 className="leading-tight font-medium">NGN Deposit</h3>
													<p className="text-gray-500 text-sm">Sent In</p>
												</aside>
												<aside className="text-end">
													<h3 className="leading-tight font-medium">1,200 NGN</h3>
													<p className="text-gray-500 text-sm">1,204 NGN</p>
												</aside>
											</div>
										</Link>
									</li>
									<li>
										<Link className={`flex items-center gap-3.5 flex-grow`}>
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
						<section className="my-8">
							<header className="flex items-center justify-between gap-x-4 mb-3 pb-1 border-b">
								<h2 className="text-lg tracking-tight font-medium">18th January, 2025</h2>
							</header>
							<div>
								<ul className="flex flex-col gap-y-3">
									<li>
										<Link className={`flex items-center gap-3.5 flex-grow`}>
											<IconWrapper className="bg-slate-200/50 text-slate-600 p-2.5 rounded-full">
												<ArrowDownIcon className="rotate-180 w-5 h-5" />
											</IconWrapper>
											<div className="flex items-center justify-between flex-grow gap-3">
												<aside className="text-start">
													<h3 className="leading-tight font-medium">AliPay</h3>
													<p className="text-gray-500 text-sm">Sent out</p>
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
						<h3 className="text-xl font-semibold">Options</h3>
					</header>
					<BorderWrapper
						radiusSize="2xl"
						type="button"
						as="button"
						borderStyle="border-slate-300"
						noBorderAt="rounded-tl-none"
						cn="border-2 py-4 px-3 bg-slate-100/80 flex items-center w-full gap-x-3.5">
						<IconWrapper className="p-2 bg-white rounded-full">
							<PlusSlimIcon />
						</IconWrapper>
						<div className="flex flex-grow flex-col items-start text-start">
							<span className="font-semibold">Upload file</span>
							<span className="text-sm text-slate-600"> PDF, JPG, JPEG, PNG, less than 10MB</span>
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
		</div>
	);
};
