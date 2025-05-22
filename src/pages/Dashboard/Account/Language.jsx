import React, { useState } from "react";
import { ChevronDownIcon, ChevronLeftIcon, IconWrapper } from "@/data/Icons";
import { useNavigate } from "react-router";
import { LanguageSettingSkeleton } from "@/components/Skeleton/Skeleton";

export const Language = () => {
  const navigate = useNavigate();

  const [isDashboardLoading, setIsDashboardLoading] = useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsDashboardLoading(false);
    }, 2000); // 2000ms = 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isDashboardLoading) {
    return <LanguageSettingSkeleton />;
  }

  return (
    <div className="flex flex-col gap-y-5 max-w-2xl">
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
        <h2 className="text-2xl font-bold">Language</h2>
      </header>
      <section className="my-4">
        <div className="flex flex-col gap-y-0.5 mb-8">
          <span>Select your default language</span>
          <button type="button" className="flex items-center justify-between bg-[#F8F9FD] px-3.5 py-3 w-full rounded-lg">
            <span>English (UK)</span>
            <IconWrapper>
              <ChevronDownIcon />
            </IconWrapper>
          </button>
        </div>
        <button type="button" className="flex items-center justify-center animate-active bg-[#F1C34E] px-3.5 py-3.5 w-full rounded-lg">
          <span>Save</span>
        </button>
      </section>
    </div>
  );
};
