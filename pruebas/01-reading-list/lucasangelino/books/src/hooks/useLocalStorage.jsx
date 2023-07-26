import { useState } from "react";

function useLocalStorage({ key, initialValue }) {
  const [value, setValue] = useState();

  const setLocalStorage = (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  const getLocalStorage = (key) => {
    window.localStorage.getItem(key);
    return JSON.parse(value);
  };

  return {
    setLocalStorage,
    getLocalStorage,
  };
}

export { useLocalStorage };
