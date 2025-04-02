import React from "react";
import { SwitchInput } from "@/components/BaseComponents/FormInputs";
import { IconWrapper, MessageIcon, PhoneIcon } from "@/data/Icons";

export const NotificationAlertComponent = () => {
	return (
		<div className="flex flex-col gap-y-3 mt-4">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-3 flex-grow">
					<IconWrapper className="bg-slate-200/50 text-slate-600 p-2.5 rounded-full">
						<MessageIcon className="w-[1.4rem] h-[1.4rem]" />
					</IconWrapper>
					<div>
						<h3 className="text-lg font-medium">Email</h3>
					</div>
				</div>
				<SwitchInput isOn={true} />
			</div>
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-3 flex-grow">
					<IconWrapper className="bg-slate-200/50 text-slate-600 p-2.5 rounded-full">
						<PhoneIcon className="w-[1.35rem] h-[1.35rem]" />
					</IconWrapper>
					<div>
						<h3 className="text-lg font-medium">Push</h3>
					</div>
				</div>
				<SwitchInput />
			</div>
		</div>
	);
};
