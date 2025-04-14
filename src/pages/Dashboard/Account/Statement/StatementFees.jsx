import { useState } from "react";
import { DatePickerModal } from "@/components/LayoutComponents/AllModals";
import { ChevronDownIcon, ChevronLeftIcon, IconWrapper } from "../../../../data/Icons";
import { useNavigate } from "react-router";

export const StatementFees = () => {
  const navigate = useNavigate();
  const [activeDateType, setActiveDateType] = useState(null);
  const [selectedDates, setSelectedDates] = useState({ from: null, to: null });
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const toggleMainModal = (type, open) => {
    if (type === "DATE_PICKER") {
      setIsDatePickerOpen(open);
      if (!open) setActiveDateType(null);
    }
  };

  const handleDateSelect = (type, date) => {
    setSelectedDates((prev) => ({ ...prev, [type]: date }));
  };

  // Check if both dates are selected to enable the Download button
  const isDownloadEnabled = selectedDates.from && selectedDates.to;

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
        <h2 className="text-2xl font-bold">Statement of fees</h2>
      </header>
      <section className="my-8">
        <header className="border-b border-solid pb-1">
          <h6 className="text-lg text-slate-700 font-medium">Set the date</h6>
        </header>
        <div className="max-w-xl">
          <span className="my-4 block">
            Statements can cover any period of time up to one year. For longer periods, you’ll need to download multiple statements.
          </span>
          <section className="my-4 flex flex-col gap-y-1">
            <h4 className="text-slate-600">Dates</h4>
            <div className="flex items-center gap-x-3 mt-1">
              {["Last month", "Last quarter", "Last year"].map((label) => (
                <button
                  key={label}
                  type="button"
                  className="bg-slate-100 hover:bg-slate-200 py-2 px-4 text-sm rounded-tl-sm animate-active rounded-lg flex items-center justify-center font-medium"
                  onClick={() => {
                    // Handle preset date selection logic here if necessary
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="rounded-lg mt-3 flex items-stretch overflow-hidden bg-[#F8F9FD]/80">
              <span className="flex items-center px-4 text-sm sm:text-[.95rem] bg-[#F8F9FD] border-r border-r-slate-100">From</span>
              <button
                type="button"
                onClick={() => {
                  setActiveDateType("from");
                  toggleMainModal("DATE_PICKER", true);
                }}
                className="flex items-center justify-between px-3.5 py-3 w-full"
              >
                <span className="text-[.95rem] text-[#94A3B8]">
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
                  toggleMainModal("DATE_PICKER", true);
                }}
                className="flex items-center justify-between px-3.5 py-3 w-full"
              >
                <span className="text-[.95rem] text-[#94A3B8]">
                  {selectedDates.to ? selectedDates.to.toDateString() : "Choose an end date"}
                </span>
                <IconWrapper>
                  <ChevronDownIcon />
                </IconWrapper>
              </button>
            </div>
          </section>
          <div className="mt-8 text-center flex flex-col items-center gap-y-4">
            <button
              type="button"
              disabled={!isDownloadEnabled} // Enable only if both dates are selected
              className="px-8 rounded-lg disabled:cursor-not-allowed disabled:opacity-60 enabled:active:scale-95 transition-all ease-in-out enabled:bg-[#F1C34E] enabled:text-[#122231] enabled:border-[#F1C34E] disabled:border-slate-200 py-4 w-full disabled:bg-gray-300 flex items-center justify-center"
            >
              Download
            </button>
            <button type="button" className="underline text-black font-medium underline-offset-2">
              Give us feedback
            </button>
          </div>

          <DatePickerModal
            open={isDatePickerOpen}
            dateType={activeDateType}
            currentValue={selectedDates[activeDateType]}
            onDateSelect={handleDateSelect}
            modalData={{ toggleModal: toggleMainModal }}
          />
        </div>
      </section>
    </div>
  );
};
