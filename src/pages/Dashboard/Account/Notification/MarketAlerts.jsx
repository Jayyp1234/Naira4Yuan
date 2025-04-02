import React from "react";
import { ArrowRightIcon, IconWrapper } from "@/data/Icons";
import { NotificationAlertComponent } from "./NotificationAlertComponent";

export const MarketAlerts = () => {
	return (
		<div className="flex flex-col gap-y-5 mb-10 max-w-4xl mx-auto">
			<header>
				<h2 className="text-2xl font-bold">Market alert details</h2>
			</header>
			<section className="flex flex-col gap-y-2">
				<div className="flex flex-col gap-y-1 mb-4">
					<h2 className="font-bold text-2xl flex gap-x-2">
						NGN
						<IconWrapper>
							<ArrowRightIcon />
						</IconWrapper>
						CNY
					</h2>
					<span className="text-slate-500">We’ll notify you when NGN to CNY drops or increases</span>
				</div>
				<div>
					<header className="border-b border-solid pb-1">
						<h6 className="text-lg text-slate-700">Notification settings</h6>
					</header>
					<NotificationAlertComponent />
				</div>
			</section>
		</div>
	);
};
