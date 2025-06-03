import React from "react";

export const DashboardSkeleton = () => {
  return (
    <div>
      <header className="flex flex-col gap-y-1 animate-pulse">
        <div className="h-4 bg-gray-300 rounded w-28"></div>
        <div className="flex items-center mt-1 gap-x-4">
          <div className="h-8 bg-gray-300 rounded w-36"></div>
          <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
        </div>
        <div className="flex items-center mt-2 gap-x-3">
          <div className="w-32 h-10 bg-gray-200 rounded-xl"></div>
          <div className="w-24 h-10 bg-yellow-200 rounded-xl"></div>
        </div>
      </header>

      <main>
        <section className="my-8 animate-pulse">
          <div className="bg-[#F8F9FD] overflow-hidden rounded-xl rounded-tl-sm p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="h-4 bg-gray-300 rounded w-28"></div>
              <div className="w-8 h-4 bg-gray-200 rounded-full"></div>
            </div>
            <div className="h-8 bg-gray-300 rounded w-44"></div>
            <footer className="grid grid-cols-3 gap-2 pt-4 mt-4 border-t">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-10 bg-gray-200 rounded"></div>
              ))}
            </footer>
          </div>
        </section>

        <section className="my-8 animate-pulse">
          <div className="flex items-center justify-between mb-6">
            <div className="w-32 h-6 bg-gray-300 rounded"></div>
            <div className="w-16 h-4 bg-gray-200 rounded"></div>
          </div>
          <ul className="flex flex-col gap-y-2">
            {[...Array(3)].map((_, i) => (
              <li key={i} className="h-16 bg-gray-200 rounded"></li>
            ))}
          </ul>
        </section>

        <section className="my-8 animate-pulse">
          <div className="h-6 mb-4 bg-gray-300 rounded w-44"></div>
          <div className="bg-[#F8F9FD] p-6 rounded-2xl">
            <div className="w-56 h-6 mb-5 bg-gray-300 rounded"></div>
            <div className="grid gap-4 lg:grid-cols-2">
              <div className="h-40 bg-gray-200 rounded"></div>
              <div className="flex flex-col gap-y-5">
                <div className="h-12 bg-gray-200 rounded"></div>
                <div className="h-12 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-y-3.5">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="bg-gray-200 rounded h-14"></div>
            ))}
          </div>
        </section>

        <section className="flex flex-col my-8 gap-y-4 animate-pulse">
          <div className="w-40 h-6 bg-gray-300 rounded"></div>
          <ul className="flex items-start gap-x-3.5">
            {[...Array(3)].map((_, i) => (
              <li key={i} className="flex flex-col items-center gap-y-2.5">
                <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
                <div className="w-16 h-4 bg-gray-300 rounded"></div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export const RecipientsSkeleton = () => {
  return (
    <div className="animate-pulse">
      <header className="mb-4">
        <div className="w-32 h-6 bg-gray-300 rounded"></div>
      </header>

      <section className="my-8">
        <div className="flex items-stretch sm:flex-nowrap flex-wrap gap-2 gap-x-3 min-h-[auto]">
          <div className="flex-grow bg-gray-200 rounded-lg h-11"></div>
          <div className="bg-yellow-200 rounded-lg h-11 w-36"></div>
        </div>
      </section>

      <section className="flex flex-col my-8 gap-y-4">
        <div className="h-4 bg-gray-300 rounded w-28"></div>
        <ul className="flex items-start gap-x-3.5">
          {[...Array(2)].map((_, i) => (
            <li key={i} className="flex flex-col items-center gap-y-2">
              <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
              <div className="h-3 bg-gray-300 rounded w-14"></div>
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col my-8 gap-y-5">
        <div className="flex items-center gap-x-2">
          <div className="w-20 bg-gray-300 rounded-lg h-9"></div>
          <div className="bg-gray-300 rounded-lg h-9 w-28"></div>
        </div>

        <ul className="flex flex-col gap-y-3.5">
          {[...Array(4)].map((_, i) => (
            <li key={i} className="h-16 bg-gray-200 rounded"></li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export const WalletPageSkeleton = () => {
  return (
    <div className="animate-pulse">
      <header className="flex flex-col gap-4 pb-5 border-b sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-y-2">
          <div className="w-24 h-4 bg-gray-300 rounded"></div>
          <div className="w-40 h-8 bg-gray-300 rounded"></div>
          <div className="w-56 bg-gray-200 rounded-md h-9"></div>
        </div>
        <div className="flex flex-row gap-3 sm:items-center">
          <div className="bg-gray-300 rounded-full h-14 w-14"></div>
          <div className="bg-gray-300 rounded-full h-14 w-14"></div>
        </div>
      </header>

      <main className="grid grid-cols-1 pt-10 md:grid-cols-2 gap-x-10 gap-y-12">
        <aside>
          <div className="h-6 mb-5 bg-gray-300 rounded w-28"></div>
          <div className="flex justify-end gap-2 mb-3">
            <div className="w-full h-10 bg-gray-200 rounded"></div>
            <div className="flex gap-x-2">
              <div className="w-10 h-10 bg-gray-300 rounded-xl"></div>
              <div className="w-10 h-10 bg-gray-300 rounded-xl"></div>
            </div>
          </div>

          {[...Array(2)].map((_, idx) => (
            <section key={idx} className="my-8">
              <div className="w-32 h-4 mb-3 bg-gray-300 rounded"></div>
              <ul className="flex flex-col gap-y-3">
                {[...Array(3)].map((_, i) => (
                  <li key={i} className="h-16 bg-gray-200 rounded"></li>
                ))}
              </ul>
            </section>
          ))}
        </aside>

        <aside>
          <div className="h-6 mb-5 bg-gray-300 rounded w-28"></div>
          <div className="bg-gray-200 h-28 rounded-2xl"></div>
          <div className="w-64 h-4 mt-3 bg-gray-300 rounded"></div>
        </aside>
      </main>
    </div>
  );
};

export const ReferralPageSkeleton = () => {
  return (
    <main className="flex flex-col w-full mx-auto space-y-6 xl:w-11/12 animate-pulse">
      <div className="mb-5 space-y-12">
        {/* Header referral card */}
        <div className="bg-[#013B33] p-5 rounded-3xl">
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-5">
            <aside className="space-y-4 lg:col-span-3">
              <div className="w-3/4 h-10 bg-green-200 rounded"></div>
              <div className="w-full h-4 bg-green-100 rounded"></div>
              <div className="w-3/4 h-4 bg-green-100 rounded"></div>
              <div className="w-full h-12 bg-green-200 rounded-xl"></div>
            </aside>
            <aside className="flex justify-center mt-6 lg:col-span-2 lg:mt-0">
              <div className="flex space-x-3">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-12 h-12 bg-white rounded-full"></div>
                ))}
              </div>
            </aside>
          </div>
        </div>

        {[...Array(3)].map((_, idx) => (
          <div key={idx} className="grid items-center grid-cols-1 p-5 bg-white lg:grid-cols-4 gap-y-5 rounded-2xl">
            <div className="space-y-2 lg:col-span-2">
              <div className="w-48 h-6 bg-gray-300 rounded"></div>
              <div className="w-full h-4 bg-gray-200 rounded"></div>
            </div>
            <div className="flex justify-center lg:col-span-2">
              <div className="flex space-x-3">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="w-16 h-16 bg-gray-300 rounded-full"></div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Referrals + Filters */}
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-3 border-b">
            <div className="w-24 h-4 bg-gray-300 rounded"></div>
            <div className="w-32 h-4 bg-gray-200 rounded"></div>
          </div>

          <div className="flex flex-wrap gap-2">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-24 bg-gray-200 rounded-md h-9"></div>
            ))}
          </div>

          <div className="mt-5 space-y-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-full h-20 bg-gray-100 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export const AccountOverviewSkeleton = () => {
  return (
    <div className="flex flex-col items-start gap-6 mb-10 lg:flex-row animate-pulse">
      <aside className="flex flex-col w-full lg:w-1/2 lg:sticky lg:top-4 gap-y-5">
        <div className="p-6 rounded-tl-none bg-gray-100/80 lg:p-8 rounded-xl">
          <div className="flex flex-col items-center w-11/12 mx-auto text-center gap-y-4">
            <div className="w-20 h-20 bg-gray-300 rounded-full"></div>
            <div className="w-3/4 h-8 bg-gray-300 rounded"></div>
            <div className="w-1/2 h-4 bg-gray-200 rounded"></div>
            <div className="w-56 bg-gray-200 rounded-md h-9"></div>
          </div>
        </div>

        <div className="border-2 border-dashed border-slate-300 py-4 px-3 bg-slate-100/60 rounded-lg flex items-center gap-x-3.5">
          <div className="w-10 h-10 bg-white rounded-full"></div>
          <div className="flex flex-col flex-grow gap-y-2">
            <div className="w-32 h-4 bg-gray-300 rounded"></div>
          </div>
          <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
        </div>

        <div className="flex flex-col items-center text-center gap-y-2">
          <div className="w-40 h-4 bg-gray-300 rounded"></div>
          <div className="w-24 h-8 bg-gray-200 rounded"></div>
        </div>
      </aside>

      <aside className="w-full lg:w-1/2">
        <div className="flex flex-col gap-y-5">
          {[...Array(2)].map((_, sectionIdx) => (
            <div key={sectionIdx} className="flex flex-col gap-y-3.5">
              <div className="w-48 h-6 bg-gray-300 rounded"></div>
              <ul className="flex flex-col gap-y-3">
                {[...Array(3)].map((_, itemIdx) => (
                  <li key={itemIdx} className="flex items-center gap-3.5">
                    <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                    <div className="flex-grow">
                      <div className="w-3/4 h-4 mb-1 bg-gray-300 rounded"></div>
                      <div className="w-1/2 h-3 bg-gray-200 rounded"></div>
                    </div>
                    <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-5 text-center">
          <div className="w-32 h-4 mx-auto bg-gray-300 rounded"></div>
        </div>
      </aside>
    </div>
  );
};

export const CashbackReferralSkeleton = () => {
  return (
    <main className="flex flex-col gap-y-7 animate-pulse">
      {/* Slides section */}
      <div className="space-y-2">
        <div className="h-32 bg-gray-200 rounded-lg"></div>
        <div className="flex justify-center gap-2 mb-5">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-3 h-3 bg-gray-300 rounded-full"></div>
          ))}
        </div>
      </div>

      {/* Cashback summary */}
      <div className="flex flex-col space-y-4">
        <div className="max-w-60">
          <div className="w-1/2 h-4 mb-1 bg-gray-300 rounded"></div>
          <div className="flex items-center justify-between">
            <div className="w-24 h-6 bg-gray-400 rounded"></div>
            <div className="w-5 h-5 bg-gray-300 rounded"></div>
          </div>
        </div>
        <div>
          <div className="w-32 h-10 bg-gray-300 rounded-xl"></div>
        </div>
      </div>

      {/* Earnings summary */}
      <div className="flex flex-col bg-gray-100 border border-gray-300 md:flex-row rounded-xl">
        <div className="flex-1 p-6">
          <div className="w-3/4 h-4 bg-gray-300 rounded"></div>
          <div className="w-1/2 h-8 mt-2 bg-gray-400 rounded"></div>
        </div>
        <div className="flex-1 p-6">
          <div className="w-3/4 h-4 bg-gray-300 rounded"></div>
          <div className="w-1/2 h-8 mt-2 bg-gray-400 rounded"></div>
        </div>
      </div>

      {/* Invited Friends List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between pb-3 border-b">
          <div className="w-32 h-5 bg-gray-300 rounded"></div>
          <div className="w-20 h-5 bg-gray-300 rounded"></div>
        </div>

        <div className="flex flex-wrap gap-2">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-24 h-10 bg-gray-200 rounded-md"></div>
          ))}
        </div>

        <ul className="mt-5 space-y-3">
          {[...Array(3)].map((_, i) => (
            <li key={i} className="flex items-center justify-between p-3 bg-gray-100 border rounded-lg">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div className="flex flex-col">
                  <div className="w-24 h-4 bg-gray-300 rounded"></div>
                  <div className="w-16 h-3 mt-1 bg-gray-200 rounded"></div>
                  <div className="w-20 h-3 mt-1 bg-gray-200 rounded"></div>
                </div>
              </div>
              <div className="text-right">
                <div className="w-16 h-4 mb-1 bg-gray-300 rounded"></div>
                <div className="w-12 h-3 bg-gray-200 rounded"></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export const InboxSkeleton = () => {
  return (
    <div>
      <nav className="flex items-center flex-1 mb-3">
        <div className="flex items-center gap-2 opacity-50">
          <div className="w-4 h-4 bg-gray-300 rounded-full animate-pulse"></div>
          <div className="w-12 h-4 bg-gray-300 rounded animate-pulse"></div>
        </div>
      </nav>

      <header>
        <div className="h-6 mb-2 bg-gray-300 rounded w-28 animate-pulse"></div>
      </header>

      <section className="my-8">
        <header className="pb-1 mb-4 border-b border-solid">
          <div className="w-32 h-5 bg-gray-300 rounded animate-pulse"></div>
        </header>

        <ul className="flex flex-col w-full py-4 gap-y-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <li key={index} className="flex items-start justify-between p-3 bg-gray-100 border border-transparent rounded-lg animate-pulse">
              <div className="flex flex-col w-full gap-y-2">
                <div className="w-2/3 h-4 bg-gray-300 rounded"></div>
                <div className="w-3/4 h-3 bg-gray-200 rounded"></div>
              </div>
              <div className="w-16 h-5 bg-gray-300 rounded"></div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export const HelpCenterSkeleton = () => {
  return (
    <div className="mx-auto xs:w-11/12 xl:w-5/6 animate-pulse">
      <div className="mb-6">
        <div className="w-1/2 h-6 mx-auto bg-gray-300 rounded"></div>
      </div>

      {/* Recent Transactions */}
      <div className="mt-8 mb-2 sm:mt-12">
        <div className="flex items-center justify-between">
          <div className="w-3/4 h-4 bg-gray-300 rounded"></div>
          <div className="w-12 h-4 bg-gray-200 rounded"></div>
        </div>
      </div>

      <div className="mt-3 space-y-3">
        {[...Array(3)].map((_, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between px-2 py-3 bg-gray-100 border-2 border-transparent rounded-lg"
          >
            <div className="flex items-center gap-x-3">
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              <div>
                <div className="w-32 h-4 mb-1 bg-gray-300 rounded"></div>
                <div className="w-20 h-3 bg-gray-200 rounded"></div>
              </div>
            </div>
            <div className="text-right">
              <div className="w-16 h-4 mb-1 bg-gray-300 rounded"></div>
              <div className="h-3 bg-gray-200 rounded w-14"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Knowledgebase Topics */}
      <div className="mt-8 mb-10">
        <div className="flex items-center gap-2 mb-6 sm:mb-8">
          <div className="w-48 h-4 bg-gray-300 rounded"></div>
          <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {[...Array(6)].map((_, idx) => (
            <div key={idx} className="p-5 text-center bg-gray-100 rounded-lg sm:p-7 md:p-10">
              <div className="w-12 h-12 p-4 mx-auto mb-4 bg-white rounded-full sm:mb-5"></div>
              <div className="w-24 h-4 mx-auto mb-2 bg-gray-300 rounded"></div>
              <div className="w-40 h-3 mx-auto bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center sm:mt-12">
          <div className="w-24 h-4 mx-auto bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export const TransactionHelpSkeleton = () => {
  return (
    <div>
      {/* Breadcrumb Skeleton */}
      <div className="items-center hidden space-x-1 text-sm text-gray-800 sm:flex">
        {[...Array(4)].map((_, i) => (
          <React.Fragment key={i}>
            <div className="h-4 bg-gray-200 rounded w-14 animate-pulse"></div>
            {i < 3 && <div className="w-3 h-3 bg-gray-300 rounded-full"></div>}
          </React.Fragment>
        ))}
      </div>

      {/* Main Content */}
      <div className="max-w-xl mx-auto mt-10">
        {/* Transaction Summary Skeleton */}
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="w-10 h-10 bg-gray-300 rounded-full animate-pulse"></div>
          <div className="w-24 h-5 bg-gray-300 rounded animate-pulse"></div>
          <div className="w-32 h-4 bg-gray-200 rounded animate-pulse"></div>
        </div>

        {/* Issue List Skeleton */}
        <div className="mt-10 mb-20 space-y-4">
          <div className="w-32 h-4 mb-2 bg-gray-200 rounded animate-pulse"></div>
          <div className="border-t border-gray-100" />

          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-between py-2 cursor-default"
            >
              <div className="h-4 bg-gray-200 rounded w-52 animate-pulse"></div>
              <div className="w-4 h-4 bg-gray-300 rounded-full animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const TransferHelpSkeleton = () => {
  return (
    <div>
      {/* Breadcrumb Skeleton */}
      <div className="items-center hidden mb-4 space-x-1 text-sm text-gray-800 sm:flex">
        {[...Array(6)].map((_, i) => (
          <React.Fragment key={i}>
            <div className="w-16 h-4 bg-gray-200 rounded animate-pulse"></div>
            {i < 5 && <div className="w-3 h-3 bg-gray-300 rounded-full"></div>}
          </React.Fragment>
        ))}
      </div>

      {/* Main Content Skeleton */}
      <div className="flex flex-col items-center max-w-lg p-6 mx-auto mt-12">
        <div className="h-8 mb-6 bg-gray-300 rounded w-72 animate-pulse"></div>

        <div className="w-full mb-8 space-y-4">
          <div className="space-y-2">
            <div className="w-full h-4 bg-gray-200 rounded animate-pulse"></div>
            <div className="w-11/12 h-4 bg-gray-200 rounded animate-pulse"></div>
            <div className="w-9/12 h-4 bg-gray-200 rounded animate-pulse"></div>
          </div>

          <div className="mt-6 space-y-2">
            <div className="w-40 h-4 bg-gray-300 rounded animate-pulse"></div>
            {[...Array(2)].map((_, i) => (
              <div key={i} className="w-10/12 h-4 bg-gray-200 rounded animate-pulse"></div>
            ))}
            <div className="w-7/12 h-4 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>

        <div className="w-full h-10 mb-4 bg-gray-300 rounded animate-pulse"></div>

        <div className="w-32 h-4 bg-gray-200 rounded animate-pulse"></div>
      </div>
    </div>
  );
};

export const HelpRecentTransactionsSkeleton = () => {
  return (
    <>
      <div className="mx-auto xs:w-11/12 xl:w-5/6">
        {/* Header Skeleton */}
        <div className="flex items-center justify-between mb-6">
          <div className="h-6 mx-auto bg-gray-200 rounded sm:h-8 w-72 animate-pulse"></div>
        </div>

        {/* Section Title Skeleton */}
        <div className="mt-8 mb-2 sm:mt-12">
          <div className="w-48 h-4 bg-gray-300 rounded animate-pulse"></div>
        </div>

        {/* Transactions Skeleton List */}
        <div className="mt-4 space-y-2 sm:space-y-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="flex items-center justify-between px-2 py-3 border-2 border-transparent rounded-lg bg-gray-50 animate-pulse"
            >
              <div className="flex items-center">
                <div className="w-8 h-8 mr-4 bg-gray-200 rounded-full"></div>
                <div className="space-y-1">
                  <div className="w-24 h-3 bg-gray-300 rounded"></div>
                  <div className="w-16 h-3 bg-gray-200 rounded"></div>
                </div>
              </div>
              <div className="space-y-1 text-right">
                <div className="w-16 h-3 bg-gray-300 rounded"></div>
                <div className="h-3 bg-gray-200 rounded w-14"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Us Link Skeleton */}
        <div className="mt-8 mb-12 text-center sm:mt-12">
          <div className="w-24 h-4 mx-auto bg-gray-300 rounded animate-pulse"></div>
        </div>
      </div>
    </>
  );
};

export const AuthenticatorSkeleton = () => {
  return (
    <div>
      {/* Header */}
      <header className="flex flex-col gap-y-5">
        <div className="w-48 h-6 bg-gray-300 rounded animate-pulse"></div>
        <div className="h-4 bg-gray-200 rounded w-72 animate-pulse"></div>
      </header>

      {/* Section */}
      <section className="my-8">
        <header className="flex items-center justify-between pb-1 border-b">
          <div className="w-32 h-5 bg-gray-300 rounded animate-pulse"></div>
          <div className="w-20 h-4 bg-gray-200 rounded animate-pulse"></div>
        </header>

        <div className="flex flex-col py-4 mt-1 mb-10 gap-y-6">
          <div className="flex items-center gap-4">
            {/* Icon Placeholder */}
            <div className="w-10 h-10 p-3 bg-gray-200 rounded-full animate-pulse" />

            {/* Text Content */}
            <div className="flex-grow space-y-2">
              <div className="h-4 bg-gray-300 rounded w-44 animate-pulse"></div>
              <div className="h-3 bg-gray-200 rounded w-60 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const ProofOfAccountOwnershipSkeleton = () => {
  return (
    <div className="max-w-2xl animate-pulse">
      {/* Navigation */}
      <nav className="flex items-center mb-3">
        <div className="w-20 h-4 bg-gray-300 rounded" />
      </nav>

      {/* Header */}
      <header className="flex flex-col items-start gap-y-6">
        <div className="h-6 bg-gray-300 rounded w-60"></div>
        <div className="w-full h-4 max-w-md bg-gray-200 rounded"></div>
      </header>

      {/* Language selection */}
      <section className="my-8">
        <div className="flex flex-col mt-10 mb-8 gap-y-2">
          <div className="h-4 bg-gray-300 rounded w-44"></div>
          <div className="w-full h-12 bg-gray-200 rounded-lg"></div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col mt-16 gap-y-4">
          <div className="w-full h-12 bg-gray-300 rounded-lg"></div>
          <div className="w-32 h-4 bg-gray-200 rounded"></div>
        </div>
      </section>
    </div>
  );
};

export const StatementSkeleton = () => {
  return (
    <div className="max-w-xl mb-10 animate-pulse">
      {/* Nav Back Button */}
      <nav className="flex items-center mb-3">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
          <div className="w-16 h-4 bg-gray-300 rounded"></div>
        </div>
      </nav>

      {/* Header */}
      <header>
        <div className="w-40 h-6 mb-2 bg-gray-300 rounded"></div>
      </header>

      <section className="my-8">
        <header className="pb-1 mb-4 border-b border-solid">
          <div className="w-48 h-5 bg-gray-200 rounded"></div>
        </header>

        <div className="space-y-6">
          <div className="w-full h-4 bg-gray-200 rounded"></div>

          {/* Date Buttons */}
          <div className="flex gap-x-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-24 bg-gray-200 rounded h-9"></div>
            ))}
          </div>

          {/* From Date Picker */}
          <div className="w-full h-12 bg-gray-200 rounded"></div>

          {/* To Date Picker */}
          <div className="w-full h-12 bg-gray-200 rounded"></div>

          {/* Balance Picker */}
          <div className="w-full h-12 bg-gray-200 rounded"></div>

          {/* File Format Picker */}
          <div className="w-full h-12 bg-gray-200 rounded"></div>

          {/* Switch Row */}
          <div className="flex items-center justify-between">
            <div className="w-2/3 h-4 bg-gray-200 rounded"></div>
            <div className="w-12 h-6 bg-gray-300 rounded-full"></div>
          </div>

          {/* Language Picker */}
          <div className="w-full h-12 bg-gray-200 rounded"></div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col items-center mt-8 gap-y-4">
          <div className="w-full h-12 bg-gray-300 rounded"></div>
          <div className="w-32 h-4 bg-gray-200 rounded"></div>
        </div>
      </section>
    </div>
  );
};

export const StatementOfFeesSkeleton = () => {
  return (
    <div className="max-w-xl mb-10 animate-pulse">
      {/* Navigation */}
      <nav className="flex items-center mb-3">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-300 rounded-full" />
          <div className="w-16 h-4 bg-gray-300 rounded" />
        </div>
      </nav>

      {/* Header */}
      <header className="mb-2">
        <div className="w-48 h-6 bg-gray-300 rounded" />
      </header>

      <section className="my-8">
        {/* Section title */}
        <header className="pb-1 mb-4 border-b border-solid">
          <div className="w-40 h-5 bg-gray-200 rounded" />
        </header>

        {/* Description */}
        <div className="space-y-4">
          <div className="w-full h-4 bg-gray-200 rounded" />

          {/* Date Buttons */}
          <div className="flex gap-3">
            {[...Array(3)].map((_, idx) => (
              <div key={idx} className="w-24 bg-gray-200 rounded h-9" />
            ))}
          </div>

          {/* From Date Picker */}
          <div className="w-full h-12 bg-gray-200 rounded" />

          {/* To Date Picker */}
          <div className="w-full h-12 bg-gray-200 rounded" />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col items-center mt-8 gap-y-4">
          <div className="w-full h-12 bg-gray-300 rounded" />
          <div className="w-32 h-4 bg-gray-200 rounded" />
        </div>
      </section>
    </div>
  );
};

export const StatementAndReportsSkeleton = () => {
  return (
    <div className="max-w-xl animate-pulse">
      {/* Navigation */}
      <nav className="flex items-center mb-3">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-300 rounded-full" />
          <div className="w-16 h-4 bg-gray-300 rounded" />
        </div>
      </nav>

      {/* Page header */}
      <header className="mb-6">
        <div className="w-56 h-6 bg-gray-300 rounded" />
      </header>

      {/* Section: Transactions and fees */}
      <section className="my-8">
        <div className="w-40 h-5 mb-4 bg-gray-300 rounded" />
        <ul className="flex flex-col gap-y-4">
          {[...Array(2)].map((_, idx) => (
            <li key={idx} className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gray-300 rounded-full" />
              <div className="flex flex-col w-full gap-2">
                <div className="w-48 h-4 bg-gray-200 rounded" />
                <div className="w-64 h-3 bg-gray-200 rounded" />
              </div>
              <div className="w-5 h-5 ml-auto bg-gray-300 rounded-full" />
            </li>
          ))}
        </ul>
      </section>

      {/* Section: Ownership */}
      <section className="my-8">
        <div className="w-40 h-5 mb-4 bg-gray-300 rounded" />
        <ul className="flex flex-col gap-y-4">
          <li className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gray-300 rounded-full" />
            <div className="flex flex-col w-full gap-2">
              <div className="w-56 h-4 bg-gray-200 rounded" />
              <div className="h-3 bg-gray-200 rounded w-72" />
            </div>
            <div className="w-5 h-5 ml-auto bg-gray-300 rounded-full" />
          </li>
        </ul>
      </section>
    </div>
  );
};

export const LimitsSkeleton = () => {
  return (
    <div className="max-w-3xl mb-14 animate-pulse">
      {/* Back Nav */}
      <nav className="flex items-center mb-3">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-300 rounded-full" />
          <div className="w-16 h-4 bg-gray-300 rounded" />
        </div>
      </nav>

      {/* Header */}
      <header className="mb-6">
        <div className="w-40 h-6 bg-gray-300 rounded" />
      </header>

      {/* Limit Tiers */}
      <div className="mt-8 space-y-10">
        {[...Array(1)].map((_, idx) => (
          <div key={idx} className="p-4 bg-gray-100 rounded-lg">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:gap-8">
              {/* Left */}
              <div className="flex-1 space-y-2">
                <div className="w-32 h-4 bg-gray-300 rounded" />
                <div className="w-56 h-4 bg-gray-300 rounded" />
                <ul className="mt-2 space-y-2">
                  {[...Array(4)].map((_, i) => (
                    <li key={i} className="flex items-start gap-x-2">
                      <div className="w-2 h-2 mt-1 bg-gray-400 rounded-full" />
                      <div className="w-64 h-3 bg-gray-200 rounded" />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Button */}
              <div className="self-start w-24 h-10 bg-gray-300 rounded-lg" />
            </div>
          </div>
        ))}

        {/* Business Prompt */}
        <div className="flex items-center p-4 bg-gray-100 border border-gray-300 border-dashed gap-x-2 rounded-xl">
          <div className="p-3 bg-white rounded-full">
            <div className="w-4 h-4 bg-gray-300 rounded-full" />
          </div>
          <div className="w-56 h-4 bg-gray-300 rounded" />
        </div>
      </div>
    </div>
  );
};

export const SelectIdTypeSkeleton = () => {
  return (
    <div className="animate-pulse">
      {/* Label and Select Skeleton */}
      <div className="flex flex-col gap-y-1">
        <div className="w-32 h-4 bg-gray-300 rounded" /> {/* Label */}
        <div className="w-full min-h-[3rem] h-auto p-4 border border-gray-300 rounded-lg bg-gray-200 flex items-center justify-between">
          <div className="w-24 h-4 bg-gray-300 rounded" />
          <div className="w-4 h-4 bg-gray-400 rounded-full" />
        </div>
      </div>

      {/* Proceed Button Skeleton */}
      <div className="mt-10">
        <div className="w-full h-[3.5rem] bg-gray-300 rounded-lg" />
      </div>
    </div>
  );
};

export const IndividualVerificationSkeleton = () => {
  return (
    <section className="flex flex-col items-center text-center animate-pulse">
      {/* Image Placeholder */}
      <figure className="mb-6 max-w-56">
        <div className="w-40 h-40 mx-auto bg-gray-300 rounded-full" />
      </figure>

      {/* Title and Subtitle Skeleton */}
      <div className="mt-2 mb-5 space-y-2">
        <div className="w-64 h-6 mx-auto bg-gray-300 rounded" />
        <div className="w-48 h-4 mx-auto bg-gray-200 rounded" />
      </div>

      {/* Button Skeleton */}
      <div className="flex flex-col w-full px-4 gap-y-3">
        <div className="w-full h-[3.5rem] bg-gray-300 rounded-lg" />
      </div>
    </section>
  );
};

export const FindMeBySkeleton = () => {
  return (
    <div className="animate-pulse">
      {/* Header Navigation */}
      <nav className="flex items-center flex-1 mb-3">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-300 rounded-full" />
          <div className="w-16 h-4 bg-gray-300 rounded" />
        </div>
      </nav>

      {/* Page Title */}
      <header>
        <div className="w-32 h-8 mb-2 bg-gray-300 rounded" />
      </header>

      {/* Section Header */}
      <section className="my-8">
        <div className="pb-3">
          <div className="h-5 bg-gray-200 rounded w-72" />
        </div>

        {/* Items Skeleton */}
        <ul className="flex flex-col w-full py-5 border-solid gap-y-6 border-y">
          {[...Array(3)].map((_, idx) => (
            <li key={idx}>
              <div className="flex items-center flex-grow gap-4">
                <div className="w-10 h-10 bg-gray-300 rounded-full" />
                <div className="flex items-center justify-between flex-grow gap-3">
                  <div className="flex flex-col gap-y-2">
                    <div className="w-40 h-4 bg-gray-300 rounded" />
                    <div className="h-3 bg-gray-200 rounded w-52" />
                  </div>
                  <div className="w-10 h-5 bg-gray-300 rounded-full" />
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Button Skeleton */}
        <div className="flex items-center justify-end mt-6">
          <div className="w-56 bg-gray-200 rounded-lg h-9" />
        </div>
      </section>
    </div>
  );
};

export const LogoutEverywhereSkeleton = () => {
  return (
    <div className="max-w-2xl animate-pulse">
      {/* Back navigation */}
      <nav className="flex items-center flex-1 mb-3">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-300 rounded-full" />
          <div className="w-16 h-4 bg-gray-300 rounded" />
        </div>
      </nav>

      {/* Header */}
      <header className="flex flex-col items-start mb-5">
        <div className="w-56 h-8 mb-2 bg-gray-300 rounded" />
      </header>

      {/* Main section */}
      <section className="my-8">
        <div className="flex flex-col gap-y-6">
          <div className="h-4 bg-gray-200 rounded w-72" />

          {/* Bullet points */}
          <ul className="pl-4 space-y-3">
            {[...Array(3)].map((_, i) => (
              <li key={i} className="ml-4 list-disc">
                <div className="w-64 h-3 bg-gray-200 rounded" />
              </li>
            ))}
          </ul>

          <div className="h-4 bg-gray-200 rounded w-80" />

          {/* Button */}
          <div className="w-full bg-gray-300 rounded-lg h-11" />
        </div>
      </section>
    </div>
  );
};


export const ChangePasswordSkeleton = () => {
  return (
    <div className="max-w-xl animate-pulse">
      {/* Back nav */}
      <nav className="flex items-center flex-1 mb-3">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-300 rounded-full" />
          <div className="w-16 h-4 bg-gray-300 rounded" />
        </div>
      </nav>

      {/* Header + warning */}
      <header className="flex flex-col mb-3 gap-y-5">
        <div className="bg-gray-300 rounded h-7 w-52" />
        <div className="flex p-4 border-2 border-slate-300 rounded-2xl bg-amber-50 gap-x-4">
          <div className="flex items-center justify-center w-8 h-8 bg-white border rounded-full border-amber-100">
            <div className="w-4 h-4 bg-gray-300 rounded" />
          </div>
          <div className="flex flex-col flex-grow gap-y-3">
            <div className="w-full h-4 bg-gray-200 rounded" />
            <div className="w-40 h-4 bg-gray-200 rounded" />
          </div>
        </div>
      </header>

      {/* Form fields */}
      <section className="my-8">
        <div className="flex flex-col gap-y-6">
          <div className="flex flex-col gap-y-1">
            <div className="w-40 h-4 bg-gray-300 rounded" />
            <div className="w-full bg-gray-200 rounded-md h-11" />
          </div>
          <div className="flex flex-col gap-y-1">
            <div className="h-4 bg-gray-300 rounded w-36" />
            <div className="w-full bg-gray-200 rounded-md h-11" />
          </div>
          <div className="mt-8">
            <div className="w-full bg-gray-300 rounded-md h-11" />
          </div>
        </div>
      </section>
    </div>
  );
};

export const SecurityAndPrivacySkeleton = () => {
  return (
    <div className="animate-pulse">
      {/* Navigation */}
      <nav className="flex items-center flex-1 mb-3">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-300 rounded-full" />
          <div className="w-16 h-4 bg-gray-300 rounded" />
        </div>
      </nav>

      {/* Page Title */}
      <header>
        <div className="w-48 mb-3 bg-gray-300 rounded h-7" />
      </header>

      {/* Section 1 - Security */}
      <section className="my-8">
        <div className="h-5 mb-4 bg-gray-300 w-36" />
        <ul className="flex flex-col gap-y-4">
          {[1, 2, 3, 4].map((i) => (
            <li key={i} className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gray-300 rounded-full" />
              <div className="flex flex-col flex-grow gap-y-2">
                <div className="w-40 h-4 bg-gray-200 rounded" />
                <div className="w-64 h-3 bg-gray-200 rounded" />
              </div>
              <div className="w-5 h-5 bg-gray-300 rounded-full" />
            </li>
          ))}
        </ul>
      </section>

      {/* Section 2 - Privacy */}
      <section className="my-8">
        <div className="h-5 mb-4 bg-gray-300 w-52" />
        <ul className="flex flex-col gap-y-4">
          {[1, 2].map((i) => (
            <li key={i} className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gray-300 rounded-full" />
              <div className="flex flex-col flex-grow gap-y-2">
                <div className="w-48 h-4 bg-gray-200 rounded" />
                <div className="h-3 bg-gray-200 rounded w-72" />
              </div>
              <div className="w-5 h-5 bg-gray-300 rounded-full" />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export const SocialLoginSkeleton = () => {
  return (
    <div className="animate-pulse">
      {/* Back navigation */}
      <nav className="flex items-center flex-1 mb-3">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-300 rounded-full" />
          <div className="w-16 h-4 bg-gray-300 rounded" />
        </div>
      </nav>

      {/* Header */}
      <header className="flex flex-col items-start gap-y-5">
        <div className="h-6 bg-gray-300 rounded w-52" />
        <div className="h-4 bg-gray-200 rounded w-80" />
      </header>

      {/* Social login row */}
      <section className="my-8">
        <div className="flex items-center flex-grow gap-4">
          {/* Icon */}
          <div className="w-10 h-10 bg-gray-300 rounded-full" />
          {/* Text */}
          <div className="flex flex-col flex-grow gap-y-2">
            <div className="w-32 h-4 bg-gray-200 rounded" />
          </div>
          {/* Button */}
          <div className="w-24 h-8 bg-gray-300 rounded-lg" />
        </div>
      </section>
    </div>
  );
};

export const TwoFATextMessageSkeleton = () => {
  return (
    <div className="animate-pulse">
      {/* Navigation */}
      <nav className="flex items-center flex-1 mb-3">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-300 rounded-full" />
          <div className="w-16 h-4 bg-gray-300 rounded" />
        </div>
      </nav>

      {/* Header */}
      <header className="flex flex-col gap-y-5">
        <div className="w-40 h-6 bg-gray-300 rounded" />
        <div className="h-4 bg-gray-200 rounded w-80" />
      </header>

      {/* Section Title */}
      <section className="my-8">
        <header className="flex items-center justify-between pb-1 mb-4 border-b border-solid">
          <div className="h-5 bg-gray-300 rounded w-28" />
          <div className="w-20 h-4 bg-gray-300 rounded" />
        </header>

        {/* Phone Number Block */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-10 h-10 bg-gray-300 rounded-full" />
          <div className="flex flex-col flex-grow gap-y-2">
            <div className="w-40 h-4 bg-gray-300 rounded" />
            <div className="h-3 bg-gray-200 rounded w-60" />
          </div>
        </div>

        {/* Preferred Method */}
        <div className="flex flex-col max-w-xl mt-2 gap-y-1">
          <div className="h-4 bg-gray-300 rounded w-28" />
          <div className="w-full h-12 bg-gray-200 rounded-lg" />
        </div>
      </section>
    </div>
  );
};

export const NotificationSettingsSkeleton = () => {
  return (
    <div className="flex flex-col max-w-4xl mx-auto mb-10 gap-y-5 animate-pulse">
      {/* Back Nav */}
      <nav className="flex items-center mb-3">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-300 rounded-full" />
          <div className="w-16 h-4 bg-gray-300 rounded" />
        </div>
      </nav>

      {/* Page Title */}
      <header>
        <div className="w-40 h-6 bg-gray-300 rounded" />
      </header>

      {/* Main Switch */}
      <section className="flex flex-col gap-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-grow gap-3">
            <div className="w-10 h-10 bg-gray-300 rounded-full" />
            <div className="w-40 h-4 bg-gray-300 rounded" />
          </div>
          <div className="w-10 h-6 bg-gray-300 rounded-full" />
        </div>

        {/* Subsection: Transfers and Balances */}
        <div className="mt-3 space-y-2">
          <div className="h-5 bg-gray-300 rounded w-60" />
          <div className="h-4 bg-gray-200 rounded w-80" />

          {/* Mock alert row block */}
          <div className="flex flex-col mt-5 gap-y-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-300 rounded-full" />
                  <div className="w-48 h-4 bg-gray-200 rounded" />
                </div>
                <div className="w-10 h-6 bg-gray-300 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export const NotificationListSkeleton = () => {
  return (
    <div className="flex flex-col max-w-4xl mx-auto mb-10 gap-y-5 animate-pulse">
      {/* Back Navigation */}
      <nav className="flex items-center mb-3">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-300 rounded-full" />
          <div className="w-16 h-4 bg-gray-300 rounded" />
        </div>
      </nav>

      {/* Header */}
      <header>
        <div className="w-40 h-6 bg-gray-300 rounded" />
      </header>

      {/* Notification Options List */}
      <section className="flex flex-col gap-y-2">
        <ul className="space-y-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <li key={i} className="flex items-center justify-between">
              <div className="flex items-center flex-grow gap-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full" />
                <div className="space-y-1">
                  <div className="w-32 h-4 bg-gray-200 rounded" />
                  <div className="h-3 bg-gray-100 rounded w-52" />
                </div>
              </div>
              <div className="w-4 h-4 bg-gray-300 rounded-full" />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export const MarketAlertDetailsSkeleton = () => {
  return (
    <div className="flex flex-col max-w-4xl mx-auto mb-10 gap-y-5 animate-pulse">
      {/* Back Navigation */}
      <nav className="flex items-center mb-3">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-300 rounded-full" />
          <div className="w-16 h-4 bg-gray-300 rounded" />
        </div>
      </nav>

      {/* Header */}
      <header>
        <div className="w-40 h-6 bg-gray-300 rounded" />
      </header>

      <section className="flex flex-col mb-3 gap-y-4">
        {/* Currency Row */}
        <div className="flex flex-col mb-4 gap-y-2">
          <div className="w-48 h-6 bg-gray-300 rounded" />
          <div className="w-64 h-4 bg-gray-200 rounded" />
        </div>

        {/* Notification Settings */}
        <div>
          <div className="w-40 h-4 mb-2 bg-gray-300 rounded" />
          <div className="h-20 bg-gray-100 rounded-md" />
        </div>

        {/* Rate Log */}
        <div>
          <div className="w-48 h-4 mb-2 bg-gray-300 rounded" />

          <div className="grid grid-cols-1 gap-4 mt-5 md:grid-cols-2">
            {/* Left: Rate Change List */}
            <aside>
              <ul className="flex flex-col gap-y-3">
                {Array.from({ length: 5 }).map((_, index) => (
                  <li key={index} className="flex items-center gap-3.5">
                    <div className="w-10 h-10 bg-gray-300 rounded-full" />
                    <div className="flex items-center justify-between flex-grow gap-3">
                      <div className="flex flex-col gap-1">
                        <div className="h-4 bg-gray-300 rounded w-28" />
                        <div className="w-40 h-3 bg-gray-200 rounded" />
                      </div>
                      <div className="flex flex-col gap-1 text-end">
                        <div className="w-24 h-4 bg-gray-300 rounded" />
                        <div className="w-20 h-3 bg-gray-200 rounded" />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </aside>

            {/* Right: Graph Image Placeholder */}
            <aside className="bg-[#F8F9FD] h-full flex items-center justify-center rounded-md">
              <div className="w-40 h-40 bg-gray-200 rounded" />
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export const LanguageSettingSkeleton = () => {
  return (
    <div className="flex flex-col max-w-2xl gap-y-5 animate-pulse">
      {/* Navigation */}
      <nav className="flex items-center mb-3">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-300 rounded-full" />
          <div className="w-16 h-4 bg-gray-300 rounded" />
        </div>
      </nav>

      {/* Header */}
      <header>
        <div className="w-32 h-6 bg-gray-300 rounded" />
      </header>

      {/* Section */}
      <section className="my-4">
        {/* Language Selection */}
        <div className="flex flex-col mb-8 gap-y-2">
          <div className="w-40 h-4 bg-gray-200 rounded" />
          <div className="w-full h-12 bg-gray-100 rounded-lg" />
        </div>

        {/* Save Button */}
        <div className="w-full h-12 bg-gray-300 rounded-lg" />
      </section>
    </div>
  );
};

export const PersonalDetailsSkeleton = () => {
  return (
    <div className="flex flex-col max-w-xl gap-y-7 animate-pulse">
      {/* Navigation */}
      <nav className="flex items-center">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-300 rounded-full" />
          <div className="w-16 h-4 bg-gray-300 rounded" />
        </div>
      </nav>

      {/* Header */}
      <header>
        <div className="w-40 h-6 bg-gray-300 rounded" />
      </header>

      {/* Section List */}
      <section>
        <ul className="space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <li key={i} className="flex items-center justify-between">
              <div className="flex items-center flex-grow gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full" />
                <div className="space-y-1">
                  <div className="w-48 h-4 bg-gray-200 rounded" />
                  <div className="w-32 h-3 bg-gray-100 rounded" />
                </div>
              </div>
              <div className="w-4 h-4 bg-gray-300 rounded-full" />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export const PersonalDetailsFormSkeleton = () => {
  return (
    <div className="flex flex-col max-w-2xl gap-y-7 mb-14 animate-pulse">
      {/* Back nav */}
      <nav className="flex items-center">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-300 rounded-full" />
          <div className="w-16 h-4 bg-gray-300 rounded" />
        </div>
      </nav>

      {/* Header */}
      <header>
        <div className="w-3/4 h-6 bg-gray-300 rounded" />
      </header>

      <form>
        <section className="flex flex-col gap-y-4">
          {/* First name */}
          <div className="space-y-1">
            <div className="h-4 bg-gray-300 rounded w-28" />
            <div className="w-full h-10 bg-gray-200 rounded" />
          </div>

          {/* Last + Other name */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[...Array(2)].map((_, i) => (
              <div className="space-y-1" key={i}>
                <div className="h-4 bg-gray-300 rounded w-28" />
                <div className="w-full h-10 bg-gray-200 rounded" />
              </div>
            ))}
          </div>

          {/* Phone number block */}
          <div className="space-y-1">
            <div className="h-4 bg-gray-300 rounded w-28" />
            <div className="flex items-stretch gap-x-3">
              <div className="w-20 h-12 bg-gray-200 rounded" />
              <div className="flex-grow h-12 bg-gray-200 rounded" />
            </div>
          </div>

          {/* Change phone */}
          <div className="w-40 h-4 mx-auto mt-2 bg-gray-300 rounded" />
        </section>

        {/* Address section header */}
        <div className="pb-2 mt-8 mb-4 border-b">
          <div className="w-24 h-4 bg-gray-300 rounded" />
        </div>

        {/* Address form fields */}
        <section className="flex flex-col gap-y-4">
          <div className="space-y-1">
            <div className="w-32 h-4 bg-gray-300 rounded" />
            <div className="w-full h-10 bg-gray-200 rounded" />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[...Array(2)].map((_, i) => (
              <div className="space-y-1" key={i}>
                <div className="w-40 h-4 bg-gray-300 rounded" />
                <div className="w-full h-10 bg-gray-200 rounded" />
              </div>
            ))}
          </div>

          {/* Submit button */}
          <div className="mt-6">
            <div className="w-full h-12 bg-gray-300 rounded" />
          </div>
        </section>
      </form>
    </div>
  );
};

export const FundWalletSkeleton = () => {
  return (
    <div className="max-w-md px-4 py-12 mx-auto animate-pulse">
      {/* Header */}
      <div className="w-40 h-6 mx-auto mb-8 bg-gray-300 rounded" />

      {/* Amount Input */}
      <div className="mb-6 space-y-2">
        <div className="w-32 h-4 bg-gray-300 rounded" />
        <div className="flex items-center overflow-hidden bg-white border border-gray-300 rounded-lg">
          <div className="flex-1 h-12 p-3 bg-gray-100" />
          <div className="relative w-24 h-full bg-gray-100">
            <div className="absolute w-5 h-5 -translate-y-1/2 bg-gray-300 rounded-full left-3 top-1/2" />
            <div className="absolute w-3 h-3 rotate-45 -translate-y-1/2 border-t border-r border-gray-400 right-3 top-1/2" />
          </div>
        </div>
      </div>

      {/* Payment Method */}
      <div className="mb-6 space-y-2">
        <div className="w-32 h-4 bg-gray-300 rounded" />
        <div className="flex items-center gap-3 p-4 bg-gray-100 border border-gray-200 rounded-xl">
          <div className="w-6 h-6 bg-gray-300 rounded-full" />
          <div className="h-4 bg-gray-300 rounded w-28" />
        </div>
      </div>

      {/* Continue Button */}
      <div className="w-full h-12 bg-gray-300 rounded-xl" />
    </div>
  );
};

export const SendAmountSkeleton = () => {
  return (
    <div className="flex flex-col mb-10 gap-y-5 lg:px-8 animate-pulse">
      {/* Header */}
      <div className="h-6 bg-gray-300 rounded w-72" />

      {/* Xchange Placeholder */}
      <div className="h-24 bg-gray-100 rounded-lg" />

      {/* Accordion 1 – Add new recipient */}
      <div className="p-4 space-y-5 border rounded-lg border-slate-300">
        <div className="w-40 h-4 bg-gray-300 rounded" />

        {/* Payment methods */}
        <div className="space-y-2">
          <div className="w-32 h-4 mb-2 bg-gray-300 rounded" />
          <div className="flex flex-wrap gap-3">
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="w-[48%] md:w-[32%] h-14 bg-gray-200 rounded"
                />
              ))}
          </div>
        </div>

        {/* ID Input */}
        <div className="space-y-2">
          <div className="w-32 h-4 bg-gray-300 rounded" />
          <div className="h-12 bg-gray-100 rounded-lg" />
        </div>

        {/* OR Divider */}
        <div className="flex items-center gap-2">
          <div className="flex-grow h-px bg-gray-300" />
          <div className="w-6 h-3 bg-gray-300 rounded" />
          <div className="flex-grow h-px bg-gray-300" />
        </div>

        {/* QR Upload */}
        <div className="h-20 bg-gray-100 border border-gray-400 border-dashed rounded-lg" />

        {/* Save Beneficiary + QR help */}
        <div className="flex items-center justify-between">
          <div className="h-4 bg-gray-300 rounded w-52" />
          <div className="h-4 bg-gray-300 rounded w-28" />
        </div>

        {/* Add Nickname */}
        <div className="w-32 h-4 bg-gray-300 rounded" />
      </div>

      {/* Accordion 2 – Select from beneficiary */}
      <div className="p-4 border rounded-lg border-slate-300">
        <div className="w-56 h-4 mb-4 bg-gray-300 rounded" />
        <ul className="space-y-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <li key={i} className="h-12 bg-gray-100 rounded-lg" />
          ))}
        </ul>
        <div className="flex justify-end mt-3">
          <div className="w-24 h-4 bg-gray-300 rounded" />
        </div>
      </div>

      {/* Footer Button */}
      <div className="h-12 bg-gray-300 rounded-xl" />
    </div>
  );
};

export const ConfirmTransferSkeleton = () => {
  return (
    <div className="flex flex-col mb-12 gap-y-5 animate-pulse">
      {/* Payment Method */}
      <section className="flex flex-col gap-y-2">
        <div className="w-32 h-5 bg-gray-300 rounded" />
        <div className="border-2 border-dashed border-stone-300 p-4 rounded-2xl bg-[#F8F9FD] space-y-3">
          <div className="w-4 h-4 bg-gray-300 rounded-full" />
          <div className="flex flex-col sm:flex-row sm:justify-between gap-y-3">
            <div className="flex flex-col gap-1">
              <div className="w-40 h-4 bg-gray-300 rounded" />
              <div className="w-32 h-4 bg-gray-200 rounded" />
              <div className="w-20 h-4 mt-1 bg-gray-100 rounded" />
            </div>
            <div className="h-4 mt-2 bg-gray-200 rounded w-28" />
          </div>
        </div>
      </section>

      {/* Transfer Details */}
      <section className="space-y-3">
        <div className="h-5 bg-gray-300 rounded w-44" />
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="flex justify-between">
              <div className="h-4 bg-gray-200 rounded w-36" />
              <div className="w-24 h-4 bg-gray-300 rounded" />
            </div>
          ))}
      </section>

      <hr />

      {/* Recipient Details */}
      <section className="space-y-3">
        <div className="w-40 h-5 bg-gray-300 rounded" />
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="flex justify-between">
              <div className="w-40 h-4 bg-gray-200 rounded" />
              <div className="h-4 bg-gray-300 rounded w-28" />
            </div>
          ))}
      </section>

      <hr />

      {/* Schedule Details */}
      <section className="space-y-3">
        <div className="h-5 bg-gray-300 rounded w-44" />
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="flex justify-between">
              <div className="w-32 h-4 bg-gray-200 rounded" />
              <div className="w-20 h-4 bg-gray-300 rounded" />
            </div>
          ))}
      </section>

      {/* Reference */}
      <section className="space-y-2">
        <div className="w-32 h-5 bg-gray-300 rounded" />
        <div className="h-12 bg-gray-200 rounded-xl" />
      </section>

      {/* Confirm Button */}
      <div className="h-12 bg-gray-300 rounded-lg" />
    </div>
  );
};

export const PaymentSuccessSkeleton = () => {
  return (
    <section className="flex flex-col items-center text-center animate-pulse">
      {/* Icon */}
      <figure className="max-w-56">
        <div className="w-40 h-40 mx-auto bg-gray-200 rounded-full" />
      </figure>

      {/* Heading + Message */}
      <div className="flex flex-col items-center mt-6 mb-5 gap-y-3">
        <div className="h-6 bg-gray-300 rounded-md w-60" />
        <div className="h-4 bg-gray-200 rounded w-72" />
        <div className="h-4 bg-gray-200 rounded w-44" />
      </div>

      {/* Buttons */}
      <div className="flex flex-col w-full px-4 mt-4 mb-16 gap-y-2">
        <div className="h-[3.5rem] w-full bg-gray-300 rounded-lg" />
        <div className="h-[3.5rem] w-full bg-gray-200 border border-gray-300 rounded-lg" />
      </div>
    </section>
  );
};
