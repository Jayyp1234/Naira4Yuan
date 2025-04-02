import React from "react";
import { BellIconVar, IconWrapper } from "@/data/Icons";
import { SwitchInput } from "@/components/BaseComponents/FormInputs";
import { NotificationAlertComponent } from "./NotificationAlertComponent";

export const Notifications = () => {
	return (
		<div className="flex flex-col gap-y-5 mb-10 max-w-4xl mx-auto">
			<header>
				<h2 className="text-2xl font-bold">Notifications</h2>
			</header>
			<section className="flex flex-col gap-y-2">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-3 flex-grow">
						<IconWrapper className="bg-slate-200/50 text-slate-600 p-2.5 rounded-full">
							<BellIconVar />
						</IconWrapper>
						<div>
							<h3 className="text-lg font-medium">Allow notifications</h3>
						</div>
					</div>
					<SwitchInput isOn={true} />
				</div>
				<div className="mt-3">
					<h4 className="font-semibold text-lg">Your transfers and balances</h4>
					<header className="pb-1 mt-2.5">
						<h6 className="text-slate-700">Notifications about where your money is </h6>
					</header>
					<NotificationAlertComponent />
				</div>
			</section>
		</div>
	);
};
