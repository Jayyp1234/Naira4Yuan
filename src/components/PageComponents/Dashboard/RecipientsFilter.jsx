import React, { useState, useRef, useContext } from "react";
import { ArrowDownIcon, CloseIcon, IconWrapper } from "@/data/Icons";
import { CheckBox, RadioInput, SwitchInput } from "../../BaseComponents/FormInputs";
import { ProfileImage } from "./ProfileImage";
import { avatar4, NigeriaIcon } from "@/data";
import { BorderWrapper } from "./Items";
import { StateDataContext } from "../../../App";
import useOutsideClick from "../../../hooks/useOutsideClick";
import { ChevronDown } from "lucide-react";
import { DatePickerModal } from "/src/components/LayoutComponents/AllModals";

export const RecipientsFilter = () => {
  const {
    stateData,
    stateData: {
      dashboard: { recipients },
    },
    setStateData,
  } = useContext(StateDataContext);

  const [isDatePickerOpen, setDatePickerOpen] = useState(false);
  const [selectedFromDate, setSelectedFromDate] = useState(null);
  const [selectedToDate, setSelectedToDate] = useState(null);
  const [activeDateField, setActiveDateField] = useState(null);

  const sidebarRef = useRef(null);
  const modalRef = useRef(null); // Ref for the modal

  const closeFilterSidebar = () => {
    const newData = structuredClone(stateData);
    newData.dashboard.recipients.filterSidebar = false;
    setStateData(newData);
  };

  useOutsideClick([sidebarRef, modalRef], closeFilterSidebar, recipients?.filterSidebar); // Pass both refs

  const handleDateSelect = (dateType, date) => {
    if (dateType === "from") {
      setSelectedFromDate(date);
    } else if (dateType === "to") {
      setSelectedToDate(date);
    }
    setDatePickerOpen(false);
  };

  const isApplyEnabled = selectedFromDate || selectedToDate;

  const formatDisplayDate = (date) =>
    date?.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

  const [selectedType, setSelectedType] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);

  const handleApply = () => {
    const filtersReturnedNoResults =
      !selectedFromDate && !selectedToDate && !selectedType && !selectedStatus;
  
    // Update state
    const newData = structuredClone(stateData);
    newData.dashboard.recipients.filterSidebar = false;
    newData.dashboard.noResultsMessage = filtersReturnedNoResults
      ? "Your filters have returned no results"
      : "";
    setStateData(newData);
  
    // Log to check if state is updated
    console.log(newData.dashboard.noResultsMessage);
  };

  return (
    <>
      <aside
        ref={sidebarRef}
        className={`bg-black/50 fixed flex justify-end h-full w-full z-50 top-0 right-0 transition-opacity duration-300 ease-in-out ${recipients?.filterSidebar
          ? "opacity-100 pointer-events-auto backdrop-blur-sm"
          : "backdrop-blur-none opacity-0 bg-transparent pointer-events-none"
          }`}
      >
        <div
          className={`${recipients?.filterSidebar ? "translate-x-0" : "translate-x-full"
            } sticky top-0 bg-white transition-transform duration-300 ease-in-out shadow-lg h-full w-full sm:w-4/6 md:w-4/6 lg:w-3/6 xl:w-2/6`}
        >
          <header className="flex items-center justify-between px-4 py-3 border-b">
            <h2 className="font-semibold">Filters</h2>
            <button
              type="button"
              className="bg-transparent hover:bg-slate-100 p-1.5 transition duration-300 ease-in-out rounded-full"
              onClick={closeFilterSidebar}
            >
              <IconWrapper>
                <CloseIcon className="w-5 h-5" />
              </IconWrapper>
            </button>
          </header>

          <div className="p-5 flex flex-col gap-y-1 overflow-y-auto max-h-[90dvh]">
            <div className="flex items-center justify-between">
              <span>Show hidden transactions</span>
              <SwitchInput isOn={false} />
            </div>

            <section className="my-4">
              <header className="border-b pb-1.5">
                <h4 className="text-slate-600">Account settings</h4>
              </header>
              <div className="flex items-center flex-wrap gap-3 mt-3">
                {["Last month", "Last quarter", "Last year"].map((label) => (
                  <button
                    key={label}
                    type="button"
                    className="bg-slate-100 hover:bg-slate-200 py-2 px-4 text-sm animate-active rounded-lg rounded-tl-[1px] font-medium"
                  >
                    {label}
                  </button>
                ))}
              </div>

              <div className="space-y-2 mt-3">
                {["from", "to"].map((field) => (
                  <div key={field} className="flex items-center gap-4 w-full bg-[#F9FAFB] rounded-lg px-4 py-4">
                    <label className="text-[#122231] text-base capitalize">{field}</label>
                    <div
                      onClick={() => {
                        setActiveDateField(field);
                        setDatePickerOpen(true);
                      }}
                      className="flex items-center cursor-pointer justify-between w-full gap-2"
                    >
                      <span className="text-[#122231] text-sm font-medium animate-fade-in">
                        {field === "from"
                          ? selectedFromDate ? formatDisplayDate(selectedFromDate) : "Choose a start date"
                          : selectedToDate ? formatDisplayDate(selectedToDate) : "Choose an end date"}
                      </span>
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="my-4">
              <header className="border-b pb-1.5 flex items-center justify-between">
                <h4 className="text-slate-600">Recipients</h4>
                <button type="button" className="underline text-[.94rem] font-medium">
                  View all
                </button>
              </header>
              <ul className="flex flex-col gap-y-3 mt-3">
                <li className="flex items-center justify-between gap-x-4">
                  <ProfileImage AvatarImage={avatar4} extraImage={NigeriaIcon} hasExtraImage={true} size="lg" />
                  <aside className="flex flex-grow flex-col text-start items-start">
                    <span className="font-medium leading-tight">{"Adam R. ACC"}</span>
                    <small className="text-[.8rem] text-slate-600">{"@Adam"}</small>
                  </aside>
                  <CheckBox />
                </li>
                <li className="flex items-center justify-between gap-x-4">
                  <ProfileImage AvatarImage={avatar4} extraImage={NigeriaIcon} hasExtraImage={true} size="lg" />
                  <aside className="flex flex-grow flex-col text-start items-start">
                    <span className="font-medium leading-tight">{"Adam R. ACC"}</span>
                    <small className="text-[.8rem] text-slate-600">{"@Adam"}</small>
                  </aside>
                  <CheckBox />
                </li>
              </ul>
            </section>
            <section className="my-4">
              <header className="border-b pb-1.5">
                <h4 className="text-slate-600">Type</h4>
              </header>

              <div className="flex items-center flex-wrap gap-x-3 mt-3">
                {["Send In", "Send Out", "Rewards"].map((label) => (
                  <button
                    key={label}
                    type="button"
                    className={`py-2 px-4 text-sm animate-active rounded-lg rounded-tl-[1px] flex items-center justify-center font-medium ${selectedType === label
                      ? "bg-[#F1C34E]"
                      : "bg-slate-100 hover:bg-slate-200"
                      }`}
                    onClick={() => setSelectedType(label)} // Set the selected option when clicked
                  >
                    {label}
                  </button>
                ))}
              </div>
            </section>
            <section className="my-4">
              <header className="border-b pb-1.5">
                <h4 className="text-slate-600">Status</h4>
              </header>
              <div className="flex items-center gap-x-3 mt-3">
                <div className="flex items-center gap-x-3 mt-3">
                  {["Completed", "Cancelled"].map((label) => (
                    <button
                      key={label}
                      type="button"
                      className={`py-2 px-4 text-sm rounded-tl-[1px] animate-active rounded-lg flex items-center justify-center font-medium ${selectedStatus === label
                        ? "bg-[#F1C34E]"
                        : "bg-slate-100 hover:bg-slate-200"
                        }`}
                      onClick={() => setSelectedStatus(label)} // Set the selected status when clicked
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </section>
            <section className="my-4">
              <header className="border-b pb-1.5">
                <h4 className="text-slate-600">Direction</h4>
              </header>
              <div className="flex flex-col gap-y-2 mt-3">
                <label htmlFor="all" className="cursor-pointer flex items-center justify-between gap-x-4 select-none">
                  <div className="flex items-center gap-x-3 flex-grow">
                    <IconWrapper className="bg-slate-200 p-2 rounded-full">
                      <ArrowDownIcon className="rotate-180" />
                    </IconWrapper>
                    <span className="font-medium">All</span>
                  </div>
                  <RadioInput id="all" name="direction" />
                </label>
                <label htmlFor="money-in" className="cursor-pointer flex items-center justify-between gap-x-4 select-none">
                  <div className="flex items-center gap-x-3 flex-grow">
                    <IconWrapper className="bg-slate-200 p-2 rounded-full">
                      <ArrowDownIcon />
                    </IconWrapper>
                    <span className="font-medium">Money In</span>
                  </div>
                  <RadioInput id="money-in" name="direction" />
                </label>
                <label htmlFor="money-out" className="cursor-pointer flex items-center justify-between gap-x-4 select-none">
                  <div className="flex items-center gap-x-3 flex-grow">
                    <IconWrapper className="bg-slate-200 p-2 rounded-full">
                      <ArrowDownIcon className="rotate-180" />
                    </IconWrapper>
                    <span className="font-medium">Money out</span>
                  </div>
                  <RadioInput id="money-out" name="direction" />
                </label>
              </div>
            </section>
            <section className="my-4">
              <header className="border-b pb-1.5">
                <h4 className="text-slate-600">Balances</h4>
              </header>
              <div className="flex flex-col gap-y-2 mt-3">
                <label htmlFor="name" className="cursor-pointer flex items-center justify-between gap-x-4 select-none">
                  <div className="flex items-center gap-x-3 flex-grow">
                    <figure className="w-7 h-7 rounded-full overflow-hidden">
                      <img src={NigeriaIcon} alt="" className="object-full object-cover h-full w-full" />
                    </figure>
                    <span className="font-medium">Adam R. ACC</span>
                  </div>
                  <CheckBox id="name" name="balance" />
                </label>
              </div>
            </section>

            {/* Footer */}
            <footer className="flex items-center justify-center gap-x-3 pt-3 mt-5">
              <BorderWrapper
                onClick={closeFilterSidebar}
                as="button"
                radiusSize="md"
                type="button"
                cn="flex-grow animate-active font-medium border-main py-3 flex items-center justify-center text-sm"
              >
                Filter
              </BorderWrapper>
              <BorderWrapper
                as="button"
                radiusSize="md"
                type="button"
                disabled={!isApplyEnabled}
                onClick={handleApply}
                cn="flex-grow font-medium transition-all ease-in-out py-3 text-sm flex items-center justify-center
                    disabled:cursor-not-allowed disabled:opacity-60 
                    enabled:active:scale-95 enabled:bg-main enabled:text-white enabled:border-main 
                    disabled:border-slate-200 disabled:bg-gray-300"
              >
                Apply
              </BorderWrapper>
            </footer>
          </div>
        </div>
      </aside>

      <DatePickerModal
        ref={modalRef} // Attach modalRef to the modal
        open={isDatePickerOpen}
        modalData={{ toggleModal: (_, state) => setDatePickerOpen(state) }}
        onDateSelect={handleDateSelect}
        dateType={activeDateField}
        currentValue={activeDateField === "from" ? selectedFromDate : selectedToDate}
      />
    </>
  );
};

