import { useEffect } from "react";
export function useKey(keyCode, setterFunction) {
  useEffect(() => {
    const handleEscapeKey = function (e) {
      if (e.code === keyCode) setterFunction(null);
    };
    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, []);
}
