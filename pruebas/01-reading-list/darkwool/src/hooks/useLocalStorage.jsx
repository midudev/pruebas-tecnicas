import { useState, useEffect } from "react";

export function useLocalStorage(key, defaultValue) {
  const [data, setData] = useState(() => {
    const retrievedData = localStorage.getItem(key);
    return retrievedData ? JSON.parse(retrievedData) : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));

    // Sync changes between tabs
    const setUpdatedData = (e) => {
      if (e.storageArea === localStorage && e.key === key)
        setData(JSON.parse(e.newValue));
    };
    window.addEventListener("storage", setUpdatedData);

    return () => {
      window.removeEventListener("storage", setUpdatedData);
    };
  }, [key, data]);

  return [data, setData];
}
