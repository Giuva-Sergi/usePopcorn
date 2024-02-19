import { useState, useEffect } from "react";

export function useLocalStorageState(key) {
  const [values, setValues] = useState(() => {
    const storedValues = JSON.parse(localStorage.getItem(key));
    return storedValues || [];
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(values));
  }, [values, key]);
  return [values, setValues];
}
