import React from "react";
import { Outlet, useLocation } from "react-router";
import { DashboardHeader2 } from "@/Layouts/Dashboard/DashboardHeader2";
import { StateDataContext } from "../../../App";

export const FundWalletIndex = () => {
    const { stateData, setStateData } = React.useContext(StateDataContext);
    const { pathname } = useLocation();

    const hiddenSidebarRoutePrefixes = [];

    const shouldHideSidebar = hiddenSidebarRoutePrefixes.some((prefix) => pathname.startsWith(prefix));

    return (
        <div className="min-h-screen flex flex-col">
            <DashboardHeader2 />
            <main className="px-5 sm:px-0 w-full sm:w-11/12 lg:w-10/12 xl:pr-10 xl:pl-10 pt-10 mx-auto relative flex">
                <aside className={`w-full mx-auto ${shouldHideSidebar ? "" : "md:w-4/6 lg:w-4/5"}`}>
                    <Outlet />
                </aside>
            </main>
        </div>
    );
};
