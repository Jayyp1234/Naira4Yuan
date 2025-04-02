import { ChevronDownIcon, IconWrapper } from "../../../../data/Icons";

export const StatementFees = () => {
	return (
		<div>
			<header>
				<h2 className="text-2xl font-bold">Statement of fees</h2>
			</header>
			<section className="my-8">
				<header className="border-b border-solid pb-1">
					<h6 className="text-lg text-slate-700 font-medium">Set the date</h6>
				</header>
				<div className="max-w-xl">
					<span className="my-4 block">
						Statements can cover any period of time up to one year. For longer periods, you’ll need to download multiple statements.
					</span>
					<section className="my-4 flex flex-col gap-y-1">
						<h4 className="text-slate-600">Dates</h4>
						<div className="flex items-center gap-x-3 mt-1">
							<button
								type="button"
								className="bg-slate-100 hover:bg-slate-200 py-2 px-4 text-sm rounded-tl-sm animate-active  rounded-lg flex items-center justify-center font-medium">
								Last month
							</button>
							<button
								type="button"
								className="bg-slate-100 hover:bg-slate-200 py-2 px-4 text-sm rounded-tl-sm animate-active rounded-lg flex items-center justify-center font-medium">
								Last quarter
							</button>
							<button
								type="button"
								className="bg-slate-100 hover:bg-slate-200 py-2 px-4 text-sm rounded-tl-sm animate-active rounded-lg flex items-center justify-center font-medium">
								Last year
							</button>
						</div>
						<div className="flex flex-col gap-y-1">
							<div className="rounded-lg mt-3 flex items-stretch overflow-hidden bg-[#F8F9FD]/80">
								<span className="flex items-center px-4 text-sm sm:text-[.95rem] bg-[#F8F9FD] border-r border-r-slate-100">From</span>
								<button type="button" className="flex items-center justify-between px-3.5 py-3 w-full">
									<span className="text-[.95rem] text-slate">English (UK)</span>
									<IconWrapper>
										<ChevronDownIcon />
									</IconWrapper>
								</button>
							</div>
							<div className="rounded-lg mt-3 flex items-stretch overflow-hidden bg-[#F8F9FD]/80">
								<span className="flex items-center px-4 text-sm sm:text-[.95rem] bg-[#F8F9FD] border-r border-r-slate-100">From</span>
								<button type="button" className="flex items-center justify-between px-3.5 py-3 w-full">
									<span className="text-[.95rem] text-slate">English (UK)</span>
									<IconWrapper>
										<ChevronDownIcon />
									</IconWrapper>
								</button>
							</div>
						</div>
					</section>
					<div className="mt-8 text-center flex flex-col items-center gap-y-4">
						<button
							type="button"
							disabled
							className="font-medium px-8 rounded-md disabled:cursor-not-allowed disabled:opacity-60 enabled:active:scale-95 transition-all ease-in-out enabled:bg-main enabled:text-white enabled:border-main disabled:border-slate-200 py-4 w-full disabled:bg-gray-300 flex items-center justify-center">
							Download
						</button>
						<button type="button" className="underline text-black font-medium underline-offset-2">
							Give us feedback
						</button>
					</div>
				</div>
			</section>
		</div>
	);
};
