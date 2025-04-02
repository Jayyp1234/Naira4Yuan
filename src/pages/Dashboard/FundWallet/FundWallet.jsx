import React from "react";
import { ArrowDownIcon, BankIcon, BellIcon, CautionIcon, ChatIcon, ChevronRightIcon, IconWrapper, MedalIcon, OpenEyeIconVar } from "@/data/Icons";
import { Link, useNavigate } from "react-router";
import { Xchange } from "../../../components/LayoutComponents/Xchange";
import { FooterButton } from "../../../components/BaseComponents/FooterButton";
import { ProfileImage } from "../../../components/PageComponents/Dashboard/ProfileImage";
import { avatar1 } from "@/data";
import { routes } from "@/data/routes";

const commonLinkStyle = `hover:bg-slate-100/50 rounded-lg transition-all ease-in-out duration-300 p-1.5 px-2 border border-solid border-transparent bg-transparent active:border-slate-400 active:bg-stone-100`;
const balanceBoardTriggerBtnStyle =
	"flex items-center text-[.78rem] sm:text-sm md:text-sm hover:bg-gray-100 transition-all ease-in-out duration-300 justify-center py-3 px-3";

export const FundWallet = () => {
	const navigate = useNavigate();
	return (
		<div>
			<header className="flex flex-col gap-y-1">
				<span className="font-bold text-slate-500">Total balance</span>
				<h2 className="text-3xl tracking-tight font-bold">00.00 NGN</h2>
				<div className="flex items-center gap-x-3 mt-2">
					<button
						onClick={() => navigate(routes.DASHBOARD.wallets.abs)}
						type="button"
						className="animate-active rounded-no-tl font-medium flex items-center justify-center py-2.5 px-5 text-sm rounded-xl text-black bg-gray-200">
						Fund Wallet
					</button>
					<button
						onClick={() => navigate(routes.DASHBOARD.send.abs)}
						type="button"
						className="animate-active rounded-no-tl font-medium flex items-center justify-center py-2.5 px-5 text-sm rounded-xl text-black bg-[#F1C34E]">
						Send
					</button>
				</div>
			</header>
			<main>
				<section className="my-8">
					<div className="bg-[#F8F9FD] overflow-hidden rounded-xl rounded-tl-sm">
						<div className="px-4 py-2">
							<header className="mb-1">
								<div className="flex items-center justify-between gap-x-4">
									<aside className="flex items-center gap-x-2">
										<span className="font-semibold text-sm text-slate-500">My Naira Balance</span>
										<button
											type="button"
											className="transition ease-in-out duration-300 text-slate-600 p-1.5 rounded-full bg-transparent hover:bg-slate-200">
											<IconWrapper>
												<OpenEyeIconVar />
											</IconWrapper>
										</button>
									</aside>
									<aside className="flex items-center gap-x-1 justfy-end">
										<div className="hidden sm:flex items-center bg-[#F5F5DC] py-1 px-2.5 rounded-lg">
											<IconWrapper>
												<MedalIcon className="w-4 h-4" />
											</IconWrapper>
											<span className="text-xs font-medium text-main">Individual Account</span>
										</div>
										<button
											type="button"
											className="transition ease-in-out duration-300 text-slate-600 p-1.5 rounded-full bg-transparent hover:bg-slate-200">
											<IconWrapper>
												<CautionIcon />
											</IconWrapper>
										</button>
									</aside>
								</div>
							</header>
							<footer>
								<h2 className="font-bold text-4xl tracking-tighter truncate max-w-80">&#8358;0.00</h2>
							</footer>
						</div>
						<footer className="grid grid-cols-3 border-t">
							<button type="button" className={`${balanceBoardTriggerBtnStyle}`}>
								<div className="flex items-center gap-x-2 bg-gray-200 rounded-md py-1.5 sm:px-2">
									<IconWrapper>
										<BankIcon className="w-4 h-4" />
									</IconWrapper>
									<span className="uppercase hidden sm:inline text-xs">SUDO 002345678</span>
								</div>
							</button>
							<button type="button" className={`${balanceBoardTriggerBtnStyle} border-x border-stone-300/90 border-y-0 border-solid`}>
								Fund NGN Wallet
							</button>
							<button type="button" className={`${balanceBoardTriggerBtnStyle}`}>
								<span>Funding History</span>
							</button>
						</footer>
					</div>
				</section>
				
			</main>
		</div>
	);
};
