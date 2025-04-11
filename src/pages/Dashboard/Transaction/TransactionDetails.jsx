import React from "react";
import { DefaultAvatarImage } from "@/data";
import { ChevronRightIcon, IconWrapper, UsersIcon } from "@/data/Icons";

export const TransactionDetails = () => {
  return (
    <div className="flex flex-col gap-y-5 mb-10 max-w-4xl mx-auto">
      <header>
        <h2 className="text-2xl font-bold">Who{`’`}s your recipient</h2>
      </header>
      <section className="flex flex-col gap-y-2 mt-2">
        <ul className="space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 flex-grow">
              <img src={DefaultAvatarImage} alt="" className="w-9 h-9 rounded-full" />

              <div>
                <h3 className="text-lg font-normal">Myself</h3>
              </div>
            </div>
            <IconWrapper>
              <ChevronRightIcon />
            </IconWrapper>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 flex-grow">
              <IconWrapper className="bg-slate-200/50 text-slate-600 p-2.5 rounded-full">
                <UsersIcon />
              </IconWrapper>
              <div>
                <h3 className="text-lg font-normal">Someone else</h3>
              </div>
            </div>
            <IconWrapper>
              <ChevronRightIcon />
            </IconWrapper>
          </div>
        </ul>
      </section>
    </div>
  );
};
