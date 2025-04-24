import React from "react";
import { ChinaIcon, NigeriaIcon } from "../../data";
import { ChevronDownIcon, IconWrapper, QuestionCircleIcon, SwitchAroundIcon } from "../../data/Icons";

export const Xchange = ({ disabled = false, hasHeader = true }) => {
	return (
		<div className="v-exchange-container-wrapper w-full">
			<div className="v-exchange-container">
				<div className="v-exchange-container-content">
					<div className="v-exchange-container-body">
						<form action="" className="v-exchange-container-form gap-y-2">
							<div className="v-form-input has-pad-right has-pad-top">
								<div className="v-form-input-inner">
									<label htmlFor="" className="v-floating-label text-sm">
										Recipient Gets (&#165;)
									</label>
									<input
										type="text"
										inputMode="numeric"
										className="form-control font-bold !text-2xl no-focus w-full"
										style={{ paddingRight: "6.5rem" }}
										placeholder="0.00214179"
									/>
									<span className="v-form-float v-form-float-right">
										<button type="button" onClick={() => {}} className="v-selection-toggler">
											<figure className="w-5 h-5 rounded-full overflow-hidden">
												<img src={ChinaIcon} alt="" className="object-full object-cover h-full w-full" />
											</figure>
											<span className="text-lg uppercase font-medium">chy</span>
											<IconWrapper>
												<ChevronDownIcon />
											</IconWrapper>
										</button>
									</span>
								</div>
							</div>
							<div className="v-exchanger">
								<button type="button" className="v-action-toggler">
									<IconWrapper>
										<SwitchAroundIcon />
									</IconWrapper>
								</button>
							</div>
							<div className="v-form-input has-pad-right has-pad-top">
								<div className="v-form-input-inner">
									<label htmlFor="" className="v-floating-label text-sm">
										You Pay
									</label>
									<input type="text" inputMode="numeric" className="font-bold !text-3xl form-control no-focus" style={{ paddingRight: "6.5rem" }} />
									<span className="v-form-float v-form-float-right">
										<button type="button" onClick={() => {}} className="v-selection-toggler">
											<figure className="w-5 h-5 rounded-full overflow-hidden">
												<img src={NigeriaIcon} alt="" className="object-full object-cover h-full w-full" />
											</figure>
											<span className="text-lg uppercase font-medium">NGN</span>
											<IconWrapper>
												<ChevronDownIcon />
											</IconWrapper>
										</button>
									</span>
								</div>
							</div>
						</form>
					</div>
					<footer className="v-exchange-container-footer mt-2">
						<div className="grid grid-cols-2 relative before:content-[''] before:top-1/2 before:left-1/2 before:absolute before:w-[0.5px] before:h-4/6 before:my-auto before:-translate-y-1/2 before:bg-slate-400 py-4 border border-slate-300 rounded-xl">
							<aside className="text-center px-2">
								<span className="flex justify-center text-[.9rem] sm:text-[.92rem]">
									Include fees
									<span>
										<QuestionCircleIcon />
									</span>
								</span>
								<span>00.00 NGN</span>
							</aside>
							<aside className="flex justify-center text-center px-2">
								<span className="text-[.9rem] sm:text-[.92rem]">
									Should arrive in <br /> 30 minutes
								</span>
							</aside>
						</div>
					</footer>
				</div>
			</div>
		</div>
	);
};

export const XchangeCard = ({ disabled = false, hasHeader = true }) => {
  return (
    <div className="v-exchange-container-wrapper w-full">
      <div className="v-exchange-container">
        <div className="v-exchange-container-content">
          <div className="v-exchange-container-body">
            <form action="" className="v-exchange-container-form gap-y-2">
              <div className="v-form-input has-pad-right has-pad-top">
                <div className="v-form-input-inner">
                  <label htmlFor="" className="v-floating-label text-sm">
                    Recipient Gets (&#165;)
                  </label>
                  <input
                    type="text"
                    inputMode="numeric"
                    className="form-control font-bold !text-2xl no-focus w-full"
                    style={{ paddingRight: "6.5rem" }}
                    placeholder="0.00214179"
                  />
                  <span className="v-form-float v-form-float-right">
                    <button type="button" onClick={() => { }} className="v-selection-toggler">
                      <figure className="w-5 h-5 rounded-full overflow-hidden">
                        <img src={ChinaIcon} alt="" className="object-full object-cover h-full w-full" />
                      </figure>
                      <span className="text-lg uppercase font-medium">chy</span>
                      <IconWrapper>
                        <ChevronDownIcon />
                      </IconWrapper>
                    </button>
                  </span>
                </div>
              </div>
              {/* <div className="v-exchanger">
                <button type="button" className="v-action-toggler">
                  <IconWrapper>
                    <SwitchAroundIcon />
                  </IconWrapper>
                </button>
              </div> */}
              <div className="v-form-input has-pad-right has-pad-top">
                <div className="v-form-input-inner">
                  <label htmlFor="" className="v-floating-label text-sm">
                    You Pay
                  </label>
                  <input type="text" inputMode="numeric" className="font-bold !text-3xl form-control no-focus" style={{ paddingRight: "6.5rem" }} />
                  <span className="v-form-float v-form-float-right">
                    <button type="button" onClick={() => { }} className="v-selection-toggler">
                      <figure className="w-5 h-5 rounded-full overflow-hidden">
                        <img src={NigeriaIcon} alt="" className="object-full object-cover h-full w-full" />
                      </figure>
                      <span className="text-lg uppercase font-medium">NGN</span>
                      <IconWrapper>
                        <ChevronDownIcon />
                      </IconWrapper>
                    </button>
                  </span>
                </div>
              </div>
            </form>
          </div>
          <footer className="v-exchange-container-footer mt-2">
            <div className="grid grid-cols-2 relative before:content-[''] before:top-1/2 before:left-1/2 before:absolute before:w-[0.5px] before:h-4/6 before:my-auto before:-translate-y-1/2 before:bg-slate-400 py-4 border border-slate-300 rounded-xl">
              <aside className="text-center px-2">
                <span className="flex justify-center text-[.9rem] sm:text-[.92rem]">
                  Present Rate per yuan
                  <span>
                    <QuestionCircleIcon />
                  </span>
                </span>
                <span>00.00 NGN</span>
              </aside>
              <aside className="flex justify-center text-center px-2">
                <span className="text-[.9rem] sm:text-[.92rem]">
                  Should arrive in <br /> 8 hours
                </span>
              </aside>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export const XchangeBoard = () => {
	return (
		<div className="py-14 lg:py-20 px-8 sm:px-16 bg-white relative rounded-2xl flex flex-col gap-y-10 min-h-[400px]">
			<Xchange />
			<button type="button" className="bg-main py-3.5 text-white w-full rounded-lg rounded-tl-none">
				Continue
			</button>
		</div>
	);
};
