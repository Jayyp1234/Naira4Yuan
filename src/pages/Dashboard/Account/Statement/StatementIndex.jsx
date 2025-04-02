import React from "react";
import { ChevronRightIcon, IconWrapper, StatementAndReportIcon, StatementFeesIcon, UserIcon } from "@/data/Icons";
import { Link } from "react-router";
import { routes } from "@/data/routes";

export const StatementReportIndex = () => {
	return (
		<div>
			<header>
				<h2 className="text-2xl font-bold">Statement and reports</h2>
			</header>
			<section className="my-8">
				<header className="border-b border-solid pb-1">
					<h6 className="text-lg text-slate-700 font-medium">Transactions and fees</h6>
				</header>
				<ul className="py-4 w-full flex flex-col gap-y-4">
					<li>
						<Link to={routes.DASHBOARD.account.statementReport.statement.rel} className="flex items-center gap-4 flex-grow">
							<IconWrapper className="bg-slate-200/50 text-slate-600 p-2.5 rounded-full">
								<StatementAndReportIcon className="w-5 h-5 align-middle" />
							</IconWrapper>
							<div className="flex items-center justify-between flex-grow gap-3">
								<aside className="text-start flex flex-col gap-y-1">
									<h3 className="text-lg leading-tight font-medium">Statement</h3>
									<p className="text-gray-500 text-sm leading-tight">An official statement of transactions for any of your balances or Jars.</p>
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
						<Link to={routes.DASHBOARD.account.statementReport.statementFees.rel} className="flex items-center gap-4 flex-grow">
							<IconWrapper className="bg-slate-200/50 text-slate-600 p-2.5 rounded-full">
								<StatementFeesIcon className="w-5 h-5" />
							</IconWrapper>
							<div className="flex items-center justify-between flex-grow gap-3">
								<aside className="text-start flex flex-col gap-y-1">
									<h3 className="text-lg leading-tight font-medium">Statement Fees</h3>
									<p className="text-gray-500 text-sm leading-tight">An official statement of transactions for any of your balances or Jars.</p>
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
						<Link to={routes.DASHBOARD.account.statementReport.ownership.rel} className="flex items-center gap-4 flex-grow">
							<IconWrapper className="bg-slate-200/50 text-slate-600 p-2.5 rounded-full">
								<UserIcon />
							</IconWrapper>
							<div className="flex items-center justify-between flex-grow gap-3">
								<aside className="text-start flex flex-col gap-y-1">
									<h3 className="text-lg leading-tight font-medium">Proof of account ownership</h3>
									<p className="text-gray-500 text-sm leading-tight">A document confirming your ownership of your account.</p>
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
