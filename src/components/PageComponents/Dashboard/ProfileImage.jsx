import React from "react";
import { avatar2, ChinaIcon } from "@/data";

export const ProfileImage = ({
	AvatarImage = avatar2,
	as: As = "div",
	size = "md",
	hasExtraImage = false,
	extraImage = ChinaIcon,
	children,
	...others
}) => {
	const profileSize = {
		sm: "w-7 h-7",
		md: "w-9 h-9",
		lg: "w-11 h-11",
		xl: "w-16 h-16",
	};
	return (
		<As {...others} className="relative max-w-max">
			<figure
				className={`flex items-center justify-center rounded-full overflow-hidden ${children && "bg-gray-300 font-bold text-xl tracking-wide"} ${
					profileSize[size]
				}`}>
				{children ? children : <img src={AvatarImage} alt={`${AvatarImage} alt`} className="w-full h-full object-cover object-center" />}
			</figure>
			{hasExtraImage && (
				<figure className="absolute -bottom-1 right-0 w-5 h-5 flex items-center justify-center rounded-full overflow-hidden">
					<img src={extraImage} alt={`${extraImage} alt`} className="w-full h-full object-cover object-center" />
				</figure>
			)}
		</As>
	);
};
