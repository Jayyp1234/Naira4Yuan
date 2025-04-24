import React from "react";
import { Outlet } from "react-router";
import { DashboardFooter } from "@/Layouts/Dashboard/DashboardFooter";
import { DashboardHeader5 } from "@/Layouts/Dashboard/DashboardHeader3";

export const HelpIndex = () => {

  return (
    <div className="min-h-screen flex flex-col">
      <DashboardHeader5 />
      <main className="px-3 sm:px-0 w-full sm:w-11/12 lg:w-10/12 xl:pr-10 xl:pl-10 mx-auto pt-10 relative">
        <Outlet />
        <DashboardFooter />
      </main>
    </div>
  );
};