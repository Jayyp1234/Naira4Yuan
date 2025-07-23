import React from "react";
import { ExclamationIcon, IconWrapper } from "@/data/Icons";

const alertStyles = {
  info: {
    bg: "bg-blue-100",
    text: "text-blue-800",
    iconBg: "bg-blue-700",
  },
  warning: {
    bg: "bg-yellow-100",
    text: "text-yellow-800",
    iconBg: "bg-yellow-600",
  },
  danger: {
    bg: "bg-red-100",
    text: "text-red-800",
    iconBg: "bg-red-600",
  },
  default: {
    bg: "bg-[#EFF1EF]",
    text: "text-gray-700",
    iconBg: "bg-[#454745]",
  },
};

export const AlertNotification = ({ message, subMessage, onClose, type = "default" }) => {
  const styles = alertStyles[type] || alertStyles.default;

  return (
    <div className={`flex items-start gap-4 p-4 pr-5 rounded-xl w-full shadow-sm relative ${styles.bg} ${styles.text}`}>
      <div>
        <IconWrapper className={`${styles.iconBg} rounded-full p-2`}>
          <ExclamationIcon className="w-5 h-5 text-white rotate-180" />
        </IconWrapper>
      </div>
      <div className="text-sm">
        <p className="font-medium">{message}</p>
        {subMessage && <p>{subMessage}</p>}
      </div>
      <button
        onClick={onClose}
        className="absolute top-0 text-5xl transition-colors right-2 hover:text-black"
        aria-label="Close"
      >
        &times;
      </button>
    </div>
  );
};

