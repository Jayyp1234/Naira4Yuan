// import React from "react";
import { Link, useNavigate } from "react-router";
import { DefaultAvatarImage, LogoFullDarkVariant } from "@/data";
import { ChevronRightIcon, IconWrapper } from "@/data/Icons";
import { routes } from "../../data/routes";

export const DashboardHeader = () => {
	const navigate = useNavigate();
	return (
    <header className="px-5 sm:px-0 w-full sm:w-11/12 lg:w-10/12 xl:pr-10 xl:pl-10 mx-auto flex items-center justify-between pt-6 pb-3">
			<Link to={""}>
				<figure className="flex items-center justify-center max-w-32">
					<img src={LogoFullDarkVariant} alt="" />
				</figure>
			</Link>
			<aside>
				<button type="button" onClick={() => navigate(routes.DASHBOARD.account.index.rel)} className="flex items-center gap-x-2">
					<figure className="flex items-center justify-center overflow-hidden rounded-full w-10 h-10">
						<img src={DefaultAvatarImage} alt="" />
					</figure>
					<div className="flex items-center gap-x-1.5">
						<span className="hidden sm:inline-flex uppercase font-semibold text-sm">ADEREMI IBRAHIM TUNDE</span>
						<IconWrapper>
							<ChevronRightIcon />
						</IconWrapper>
					</div>
				</button>
			</aside>
		</header>
	);
};
