import React from "react";
import { SwitchInput } from "../../../../components/BaseComponents/FormInputs";
import { ChevronLeftIcon, GlobeUserIcon, IconWrapper, PhoneIconVar, ShieldIcon } from "../../../../data/Icons";
import { useNavigate } from "react-router";

export const FindMeBy = () => {
  const navigate = useNavigate();

  return (
    <div>
      <nav className="flex items-center flex-1 mb-3">
        <button
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          onClick={() => navigate(-1)}
        >
          <ChevronLeftIcon className="w-4 h-4" />
          <span>Back</span>
        </button>
      </nav>
      <header>
        <h2 className="text-2xl font-bold">Find me by</h2>
      </header>
      <section className="my-8">
        <header className="pb-3">
          <h6 className="text-lg text-slate-700 font-medium">People on Naira4yuan can find you by</h6>
        </header>
        <ul className="py-5 w-full flex flex-col gap-y-4 border-y border-solid">
          <li>
            <div className="flex items-center gap-4 flex-grow">
              <IconWrapper className="bg-slate-200/50 text-slate-600 p-2.5 rounded-full">
                <ShieldIcon className="w-5 h-5" />
              </IconWrapper>
              <div className="flex items-center justify-between flex-grow gap-3">
                <aside className="text-start flex flex-col gap-y-1">
                  <h3 className="text-lg leading-tight font-medium">Email address</h3>
                  <p className="text-gray-500 text-sm leading-tight">tundeburemo@gmail.com</p>
                </aside>
                <aside className="flex items-center gap-x-4">
                  <SwitchInput isOn={true} />
                </aside>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-4 flex-grow">
              <IconWrapper className="bg-slate-200/50 text-slate-600 p-2.5 rounded-full">
                <PhoneIconVar className="w-5 h-5" />
              </IconWrapper>
              <div className="flex items-center justify-between flex-grow gap-3">
                <aside className="text-start flex flex-col gap-y-1">
                  <h3 className="text-lg leading-tight font-medium">Phone number</h3>
                  <p className="text-gray-500 text-sm leading-tight">+2348180688157</p>
                </aside>
                <aside className="flex items-center gap-x-4">
                  <SwitchInput isOn={true} />
                </aside>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-4 flex-grow">
              <IconWrapper className="bg-slate-200/50 text-slate-600 p-2.5 rounded-full">
                <GlobeUserIcon className="w-5 h-5" />
              </IconWrapper>
              <div className="flex items-center justify-between flex-grow gap-3">
                <aside className="text-start flex flex-col gap-y-1">
                  <h3 className="text-lg leading-tight font-medium">Naira4yuan</h3>
                  <p className="text-gray-500 text-sm leading-tight">TundeB</p>
                </aside>
                <aside className="flex items-center gap-x-4">
                  <SwitchInput isOn={true} />
                </aside>
              </div>
            </div>
          </li>
        </ul>
        <div className="flex items-center justify-end mt-4">
          <button type="button" className="text-sm text-red-500 py-1.5 px-4 animate-active border border-solid border-red-500 rounded-lg">
            Remove yourself as a recipient
          </button>
        </div>
      </section>
      <section className="my-8"></section>
    </div>
  );
};
