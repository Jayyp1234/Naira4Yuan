import React, { useState } from "react";
import { FormControl } from "@/components/BaseComponents/FormInputs";
import { ChevronDownIcon, ChevronLeftIcon, DownloadIcon, IconWrapper } from "@/data/Icons";
import { CompletedIcon } from "@/data";
import { useNavigate } from "react-router";
import { routes } from "@/data/routes";
import { CityModal, SelectIdModal, StateOfOriginModal, StateOfResidenceModal } from "@/components/LayoutComponents/AllModals";

export const LimitUpgrade = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    // Navigate to the Upgrade component
    navigate('/dashboard/account/limit/upgraded');
  };

  const [modals, setModals] = useState({
    SELECT_MEANS_ID: false,
    STATE_ORIGIN: false,
    STATE_RESIDENCE: false,
    CITY: false,
  });

  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState(""); // Store selected city

  // Unified toggle function
  const toggleModal = (modalType, isOpen) => {
    setModals((prev) => ({ ...prev, [modalType]: isOpen }));
  };

  const handleCitySelection = (city) => {
    setSelectedCity(city);
    toggleModal("CITY", false); // Close city modal after selection
  };


  return (
    <>
      <nav className="flex items-center flex-1 mb-3">
        <button
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          onClick={() => navigate(-1)}
        >
          <ChevronLeftIcon className="w-4 h-4" />
          <span>Back</span>
        </button>
      </nav>
      <div className="mb-14 max-w-2xl mx-auto">
        <header className="mb-4">
          <h2 className="text-xl font-normal">Kindly input your details for an upgrade</h2>
        </header>
        <div className="space-y-3">
          {/* Business Name Field */}
          <FormControl
            type="text"
            placeholder="Enter name of business"
            label={{
              exist: true,
              text: "Name of Business (As on Certificate of Incorporation)",
              id: "businessName",
              style: "text-base font-normal text-gray-900"
            }}
            style="text-gray-700 text-base"
          />

          {/* CAC Certificate Upload */}
          <div className="w-full">
            <label
              htmlFor="cacCertificate"
              className="sr-only"
            >
              Upload CAC Certificate
            </label>
            <div className="bg-[#F8F9FD] border-2 border-dashed border-gray-300 rounded-lg rounded-no-tl p-3 cursor-pointer hover:bg-[#eff1f7] transition-colors">
              <div className="flex items-center space-x-3">
                <IconWrapper>
                  <DownloadIcon className="w-5 h-5 text-gray-700" />
                </IconWrapper>
                <span className="text-base text-gray-700">Upload CAC Certificate</span>
              </div>
              <input
                type="file"
                id="cacCertificate"
                className="hidden"
              />
            </div>
          </div>

          {/* Memart Upload */}
          <div className="w-full">
            <label
              htmlFor="memartDocument"
              className="sr-only"
            >
              Upload Memart
            </label>
            <div className="bg-[#F8F9FD] border-2 border-dashed border-gray-300 rounded-lg rounded-no-tl p-3 cursor-pointer hover:bg-[#eff1f7] transition-colors">
              <div className="flex items-center space-x-3">
                <IconWrapper>
                  <DownloadIcon className="w-5 h-5 text-gray-700" />
                </IconWrapper>
                <span className="text-base text-gray-700">Upload Memart</span>
              </div>
              <input
                type="file"
                id="memartDocument"
                className="hidden"
              />
            </div>
          </div>
          <div className="w-full">
            <label className="block text-base font-normal text-gray-900 mb-1">
              Means of Identification
            </label>

            <div
              onClick={() => toggleModal("SELECT_MEANS_ID", true)}
              className="flex items-center justify-between w-full px-3.5 py-2 min-h-[3rem] bg-[#F8F9FD] hover:bg-[#eff1f7] text-left text-base rounded-lg cursor-pointer"
            >
              <span className="block truncate text-gray-400 text-base">
                Select means of identification
              </span>
              <IconWrapper>
                <ChevronDownIcon className="w-5 h-5 text-gray-400" />
              </IconWrapper>
            </div>
          </div>
          <div className="w-full">
            <label
              htmlFor="nationalid"
              className="sr-only"
            >
              Upload National ID Card
            </label>
            <div className="bg-[#F8F9FD] border-2 border-dashed border-gray-300 rounded-lg rounded-no-tl p-3 cursor-pointer hover:bg-[#eff1f7] transition-colors">
              <div className="flex items-center space-x-3">
                <IconWrapper>
                  <DownloadIcon className="w-5 h-5 text-gray-700" />
                </IconWrapper>
                <span className="text-sm text-gray-700">Upload National ID Card</span>
              </div>
              <input
                type="file"
                id="nationalid"
                className="hidden"
              />
            </div>
          </div>
          <div className="w-full">
            <label className="block text-base font-normal text-gray-900 mb-1">
              State of Origin
            </label>

            <div
              onClick={() => toggleModal("STATE_ORIGIN", true)}
              className="flex items-center justify-between w-full px-3.5 py-2 min-h-[3rem] bg-[#F8F9FD] hover:bg-[#eff1f7] text-left text-base rounded-lg cursor-pointer"
            >
              <span className="block truncate text-gray-400 text-base">
                Select your state of origin
              </span>
              <IconWrapper>
                <ChevronDownIcon className="w-5 h-5 text-gray-400" />
              </IconWrapper>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="w-full">
              <label className="block text-base font-normal text-gray-900 mb-1">
                State of Residence
              </label>

              <div
                className="flex items-center justify-between w-full px-3.5 py-2 min-h-[3rem] bg-[#F8F9FD] hover:bg-[#eff1f7] text-left text-base rounded-lg cursor-pointer"
                onClick={() => toggleModal("STATE_RESIDENCE", true)}
              >
                <span className={`block truncate text-base ${selectedState ? "text-gray-800" : "text-gray-400"}`}>
                  {selectedState || "Select your state of residence"}
                </span>
                <IconWrapper>
                  <ChevronDownIcon className="w-5 h-5 text-gray-400" />
                </IconWrapper>
              </div>
            </div>
            <div className="w-full">
              <label className="block text-base font-normal text-gray-900 mb-1">
                City
              </label>

              <div
                className="flex items-center justify-between w-full px-3.5 py-2 min-h-[3rem] bg-[#F8F9FD] hover:bg-[#eff1f7] text-left text-base rounded-lg cursor-pointer"
                onClick={() => toggleModal("CITY", true)} // Open the modal on click
              >
                <span className="block truncate text-gray-400 text-base">
                  {selectedCity ? selectedCity : "Select city"} {/* Show selected city */}
                </span>
                <IconWrapper>
                  <ChevronDownIcon className="w-5 h-5 text-gray-400" />
                </IconWrapper>
              </div>
            </div>
          </div>
          <div className="w-full">
            <label className="block text-base font-medium text-gray-900 mb-2">
              Address
            </label>

            <textarea
              placeholder="Enter your full address"
              className="w-full px-3.5 py-3 min-h-[90px] bg-[#F8F9FD] text-base rounded-lg focus:outline-none focus:bg-[#eff1f7] text-gray-700 placeholder:text-gray-400 placeholder:text-sm resize-none"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="selfie"
              className="sr-only"
            >
              Upload selfie
            </label>
            <div className="bg-[#F8F9FD] border-2 border-dashed border-gray-300 rounded-lg rounded-no-tl p-3 cursor-pointer hover:bg-[#eff1f7] transition-colors">
              <div className="flex items-center space-x-3">
                <IconWrapper>
                  <DownloadIcon className="w-5 h-5 text-gray-700" />
                </IconWrapper>
                <span className="text-sm text-gray-700">Upload selfie</span>
              </div>
              <input
                type="file"
                id="selfie"
                className="hidden"
              />
            </div>
          </div>
          <div className="w-full bg-[#FCD55436] rounded-xl px-4 py-3 flex items-center">
            <div className="flex-shrink-0 bg-white rounded-full w-7 h-7 flex items-center justify-center mr-4">
              <span className="text-black font-bold text-sm">!</span>
            </div>
            <p className="text-gray-700 text-base">
              Upload a selfie image of you holding your identification document
            </p>
          </div>
        </div>
        <div className="mt-10">
          <button onClick={handleContinue} className="transition-all w-full duration-300 ease-in-out rounded-lg disabled:cursor-not-allowed text-sm disabled:bg-[#DADADA] disabled:text-white py-4 px-5 bg-main text-white">Continue</button>
        </div>

        <SelectIdModal
          open={modals.SELECT_MEANS_ID}
          modalData={{ toggleModal }}
          action={() => { }}
        />
        <StateOfOriginModal
          open={modals.STATE_ORIGIN}
          modalData={{ toggleModal }}
          action={() => { }}
        />
        <StateOfResidenceModal
          open={modals.STATE_RESIDENCE}
          modalData={{ toggleModal }}
          action={(state) => {
            setSelectedState(state);
            toggleModal("STATE_RESIDENCE", false);
          }}
        />
        <CityModal
          open={modals.CITY}
          modalData={{ toggleModal }}
          action={handleCitySelection} // Pass city selection handler as action
        />
      </div>
    </>
  );
};

export const Upgrade = () => {
  const navigate = useNavigate();

  return (
    <>
      <nav className="flex items-center flex-1 mb-3">
        <button
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          onClick={() => navigate(-1)}
        >
          <ChevronLeftIcon className="w-4 h-4" />
          <span>Back</span>
        </button>
      </nav>
      <div className="max-w-2xl mx-auto">
        <section className="flex flex-col items-center text-center">
          <figure className="max-w-56">
            <img src={CompletedIcon} alt="" />
          </figure>
          <div className="mb-5 mt-6">
            <h1 className="text-3xl font-semibold">Business Account Verification Ongoing</h1>
            <span className="text-sm text-slate-500">We'll get back to you via email. Please keep an eye on your inbox
              for an update on your verification status.</span>
          </div>
          <div className="flex flex-col gap-y-3 w-full">
            <button
              type="button"
              className="border-[#f1c34e] border-solid border enabled:active:scale-95 transition-all ease-in-out bg-[#F1C34E] flex items-center justify-center w-full rounded-lg py-3.5 text-[.95rem] font-semibold">
              Continue
            </button>
          </div>
        </section>

      </div>
    </>
  );
};