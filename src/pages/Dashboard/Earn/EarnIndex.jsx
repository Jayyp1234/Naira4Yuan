import React from "react";
import { BorderWrapper } from "@/components/PageComponents/Dashboard/Items";
import { EarnGift, EmptyImage } from "@/data";
import { FormControl } from "@/components/BaseComponents/FormInputs";
import { BankIcon, IconWrapper } from "@/data/Icons";
import Badge from "@/components/BaseComponents/Badge";

export const EarnIndex = () => {
	return (
		<main className="flex flex-col gap-y-7 mb-10">
			<BorderWrapper cn="grid bg-main p-8 md:px-10 md:py-9" noBorderAt="rounded-no-tl" radiusSize="3xl">
				<div className="grid grid-cols-1 lg:grid-cols-5 gap-y-10 gap-x-4">
					<aside className="md:col-span-3">
						<div>
							<h2 className="text-4xl md:text-5xl font-extrabold text-balance text-amber-50 tracking-tighter leading-tight md:leading-tight block">
								SHARE NAIRA4YUAN AND EARN ¥10
							</h2>
							<span className="text-amber-50 text-[1.1rem]">
								Share Naira4Yuan with 5 active friends (with at least one transaction) and earn ¥10, you can see the total amount earned below.
							</span>
							<div className="mt-10 flex-col sm:flex-row gap-y-3 flex items-end [&>div]:flex-grow gap-x-4">
								<FormControl
									style="!bg-transparent flex-grow border-solid border border-amber-50 rounded-xl text-lg text-white"
									value="JamesBay"
									readOnly
									type="url"
									spellCheck="false"
									label={{
										style: "text-white text-[1.05rem]",
										id: "referralLink",
										exist: true,
										text: "Share your link",
									}}
									floatEle={{
										position: "right",
										exist: true,
										children: (
											<button className="bg-white/30 flex items-center justify-center rounded-md animate-active py-1 px-2.5 text-white" type="button">
												Copy
											</button>
										),
									}}
								/>
								<button type="button" className="bg-amber-50 rounded-lg rounded-no-tl py-3 sm:py-2 animate-active px-4 mb-2 w-full sm:w-auto">
									Send
								</button>
							</div>
						</div>
					</aside>
					<aside className="lg:col-span-2 flex items-center">
						<figure className="flex items-center justify-center m-auto max-w-48 lg:ms-auto lg:me-8 md:max-w-52">
							<img src={EarnGift} alt="" className="h-auto max-w-full" />
						</figure>
					</aside>
				</div>
			</BorderWrapper>
			<BorderWrapper noBorderAt="rounded-no-tl" cn="p-5 border-black min-h-72" radiusSize="3xl">
				<header className="border-b border-solid pb-1">
					<h6 className="text-lg">Invited friends</h6>
				</header>
				<div className="min-h-72 flex">
					<ul className="py-4 w-full flex flex-col gap-y-4">
						<li className="md:pr-4">
							<div className="flex items-center gap-4 flex-grow">
								<IconWrapper className="bg-slate-200/50 text-slate-600 p-2.5 rounded-full">
									<BankIcon className="w-5 h-5 align-middle" />
								</IconWrapper>
								<div className="flex items-center justify-between flex-grow gap-3">
									<aside className="text-start flex flex-col gap-y-1">
										<h3 className="text-lg leading-tight font-medium">Olajide</h3>
										<p className="text-gray-500 text-sm leading-tight">Your invitee has registered</p>
									</aside>
									<aside className="flex items-center gap-x-4">
										<Badge text="Active" className={`py-0.5`} status="success" />
										<h3 className="text-lg leading-tight font-medium">&yen;15</h3>
									</aside>
								</div>
							</div>
						</li>
						<li className="md:pr-4">
							<div className="flex items-center gap-4 flex-grow">
								<IconWrapper className="bg-slate-200/50 text-slate-600 p-2.5 rounded-full">
									<BankIcon className="w-5 h-5 align-middle" />
								</IconWrapper>
								<div className="flex items-center justify-between flex-grow gap-3">
									<aside className="text-start flex flex-col gap-y-1">
										<h3 className="text-lg leading-tight font-medium">Olajide</h3>
										<p className="text-gray-500 text-sm leading-tight">Your invitee has registered</p>
									</aside>
									<aside className="flex items-center gap-x-4">
										<Badge text="Inactive" className={`py-0.5`} />
										<h3 className="text-lg leading-tight font-medium">&yen;15</h3>
									</aside>
								</div>
							</div>
						</li>
					</ul>
					{/* <div className="flex items-center flex-grow m-auto justify-center h-full">
						<figure className="max-w-48 flex items-center justify-center m-auto">
							<img src={EmptyImage} alt="" />
						</figure>
					</div> */}
				</div>
			</BorderWrapper>
			<div className="flex flex-col">
				<ul className="mb-4">
					<li className="border-b py-1.5 flex items-center justify-between">
						<span className="text-sm sm:text-base">Total earnings</span>
						<span className="font-bold text-lg">&yen;15</span>
					</li>
					<li className="border-b py-1.5 flex items-center justify-between">
						<span className="text-sm sm:text-base">Remaining Balance</span>
						<span className="font-bold text-lg">&yen;10</span>
					</li>
				</ul>
				<div>
					<button
						type="button"
						className="animate-active bg-[#F1C34E] border-solid border-[#F1C34E] border flex items-center justify-center py-3.5 px-8 rounded-lg">
						Widthdraw
					</button>
				</div>
			</div>
		</main>
	);
};
