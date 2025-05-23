import React, { useState } from "react";
import { GoogleIcon } from "../../../../data";
import { useNavigate } from "react-router";
import { ChevronLeftIcon } from "@/data/Icons";
import { SocialLoginSkeleton } from "@/components/Skeleton/Skeleton";

export const SocialLogin = () => {
  const navigate = useNavigate();
  const [isDashboardLoading, setIsDashboardLoading] = useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsDashboardLoading(false);
    }, 2000); // 2000ms = 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isDashboardLoading) {
    return <SocialLoginSkeleton />;
  }

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
      <header className="flex flex-col items-start gap-y-5">
        <h2 className="text-2xl font-bold">Social login options</h2>
        <span>The social accounts you can use for logging in to Naira4yuan</span>
      </header>
      <section className="my-8">
        <div className="flex items-center gap-4 flex-grow">
          <figure className="w-10 h-10">
            <img src={GoogleIcon} alt="" className="max-w-full h-auto" />
          </figure>
          <div className="flex items-center justify-between flex-grow gap-3">
            <aside className="text-start flex flex-col gap-y-1">
              <h3 className="text-lg leading-tight font-medium">Google</h3>
            </aside>
          </div>
          <button
            type="button"
            className="text-sm text-red-500 py-1.5 px-4 animate-active border border-solid border-red-500 rounded-lg hover:text-white hover:bg-red-500">
            Disconnect
          </button>
        </div>
      </section>
    </div>
  );
};
