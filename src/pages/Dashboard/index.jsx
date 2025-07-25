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

      <main className="flex-1 flex flex-col md:flex-row relative w-full px-5 sm:px-0 sm:w-11/12 lg:w-10/12 xl:px-10 mx-auto pt-10 mb-24">

        {/* Sidebar for md and up */}
        {!shouldHideSidebar && (
          <aside className="hidden md:block md:w-1/3 lg:w-1/5 xl:w-1/6">
            <DashboardSidebar />
          </aside>
        )}

        {/* Main content */}
        <section className={`flex-1 w-full`}>
					<Outlet />
        </section>
			</main>

      {/* Bottom NavBar - Mobile only */}
      {!shouldHideSidebar && (
        <nav className="fixed bottom-8 bg-white shadow-md w-[90%] left-0 right-0 mx-auto py-5 px-12 rounded-2xl transition-all duration-300 md:hidden z-50">
          <DashboardSidebar />
        </nav>
      )}
		</div>
	);
};
