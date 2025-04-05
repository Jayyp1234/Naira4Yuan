import React from "react";
import { BorderWrapper } from "../../../components/PageComponents/Dashboard/Items";
import { ChevronDownIcon, GalleryImageIcon, IconWrapper, WalletVariantIcon } from "@/data/Icons";
import { Link, useNavigate } from "react-router";
import { StateDataContext } from "../../../App";
import { useModalTrigger } from "../../../hooks/useModalTrigger";
import { Xchange } from "../../../components/LayoutComponents/Xchange";
import { BankTransferModal } from "../../../components/LayoutComponents/AllModals";
import { CompletedIcon, Alipay, BankTransfer, WeChat } from "@/data";
import { DownloadIcon } from "@/data/Icons";
import { routes } from "@/data/routes";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../../components/ui/accordion";
import { Beneficiary } from "../../../components/PageComponents/Dashboard/Beneficiary";
import { FooterButton } from "../../../components/BaseComponents/FooterButton";

export const Send = () => {
  const {
    stateData: {
      dashboard: { send },
    },
    setStateData,
  } = React.useContext(StateDataContext);

  return (
    <div className="max-w-xl mx-auto">
      {send.stepperVal === 1 && <SendStep1 />}
      {send.stepperVal === 2 && <SendStep2 />}
      {send.stepperVal === 3 && <SendStep3 />}
    </div>
  );
};

export const SendStep1 = () => {
  const navigate = useNavigate();

  const [openItem, setOpenItem] = React.useState(null);
  const [selectedMethod, setSelectedMethod] = React.useState("Alipay"); // Default selection

  const {
    stateData: {
      dashboard: { send },
    },
    setStateData,
  } = React.useContext(StateDataContext);

  const toggleAccordion = (value) => {
    setOpenItem(openItem === value ? null : value);
  };

  return (
    <div className="flex flex-col gap-y-5 mb-10 px-4 md:px-6 lg:px-8">
      <header>
        <h2 className="text-xl md:text-2xl font-semibold">How much are you sending?</h2>
      </header>

      <section className="flex flex-col gap-y-2">
        <Xchange />
      </section>

      <section className="my-2">
        <Accordion type="single" collapsible className="w-full flex flex-col gap-y-4">
          {/* Beneficiary Selection */}
          <AccordionItem value="item-1" className="border border-solid border-slate-300 rounded-lg">
            <AccordionTrigger
              onClick={() => toggleAccordion("item-1")}
              className="hover:no-underline px-4 [&>svg]:hidden flex justify-between items-center w-full"
            >
              <span className="text-base md:text-lg font-medium">Select recipient from beneficiary</span>
              <IconWrapper>
                <ChevronDownIcon className={`w-6 h-6 transition-transform ${openItem === "item-1" ? "rotate-180" : "rotate-0"}`} />
              </IconWrapper>
            </AccordionTrigger>
            <AccordionContent>
              <div className="px-4">
                <ul className="flex flex-col gap-y-2.5">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <Beneficiary key={index} itemAs="button" onClick={() => console.log("Selected")} />
                  ))}
                </ul>
                <div className="text-end pe-3 mt-3">
                  <button onClick={() => navigate(routes.DASHBOARD.recipients.index.abs)}
                    className="text-slate-600 font-semibold text-lg hover:underline">See all</button>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          {/* Add a New Recipient */}
          <AccordionItem value="item-2" className="border border-solid border-slate-300 rounded-lg">
            <AccordionTrigger onClick={() => toggleAccordion("item-2")} className="hover:no-underline px-4 [&>svg]:hidden">
              <span className="text-base md:text-lg font-medium">Add a new recipient</span>
              <IconWrapper>
                <ChevronDownIcon className={`w-7 h-7 ${openItem == `item-2` ? "rotate-180" : "rotate-0"}`} />
              </IconWrapper>
            </AccordionTrigger>

            <AccordionContent className="p-4 space-y-4">
              {/* Payment Method Selection */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Payment method</h3>
                <div className="flex flex-wrap gap-2 p-2 rounded-lg">
                  {[
                    { name: "Alipay", logo: Alipay },
                    { name: "Wechat", logo: WeChat },
                    { name: "Bank Transfer", logo: BankTransfer },
                  ].map((method, index) => (
                    <label
                      key={index}
                      className={`flex items-center gap-2 justify-between px-3 py-2 rounded-md flex-1 min-w-[100px] sm:min-w-[120px] md:px-4 border cursor-pointer text-xs sm:text-[.8rem] transition-all ${selectedMethod === method.name
                        ? "bg-[#013930] text-white"
                        : "bg-[#F8F9FD] text-[#94A3B8]"
                        }`}
                    >
                      <div className="flex items-center gap-1">
                        <img src={method.logo} alt={method.name} className="w-14 h-auto sm:w-6" />
                        <span className="font-medium">{method.name}</span>
                      </div>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method.name}
                        checked={selectedMethod === method.name}
                        onChange={() => setSelectedMethod(method.name)}
                        className="w-4 h-4 accent-green-900 cursor-pointer"
                      />
                    </label>
                  ))}
                </div>
              </div>

              {/* Alipay ID Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Alipay ID</label>
                <input
                  type="text"
                  placeholder="Enter Alipay ID"
                  className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-600"
                />
              </div>

              {/* OR Divider */}
              <div className="flex items-center gap-2">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="text-gray-500 text-xs sm:text-sm">OR</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>

              {/* Upload QR Code */}
              <div className="border border-dashed border-gray-400 p-4 rounded-lg bg-gray-100">
                <label htmlFor="qrUpload" className="cursor-pointer flex items-center gap-2">
                  <DownloadIcon className="w-5 h-5" />
                  <span className="text-gray-700 font-medium">Upload Alipay QR code</span>
                </label>
                <input
                  type="file"
                  id="qrUpload"
                  className="hidden"
                  accept="image/png,application/pdf"
                />
                <p className="text-xs text-gray-500 mt-1">File size should be a minimum of 2MB and in PNG or PDF format.</p>
              </div>

              {/* Save as Beneficiary */}
              <div className="flex items-center gap-2 mb-5">
                <input type="checkbox" id="saveBeneficiary" className="w-4 h-4" />
                <label htmlFor="saveBeneficiary" className="text-sm text-gray-700">Save as beneficiary</label>
              </div>

              {/* Add a Nickname */}
              <div>
                <a href="#" className=" text-sm font-regular underline">Add a nickname</a>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <div className="mt-4">
        <FooterButton text="Continue" onClick={() => {
          setStateData(prevState => ({
            ...prevState,
            dashboard: {
              ...prevState.dashboard,
              send: { ...prevState.dashboard.send, stepperVal: 2 }
            }
          }));
        }} className="!text-[1.05rem]" />
      </div>
    </div>
  );
};

