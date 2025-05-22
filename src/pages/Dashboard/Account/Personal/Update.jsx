import React, { useState } from "react";
import { FormControl } from "@/components/BaseComponents/FormInputs";
import { ChevronDownIcon, ChevronLeftIcon, IconWrapper } from "@/data/Icons";
import { NigeriaIcon } from "@/data";
import { useNavigate } from "react-router";
import { PersonalDetailsFormSkeleton } from "@/components/Skeleton/Skeleton";

export const Update = () => {
  const navigate = useNavigate();
  const [isDashboardLoading, setIsDashboardLoading] = useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsDashboardLoading(false);
    }, 2000); // 2000ms = 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isDashboardLoading) {
    return <PersonalDetailsFormSkeleton />;
  }

  return (
    <div className="flex flex-col gap-y-7 mb-14">
      <nav className="flex items-center flex-1">
        <button
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          onClick={() => navigate(-1)}
        >
          <ChevronLeftIcon className="w-4 h-4" />
          <span>Back</span>
        </button>
      </nav>
      <header>
        <h2 className="text-2xl font-bold">Kindly enter or update your personal details </h2>
      </header>
      <form action="">
        <section className="flex flex-col gap-y-4 max-w-2xl">
          <FormControl type={"text"} placeholder="Enter your first name" value={"Tunde"} readOnly label={{ exist: true, text: "First name" }} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormControl type={"text"} placeholder="Enter your last name" value={"Aderemi"} readOnly label={{ exist: true, text: "Last name" }} />
            <FormControl type={"text"} placeholder="Enter your last name" value={"Ibrahim"} readOnly label={{ exist: true, text: "Other names" }} />
          </div>
          <div>
            <label className="text-[.94rem] font-medium text-gray-700 dark:text-gray-300">Phone number</label>
            <div className="flex items-stretch gap-x-3">
              <button
                type="button"
                className="min-h-[3rem] flex-shrink-1 p-3 gap-x-1.5 select-none transition ease-in-out duration-300 text-sm flex items-center justify-between border-gray-300 rounded-lg bg-[#F8F9FD] hover:bg-[#eff1f7] "
                onClick={() => { }}>
                <figure className="w-5 h-5 rounded-full">
                  <img src={NigeriaIcon} alt="" />
                </figure>
                <IconWrapper>
                  <ChevronDownIcon />
                </IconWrapper>
              </button>
              <aside className="flex-grow">
                <FormControl
                  type={"tel"}
                  value={8180688157}
                  inputMode="numeric"
                  style="w-full"
                  placeholder="Enter your phone number"
                  label={{ exist: false }}
                />
              </aside>
            </div>
          </div>
          <div className="text-center justify-center flex items-center mt-4">
            <button type="button" className="underline text-black font-medium">
              Change phone number
            </button>
          </div>
        </section>
        <header className="border-b border-solid pb-1 mb-4">
          <h2 className="text-lg">Address</h2>
        </header>
        <section className="flex flex-col gap-y-4 max-w-2xl">
          <FormControl
            type={"text"}
            placeholder="Enter home address"
            value={"No 6, Kommi prime, Awosika estate, off Awolowo road, Bodija"}
            readOnly
            label={{ exist: true, text: "Home address" }}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormControl type={"text"} placeholder="Enter your password" value={"Oyo"} label={{ exist: true, text: "State of Residence" }} />
            <FormControl type={"text"} placeholder="Enter your password" value={"Ibadan"} label={{ exist: true, text: "City" }} />
          </div>
          <div className="mt-10">
            <button
              type="button"
              // disabled
              className="enabled:active:scale-95 disabled:bg-[#DADADA] disabled:cursor-not-allowed transition-all ease-in-out bg-[#F1C34E] flex items-center justify-center w-full rounded-lg py-3.5 text-[.9rem] font-medium"
              onClick={() => { }}>
              Update
            </button>
          </div>
        </section>
      </form>
    </div>
  );
};
