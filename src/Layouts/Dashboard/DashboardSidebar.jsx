import { Link, NavLink } from "react-router";
import { SideBarArray } from "../../data/dataArray";
import { CloseIcon, IconWrapper } from "../../data/Icons";
import React from "react";
import { LogoFullDarkVariant } from "../../data";
import { StateDataContext } from "../../App";

export const DashboardSidebar = () => {
	const { stateData, setStateData } = React.useContext(StateDataContext);

	function closeSideBar() {
		const newState = structuredClone(stateData);
		newState.dashboard.sidebar = false;
		setStateData(newState);
	}
	return (
		<aside className={`h-full`}>
			<header className="flex items-center justify-between md:hidden">
				<Link to={""}>
					<figure className="flex items-center justify-center max-w-32">
						<img src={LogoFullDarkVariant} alt="" />
					</figure>
				</Link>
				<button type="button" onClick={closeSideBar} className="p-1.5 rounded-full hover:bg-slate-200 transition-all duration-300 ease-in-out">
					<IconWrapper>
						<CloseIcon className="w-5 h-5" />
					</IconWrapper>
				</button>
			</header>
			<ul className="flex flex-col gap-y-6 mt-5 md:mt-0">
				{SideBarArray.map((link, index) => {
					return (
						<NavLink
							to={link.goto}
							key={index}
							className={({ isActive }) =>
								`flex items-center gap-x-3 transition-all duration-300 ease-in-out 
								${isActive ? "font-medium text-black" : "text-slate-600 hover:text-slate-900"}`
							}>
							<IconWrapper>{React.createElement(link.icon, { className: "w-6 h-6" })}</IconWrapper>
							<span>{link.text}</span>
						</NavLink>
					);
				})}
			</ul>
		</aside>
	);
};
