import React from "react";

export const DashboardSkeleton = () => {
  return (
    <div>
      <header className="flex flex-col gap-y-1 animate-pulse">
        <div className="h-4 w-28 bg-gray-300 rounded"></div>
        <div className="flex items-center gap-x-4 mt-1">
          <div className="h-8 w-36 bg-gray-300 rounded"></div>
          <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
        </div>
        <div className="flex items-center gap-x-3 mt-2">
          <div className="h-10 w-32 bg-gray-200 rounded-xl"></div>
          <div className="h-10 w-24 bg-yellow-200 rounded-xl"></div>
        </div>
      </header>

      <main>
        <section className="my-8 animate-pulse">
          <div className="bg-[#F8F9FD] overflow-hidden rounded-xl rounded-tl-sm p-4">
            <div className="flex justify-between items-center mb-3">
              <div className="h-4 w-28 bg-gray-300 rounded"></div>
              <div className="h-4 w-8 bg-gray-200 rounded-full"></div>
            </div>
            <div className="h-8 w-44 bg-gray-300 rounded"></div>
            <footer className="grid grid-cols-3 gap-2 mt-4 border-t pt-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-10 bg-gray-200 rounded"></div>
              ))}
            </footer>
          </div>
        </section>

        <section className="my-8 animate-pulse">
          <div className="flex justify-between items-center mb-6">
            <div className="h-6 w-32 bg-gray-300 rounded"></div>
            <div className="h-4 w-16 bg-gray-200 rounded"></div>
          </div>
          <ul className="flex flex-col gap-y-2">
            {[...Array(3)].map((_, i) => (
              <li key={i} className="h-16 bg-gray-200 rounded"></li>
            ))}
          </ul>
        </section>

        <section className="my-8 animate-pulse">
          <div className="h-6 w-44 bg-gray-300 rounded mb-4"></div>
          <div className="bg-[#F8F9FD] p-6 rounded-2xl">
            <div className="h-6 w-56 bg-gray-300 rounded mb-5"></div>
            <div className="grid lg:grid-cols-2 gap-4">
              <div className="h-40 bg-gray-200 rounded"></div>
              <div className="flex flex-col gap-y-5">
                <div className="h-12 bg-gray-200 rounded"></div>
                <div className="h-12 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-y-3.5">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="h-14 bg-gray-200 rounded"></div>
            ))}
          </div>
        </section>

        <section className="my-8 flex flex-col gap-y-4 animate-pulse">
          <div className="h-6 w-40 bg-gray-300 rounded"></div>
          <ul className="flex items-start gap-x-3.5">
            {[...Array(3)].map((_, i) => (
              <li key={i} className="flex flex-col items-center gap-y-2.5">
                <div className="h-16 w-16 bg-gray-200 rounded-full"></div>
                <div className="h-4 w-16 bg-gray-300 rounded"></div>
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
        <div className="h-6 w-32 bg-gray-300 rounded"></div>
      </header>

      <section className="my-8">
        <div className="flex items-stretch sm:flex-nowrap flex-wrap gap-2 gap-x-3 min-h-[auto]">
          <div className="h-11 flex-grow bg-gray-200 rounded-lg"></div>
          <div className="h-11 w-36 bg-yellow-200 rounded-lg"></div>
        </div>
      </section>

      <section className="my-8 flex flex-col gap-y-4">
        <div className="h-4 w-28 bg-gray-300 rounded"></div>
        <ul className="flex items-start gap-x-3.5">
          {[...Array(2)].map((_, i) => (
            <li key={i} className="flex flex-col items-center gap-y-2">
              <div className="h-16 w-16 bg-gray-200 rounded-full"></div>
              <div className="h-3 w-14 bg-gray-300 rounded"></div>
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8 flex flex-col gap-y-5">
        <div className="flex items-center gap-x-2">
          <div className="h-9 w-20 bg-gray-300 rounded-lg"></div>
          <div className="h-9 w-28 bg-gray-300 rounded-lg"></div>
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
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pb-5 border-b">
        <div className="flex flex-col gap-y-2">
          <div className="h-4 w-24 bg-gray-300 rounded"></div>
          <div className="h-8 w-40 bg-gray-300 rounded"></div>
          <div className="h-9 w-56 bg-gray-200 rounded-md"></div>
        </div>
        <div className="flex gap-3 flex-row sm:items-center">
          <div className="h-14 w-14 bg-gray-300 rounded-full"></div>
          <div className="h-14 w-14 bg-gray-300 rounded-full"></div>
        </div>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 pt-10 gap-x-10 gap-y-12">
        <aside>
          <div className="h-6 w-28 bg-gray-300 rounded mb-5"></div>
          <div className="flex gap-2 justify-end mb-3">
            <div className="h-10 w-full bg-gray-200 rounded"></div>
            <div className="flex gap-x-2">
              <div className="h-10 w-10 bg-gray-300 rounded-xl"></div>
              <div className="h-10 w-10 bg-gray-300 rounded-xl"></div>
            </div>
          </div>

          {[...Array(2)].map((_, idx) => (
            <section key={idx} className="my-8">
              <div className="h-4 w-32 bg-gray-300 rounded mb-3"></div>
              <ul className="flex flex-col gap-y-3">
                {[...Array(3)].map((_, i) => (
                  <li key={i} className="h-16 bg-gray-200 rounded"></li>
                ))}
              </ul>
            </section>
          ))}
        </aside>

        <aside>
          <div className="h-6 w-28 bg-gray-300 rounded mb-5"></div>
          <div className="h-28 bg-gray-200 rounded-2xl"></div>
          <div className="mt-3 h-4 w-64 bg-gray-300 rounded"></div>
        </aside>
      </main>
    </div>
  );
};

export const ReferralPageSkeleton = () => {
  return (
    <main className="w-full xl:w-11/12 flex flex-col space-y-6 mx-auto animate-pulse">
      <div className="space-y-12 mb-5">
        {/* Header referral card */}
        <div className="bg-[#013B33] p-5 rounded-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-3">
            <aside className="lg:col-span-3 space-y-4">
              <div className="h-10 w-3/4 bg-green-200 rounded"></div>
              <div className="h-4 w-full bg-green-100 rounded"></div>
              <div className="h-4 w-3/4 bg-green-100 rounded"></div>
              <div className="h-12 w-full bg-green-200 rounded-xl"></div>
            </aside>
            <aside className="lg:col-span-2 flex justify-center mt-6 lg:mt-0">
              <div className="flex space-x-3">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-12 h-12 rounded-full bg-white"></div>
                ))}
              </div>
            </aside>
          </div>
        </div>

        {[...Array(3)].map((_, idx) => (
          <div key={idx} className="grid grid-cols-1 lg:grid-cols-4 gap-y-5 items-center bg-white p-5 rounded-2xl">
            <div className="lg:col-span-2 space-y-2">
              <div className="h-6 w-48 bg-gray-300 rounded"></div>
              <div className="h-4 w-full bg-gray-200 rounded"></div>
            </div>
            <div className="lg:col-span-2 flex justify-center">
              <div className="flex space-x-3">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="w-16 h-16 rounded-full bg-gray-300"></div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Referrals + Filters */}
        <div className="space-y-4">
          <div className="flex justify-between items-center pb-3 border-b">
            <div className="h-4 w-24 bg-gray-300 rounded"></div>
            <div className="h-4 w-32 bg-gray-200 rounded"></div>
          </div>

          <div className="flex gap-2 flex-wrap">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-9 w-24 bg-gray-200 rounded-md"></div>
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
    <div className="flex flex-col lg:flex-row items-start gap-6 mb-10 animate-pulse">
      <aside className="w-full lg:w-1/2 lg:sticky lg:top-4 flex flex-col gap-y-5">
        <div className="bg-gray-100/80 p-6 lg:p-8 rounded-xl rounded-tl-none">
          <div className="w-11/12 mx-auto flex items-center flex-col gap-y-4 text-center">
            <div className="w-20 h-20 bg-gray-300 rounded-full"></div>
            <div className="h-8 w-3/4 bg-gray-300 rounded"></div>
            <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
            <div className="h-9 w-56 bg-gray-200 rounded-md"></div>
          </div>
        </div>

        <div className="border-2 border-dashed border-slate-300 py-4 px-3 bg-slate-100/60 rounded-lg flex items-center gap-x-3.5">
          <div className="w-10 h-10 bg-white rounded-full"></div>
          <div className="flex flex-grow flex-col gap-y-2">
            <div className="h-4 w-32 bg-gray-300 rounded"></div>
          </div>
          <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
        </div>

        <div className="text-center flex flex-col items-center gap-y-2">
          <div className="h-4 w-40 bg-gray-300 rounded"></div>
          <div className="h-8 w-24 bg-gray-200 rounded"></div>
        </div>
      </aside>

      <aside className="w-full lg:w-1/2">
        <div className="flex flex-col gap-y-5">
          {[...Array(2)].map((_, sectionIdx) => (
            <div key={sectionIdx} className="flex flex-col gap-y-3.5">
              <div className="h-6 w-48 bg-gray-300 rounded"></div>
              <ul className="flex flex-col gap-y-3">
                {[...Array(3)].map((_, itemIdx) => (
                  <li key={itemIdx} className="flex items-center gap-3.5">
                    <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                    <div className="flex-grow">
                      <div className="h-4 w-3/4 bg-gray-300 rounded mb-1"></div>
                      <div className="h-3 w-1/2 bg-gray-200 rounded"></div>
                    </div>
                    <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-5">
          <div className="h-4 w-32 mx-auto bg-gray-300 rounded"></div>
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
        <div className="flex gap-2 justify-center mb-5">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-3 h-3 bg-gray-300 rounded-full"></div>
          ))}
        </div>
      </div>

      {/* Cashback summary */}
      <div className="flex flex-col space-y-4">
        <div className="max-w-60">
          <div className="h-4 bg-gray-300 rounded mb-1 w-1/2"></div>
          <div className="flex items-center justify-between">
            <div className="h-6 bg-gray-400 rounded w-24"></div>
            <div className="h-5 w-5 bg-gray-300 rounded"></div>
          </div>
        </div>
        <div>
          <div className="h-10 w-32 bg-gray-300 rounded-xl"></div>
        </div>
      </div>

      {/* Earnings summary */}
      <div className="flex flex-col md:flex-row bg-gray-100 border border-gray-300 rounded-xl">
        <div className="flex-1 p-6">
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="mt-2 h-8 bg-gray-400 rounded w-1/2"></div>
        </div>
        <div className="flex-1 p-6">
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="mt-2 h-8 bg-gray-400 rounded w-1/2"></div>
        </div>
      </div>

      {/* Invited Friends List */}
      <div className="space-y-4">
        <div className="flex justify-between items-center pb-3 border-b">
          <div className="h-5 bg-gray-300 w-32 rounded"></div>
          <div className="h-5 bg-gray-300 w-20 rounded"></div>
        </div>

        <div className="flex flex-wrap gap-2">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-10 w-24 bg-gray-200 rounded-md"></div>
          ))}
        </div>

        <ul className="space-y-3 mt-5">
          {[...Array(3)].map((_, i) => (
            <li key={i} className="flex justify-between items-center p-3 border rounded-lg bg-gray-100">
              <div className="flex gap-3 items-start">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div className="flex flex-col">
                  <div className="h-4 w-24 bg-gray-300 rounded"></div>
                  <div className="h-3 w-16 bg-gray-200 rounded mt-1"></div>
                  <div className="h-3 w-20 bg-gray-200 rounded mt-1"></div>
                </div>
              </div>
              <div className="text-right">
                <div className="h-4 w-16 bg-gray-300 rounded mb-1"></div>
                <div className="h-3 w-12 bg-gray-200 rounded"></div>
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
          <div className="h-4 w-12 bg-gray-300 rounded animate-pulse"></div>
        </div>
      </nav>

      <header>
        <div className="h-6 w-28 bg-gray-300 rounded animate-pulse mb-2"></div>
      </header>

      <section className="my-8">
        <header className="border-b border-solid pb-1 mb-4">
          <div className="h-5 w-32 bg-gray-300 rounded animate-pulse"></div>
        </header>

        <ul className="py-4 w-full flex flex-col gap-y-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <li key={index} className="flex justify-between items-start p-3 border border-transparent rounded-lg bg-gray-100 animate-pulse">
              <div className="flex flex-col gap-y-2 w-full">
                <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
                <div className="h-3 w-3/4 bg-gray-200 rounded"></div>
              </div>
              <div className="h-5 w-16 bg-gray-300 rounded"></div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export const HelpCenterSkeleton = () => {
  return (
    <div className="xs:w-11/12 xl:w-5/6 mx-auto animate-pulse">
      <div className="mb-6">
        <div className="h-6 w-1/2 bg-gray-300 rounded mx-auto"></div>
      </div>

      {/* Recent Transactions */}
      <div className="mb-2 mt-8 sm:mt-12">
        <div className="flex justify-between items-center">
          <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
          <div className="h-4 w-12 bg-gray-200 rounded"></div>
        </div>
      </div>

      <div className="space-y-3 mt-3">
        {[...Array(3)].map((_, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center py-3 px-2 border-2 border-transparent bg-gray-100 rounded-lg"
          >
            <div className="flex items-center gap-x-3">
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              <div>
                <div className="h-4 w-32 bg-gray-300 rounded mb-1"></div>
                <div className="h-3 w-20 bg-gray-200 rounded"></div>
              </div>
            </div>
            <div className="text-right">
              <div className="h-4 w-16 bg-gray-300 rounded mb-1"></div>
              <div className="h-3 w-14 bg-gray-200 rounded"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Knowledgebase Topics */}
      <div className="mt-8 mb-10">
        <div className="flex items-center gap-2 mb-6 sm:mb-8">
          <div className="h-4 w-48 bg-gray-300 rounded"></div>
          <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[...Array(6)].map((_, idx) => (
            <div key={idx} className="bg-gray-100 rounded-lg p-5 sm:p-7 md:p-10 text-center">
              <div className="bg-white p-4 rounded-full w-12 h-12 mx-auto mb-4 sm:mb-5"></div>
              <div className="h-4 w-24 mx-auto bg-gray-300 rounded mb-2"></div>
              <div className="h-3 w-40 mx-auto bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <div className="h-4 w-24 bg-gray-300 mx-auto rounded"></div>
        </div>
      </div>
    </div>
  );
};

export const TransactionHelpSkeleton = () => {
  return (
    <div>
      {/* Breadcrumb Skeleton */}
      <div className="items-center space-x-1 text-sm text-gray-800 hidden sm:flex">
        {[...Array(4)].map((_, i) => (
          <React.Fragment key={i}>
            <div className="h-4 w-14 bg-gray-200 rounded animate-pulse"></div>
            {i < 3 && <div className="w-3 h-3 bg-gray-300 rounded-full"></div>}
          </React.Fragment>
        ))}
      </div>

      {/* Main Content */}
      <div className="max-w-xl mx-auto mt-10">
        {/* Transaction Summary Skeleton */}
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="w-10 h-10 rounded-full bg-gray-300 animate-pulse"></div>
          <div className="h-5 w-24 bg-gray-300 rounded animate-pulse"></div>
          <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
        </div>

        {/* Issue List Skeleton */}
        <div className="space-y-4 mt-10 mb-20">
          <div className="h-4 w-32 bg-gray-200 rounded animate-pulse mb-2"></div>
          <div className="border-t border-gray-100" />

          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-between py-2 cursor-default"
            >
              <div className="h-4 w-52 bg-gray-200 rounded animate-pulse"></div>
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
      <div className="items-center space-x-1 text-sm text-gray-800 hidden sm:flex mb-4">
        {[...Array(6)].map((_, i) => (
          <React.Fragment key={i}>
            <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
            {i < 5 && <div className="w-3 h-3 bg-gray-300 rounded-full"></div>}
          </React.Fragment>
        ))}
      </div>

      {/* Main Content Skeleton */}
      <div className="max-w-lg mx-auto p-6 flex flex-col items-center mt-12">
        <div className="h-8 w-72 bg-gray-300 rounded mb-6 animate-pulse"></div>

        <div className="w-full mb-8 space-y-4">
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 w-11/12 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 w-9/12 bg-gray-200 rounded animate-pulse"></div>
          </div>

          <div className="mt-6 space-y-2">
            <div className="h-4 w-40 bg-gray-300 rounded animate-pulse"></div>
            {[...Array(2)].map((_, i) => (
              <div key={i} className="h-4 w-10/12 bg-gray-200 rounded animate-pulse"></div>
            ))}
            <div className="h-4 w-7/12 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>

        <div className="w-full h-10 bg-gray-300 rounded mb-4 animate-pulse"></div>

        <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
      </div>
    </div>
  );
};

export const HelpRecentTransactionsSkeleton = () => {
  return (
    <>
      <div className="xs:w-11/12 xl:w-5/6 mx-auto">
        {/* Header Skeleton */}
        <div className="flex justify-between items-center mb-6">
          <div className="h-6 sm:h-8 w-72 mx-auto bg-gray-200 rounded animate-pulse"></div>
        </div>

        {/* Section Title Skeleton */}
        <div className="mb-2 mt-8 sm:mt-12">
          <div className="h-4 w-48 bg-gray-300 rounded animate-pulse"></div>
        </div>

        {/* Transactions Skeleton List */}
        <div className="space-y-2 sm:space-y-4 mt-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-3 px-2 border-2 border-transparent bg-gray-50 rounded-lg animate-pulse"
            >
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-200 rounded-full mr-4"></div>
                <div className="space-y-1">
                  <div className="h-3 w-24 bg-gray-300 rounded"></div>
                  <div className="h-3 w-16 bg-gray-200 rounded"></div>
                </div>
              </div>
              <div className="text-right space-y-1">
                <div className="h-3 w-16 bg-gray-300 rounded"></div>
                <div className="h-3 w-14 bg-gray-200 rounded"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Us Link Skeleton */}
        <div className="text-center mt-8 sm:mt-12 mb-12">
          <div className="h-4 w-24 mx-auto bg-gray-300 rounded animate-pulse"></div>
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
        <div className="h-6 w-48 bg-gray-300 rounded animate-pulse"></div>
        <div className="h-4 w-72 bg-gray-200 rounded animate-pulse"></div>
      </header>

      {/* Section */}
      <section className="my-8">
        <header className="flex items-center justify-between border-b pb-1">
          <div className="h-5 w-32 bg-gray-300 rounded animate-pulse"></div>
          <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
        </header>

        <div className="py-4 flex flex-col gap-y-6 mt-1 mb-10">
          <div className="flex items-center gap-4">
            {/* Icon Placeholder */}
            <div className="bg-gray-200 p-3 rounded-full w-10 h-10 animate-pulse" />

            {/* Text Content */}
            <div className="flex-grow space-y-2">
              <div className="h-4 w-44 bg-gray-300 rounded animate-pulse"></div>
              <div className="h-3 w-60 bg-gray-200 rounded animate-pulse"></div>
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
        <div className="h-6 w-60 bg-gray-300 rounded"></div>
        <div className="h-4 w-full max-w-md bg-gray-200 rounded"></div>
      </header>

      {/* Language selection */}
      <section className="my-8">
        <div className="flex flex-col gap-y-2 mt-10 mb-8">
          <div className="h-4 w-44 bg-gray-300 rounded"></div>
          <div className="h-12 bg-gray-200 rounded-lg w-full"></div>
        </div>

        {/* Buttons */}
        <div className="mt-16 flex flex-col gap-y-4">
          <div className="h-12 bg-gray-300 rounded-lg w-full"></div>
          <div className="h-4 w-32 bg-gray-200 rounded"></div>
        </div>
      </section>
    </div>
  );
};

export const StatementSkeleton = () => {
  return (
    <div className="mb-10 animate-pulse max-w-xl">
      {/* Nav Back Button */}
      <nav className="flex items-center mb-3">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
          <div className="w-16 h-4 bg-gray-300 rounded"></div>
        </div>
      </nav>

      {/* Header */}
      <header>
        <div className="h-6 w-40 bg-gray-300 rounded mb-2"></div>
      </header>

      <section className="my-8">
        <header className="border-b border-solid pb-1 mb-4">
          <div className="h-5 w-48 bg-gray-200 rounded"></div>
        </header>

        <div className="space-y-6">
          <div className="h-4 w-full bg-gray-200 rounded"></div>

          {/* Date Buttons */}
          <div className="flex gap-x-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-24 h-9 bg-gray-200 rounded"></div>
            ))}
          </div>

          {/* From Date Picker */}
          <div className="h-12 bg-gray-200 rounded w-full"></div>

          {/* To Date Picker */}
          <div className="h-12 bg-gray-200 rounded w-full"></div>

          {/* Balance Picker */}
          <div className="h-12 bg-gray-200 rounded w-full"></div>

          {/* File Format Picker */}
          <div className="h-12 bg-gray-200 rounded w-full"></div>

          {/* Switch Row */}
          <div className="flex items-center justify-between">
            <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
            <div className="h-6 w-12 bg-gray-300 rounded-full"></div>
          </div>

          {/* Language Picker */}
          <div className="h-12 bg-gray-200 rounded w-full"></div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col items-center gap-y-4">
          <div className="h-12 w-full bg-gray-300 rounded"></div>
          <div className="h-4 w-32 bg-gray-200 rounded"></div>
        </div>
      </section>
    </div>
  );
};

export const StatementOfFeesSkeleton = () => {
  return (
    <div className="mb-10 max-w-xl animate-pulse">
      {/* Navigation */}
      <nav className="flex items-center mb-3">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-300 rounded-full" />
          <div className="w-16 h-4 bg-gray-300 rounded" />
        </div>
      </nav>

      {/* Header */}
      <header className="mb-2">
        <div className="h-6 w-48 bg-gray-300 rounded" />
      </header>

      <section className="my-8">
        {/* Section title */}
        <header className="border-b border-solid pb-1 mb-4">
          <div className="h-5 w-40 bg-gray-200 rounded" />
        </header>

        {/* Description */}
        <div className="space-y-4">
          <div className="h-4 w-full bg-gray-200 rounded" />

          {/* Date Buttons */}
          <div className="flex gap-3">
            {[...Array(3)].map((_, idx) => (
              <div key={idx} className="w-24 h-9 bg-gray-200 rounded" />
            ))}
          </div>

          {/* From Date Picker */}
          <div className="h-12 bg-gray-200 rounded w-full" />

          {/* To Date Picker */}
          <div className="h-12 bg-gray-200 rounded w-full" />
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col items-center gap-y-4">
          <div className="h-12 w-full bg-gray-300 rounded" />
          <div className="h-4 w-32 bg-gray-200 rounded" />
        </div>
      </section>
    </div>
  );
};

export const StatementAndReportsSkeleton = () => {
  return (
    <div className="animate-pulse max-w-xl">
      {/* Navigation */}
      <nav className="flex items-center mb-3">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-300 rounded-full" />
          <div className="w-16 h-4 bg-gray-300 rounded" />
        </div>
      </nav>

      {/* Page header */}
      <header className="mb-6">
        <div className="h-6 w-56 bg-gray-300 rounded" />
      </header>

      {/* Section: Transactions and fees */}
      <section className="my-8">
        <div className="h-5 w-40 bg-gray-300 rounded mb-4" />
        <ul className="flex flex-col gap-y-4">
          {[...Array(2)].map((_, idx) => (
            <li key={idx} className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gray-300 rounded-full" />
              <div className="flex flex-col gap-2 w-full">
                <div className="h-4 w-48 bg-gray-200 rounded" />
                <div className="h-3 w-64 bg-gray-200 rounded" />
              </div>
              <div className="w-5 h-5 bg-gray-300 rounded-full ml-auto" />
            </li>
          ))}
        </ul>
      </section>

      {/* Section: Ownership */}
      <section className="my-8">
        <div className="h-5 w-40 bg-gray-300 rounded mb-4" />
        <ul className="flex flex-col gap-y-4">
          <li className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gray-300 rounded-full" />
            <div className="flex flex-col gap-2 w-full">
              <div className="h-4 w-56 bg-gray-200 rounded" />
              <div className="h-3 w-72 bg-gray-200 rounded" />
            </div>
            <div className="w-5 h-5 bg-gray-300 rounded-full ml-auto" />
          </li>
        </ul>
      </section>
    </div>
  );
};

export const LimitsSkeleton = () => {
  return (
    <div className="mb-14 max-w-3xl animate-pulse">
      {/* Back Nav */}
      <nav className="flex items-center mb-3">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-300 rounded-full" />
          <div className="w-16 h-4 bg-gray-300 rounded" />
        </div>
      </nav>

      {/* Header */}
      <header className="mb-6">
        <div className="h-6 w-40 bg-gray-300 rounded" />
      </header>

      {/* Limit Tiers */}
      <div className="space-y-10 mt-8">
        {[...Array(2)].map((_, idx) => (
          <div key={idx} className="bg-gray-100 p-4 rounded-lg">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-8">
              {/* Left */}
              <div className="flex-1 space-y-2">
                <div className="h-4 w-32 bg-gray-300 rounded" />
                <div className="h-4 w-56 bg-gray-300 rounded" />
                <ul className="space-y-2 mt-2">
                  {[...Array(4)].map((_, i) => (
                    <li key={i} className="flex items-start gap-x-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-1" />
                      <div className="h-3 w-64 bg-gray-200 rounded" />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Button */}
              <div className="h-10 w-24 bg-gray-300 rounded-lg self-start" />
            </div>
          </div>
        ))}

        {/* Business Prompt */}
        <div className="flex items-center gap-x-2 bg-gray-100 border border-dashed border-gray-300 rounded-xl p-4">
          <div className="bg-white p-3 rounded-full">
            <div className="w-4 h-4 bg-gray-300 rounded-full" />
          </div>
          <div className="h-4 w-56 bg-gray-300 rounded" />
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
        <div className="h-4 w-32 bg-gray-300 rounded" /> {/* Label */}
        <div className="w-full min-h-[3rem] h-auto p-4 border border-gray-300 rounded-lg bg-gray-200 flex items-center justify-between">
          <div className="h-4 w-24 bg-gray-300 rounded" />
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
      <figure className="max-w-56 mb-6">
        <div className="w-40 h-40 bg-gray-300 rounded-full mx-auto" />
      </figure>

      {/* Title and Subtitle Skeleton */}
      <div className="mb-5 mt-2 space-y-2">
        <div className="h-6 w-64 bg-gray-300 rounded mx-auto" />
        <div className="h-4 w-48 bg-gray-200 rounded mx-auto" />
      </div>

      {/* Button Skeleton */}
      <div className="flex flex-col gap-y-3 w-full px-4">
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
          <div className="h-4 w-16 bg-gray-300 rounded" />
        </div>
      </nav>

      {/* Page Title */}
      <header>
        <div className="h-8 w-32 bg-gray-300 rounded mb-2" />
      </header>

      {/* Section Header */}
      <section className="my-8">
        <div className="pb-3">
          <div className="h-5 w-72 bg-gray-200 rounded" />
        </div>

        {/* Items Skeleton */}
        <ul className="py-5 w-full flex flex-col gap-y-6 border-y border-solid">
          {[...Array(3)].map((_, idx) => (
            <li key={idx}>
              <div className="flex items-center gap-4 flex-grow">
                <div className="w-10 h-10 bg-gray-300 rounded-full" />
                <div className="flex items-center justify-between flex-grow gap-3">
                  <div className="flex flex-col gap-y-2">
                    <div className="h-4 w-40 bg-gray-300 rounded" />
                    <div className="h-3 w-52 bg-gray-200 rounded" />
                  </div>
                  <div className="h-5 w-10 bg-gray-300 rounded-full" />
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Button Skeleton */}
        <div className="flex items-center justify-end mt-6">
          <div className="h-9 w-56 bg-gray-200 rounded-lg" />
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
          <div className="h-4 w-16 bg-gray-300 rounded" />
        </div>
      </nav>

      {/* Header */}
      <header className="flex flex-col items-start mb-5">
        <div className="h-8 w-56 bg-gray-300 rounded mb-2" />
      </header>

      {/* Main section */}
      <section className="my-8">
        <div className="flex flex-col gap-y-6">
          <div className="h-4 w-72 bg-gray-200 rounded" />

          {/* Bullet points */}
          <ul className="pl-4 space-y-3">
            {[...Array(3)].map((_, i) => (
              <li key={i} className="list-disc ml-4">
                <div className="h-3 w-64 bg-gray-200 rounded" />
              </li>
            ))}
          </ul>

          <div className="h-4 w-80 bg-gray-200 rounded" />

          {/* Button */}
          <div className="h-11 w-full bg-gray-300 rounded-lg" />
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
          <div className="h-4 w-16 bg-gray-300 rounded" />
        </div>
      </nav>

      {/* Header + warning */}
      <header className="flex flex-col gap-y-5 mb-3">
        <div className="h-7 w-52 bg-gray-300 rounded" />
        <div className="border-2 border-slate-300 rounded-2xl bg-amber-50 p-4 flex gap-x-4">
          <div className="w-8 h-8 rounded-full bg-white border border-amber-100 flex items-center justify-center">
            <div className="w-4 h-4 bg-gray-300 rounded" />
          </div>
          <div className="flex flex-col gap-y-3 flex-grow">
            <div className="h-4 w-full bg-gray-200 rounded" />
            <div className="h-4 w-40 bg-gray-200 rounded" />
          </div>
        </div>
      </header>

      {/* Form fields */}
      <section className="my-8">
        <div className="flex flex-col gap-y-6">
          <div className="flex flex-col gap-y-1">
            <div className="h-4 w-40 bg-gray-300 rounded" />
            <div className="h-11 w-full bg-gray-200 rounded-md" />
          </div>
          <div className="flex flex-col gap-y-1">
            <div className="h-4 w-36 bg-gray-300 rounded" />
            <div className="h-11 w-full bg-gray-200 rounded-md" />
          </div>
          <div className="mt-8">
            <div className="h-11 w-full bg-gray-300 rounded-md" />
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
          <div className="h-4 w-16 bg-gray-300 rounded" />
        </div>
      </nav>

      {/* Page Title */}
      <header>
        <div className="h-7 w-48 bg-gray-300 rounded mb-3" />
      </header>

      {/* Section 1 - Security */}
      <section className="my-8">
        <div className="h-5 w-36 bg-gray-300 mb-4" />
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
        <div className="h-5 w-52 bg-gray-300 mb-4" />
        <ul className="flex flex-col gap-y-4">
          {[1, 2].map((i) => (
            <li key={i} className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gray-300 rounded-full" />
              <div className="flex flex-col flex-grow gap-y-2">
                <div className="w-48 h-4 bg-gray-200 rounded" />
                <div className="w-72 h-3 bg-gray-200 rounded" />
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
          <div className="h-4 w-16 bg-gray-300 rounded" />
        </div>
      </nav>

      {/* Header */}
      <header className="flex flex-col items-start gap-y-5">
        <div className="h-6 w-52 bg-gray-300 rounded" />
        <div className="h-4 w-80 bg-gray-200 rounded" />
      </header>

      {/* Social login row */}
      <section className="my-8">
        <div className="flex items-center gap-4 flex-grow">
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
          <div className="h-4 w-16 bg-gray-300 rounded" />
        </div>
      </nav>

      {/* Header */}
      <header className="flex flex-col gap-y-5">
        <div className="h-6 w-40 bg-gray-300 rounded" />
        <div className="h-4 w-80 bg-gray-200 rounded" />
      </header>

      {/* Section Title */}
      <section className="my-8">
        <header className="flex items-center justify-between border-b border-solid pb-1 mb-4">
          <div className="h-5 w-28 bg-gray-300 rounded" />
          <div className="h-4 w-20 bg-gray-300 rounded" />
        </header>

        {/* Phone Number Block */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-10 h-10 bg-gray-300 rounded-full" />
          <div className="flex flex-col flex-grow gap-y-2">
            <div className="h-4 w-40 bg-gray-300 rounded" />
            <div className="h-3 w-60 bg-gray-200 rounded" />
          </div>
        </div>

        {/* Preferred Method */}
        <div className="flex flex-col gap-y-1 mt-2 max-w-xl">
          <div className="h-4 w-28 bg-gray-300 rounded" />
          <div className="h-12 w-full bg-gray-200 rounded-lg" />
        </div>
      </section>
    </div>
  );
};

export const NotificationSettingsSkeleton = () => {
  return (
    <div className="flex flex-col gap-y-5 mb-10 max-w-4xl mx-auto animate-pulse">
      {/* Back Nav */}
      <nav className="flex items-center mb-3">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-300 rounded-full" />
          <div className="h-4 w-16 bg-gray-300 rounded" />
        </div>
      </nav>

      {/* Page Title */}
      <header>
        <div className="h-6 w-40 bg-gray-300 rounded" />
      </header>

      {/* Main Switch */}
      <section className="flex flex-col gap-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 flex-grow">
            <div className="w-10 h-10 bg-gray-300 rounded-full" />
            <div className="h-4 w-40 bg-gray-300 rounded" />
          </div>
          <div className="w-10 h-6 bg-gray-300 rounded-full" />
        </div>

        {/* Subsection: Transfers and Balances */}
        <div className="mt-3 space-y-2">
          <div className="h-5 w-60 bg-gray-300 rounded" />
          <div className="h-4 w-80 bg-gray-200 rounded" />

          {/* Mock alert row block */}
          <div className="flex flex-col gap-y-3 mt-5">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-300 rounded-full" />
                  <div className="h-4 w-48 bg-gray-200 rounded" />
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
    <div className="flex flex-col gap-y-5 mb-10 max-w-4xl mx-auto animate-pulse">
      {/* Back Navigation */}
      <nav className="flex items-center mb-3">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-300 rounded-full" />
          <div className="h-4 w-16 bg-gray-300 rounded" />
        </div>
      </nav>

      {/* Header */}
      <header>
        <div className="h-6 w-40 bg-gray-300 rounded" />
      </header>

      {/* Notification Options List */}
      <section className="flex flex-col gap-y-2">
        <ul className="space-y-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <li key={i} className="flex items-center justify-between">
              <div className="flex items-center gap-3 flex-grow">
                <div className="w-10 h-10 bg-gray-300 rounded-full" />
                <div className="space-y-1">
                  <div className="h-4 w-32 bg-gray-200 rounded" />
                  <div className="h-3 w-52 bg-gray-100 rounded" />
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
    <div className="flex flex-col gap-y-5 mb-10 max-w-4xl mx-auto animate-pulse">
      {/* Back Navigation */}
      <nav className="flex items-center mb-3">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-300 rounded-full" />
          <div className="h-4 w-16 bg-gray-300 rounded" />
        </div>
      </nav>

      {/* Header */}
      <header>
        <div className="h-6 w-40 bg-gray-300 rounded" />
      </header>

      <section className="flex flex-col gap-y-4 mb-3">
        {/* Currency Row */}
        <div className="flex flex-col gap-y-2 mb-4">
          <div className="h-6 w-48 bg-gray-300 rounded" />
          <div className="h-4 w-64 bg-gray-200 rounded" />
        </div>

        {/* Notification Settings */}
        <div>
          <div className="h-4 w-40 bg-gray-300 mb-2 rounded" />
          <div className="bg-gray-100 h-20 rounded-md" />
        </div>

        {/* Rate Log */}
        <div>
          <div className="h-4 w-48 bg-gray-300 mb-2 rounded" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
            {/* Left: Rate Change List */}
            <aside>
              <ul className="flex flex-col gap-y-3">
                {Array.from({ length: 5 }).map((_, index) => (
                  <li key={index} className="flex items-center gap-3.5">
                    <div className="w-10 h-10 bg-gray-300 rounded-full" />
                    <div className="flex-grow flex justify-between items-center gap-3">
                      <div className="flex flex-col gap-1">
                        <div className="w-28 h-4 bg-gray-300 rounded" />
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
    <div className="flex flex-col gap-y-5 max-w-2xl animate-pulse">
      {/* Navigation */}
      <nav className="flex items-center mb-3">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-300 rounded-full" />
          <div className="h-4 w-16 bg-gray-300 rounded" />
        </div>
      </nav>

      {/* Header */}
      <header>
        <div className="h-6 w-32 bg-gray-300 rounded" />
      </header>

      {/* Section */}
      <section className="my-4">
        {/* Language Selection */}
        <div className="flex flex-col gap-y-2 mb-8">
          <div className="w-40 h-4 bg-gray-200 rounded" />
          <div className="h-12 w-full bg-gray-100 rounded-lg" />
        </div>

        {/* Save Button */}
        <div className="h-12 w-full bg-gray-300 rounded-lg" />
      </section>
    </div>
  );
};

export const PersonalDetailsSkeleton = () => {
  return (
    <div className="flex flex-col gap-y-7 max-w-xl animate-pulse">
      {/* Navigation */}
      <nav className="flex items-center">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-300 rounded-full" />
          <div className="h-4 w-16 bg-gray-300 rounded" />
        </div>
      </nav>

      {/* Header */}
      <header>
        <div className="h-6 w-40 bg-gray-300 rounded" />
      </header>

      {/* Section List */}
      <section>
        <ul className="space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <li key={i} className="flex items-center justify-between">
              <div className="flex items-center gap-3 flex-grow">
                <div className="w-10 h-10 bg-gray-200 rounded-full" />
                <div className="space-y-1">
                  <div className="h-4 w-48 bg-gray-200 rounded" />
                  <div className="h-3 w-32 bg-gray-100 rounded" />
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
    <div className="flex flex-col gap-y-7 mb-14 max-w-2xl animate-pulse">
      {/* Back nav */}
      <nav className="flex items-center">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-300 rounded-full" />
          <div className="h-4 w-16 bg-gray-300 rounded" />
        </div>
      </nav>

      {/* Header */}
      <header>
        <div className="h-6 w-3/4 bg-gray-300 rounded" />
      </header>

      <form>
        <section className="flex flex-col gap-y-4">
          {/* First name */}
          <div className="space-y-1">
            <div className="h-4 w-28 bg-gray-300 rounded" />
            <div className="h-10 w-full bg-gray-200 rounded" />
          </div>

          {/* Last + Other name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[...Array(2)].map((_, i) => (
              <div className="space-y-1" key={i}>
                <div className="h-4 w-28 bg-gray-300 rounded" />
                <div className="h-10 w-full bg-gray-200 rounded" />
              </div>
            ))}
          </div>

          {/* Phone number block */}
          <div className="space-y-1">
            <div className="h-4 w-28 bg-gray-300 rounded" />
            <div className="flex items-stretch gap-x-3">
              <div className="w-20 h-12 bg-gray-200 rounded" />
              <div className="flex-grow h-12 bg-gray-200 rounded" />
            </div>
          </div>

          {/* Change phone */}
          <div className="h-4 w-40 mx-auto bg-gray-300 rounded mt-2" />
        </section>

        {/* Address section header */}
        <div className="mt-8 mb-4 border-b pb-2">
          <div className="h-4 w-24 bg-gray-300 rounded" />
        </div>

        {/* Address form fields */}
        <section className="flex flex-col gap-y-4">
          <div className="space-y-1">
            <div className="h-4 w-32 bg-gray-300 rounded" />
            <div className="h-10 w-full bg-gray-200 rounded" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[...Array(2)].map((_, i) => (
              <div className="space-y-1" key={i}>
                <div className="h-4 w-40 bg-gray-300 rounded" />
                <div className="h-10 w-full bg-gray-200 rounded" />
              </div>
            ))}
          </div>

          {/* Submit button */}
          <div className="mt-6">
            <div className="h-12 bg-gray-300 rounded w-full" />
          </div>
        </section>
      </form>
    </div>
  );
};

export const FundWalletSkeleton = () => {
  return (
    <div className="max-w-md mx-auto px-4 py-12 animate-pulse">
      {/* Header */}
      <div className="h-6 w-40 bg-gray-300 rounded mx-auto mb-8" />

      {/* Amount Input */}
      <div className="mb-6 space-y-2">
        <div className="h-4 w-32 bg-gray-300 rounded" />
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white">
          <div className="flex-1 p-3 bg-gray-100 h-12" />
          <div className="w-24 h-full bg-gray-100 relative">
            <div className="absolute left-3 top-1/2 w-5 h-5 bg-gray-300 rounded-full -translate-y-1/2" />
            <div className="absolute right-3 top-1/2 w-3 h-3 border-t border-r border-gray-400 rotate-45 -translate-y-1/2" />
          </div>
        </div>
      </div>

      {/* Payment Method */}
      <div className="mb-6 space-y-2">
        <div className="h-4 w-32 bg-gray-300 rounded" />
        <div className="flex items-center gap-3 bg-gray-100 p-4 rounded-xl border border-gray-200">
          <div className="w-6 h-6 bg-gray-300 rounded-full" />
          <div className="h-4 w-28 bg-gray-300 rounded" />
        </div>
      </div>

      {/* Continue Button */}
      <div className="h-12 w-full bg-gray-300 rounded-xl" />
    </div>
  );
};

export const SendAmountSkeleton = () => {
  return (
    <div className="flex flex-col gap-y-5 mb-10 lg:px-8 animate-pulse">
      {/* Header */}
      <div className="h-6 w-72 bg-gray-300 rounded" />

      {/* Xchange Placeholder */}
      <div className="h-24 bg-gray-100 rounded-lg" />

      {/* Accordion 1 – Add new recipient */}
      <div className="border border-slate-300 rounded-lg p-4 space-y-5">
        <div className="h-4 w-40 bg-gray-300 rounded" />

        {/* Payment methods */}
        <div className="space-y-2">
          <div className="h-4 w-32 bg-gray-300 rounded mb-2" />
          <div className="flex gap-3 flex-wrap">
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
          <div className="h-4 w-32 bg-gray-300 rounded" />
          <div className="h-12 bg-gray-100 rounded-lg" />
        </div>

        {/* OR Divider */}
        <div className="flex items-center gap-2">
          <div className="h-px bg-gray-300 flex-grow" />
          <div className="h-3 w-6 bg-gray-300 rounded" />
          <div className="h-px bg-gray-300 flex-grow" />
        </div>

        {/* QR Upload */}
        <div className="h-20 bg-gray-100 border border-dashed border-gray-400 rounded-lg" />

        {/* Save Beneficiary + QR help */}
        <div className="flex justify-between items-center">
          <div className="h-4 w-52 bg-gray-300 rounded" />
          <div className="h-4 w-28 bg-gray-300 rounded" />
        </div>

        {/* Add Nickname */}
        <div className="h-4 w-32 bg-gray-300 rounded" />
      </div>

      {/* Accordion 2 – Select from beneficiary */}
      <div className="border border-slate-300 rounded-lg p-4">
        <div className="h-4 w-56 bg-gray-300 rounded mb-4" />
        <ul className="space-y-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <li key={i} className="h-12 bg-gray-100 rounded-lg" />
          ))}
        </ul>
        <div className="mt-3 flex justify-end">
          <div className="h-4 w-24 bg-gray-300 rounded" />
        </div>
      </div>

      {/* Footer Button */}
      <div className="h-12 bg-gray-300 rounded-xl" />
    </div>
  );
};

export const ConfirmTransferSkeleton = () => {
  return (
    <div className="flex flex-col gap-y-5 mb-12 animate-pulse">
      {/* Payment Method */}
      <section className="flex flex-col gap-y-2">
        <div className="h-5 w-32 bg-gray-300 rounded" />
        <div className="border-2 border-dashed border-stone-300 p-4 rounded-2xl bg-[#F8F9FD] space-y-3">
          <div className="h-4 w-4 rounded-full bg-gray-300" />
          <div className="flex flex-col sm:flex-row sm:justify-between gap-y-3">
            <div className="flex flex-col gap-1">
              <div className="h-4 w-40 bg-gray-300 rounded" />
              <div className="h-4 w-32 bg-gray-200 rounded" />
              <div className="h-4 w-20 bg-gray-100 rounded mt-1" />
            </div>
            <div className="h-4 w-28 bg-gray-200 rounded mt-2" />
          </div>
        </div>
      </section>

      {/* Transfer Details */}
      <section className="space-y-3">
        <div className="h-5 w-44 bg-gray-300 rounded" />
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="flex justify-between">
              <div className="h-4 w-36 bg-gray-200 rounded" />
              <div className="h-4 w-24 bg-gray-300 rounded" />
            </div>
          ))}
      </section>

      <hr />

      {/* Recipient Details */}
      <section className="space-y-3">
        <div className="h-5 w-40 bg-gray-300 rounded" />
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="flex justify-between">
              <div className="h-4 w-40 bg-gray-200 rounded" />
              <div className="h-4 w-28 bg-gray-300 rounded" />
            </div>
          ))}
      </section>

      <hr />

      {/* Schedule Details */}
      <section className="space-y-3">
        <div className="h-5 w-44 bg-gray-300 rounded" />
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="flex justify-between">
              <div className="h-4 w-32 bg-gray-200 rounded" />
              <div className="h-4 w-20 bg-gray-300 rounded" />
            </div>
          ))}
      </section>

      {/* Reference */}
      <section className="space-y-2">
        <div className="h-5 w-32 bg-gray-300 rounded" />
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
        <div className="w-40 h-40 bg-gray-200 rounded-full mx-auto" />
      </figure>

      {/* Heading + Message */}
      <div className="mb-5 mt-6 flex flex-col gap-y-3 items-center">
        <div className="h-6 w-60 bg-gray-300 rounded-md" />
        <div className="h-4 w-72 bg-gray-200 rounded" />
        <div className="h-4 w-44 bg-gray-200 rounded" />
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-y-2 w-full mt-4 mb-16 px-4">
        <div className="h-[3.5rem] w-full bg-gray-300 rounded-lg" />
        <div className="h-[3.5rem] w-full bg-gray-200 border border-gray-300 rounded-lg" />
      </div>
    </section>
  );
};
