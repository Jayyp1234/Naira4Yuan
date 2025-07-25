import { useEffect } from "react";

const useOutsideClick = (refs, callback, isActive = true) => {
  useEffect(() => {
    if (!isActive) return;

    const handleOutsideClick = (event) => {
      const refArray = Array.isArray(refs) ? refs : [refs];
      const isOutside = refArray.every(
        (ref) => ref.current && !ref.current.contains(event.target)
      );
      if (isOutside) {
        callback(event);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isActive, callback, ...((Array.isArray(refs) ? refs : [refs]))]);
};

export default useOutsideClick;