import React from "react";
import { ExclamationIcon, IconWrapper } from "@/data/Icons";

export const AlertNotification = ({ message, subMessage, onClose }) => {
	return (
    <div className="flex items-start gap-4 p-4 pr-5 rounded-xl bg-[#EFF1EF] text-gray-700 w-full shadow-sm relative">
			<div className="">
				<IconWrapper className="bg-[#454745] rounded-full p-2">
					<ExclamationIcon className="w-5 h-5 text-white rotate-180" />
				</IconWrapper>
			</div>
			<div className="text-sm">
				<p className="">{message}</p>
				<p className="">{subMessage}</p>
			</div>
			<button
				onClick={onClose}
        className="absolute top-0 text-5xl text-gray-700 transition-colors right-2 hover:text-black"
			>
				&times;
			</button>
		</div>
	);
};