export const SendStep2 = () => {
  const { stateData, setStateData } = React.useContext(StateDataContext);

  const {
    data: { modals },
    toggleModal,
    switchModal,
  } = useModalTrigger(stateData);

  function closeAndRedirection() {
    const newStates = structuredClone(stateData);
    newStates.dashboard.send.stepperVal = 3;

    setStateData(newStates);
  }
  return (
    <>
      <div className="flex flex-col gap-y-5 mb-10">
        <section className="flex flex-col gap-y-2">
          <span className="text-lg text-slate-600">Payment Method</span>
          <BorderWrapper borderColor="border-stone-400" cn="py-2 px-4 flex items-center gap-x-3" radiusSize="2xl" noBorderAt="rounded-tl-sm">
            <IconWrapper className="rounded-full bg-gray-100 p-2">
              <WalletVariantIcon className="w-6 h-6" />
            </IconWrapper>
            <div className="flex-grow flex flex-col text-start ">
              <span className="text-lg">Wallet</span>
              <small className="text-slate-500">201,540.98 NGN</small>
            </div>
            <button
              type="button"
              className="bg-gray-200 flex items-center px-3.5 animate-active hover:bg-main rounded-md hover:text-white text-[.95rem] leading-tight py-2">
              Fund
            </button>
          </BorderWrapper>
        </section>
        <section className="my-2">
          <header className="flex items-center justify-between">
            <span className="font-bold text-xl">Transfer details</span>
            <button className="font-bold underline text-xl" type="button">
              Edit
            </button>
          </header>
          <div className="mt-4 flex flex-col gap-y-1">
            <div className="flex justify-between">
              <span className="text-slate-600">You send</span>
              <span className="font-semibold text-slate-600">1,352 NGN</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Total fees (included)</span>
              <span className="font-semibold text-slate-600">0 NGN</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Total amount we'll deduct</span>
              <span className="font-semibold text-slate-600">1,200 NGN</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Yan Teng gets exactly</span>
              <span className="font-semibold text-slate-600">120 CNY</span>
            </div>
          </div>
        </section>
        <hr />
        <section className="my-2">
          <header>
            <h3 className="font-bold text-xl">Recipient details</h3>
          </header>
          <div className="mt-2 flex flex-col gap-y-1">
            <div className="flex justify-between">
              <span className="text-slate-600">Account Channel</span>
              <span className="font-semibold text-slate-600">ALIPAY</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Account holder name</span>
              <span className="font-semibold text-slate-600">YAN TENG</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Alipay ID</span>
              <span className="font-semibold text-slate-600">0829820478493769</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Screenshot </span>
              <div className="flex items-center gap-x-2 text-slate-600">
                <span className="font-semibold ">Uploaded</span>
                <IconWrapper>
                  <GalleryImageIcon />
                </IconWrapper>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section className="my-2">
          <header className="flex items-center justify-between">
            <h3 className="font-bold text-xl">Schedule details</h3>
            <button className="font-bold underline text-xl" type="button">
              Edit
            </button>
          </header>
          <div className="mt-2 flex flex-col gap-y-1">
            <div className="flex justify-between">
              <span className="text-slate-600">Sending</span>
              <span className="font-semibold text-slate-600">Now</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Should arrive</span>
              <span className="font-semibold text-slate-600">in 5 hours</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Repeats</span>
              <span className="font-semibold text-slate-600">Never</span>
            </div>
          </div>
        </section>
        <section>
          <span className="font-bold text-lg text-slate-700">Reference</span>
          <BorderWrapper borderColor="border-stone-400" cn="py-3 px-4 flex items-center gap-x-3" radiusSize="xl" noBorderAt="rounded-tl-sm">
            <span>Tunde</span>
          </BorderWrapper>
        </section>
        <div className="mt-4">
          <button
            onClick={() => toggleModal("DASHBOARD_BANK_TRANSFER", true)}
            className="w-full bg-main rounded-no-tl py-3.5 font-semibold text-white rounded-lg animate-active"
            type="button">
            Confirm
          </button>
        </div>
      </div>

      <BankTransferModal
        modalData={{ toggleModal }}
        open={modals.DASHBOARD_BANK_TRANSFER}
        action={() => [closeAndRedirection(), toggleModal("DASHBOARD_BANK_TRANSFER", false)]}
      />
    </>
  );
};

