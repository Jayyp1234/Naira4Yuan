import React from "react";
import { Outlet, useLocation } from "react-router";
import { DashboardHeader } from "@/Layouts/Dashboard/DashboardHeader";
import { DashboardSidebar } from "@/Layouts/Dashboard/DashboardSidebar";
import { StateDataContext } from "../../App";

export const DashboardIndex = () => {
	const { stateData, setStateData } = React.useContext(StateDataContext);
	const { pathname } = useLocation();

	const hiddenSidebarRoutePrefixes = [];

	const shouldHideSidebar = hiddenSidebarRoutePrefixes.some((prefix) => pathname.startsWith(prefix));

	return (
		<div className="min-h-screen flex flex-col">
			<DashboardHeader />
      <main className="px-5 sm:px-0 w-full sm:w-11/12 lg:w-10/12 xl:pr-10 xl:pl-10 pt-10 mx-auto relative flex">
				{/* {shouldHideSidebar && ( */}
				<aside
					className={`${
						stateData.dashboard.sidebar
							? "opacity-100 bg-black/50 backdrop-blur-sm"
							: "backdrop-blur-none bg:transparent md:backdrop-blur-none pointer-events-none md:pointer-events-auto"
					} fixed md:sticky bg:transparent md:bg-transparent h-full w-full md:w-2/6 lg:w-1/5 z-50 top-0 left-0 transition-[opacity] duration-300 ease-in-out md:top-8`}>
					<div
						className={`${
							stateData.dashboard.sidebar ? "translate-x-0" : "-translate-x-full md:translate-x-0"
						} sticky top-0 bg-white p-5 md:p-0 transition-[transform] duration-300 ease-in-out shadow-lg md:shadow-none h-full w-11/12 sm:w-7/12 md:w-full`}>
						<DashboardSidebar />
					</div>
				</aside>
				{/* )} */}
				<aside className={`w-full mx-auto ${shouldHideSidebar ? "" : "md:w-4/6 lg:w-4/5"}`}>
					<Outlet />
				</aside>
			</main>
		</div>
	);
};
