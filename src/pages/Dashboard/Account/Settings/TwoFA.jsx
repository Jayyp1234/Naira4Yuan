import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { routes } from "@/data/routes";
import { ChatIcon, ChevronLeftIcon, ChevronRightIcon, IconWrapper, LightningIcon, ShieldCheckIcon } from "@/data/Icons";
import { SwitchInput } from "@/components/BaseComponents/FormInputs";
import { TwoFATextMessageSkeleton } from "@/components/Skeleton/Skeleton";

export const TwoFA = () => {
  const navigate = useNavigate();
  const [isDashboardLoading, setIsDashboardLoading] = useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsDashboardLoading(false);
    }, 2000); // 2000ms = 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isDashboardLoading) {
    return <TwoFATextMessageSkeleton />;
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
      <header className="flex flex-col gap-y-5">
        <h2 className="text-2xl font-bold">2-step verification</h2>
        <span>We use 2-step verification when we need to check it’s really you using your account.</span>
      </header>
      <section className="my-8">
        <header className="flex items-center justify-between border-b border-solid pb-1">
          <h6 className="text-lg text-slate-700 font-medium">Your verification methods</h6>
          <button type="button" className="underline text-black underline-offset-2">
            Edit default
          </button>
        </header>
        <ul className="py-4 w-full flex flex-col gap-y-6 mt-1 mb-10">
          <li>
            <Link to={routes.DASHBOARD.account.security._2stepVerification.message.rel} className="flex items-center gap-4 flex-grow">
              <IconWrapper className="bg-slate-200/50 text-slate-600 p-2.5 rounded-full">
                <ChatIcon className="w-[1.3rem] h-[1.3rem]" />
              </IconWrapper>
              <div className="flex items-center justify-between flex-grow gap-3">
                <aside className="text-start flex flex-col gap-y-1">
                  <h3 className="text-lg leading-tight font-medium">Text message</h3>
                  <p className="text-gray-500 text-sm leading-tight">
                    Receive a verification code by text. You’ll need phone signal for this. Receive codes by SMS, voice call or Whatsapp.
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
          <li>
            <Link to={routes.DASHBOARD.account.security._2stepVerification.authenticator.rel} className="flex items-center gap-4 flex-grow">
              <IconWrapper className="bg-slate-200/50 text-slate-600 p-2.5 rounded-full">
                <ShieldCheckIcon className="w-[1.3rem] h-[1.3rem]" />
              </IconWrapper>
              <div className="flex items-center justify-between flex-grow gap-3">
                <aside className="text-start flex flex-col gap-y-1">
                  <h3 className="text-lg leading-tight font-medium">Authenticator app</h3>
                  <p className="text-gray-500 text-sm leading-tight">
                    Verify using a separate authenticator app. No need to wait for a text, and it works without internet connection.
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
          <li>
            <div className="flex items-center gap-4 flex-grow">
              <IconWrapper className="bg-slate-200/50 text-slate-600 p-2.5 rounded-full">
                <LightningIcon className="w-[1.3rem] h-[1.3rem]" />
              </IconWrapper>
              <div className="flex items-center justify-between flex-grow gap-3">
                <aside className="text-start flex flex-col gap-y-1">
                  <h3 className="text-lg leading-tight font-medium">Automatic verification</h3>
                  <p className="text-gray-500 text-sm leading-tight">
                    When you log in, we use your uinque behaviors to confirm that it’s you. It’s fast and secure.
                  </p>
                </aside>
                <aside className="flex items-center gap-x-4">
                  <SwitchInput isOn={true} />
                </aside>
              </div>
            </div>
          </li>
        </ul>
        <div className="text-center">
          <button type="button" className="underline underline-offset-2">
            Learn more about automatic verification
          </button>
        </div>
      </section>
    </div>
  );
};
