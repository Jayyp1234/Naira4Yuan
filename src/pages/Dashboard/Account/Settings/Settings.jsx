import React, { useState } from "react";
import { CautionIcon, ChevronLeftIcon, ChevronRightIcon, IconWrapper, LogoutIcon, SearchIcon, ShieldIcon, SocialLoginIcon, ThumbPrintIcon } from "@/data/Icons";
import { Link, useNavigate } from "react-router";
import { routes } from "@/data/routes";
import { SecurityAndPrivacySkeleton } from "@/components/Skeleton/Skeleton";

export const Settings = () => {
  const navigate = useNavigate();
  const [isDashboardLoading, setIsDashboardLoading] = useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsDashboardLoading(false);
    }, 2000); // 2000ms = 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isDashboardLoading) {
    return <SecurityAndPrivacySkeleton />;
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
      <header>
        <h2 className="text-2xl font-bold">Security and privacy</h2>
      </header>
      <section className="my-8">
        <header className="border-b border-solid pb-1">
          <h6 className="text-lg text-slate-700 font-medium">Security</h6>
        </header>
        <ul className="py-4 w-full flex flex-col gap-y-4">
          <li>
            <Link to={routes.DASHBOARD.account.security.password.index.rel} className="flex items-center gap-4 flex-grow">
              <IconWrapper className="bg-slate-200/50 text-slate-600 p-2.5 rounded-full">
                <ShieldIcon className="w-5 h-5" />
              </IconWrapper>
              <div className="flex items-center justify-between flex-grow gap-3">
                <aside className="text-start flex flex-col gap-y-1">
                  <h3 className="text-lg leading-tight font-medium">Password</h3>
                  <p className="text-gray-500 text-sm leading-tight">**********</p>
                </aside>
                <aside className="flex items-center gap-x-4">
                  <IconWrapper>
                    <ChevronRightIcon />
                  </IconWrapper>
                </aside>
              </div>
            </Link>
          </li>
          <li>
            <Link to={routes.DASHBOARD.account.security._2stepVerification.index.rel} className="flex items-center gap-4 flex-grow">
              <IconWrapper className="bg-slate-200/50 text-slate-600 p-2.5 rounded-full">
                <ThumbPrintIcon className="w-5 h-5" />
              </IconWrapper>
              <div className="flex items-center justify-between flex-grow gap-3">
                <aside className="text-start flex flex-col gap-y-1">
                  <h3 className="text-lg leading-tight font-medium">2-step verification</h3>
                  <p className="text-gray-500 text-sm leading-tight">Status: On</p>
                </aside>
                <aside className="flex items-center gap-x-4">
                  <IconWrapper>
                    <ChevronRightIcon />
                  </IconWrapper>
                </aside>
              </div>
            </Link>
          </li>
          <li>
            <Link to={routes.DASHBOARD.account.security.socialLogin.rel} className="flex items-center gap-4 flex-grow">
              <IconWrapper className="bg-slate-200/50 text-slate-600 p-2.5 rounded-full">
                <SocialLoginIcon className="w-5 h-5" />
              </IconWrapper>
              <div className="flex items-center justify-between flex-grow gap-3">
                <aside className="text-start flex flex-col gap-y-1">
                  <h3 className="text-lg leading-tight font-medium">Social login</h3>
                  <p className="text-gray-500 text-sm leading-tight">Login to your Naira4yuan account using Google.</p>
                </aside>
                <aside className="flex items-center gap-x-4">
                  <IconWrapper>
                    <ChevronRightIcon />
                  </IconWrapper>
                </aside>
              </div>
            </Link>
          </li>
          <li>
            <Link to={routes.DASHBOARD.account.security.logout.rel} className="flex items-center gap-4 flex-grow">
              <IconWrapper className="bg-slate-200/50 text-slate-600 p-2.5 rounded-full">
                <LogoutIcon className="w-5 h-5" />
              </IconWrapper>
              <div className="flex items-center justify-between flex-grow gap-3">
                <aside className="text-start flex flex-col gap-y-1">
                  <h3 className="text-lg leading-tight font-medium">Log out everywhere</h3>
                  <p className="text-gray-500 text-sm leading-tight">
                    If you notice any suspicious activity on your Naira4yuan account, logout across all devices and browsers.
                  </p>
                </aside>
                <aside className="flex items-center gap-x-4">
                  <IconWrapper>
                    <ChevronRightIcon />
                  </IconWrapper>
                </aside>
              </div>
            </Link>
          </li>
        </ul>
      </section>
      <section className="my-8">
        <header className="border-b border-solid pb-1">
          <h6 className="text-lg text-slate-700 font-medium">Transactions and fees</h6>
        </header>
        <ul className="py-4 w-full flex flex-col gap-y-4">
          <li>
            <Link to={routes.DASHBOARD.account.security.find.rel} className="flex items-center gap-4 flex-grow">
              <IconWrapper className="bg-slate-200/50 text-slate-600 p-2.5 rounded-full">
                <SearchIcon className="w-5 h-5 align-middle" />
              </IconWrapper>
              <div className="flex items-center justify-between flex-grow gap-3">
                <aside className="text-start flex flex-col gap-y-1">
                  <h3 className="text-lg leading-tight font-medium">Find me by</h3>
                  <p className="text-gray-500 text-sm leading-tight">Allow other Naira4yuan users find your account</p>
                </aside>
                <aside className="flex items-center gap-x-4">
                  <IconWrapper>
                    <ChevronRightIcon />
                  </IconWrapper>
                </aside>
              </div>
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-4 flex-grow">
              <IconWrapper className="bg-slate-200/50 text-slate-600 p-2.5 rounded-full">
                <CautionIcon className="w-5 h-5" />
              </IconWrapper>
              <div className="flex items-center justify-between flex-grow gap-3">
                <aside className="text-start flex flex-col gap-y-1">
                  <h3 className="text-lg leading-tight font-medium">Privacy policy</h3>
                  <p className="text-gray-500 text-sm leading-tight">Learn how we protect and use your personal information.</p>
                </aside>
                <aside className="flex items-center gap-x-4">
                  <IconWrapper>
                    <ChevronRightIcon />
                  </IconWrapper>
                </aside>
              </div>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
};
