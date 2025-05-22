import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon, IconWrapper, MessageIcon, PhoneIconVar, UserIcon } from "@/data/Icons";
import { routes } from "@/data/routes";
import { Link, useNavigate } from "react-router";
import { PersonalDetailsSkeleton } from "@/components/Skeleton/Skeleton";

export const PersonalDetails = () => {
  const navigate = useNavigate();

  const [isDashboardLoading, setIsDashboardLoading] = useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsDashboardLoading(false);
    }, 2000); // 2000ms = 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isDashboardLoading) {
    return <PersonalDetailsSkeleton />;
  }

  return (
    <div className="flex flex-col gap-y-7">
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
        <h2 className="text-2xl font-bold">Personal details</h2>
      </header>
      <section>
        <ul className="space-y-4">
          <li>
            <Link to={routes.DASHBOARD.account.personal.update.rel} className="flex items-center justify-between">
              <div className="flex items-center gap-3 flex-grow">
                <IconWrapper className="bg-slate-200/50 text-slate-600 p-2.5 rounded-full">
                  <UserIcon />
                </IconWrapper>
                <div>
                  <h3 className="text-lg font-medium">Personal information</h3>
                  <p className="text-gray-500 text-sm">Manage your personal information</p>
                </div>
              </div>
              <IconWrapper>
                <ChevronRightIcon />
              </IconWrapper>
            </Link>
          </li>
          <li>
            <Link to={routes.DASHBOARD.account.personal.update.rel} className="flex items-center justify-between">
              <div className="flex items-center gap-3 flex-grow">
                <IconWrapper className="bg-slate-200/50 text-slate-600 p-2.5 rounded-full">
                  <MessageIcon />
                </IconWrapper>
                <div>
                  <h3 className="text-lg font-medium">Email address</h3>
                  <p className="text-gray-500 text-sm">tundeburemo@gmail.com</p>
                </div>
              </div>
              <IconWrapper>
                <ChevronRightIcon />
              </IconWrapper>
            </Link>
          </li>
          <li>
            <Link to={routes.DASHBOARD.account.personal.update.rel} className="flex items-center justify-between">
              <div className="flex items-center gap-3 flex-grow">
                <IconWrapper className="bg-slate-200/50 text-slate-600 p-2.5 rounded-full">
                  <PhoneIconVar />
                </IconWrapper>
                <div>
                  <h3 className="text-lg font-medium">Phone number</h3>
                  <p className="text-gray-500 text-sm">+2348180688157</p>
                </div>
              </div>
              <IconWrapper>
                <ChevronRightIcon />
              </IconWrapper>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
};
