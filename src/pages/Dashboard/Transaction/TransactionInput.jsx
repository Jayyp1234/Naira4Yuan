import { useState } from "react";
import { Alipay, BankTransfer, WeChat } from "@/data";
import { DownloadIcon } from "@/data/Icons";

export const TransactionInput = () => {
  const [selectedMethod, setSelectedMethod] = useState("Alipay");

  const getLabelAndPlaceholder = (method) => {
    switch (method) {
      case "Alipay":
        return { label: "Alipay ID", placeholder: "Enter Alipay ID" };
      case "Wechat":
        return { label: "WeChat ID", placeholder: "Enter WeChat ID" };
      case "Bank Transfer":
        return { label: "Bank ID", placeholder: "Enter Bank ID" };
      default:
        return { label: "", placeholder: "" };
    }
  };

  const { label, placeholder } = getLabelAndPlaceholder(selectedMethod);

  return (
    <div className="flex flex-col gap-y-5 mb-10 max-w-xl">
      <header>
        <h2 className="text-2xl font-bold">Input recipients details</h2>
      </header>
      <section className="flex flex-col gap-y-4 mt-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Recipient{`’`}s email (optional)</label>
          <input
            type="text"
            placeholder="Enter email address"
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-600"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Recipient{`’`}s full name</label>
          <input
            type="text"
            placeholder="Enter full name"
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-600"
          />
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">Payment method</h3>
          <div className="flex flex-wrap gap-2 rounded-lg">
            {[
              { name: "Alipay", logo: Alipay },
              { name: "Wechat", logo: WeChat },
              { name: "Bank Transfer", logo: BankTransfer },
            ].map((method, index) => (
              <label
                key={index}
                className={`flex items-center gap-1 justify-between px-3 py-4 rounded-md flex-1 w-fit md:px-2 border cursor-pointer text-xs sm:text-[.8rem] transition-all ${selectedMethod === method.name
                  ? "bg-[#013930] text-white"
                  : "bg-[#F8F9FD] text-[#94A3B8]"
                  }`}
              >
                <div className="flex items-center gap-1">
                  <img src={method.logo} alt={method.name} className="w-12 h-auto" />
                  <span className="text-xs font-medium">{method.name}</span>
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

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            <input
              type="text"
              placeholder={placeholder}
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-600"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="text-gray-500 text-xs">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

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

        <div>
          <a href="#" className=" text-sm font-regular underline">Add a nickname</a>
        </div>
      </section>
    </div>
  );
};
