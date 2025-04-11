import React from "react";
import { Outlet, useLocation } from "react-router";
import { DashboardHeader } from "@/Layouts/Dashboard/DashboardHeader";
import { StateDataContext } from "../../../App";
import { DashboardFooter } from "@/Layouts/Dashboard/DashboardFooter";

export const HelpIndex = () => {
  const { stateData, setStateData } = React.useContext(StateDataContext);
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <DashboardHeader />
      <main className="px-3 sm:px-0 w-full sm:w-11/12 lg:w-10/12 xl:pr-10 xl:pl-10 mx-auto pt-10 mx-auto relative">
        <Outlet />
        <DashboardFooter />
      </main>
    </div>
  );
};