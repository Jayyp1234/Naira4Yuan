import { IconWrapper } from "@/data/Icons";
import { ChevronDownIcon, DownloadIcon } from "@/data/Icons";
import useOutsideClick from "@/hooks/useOutsideClick";
import React, { useRef, useState } from "react";

export const FormControl = ({ type = "text", label = {}, style = "", icon = {}, floatEle, ...others }) => {
	return (
		<div className="relative">
			{label?.exist && (
				<label htmlFor={label.id ?? ""} className={`${label?.style ?? ""} text-[.94rem]`}>
					{label?.text ?? ""}
				</label>
			)}
			<div className="relative">
				<input
					type={type}
					{...others}
					id={label.id ?? ""}
					className={`${style} ${floatEle?.exist && (floatEle?.position === "right" || floatEle?.position === "r" ? "pr-28" : "pl-10")} ${
						icon?.exist ? "pr-12" : ""
					} placeholder:text-sm text-base px-3.5 py-3 min-h-[3.2rem] transition-all duration-300 ease-in-out bg-[#F8F9FD] focus:bg-[#eff1f7] rounded-lg w-full`}
				/>
				{icon?.exist && (
					<button
						onClick={icon?.action}
						type="button"
						className="flex items-center justify-center absolute right-2.5 top-1/2 -translate-y-1/2 p-2 transition-all hover:bg-slate-200 bg-transparent rounded-full text-slate-500">
						<IconWrapper className="pointer-events-none">{React.createElement(icon?.element, { className: "w-5 h-5" })}</IconWrapper>
					</button>
				)}
				{floatEle?.exist && (
					<div
						className={`absolute top-1/2 -translate-y-1/2 flex items-center justify-center text-slate-500 ${
							floatEle?.position?.toLowerCase() === "right" || floatEle?.position?.toLowerCase() === "r" ? "right-3" : "left-3"
						} text-sm ${floatEle.style || ""}`}>
						{floatEle.children}
					</div>
				)}
			</div>
		</div>
	);
};

export const RadioInput = ({ className = "", ...others }) => {
	return (
		<input
			className={`${className} accent-main w-4 h-4 border cursor-pointer transition ease-in-out duration-300 focus:!shadow-none`}
			type="radio"
			{...others}
		/>
	);
};

export const SwitchInput = ({ className = "", isOn, ...others }) => {
	return (
		<button
			type="button"
			{...others}
			className={`relative disabled:cursor-not-allowed disabled:opacity-60 inline-flex items-center h-[20px] rounded-full w-[40px] cursor-pointer transition-all ${
				isOn ? "bg-green-600" : "bg-gray-300"
			}`}>
			<span
				className={`transform transition-transform inline-block translate-y-[-0.25px] w-[16px] h-[16px]  bg-white rounded-full shadow-md ${
					isOn ? "translate-x-[22px]" : "translate-x-[2px]"
				}`}></span>
		</button>
	);
};

export const CheckBox = ({ className = "", ...others }) => {
	return (
		<input
			type="checkbox"
			className={`${className} border-2 border-solid border-stone-400 checked:accent-green-700 transition-all duration-300 ease-in-out cursor-pointer rounded-md overflow-hidden w-[1.15rem] h-[1.15rem]`}
			{...others}
		/>
	);
};

export const FileUpload = ({ id, label }) => (
  <div className="w-full">
    <label htmlFor={id} className="sr-only">
      {label}
    </label>
    <div className="bg-[#F8F9FD] border-2 border-dashed border-gray-300 rounded-lg rounded-no-tl p-3 cursor-pointer hover:bg-[#eff1f7] transition-colors">
      <div className="flex items-center space-x-3">
        <IconWrapper>
          <DownloadIcon className="w-5 h-5 text-gray-700" />
        </IconWrapper>
        <span className="text-base text-gray-700">{label}</span>
      </div>
      <input type="file" id={id} className="hidden" />
    </div>
  </div>
);

export const SelectBox = ({ label, placeholder = "Select an option", options = [], onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const boxRef = useRef(null);

  useOutsideClick(boxRef, () => setIsOpen(false), isOpen); // optional: close dropdown on outside click

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    if (onChange) onChange(option);
  };

  return (
    <div className="relative w-full" ref={boxRef}>
      {label && (
        <label className="block mb-1 text-base font-normal text-gray-900">
          {label}
        </label>
      )}

      <div
        className="flex items-center justify-between w-full px-3.5 py-2 min-h-[3rem] bg-[#F8F9FD] hover:bg-[#eff1f7] text-left text-base rounded-lg cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className={`block truncate text-base ${selected ? "text-gray-800" : "text-gray-400"}`}>
          {selected?.label || placeholder}
        </span>
        <IconWrapper>
          <ChevronDownIcon className="w-5 h-5 text-gray-400" />
        </IconWrapper>
      </div>

      {isOpen && (
        <ul className="absolute z-50 w-full mt-2 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-sm max-h-60">
          {options.map((opt, index) => (
            <li
              key={index}
              onClick={() => handleSelect(opt)}
              className="px-4 py-2 text-sm text-gray-800 cursor-pointer hover:bg-gray-100"
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};