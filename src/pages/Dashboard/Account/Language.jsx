import React from "react";
import { ChevronDownIcon, IconWrapper } from "@/data/Icons";

export const Language = () => {
	return (
		<div className="flex flex-col gap-y-7 max-w-2xl">
			<header>
				<h2 className="text-2xl font-bold">Language</h2>
			</header>
			<section className="my-8">
				<div className="flex flex-col gap-y-0.5 mb-8">
					<span>Select your default language</span>
					<button type="button" className="flex items-center justify-between bg-[#F8F9FD] px-3.5 py-3 w-full rounded-lg">
						<span>English (UK)</span>
						<IconWrapper>
							<ChevronDownIcon />
						</IconWrapper>
					</button>
				</div>
				<button type="button" className="flex items-center justify-center animate-active bg-[#F1C34E] px-3.5 py-3.5 w-full rounded-lg">
					<span>Save</span>
				</button>
			</section>
		</div>
	);
};
