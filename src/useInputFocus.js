import { useRef, useEffect } from "react";

export function useInputFocus(setter) {
  const inputElement = useRef(null);

  useEffect(() => {
    inputElement.current.focus();
    const handleEnterKey = function (e) {
      if (e.code === "Enter") {
        setter([]);
        inputElement.current.focus();
      }
    };
    document.addEventListener("keydown", handleEnterKey);
  }, [setter, inputElement]);

  return inputElement;
}
