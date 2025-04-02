import React from "react";
import { ChevronRightIcon, IconWrapper } from "../../data/Icons";

const listItemStyle = "flex w-full justify-between font-semibold";

export const TroubleLoggingIn = () => {
	return (
		<div className="w-full sm:w-11/12 xl:px-2 mx-auto">
			<div className="flex items-center gap-x-2.5 pt-10">
				<span className="font-semibold underline">Contact Support</span>
				<IconWrapper>
					<ChevronRightIcon />
				</IconWrapper>
				<span>Trouble logging in</span>
			</div>
			<div className="w-full pt-10 sm:py-14 md:py-16 mx-auto">
				<header className="flex flex-col items-center gap-y-3 text-center">
					<h2 className="text-3xl font-bold">Trouble logging in</h2>
				</header>
				<div className="px-3 mt-14 bg-white rounded-lg max-w-5xl mx-auto">
					<div className="border-b pb-3 border-slate-200/80">
						<h2>Select an issue</h2>
					</div>
					<ul className="flex flex-col gap-y-4 mt-4">
						<li className={`${listItemStyle}`}>
							<span>I've forgotten my password</span>
							<IconWrapper>
								<ChevronRightIcon />
							</IconWrapper>
						</li>
						<li className={`${listItemStyle}`}>
							<span>2-step verification isn't working</span>
							<IconWrapper>
								<ChevronRightIcon />
							</IconWrapper>
						</li>
						<li className={`${listItemStyle}`}>
							<span>I need to change my phone number</span>
							<IconWrapper>
								<ChevronRightIcon />
							</IconWrapper>
						</li>
						<li className={`${listItemStyle}`}>
							<span>I need to change my email</span>
							<IconWrapper>
								<ChevronRightIcon />
							</IconWrapper>
						</li>
						<li className={`${listItemStyle}`}>
							<span>Logging in with a new device</span>
							<IconWrapper>
								<ChevronRightIcon />
							</IconWrapper>
						</li>
						<li className={`${listItemStyle}`}>
							<span>My account was deactivated</span>
							<IconWrapper>
								<ChevronRightIcon />
							</IconWrapper>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
