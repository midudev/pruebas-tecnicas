"use client";
import { useState, useEffect } from "react";

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState();

  useEffect(() => {
    if (localStorage.getItem(key)) {
      setValue(JSON.parse(localStorage.getItem(key)));
    } else {
      setValue(JSON.parse(String(defaultValue)));
    }
  }, []);

  // I need to check if localstorage is equal to states. If not it updates the state. I need this for persistence between tabs.
  useEffect(() => {
    const equalStates = () => {
      const item =
        (localStorage.getItem(key) && localStorage.getItem(key) != "undefined")
          ? JSON.parse(localStorage.getItem(key))
          : JSON.parse(String(defaultValue));

      if (value != item) {
        setValue(item);
      }
    };

    window.addEventListener("storage", equalStates);
  }, []);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
    console.log(
      "Item setted line 40 done for key" + key + "and value " + value
    );
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorage;
