import React from "react";
import { Link } from "react-router";
import { LogoFullDarkVariant } from "@/data/index";
import { CloseIcon, IconWrapper } from "../../data/Icons";
import { routes } from "../../data/routes";

export const AuthHeader = () => {
	return (
		<header className="py-7 border-b">
			<nav className="w-11/12 lg:w-10/12 xl:w-9/12 mx-auto flex items-center justify-between">
				<Link to={routes.AUTH.index.abs}>
					<figure className="flex items-center justify-center max-w-32 sm:max-w-40">
						<img src={LogoFullDarkVariant} alt="" />
					</figure>
				</Link>
				<button
					type="button"
					onClick={() => window.history.back()}
					className="bg-transparent hover:bg-slate-200 p-1.5 sm:p-2.5 rounded-full animate-active">
					<IconWrapper>
						<CloseIcon className="w-6 h-6" />
					</IconWrapper>
				</button>
			</nav>
		</header>
	);
};
