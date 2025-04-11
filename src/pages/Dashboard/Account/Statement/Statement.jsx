import { useState } from "react";
import { AccountOwnershipSelectBalanceModal, DatePickerModal } from "@/components/LayoutComponents/AllModals";
import { SwitchInput } from "../../../../components/BaseComponents/FormInputs";
import { ChevronDownIcon, IconWrapper } from "../../../../data/Icons";

export const Statement = () => {
  const [activeDateType, setActiveDateType] = useState(null); // 'from' or 'to'
  const [selectedDates, setSelectedDates] = useState({
    from: null,
    to: null,
  });

  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [isBalanceModalOpen, setIsBalanceModalOpen] = useState(false);

  const toggleModal = (type, open) => {
    if (type === "DATE_PICKER") {
      setIsDatePickerOpen(open);
      if (!open) setActiveDateType(null);
    } else if (type === "DASHBOARD_ACCOUNT_OWNERSHIP") {
      setIsBalanceModalOpen(open);
    }
  };

  const handleDateSelect = (type, date) => {
    setSelectedDates(prev => ({ ...prev, [type]: date }));
  };

  const modalData = { toggleModal };

  return (
    <div className="mb-10">
      <header>
        <h2 className="text-2xl font-bold">Statement</h2>
      </header>

      <section className="my-8">
        <header className="border-b border-solid pb-1">
          <h6 className="text-lg text-slate-700 font-medium">Set the details</h6>
        </header>

        <div className="max-w-xl">
          <span className="my-4 block">
            Statements can cover any period of time up to one year. For longer periods, you’ll need to download multiple statements.
          </span>

          <section className="my-4 flex flex-col gap-y-1">
            <h4 className="text-slate-600">Dates</h4>

            <div className="flex items-center gap-x-3 mt-1">
              {["Last month", "Last quarter", "Last year"].map(label => (
                <button
                  key={label}
                  type="button"
                  className="bg-slate-100 hover:bg-slate-200 py-2 px-4 text-sm animate-active rounded-lg flex items-center justify-center font-medium"
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-y-4">
              {/* FROM DATE PICKER */}
              <div className="rounded-lg mt-3 flex items-stretch overflow-hidden bg-[#F8F9FD]/80">
                <span className="flex items-center px-4 text-sm sm:text-[.95rem] bg-[#F8F9FD] border-r border-r-slate-100">From</span>
                <button
                  type="button"
                  onClick={() => {
                    setActiveDateType("from");
                    toggleModal("DATE_PICKER", true);
                  }}
                  className="flex items-center justify-between px-3.5 py-3 w-full"
                >
                  <span className="text-[.95rem] text-slate text-[#94A3B8]">
                    {selectedDates.from ? selectedDates.from.toDateString() : "Choose a start date"}
                  </span>
                  <IconWrapper>
                    <ChevronDownIcon />
                  </IconWrapper>
                </button>
              </div>

              {/* TO DATE PICKER */}
              <div className="rounded-lg mt-3 flex items-stretch overflow-hidden bg-[#F8F9FD]/80">
                <span className="flex items-center px-4 text-sm sm:text-[.95rem] bg-[#F8F9FD] border-r border-r-slate-100">To</span>
                <button
                  type="button"
                  onClick={() => {
                    setActiveDateType("to");
                    toggleModal("DATE_PICKER", true);
                  }}
                  className="flex items-center justify-between px-3.5 py-3 w-full"
                >
                  <span className="text-[.95rem] text-slate text-[#94A3B8]">
                    {selectedDates.to ? selectedDates.to.toDateString() : "Choose an end date"}
                  </span>
                  <IconWrapper>
                    <ChevronDownIcon />
                  </IconWrapper>
                </button>
              </div>

              {/* BALANCE MODAL */}
              <div className="flex flex-col gap-y-0.5">
                <span>Your balance</span>
                <button
                  type="button"
                  className="flex items-center justify-between bg-[#F8F9FD] px-3.5 py-3 w-full rounded-lg"
                  onClick={() => toggleModal("DASHBOARD_ACCOUNT_OWNERSHIP", true)}
                >
                  <span className="uppercase">NGN</span>
                  <IconWrapper>
                    <ChevronDownIcon />
                  </IconWrapper>
                </button>
              </div>

              {/* FILE FORMAT */}
              <div className="flex flex-col gap-y-0.5">
                <span>File format</span>
                <button type="button" className="flex items-center justify-between bg-[#F8F9FD] px-3.5 py-3 w-full rounded-lg">
                  <span className="uppercase">PDF</span>
                  <IconWrapper>
                    <ChevronDownIcon />
                  </IconWrapper>
                </button>
              </div>

              {/* FEES DISPLAY */}
              <div className="flex items-center justify-between gap-x-8 my-0.5">
                <span className="font-normal">Display transactions with fees shown separately</span>
                <SwitchInput isOn={true} />
              </div>

              {/* LANGUAGE SELECT */}
              <div className="flex flex-col gap-y-0.5">
                <span>Statement Language</span>
                <button type="button" className="flex items-center justify-between bg-[#F8F9FD] px-3.5 py-3 w-full rounded-lg">
                  <span>English</span>
                  <IconWrapper>
                    <ChevronDownIcon />
                  </IconWrapper>
                </button>
              </div>
            </div>
          </section>

          {/* BUTTONS */}
          <div className="mt-8 text-center flex flex-col items-center gap-y-4">
            <button
              type="button"
              disabled
              className="px-8 rounded-lg disabled:cursor-not-allowed disabled:opacity-60 enabled:active:scale-95 transition-all ease-in-out enabled:bg-main enabled:text-white enabled:border-main disabled:border-slate-200 py-4 w-full disabled:bg-gray-300 flex items-center justify-center"
            >
              Download
            </button>
            <button type="button" className="underline text-black font-medium underline-offset-2">
              Give us feedback
            </button>
          </div>
        </div>
      </section>

      {/* DATE PICKER MODAL */}
      <DatePickerModal
        open={isDatePickerOpen}
        dateType={activeDateType}
        currentValue={selectedDates[activeDateType]}
        onDateSelect={handleDateSelect}
        modalData={{ toggleModal }}
      />

      {/* BALANCE MODAL */}
      <AccountOwnershipSelectBalanceModal
        open={isBalanceModalOpen}
        modalData={{ toggleModal }}
        action={() => { }}
      />
    </div>
  );
};