// export const SendStep3 = () => {
//   const navigate = useNavigate();
//   return (
//     <>
//       <section className="flex flex-col items-center text-center">
//         <figure className="max-w-56">
//           <img src={CompletedIcon} alt="" />
//         </figure>
//         <div className="mb-5 mt-6">
//           <h1 className="text-3xl font-semibold">Payment on the way🎉</h1>
//           <span className="text-slate-700">
//             You can track your payment on the
//             <Link
//               to={routes.DASHBOARD.transaction.abs}
//               className="underline mx-1 underline-offset-[1.5px] hover:font-bold transition-all ease-in-out duration-300">
//               transaction
//             </Link>
//             page
//           </span>
//         </div>
//         <div className="flex flex-col gap-y-2 w-full mt-4">
//           <button
//             type="button"
//             onClick={() => navigate(routes.DASHBOARD.index.abs)}
//             className="animate-active text-white bg-main rounded-no-tl border border-solid border-main flex items-center justify-center w-full rounded-lg py-3.5 text-[.95rem] font-bold">
//             Go back home
//           </button>
//           <button
//             type="button"
//             // onClick={}
//             className="animate-active bg-white text-main rounded-no-tl border border-solid border-main flex items-center justify-center w-full rounded-lg py-3.5 text-[.95rem] font-bold">
//             Download receipt
//           </button>
//         </div>
//       </section>
//     </>
//   );
// };


export const SendStep3 = () => {
  const navigate = useNavigate();
  const { setStateData } = React.useContext(StateDataContext);

  const resetStepperToFirstStep = () => {
    // Reset the stepper state after navigation
    setStateData(prevState => ({
      ...prevState,
      dashboard: {
        ...prevState.dashboard,
        send: { ...prevState.dashboard.send, stepperVal: 1 }
      }
    }));
  };

  const handleGoBackHome = () => {
    // Navigate first
    navigate(routes.DASHBOARD.index.abs);

    // Reset the stepper state after a brief delay (ensures navigation happens first)
    setTimeout(() => {
      resetStepperToFirstStep();
    }, 500); // Adjust the timeout duration if needed
  };

  return (
    <section className="flex flex-col items-center text-center">
      <figure className="max-w-56">
        <img src={CompletedIcon} alt="" />
      </figure>
      <div className="mb-5 mt-6">
        <h1 className="text-3xl font-semibold">Payment on the way🎉</h1>
        <span className="text-slate-700">
          You can track your payment on the
          <Link
            to={routes.DASHBOARD.transaction.abs}
            className="underline mx-1 underline-offset-[1.5px] hover:font-bold transition-all ease-in-out duration-300">
            transaction
          </Link>
          page
        </span>
      </div>
      <div className="flex flex-col gap-y-2 w-full mt-4">
        <button
          type="button"
          onClick={handleGoBackHome}
          className="animate-active text-white bg-main rounded-no-tl border border-solid border-main flex items-center justify-center w-full rounded-lg py-3.5 text-[.95rem] font-bold">
          Go back home
        </button>
        <button
          type="button"
          className="animate-active bg-white text-main rounded-no-tl border border-solid border-main flex items-center justify-center w-full rounded-lg py-3.5 text-[.95rem] font-bold">
          Download receipt
        </button>
      </div>
    </section>
  );
};
