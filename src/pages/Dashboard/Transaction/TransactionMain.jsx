import React from "react";
import {
	ArrowDownIcon,
	BellIcon,
	ChevronDownIcon,
	CloseEyeIcon,
	DownloadIcon,
	GalleryImageIcon,
	IconWrapper,
	MoreHorizontalIcon,
	QuestionCircleIcon,
	UploadIcon,
} from "@/data/Icons";
import { RadioInput } from "../../../components/BaseComponents/FormInputs";
import { BorderWrapper } from "../../../components/PageComponents/Dashboard/Items";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "../../../components/ui/dropdown-menu";
import { useNavigate } from "react-router";
import { routes } from "@/data/routes";

export const TransactionMain = () => {
	const [activeTab, setActiveTab] = React.useState("updates");
	const navigate = useNavigate();

	return (
		<div>
			<header>
				<h2 className="text-2xl font-bold">Transaction details</h2>
			</header>
			<section className="my-8">
				<div className="flex items-center gap-3 flex-grow">
					<IconWrapper className="bg-slate-200/50 text-slate-600 p-2.5 rounded-full">
						<ArrowDownIcon className="rotate-180 w-5 h-5" />
					</IconWrapper>
					<div className="flex items-center justify-between flex-grow gap-3">
						<aside className="text-start">
							<h3 className="text-lg leading-tight font-medium">AliPay</h3>
							<p className="text-gray-500 text-sm">Sent out</p>
						</aside>
						<aside className="text-end">
							<h3 className="text-lg leading-tight font-medium">1,200 NGN</h3>
							<p className="text-gray-500 text-sm">1,204 NGN</p>
						</aside>
					</div>
				</div>
			</section>
			<section>
				<div className="mx-auto mt-10">
					<div className="flex items-center justify-between border-b">
						<aside>
							<button
								onClick={() => setActiveTab("updates")}
								className={`px-4 py-2 font-medium text-sm md:text-[1.025rem] before:content-[''] before:w-full before:h-[1.5px] before:transition-all before:duration-300 before:ease-in-out before:absolute before:bottom-0 relative before:left-1/2 before:-translate-x-1/2 ${
									activeTab === "updates" ? "text-black before:bg-black" : "text-gray-500 before:bg-transparent"
								}`}>
								Updates
							</button>
							<button
								onClick={() => setActiveTab("details")}
								className={`px-4 py-2 font-medium text-sm md:text-[1.025rem] before:content-[''] before:w-full before:h-[1.5px] before:transition-all before:duration-300 before:ease-in-out before:absolute before:bottom-0 relative before:left-1/2 before:-translate-x-1/2 ${
									activeTab === "details" ? "text-black before:bg-black" : "text-gray-500 before:bg-transparent "
								}`}>
								Details
							</button>
						</aside>
						<aside className="flex items-center gap-x-2 sm:gap-x-3.5">
							<DropdownMenu>
								<DropdownMenuTrigger className="flex items-center gap-px">
									<span className="text-sm md:text-[1.025rem]">General</span>
									<IconWrapper>
										<ChevronDownIcon />
									</IconWrapper>
									<DropdownMenuContent className="md:min-w-60 flex flex-col gap-y-5 md:max-w-sm w-full rounded-2xl p-4">
										<ul className="flex flex-col gap-y-2">
											<li>
												<button type="button" className="flex items-center gap-x-2">
													<IconWrapper className="bg-[#F3903FCC] rounded-full p-2">
														<BellIcon />
													</IconWrapper>
													<span>General</span>
												</button>
											</li>
											<li>
												<button type="button" className="flex items-center gap-x-2">
													<IconWrapper className="bg-[#10B25980] rounded-full p-2">
														<BellIcon />
													</IconWrapper>
													<span>Ecommerce</span>
												</button>
											</li>
											<li>
												<button type="button" className="flex items-center gap-x-2">
													<IconWrapper className="bg-[#00B8FF80] rounded-full p-2">
														<BellIcon />
													</IconWrapper>
													<span>General</span>
												</button>
											</li>
										</ul>
									</DropdownMenuContent>
								</DropdownMenuTrigger>
							</DropdownMenu>
              <button className="text-slate-600" type="button" onClick={() => navigate(routes.DASHBOARD.help.index.abs)}>
								<IconWrapper>
									<QuestionCircleIcon className="w-5 h-5 sm:w-6 sm:h-6" />
								</IconWrapper>
							</button>
							<DropdownMenu>
								<DropdownMenuTrigger className="text-slate-600">
									<IconWrapper>
										<MoreHorizontalIcon />
									</IconWrapper>
									<DropdownMenuContent className="md:min-w-64 flex flex-col gap-y-5 md:max-w-sm w-full rounded-2xl p-4">
										<ul className="flex flex-col gap-y-2">
											<li>
												<button
													type="button"
													onClick={() => {}}
													className="flex items-center gap-x-3 p-2 border-solid w-full rounded-lg transition-all ease-in-out duration-300 border border-transparent hover:border-slate-400/50">
													<IconWrapper>
														<CloseEyeIcon />
													</IconWrapper>
													<span className="text-sm sm:text-base">Hide this activity</span>
												</button>
												<button
													type="button"
													className="flex items-center gap-x-3 p-2 border-solid w-full rounded-lg transition-all ease-in-out duration-300 border border-transparent hover:border-slate-400/50">
													<IconWrapper>
														<DownloadIcon />
													</IconWrapper>
													<span className="text-sm sm:text-base">Get PDF receipt</span>
												</button>
											</li>
										</ul>
									</DropdownMenuContent>
								</DropdownMenuTrigger>
							</DropdownMenu>
						</aside>
					</div>

					{/* Tabs Content */}
					<div className="py-4 mt-5 pb-20">
						{activeTab === "updates" && (
							<div>
								<div className="v-stepper">
									<div className="v-stepper-item">
										<RadioInput checked className="form-check-input !shadow-none" readOnly />
										<div className="v-stepper-content">
											<span className="v-stepper-title">Tuesday, January 30, 2025 at 2:09PM</span>
											<small className="v-stepper-subtitle">You setup your transfer</small>
										</div>
									</div>
									<div className="v-stepper-item">
										<RadioInput checked className="form-check-input !shadow-none" readOnly />
										<div className="v-stepper-content">
											<span className="v-stepper-title">Tuesday, January 30, 2025 at 2:10PM</span>
											<span className="v-stepper-subtitle">You used NGN in your Naira4yuan wallet</span>
										</div>
									</div>
									<div className="v-stepper-item">
										<RadioInput checked className="form-check-input !shadow-none" readOnly />
										<div className="v-stepper-content">
											<span className="v-stepper-title">Your money is being sent out to YAN TEG's bank</span>
											<span className="v-stepper-subtitle">
												It should reach their bank soon. But time zone differences can delay - it could take up to 7 hours to process your transfer
											</span>
										</div>
									</div>
									<div className="v-stepper-item">
										<RadioInput className="form-check-input !shadow-none" readOnly />
										<div className="v-stepper-content">
											<span className="v-stepper-title">Wednesday, January 31, 2025 at 10:35AM</span>
											<span className="font-medium">Transfer complete</span>
											<span className="v-stepper-subtitle">YAN TEG’s Bank has received your payment</span>
										</div>
									</div>
								</div>
								<div className="flex items-center gap-x-3 mt-7">
									<button
										className="animate-active bg-[#F1C34E] border-solid border-[#F1C34E] border flex items-center justify-center py-3.5 px-5 text-sm rounded-lg"
										type="button">
										Share with recipient
									</button>
									<button
										className="animate-active bg-white border-[#F1C34E] border-solid border flex items-center justify-center py-3.5 px-5 text-sm rounded-lg text-[#d2a83c]"
										type="button">
										Repeat transaction
									</button>
								</div>
							</div>
						)}
						{activeTab === "details" && (
							<div>
								<div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
									<div className="flex flex-col gap-y-3 mb-10">
										<section className="mb-2">
											<header>
												<h3 className="font-bold text-xl">Transaction details</h3>
											</header>
											<div className="mt-2 flex flex-col gap-y-1">
												<div className="flex justify-between">
													<span className="text-slate-600">Account Channel</span>
													<span className="text-slate-600">ALIPAY</span>
												</div>
												<div className="flex justify-between">
													<span className="text-slate-600">Account holder name</span>
													<span className="text-slate-600">YAN TENG</span>
												</div>
											</div>
										</section>
										<hr />
										<section>
											<div className="flex justify-between">
												<span className="text-slate-600">Total Spent</span>
												<span className="font-medium text-slate-600">1,200 NGN</span>
											</div>
										</section>
										<hr />
										<section>
											<div className="mt-2 flex flex-col gap-y-1">
												<div className="flex justify-between">
													<span className="text-slate-600">Account Channel</span>
													<span className="text-slate-600">ALIPAY</span>
												</div>
												<div className="flex justify-between">
													<span className="text-slate-600">Account holder name</span>
													<span className="text-slate-600">YAN TENG</span>
												</div>
											</div>
										</section>
									</div>
									<div>
										<form action="">
											<section className="my-2">
												<header className="flex items-center justify-between">
													<span className="font-bold text-xl">ALIPAY details</span>
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
														<span className="text-slate-600">Screenshot </span>
														<div className="flex items-center gap-x-2 text-slate-600">
															<span className="font-semibold ">Uploaded</span>
															<IconWrapper>
																<GalleryImageIcon />
															</IconWrapper>
														</div>
													</div>
													<div className="flex justify-between">
														<span className="text-slate-600">Yan Teng gets exactly</span>
														<span className="font-semibold text-slate-600">120 CNY</span>
													</div>
												</div>
											</section>
											<section className="mt-7">
												<div className="flex flex-col">
													<label htmlFor="note" className="text-lg">
														Note
													</label>
													<textarea
														name="note"
														className="bg-slate-200 resize-none rounded-lg p-4"
														placeholder="Add a note"
														rows={2.5}
														id="note"></textarea>
												</div>
											</section>
											<section className="mt-7">
												<BorderWrapper
													radiusSize="lg"
													type="button"
													as="button"
													borderStyle="border-dashed border-slate-300"
													noBorderAt="rounded-tl-none"
													cn="border-2 py-2.5 px-3 bg-slate-100/60 flex items-start w-full gap-x-3.5">
													<IconWrapper className="mt-1">
														<UploadIcon />
													</IconWrapper>
													<div className="flex flex-grow flex-col items-start text-start">
														<span className="font-semibold">Upload file</span>
														<span className="text-sm text-slate-600"> PDF, JPG, JPEG, PNG, less than 10MB</span>
													</div>
												</BorderWrapper>
											</section>
										</form>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</section>
		</div>
	);
};
