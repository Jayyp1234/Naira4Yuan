import React from "react";
import Iframe from "../../BaseComponents/Iframe";
import { routes } from "@/data/routes";
import { ArrowTopRightIcon, IconWrapper } from "@/data/Icons";

export const VideoSection = () => {
	return (
		<div className="px-4 mx-auto w-full flex flex-col gap-8">
			<div className="grid grid-cols-1 sm:w-10/12 md:w-full xl:w-10/12 mx-auto w-full gap-10 lg:grid-cols-2 py-24">
				<aside className="">
					<Iframe srcLink={routes.EXTERNAL.youtube} />
				</aside>
				<aside className="flex flex-col">
					<div className="xl:w-full flex flex-col gap-y-4">
						<div className="relative md:w-full lg:w-10/12 xl:w-8/12">
							<h3 className="text-white text-3xl">
								YOU CAN NOW FINALLY <span className="text-white/50">RELY ON A PLATFORM TO DEAL WITH YOUR CHINESE PAYMENTS</span>
							</h3>
						</div>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:w-11/12 xl:w-10/12">
							<aside className="rounded-3xl flex flex-col gap-y-4 bg-[#1CB785] p-4">
								<header className="flex items-center justify-end">
									<IconWrapper>
										<ArrowTopRightIcon className="w-8 h-8" />
									</IconWrapper>
								</header>
								<div className="flex flex-col gap-y-3 -mt-6 pb-5">
									<h2 className="text-4xl font-bold">500+</h2>
									<span className="text-[.96rem]">Daily payments to China.</span>
								</div>
							</aside>
							<aside className="rounded-3xl flex flex-col gap-y-4 bg-[#E9FA49] p-4">
								<header className="flex items-center justify-end">
									<IconWrapper>
										<ArrowTopRightIcon className="w-8 h-8" />
									</IconWrapper>
								</header>
								<div className="flex flex-col gap-y-3 -mt-6 pb-5">
									<h2 className="text-4xl font-bold">500+</h2>
									<span className="text-[.96rem]">Growth in your business efficiency on Average.</span>
								</div>
							</aside>
						</div>
						<div className="w-full md:w-11/12">
							<span className="text-white">
								Paying for goods and sending funds to your Chinese suppliers has never been simpler or faster. Purchase Chinese Yuan (RMB) at
								unbeatable Naira rates and have it transferred to China within minutes.
							</span>
						</div>
					</div>
				</aside>
			</div>
		</div>
	);
};
