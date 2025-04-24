import React from "react";
import { Outlet, useLocation } from "react-router";
import { DashboardHeader3 } from "@/Layouts/Dashboard/DashboardHeader3";
import { DashboardSidebar } from "@/Layouts/Dashboard/DashboardSidebar";
import { StateDataContext } from "../../../App";

export const SendIndex = () => {
  const { stateData, setStateData } = React.useContext(StateDataContext);
  const { pathname } = useLocation();

  const hiddenSidebarRoutePrefixes = [];

  const shouldHideSidebar = hiddenSidebarRoutePrefixes.some((prefix) => pathname.startsWith(prefix));

  return (
    <div className="min-h-screen flex flex-col">

      <DashboardHeader3
        currentStepIndex={stateData.dashboard.send.stepperVal - 1}
        steps={["Amount", "Review", "Payment"]}
      />


      <main className="px-5 sm:px-0 w-full sm:w-11/12 lg:w-10/12 xl:pr-10 xl:pl-10 pt-10 mx-auto relative flex">
        {!shouldHideSidebar && (
          <aside className="hidden md:block md:w-1/3 lg:w-1/5 xl:w-1/6">
            <DashboardSidebar />
          </aside>
        )}
        <aside className={`w-full mx-auto ${shouldHideSidebar ? "" : "md:w-4/6 lg:w-4/5 mx-auto"}`}>
          <Outlet />
        </aside>
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
