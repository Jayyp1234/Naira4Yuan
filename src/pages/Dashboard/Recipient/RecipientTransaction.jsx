import React from "react";
import { FormControl } from "@/components/BaseComponents/FormInputs";
import { DownloadIcon, FilterIcon, IconWrapper, SearchIcon } from "@/data/Icons";
import { EmptyImageVar2 } from "@/data";
import { RecipientsFilter } from "@/components/PageComponents/Dashboard/RecipientsFilter";
import { StateDataContext } from "@/App";

export const RecipientTransaction = () => {
  const { stateData, setStateData } = React.useContext(StateDataContext);

  function triggerFilterSidebar() {
    const newData = structuredClone(stateData);
    newData.dashboard.recipients.filterSidebar = true;
    setStateData(newData);
  }

  return (
    <>
      <div>
        <header className="flex items-center justify-between flex-wrap gap-4">
          <h2 className="text-3xl font-semibold">Transactions</h2>
          <div className="flex-grow flex flex-wrap gap-3 gap-x-10 [&>div]:w-full md:[&>div]:w-auto justify-end">
            <FormControl
              style="!bg-transparent border border-solid w-full !min-h-[unset] h-10 !rounded-lg border-stone-400"
              type="Search"
              floatEle={{
                exist: true,
                position: "left",
                children: (
                  <IconWrapper>
                    <SearchIcon />
                  </IconWrapper>
                ),
              }}
              placeholder="Search"
            />
            <div className="flex items-center gap-x-4">
              <button
                type="button"
                onClick={triggerFilterSidebar}
                className="flex items-center justify-center font-medium gap-x-2.5 bg-slate-200/80 py-2 px-4 rounded-xl rounded-tl-sm text-sm animate-active">
                <IconWrapper className="text-slate-600">
                  <FilterIcon />
                </IconWrapper>
                <span>Filter</span>
              </button>
              <button
                type="button"
                className="flex items-center justify-center font-medium gap-x-2.5 bg-slate-200/80 py-2 px-4 rounded-xl rounded-tl-sm text-sm animate-active">
                <IconWrapper className="text-slate-600">
                  <DownloadIcon className="w-4 h-4" />
                </IconWrapper>
                <span>Download</span>
              </button>
            </div>
          </div>
        </header>
        <main className="min-h-[65dvh] md:min-[75dvh] flex">
          {/* Show the no results message if filters return no results */}
          {stateData.dashboard.noResultsMessage && (
            <div className="text-base text-black">
              {stateData.dashboard.noResultsMessage}
            </div>
          )}
          <div className="flex-grow h-full m-auto flex items-center justify-center">
            <figure className="max-w-52 -ml-5 -sm:ml-8">
              <img src={EmptyImageVar2} alt="" className="h-auto max-w-full" />
            </figure>
          </div>
        </main>
      </div>

      <RecipientsFilter />
    </>
  );
};
