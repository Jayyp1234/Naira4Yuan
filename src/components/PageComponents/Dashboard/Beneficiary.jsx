import React from "react";
import { ProfileImage } from "./ProfileImage";
import { avatar4, ChineseImage } from "@/data";
import { ChevronRightIcon, IconWrapper } from "@/data/Icons";

export const Beneficiary = ({ userData, itemAs: ItemAs = "div", hasRightImage = false, subImage, ...others }) => {
	return (
    <ItemAs className="flex items-center justify-between gap-x-4" {...others}>
			<ProfileImage AvatarImage={userData?.image ?? avatar4} extraImage={subImage} hasExtraImage={true} size="lg" />
			<aside className="flex flex-grow flex-col text-start items-start">
				<span className="font-medium text-[1.015rem]">{userData?.maintext ?? "Adam R. ACC"}</span>
				<small className="text-sm text-slate-600">{userData?.subtext ?? "Alipay ID: 7939383939382"}</small>
			</aside>
			<aside className="flex gap-x-4">
				{hasRightImage && (
					<figure className="flex items-center justify-center w-10">
						<img src={subImage ?? ChineseImage} alt="" className="h-auto max-w-full" />
					</figure>
				)}
				<IconWrapper className="text-slate-500">
					<ChevronRightIcon className="w-6 h-6" />
				</IconWrapper>
			</aside>
		</ItemAs>
	);
};
