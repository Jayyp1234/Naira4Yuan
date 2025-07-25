import React, {useState, useEffect} from "react";
import { ChinaIcon, NigeriaIcon } from "../../data";
import { ChevronDownIcon, IconWrapper, QuestionCircleIcon, SwitchAroundIcon } from "../../data/Icons";
import { useGetSystemOverviewQuery } from "../../states/services/authApi";

export const Xchange = ({ disabled = false, hasHeader = true }) => {
  const { data, isLoading } = useGetSystemOverviewQuery();

  // Find NGN -> CNY rate
  const ngnToCnyRate = data?.data?.exchange_rates?.find(
    (r) => r.currency_from_code === "NGN" && r.currency_to_code === "CNY"
  )?.rate;

  // Default to 0.0012 if not loaded
  const rate = parseFloat(ngnToCnyRate);

  // State for both fields
  const [recipientGets, setRecipientGets] = useState("");
  const [youPay, setYouPay] = useState("");

  // When recipientGets changes, update youPay
  const handleRecipientGetsChange = (e) => {
    const value = e.target.value.replace(/[^0-9.]/g, "");
    setRecipientGets(value);
    if (value && rate) {
      setYouPay((parseFloat(value) / rate).toFixed(2));
    } else {
      setYouPay("");
    }
  };

  // When youPay changes, update recipientGets
  const handleYouPayChange = (e) => {
    const value = e.target.value.replace(/[^0-9.]/g, "");
    setYouPay(value);
    if (value && rate) {
      setRecipientGets((parseFloat(value) * rate).toFixed(6));
    } else {
      setRecipientGets("");
    }
  };

  // If rate changes, recalculate values
  useEffect(() => {
    if (recipientGets && rate) {
      setYouPay((parseFloat(recipientGets) / rate).toFixed(2));
    }
  }, [rate]);

	 return (
    <div className="w-full v-exchange-container-wrapper">
      <div className="v-exchange-container">
        <div className="v-exchange-container-content">
          <div className="v-exchange-container-body">
            <form className="v-exchange-container-form gap-y-2" autoComplete="off">
              <div className="v-form-input has-pad-right has-pad-top">
                <div className="v-form-input-inner">
                  <label className="text-sm v-floating-label">
                    Recipient Gets (&#165;)
                  </label>
                  <input
                    type="text"
                    inputMode="decimal"
                    className="form-control font-bold !text-2xl no-focus w-full"
                    style={{ paddingRight: "6.5rem" }}
                    placeholder={isLoading ? "Loading..." : "0.00"}
                    value={recipientGets}
                    onChange={handleRecipientGetsChange}
                    disabled={disabled}
                  />
                  <span className="v-form-float v-form-float-right">
                    <button type="button" className="v-selection-toggler" tabIndex={-1}>
                      <figure className="w-5 h-5 overflow-hidden rounded-full">
                        <img src={ChinaIcon} alt="" className="object-cover w-full h-full object-full" />
                      </figure>
                      <span className="text-lg font-medium uppercase">cny</span>
                      <IconWrapper>
                        <ChevronDownIcon />
                      </IconWrapper>
                    </button>
                  </span>
                </div>
              </div>
              <div className="v-exchanger">
                <button type="button" className="v-action-toggler" tabIndex={-1}>
                  <IconWrapper>
                    <SwitchAroundIcon />
                  </IconWrapper>
                </button>
              </div>
              <div className="v-form-input has-pad-right has-pad-top">
                <div className="v-form-input-inner">
                  <label className="text-sm v-floating-label">
                    You Pay
                  </label>
                  <input
                    type="text"
                    inputMode="decimal"
                    className="font-bold form-control no-focus !text-4xl w-full"
                    style={{ paddingRight: "6.5rem" }}
                    placeholder={isLoading ? "Loading..." : "0.00"}
                    value={youPay}
                    onChange={handleYouPayChange}
                    disabled={disabled}
                  />
                  <span className="v-form-float v-form-float-right">
                    <button type="button" className="v-selection-toggler" tabIndex={-1}>
                      <figure className="w-5 h-5 overflow-hidden rounded-full">
                        <img src={NigeriaIcon} alt="" className="object-cover w-full h-full object-full" />
                      </figure>
                      <span className="text-lg font-medium uppercase">NGN</span>
                      <IconWrapper>
                        <ChevronDownIcon />
                      </IconWrapper>
                    </button>
                  </span>
                </div>
              </div>
            </form>
          </div>
          <footer className="mt-2 v-exchange-container-footer">
            <div className="grid grid-cols-2 relative before:content-[''] before:top-1/2 before:left-1/2 before:absolute before:w-[0.5px] before:h-4/6 before:my-auto before:-translate-y-1/2 before:bg-slate-400 py-4 border border-slate-300 rounded-xl">
              <aside className="px-2 text-center">
                <span className="flex justify-center text-[.9rem] sm:text-[.92rem]">
                  Present Rate per Naira
                  <span>
                    <QuestionCircleIcon />
                  </span>
                </span>
                <span>{isLoading ? "Loading..." : `${rate} CYN`}</span>
              </aside>
              <aside className="flex justify-center px-2 text-center">
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
    <div className="w-full v-exchange-container-wrapper">
      <div className="v-exchange-container">
        <div className="v-exchange-container-content">
          <div className="v-exchange-container-body">
            <form action="" className="v-exchange-container-form gap-y-2">
              <div className="v-form-input has-pad-right has-pad-top">
                <div className="v-form-input-inner">
                  <label htmlFor="" className="text-sm v-floating-label">
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
                      <figure className="w-5 h-5 overflow-hidden rounded-full">
                        <img src={ChinaIcon} alt="" className="object-cover w-full h-full object-full" />
                      </figure>
                      <span className="text-lg font-medium uppercase">chy</span>
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
                  <label htmlFor="" className="text-sm v-floating-label">
                    You Pay
                  </label>
                  <input type="text" inputMode="numeric" className="font-bold !text-3xl form-control no-focus" style={{ paddingRight: "6.5rem" }} />
                  <span className="v-form-float v-form-float-right">
                    <button type="button" onClick={() => { }} className="v-selection-toggler">
                      <figure className="w-5 h-5 overflow-hidden rounded-full">
                        <img src={NigeriaIcon} alt="" className="object-cover w-full h-full object-full" />
                      </figure>
                      <span className="text-lg font-medium uppercase">NGN</span>
                      <IconWrapper>
                        <ChevronDownIcon />
                      </IconWrapper>
                    </button>
                  </span>
                </div>
              </div>
            </form>
          </div>
          <footer className="mt-2 v-exchange-container-footer">
            <div className="grid grid-cols-2 relative before:content-[''] before:top-1/2 before:left-1/2 before:absolute before:w-[0.5px] before:h-4/6 before:my-auto before:-translate-y-1/2 before:bg-slate-400 py-4 border border-slate-300 rounded-xl">
              <aside className="px-2 text-center">
                <span className="flex justify-center text-[.9rem] sm:text-[.92rem]">
                  Present Rate per yuan
                  <span>
                    <QuestionCircleIcon />
                  </span>
                </span>
                <span>00.00 NGN</span>
              </aside>
              <aside className="flex justify-center px-2 text-center">
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
