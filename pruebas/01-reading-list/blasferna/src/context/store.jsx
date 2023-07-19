"use client";

import { createContext, useState, useEffect, useContext } from "react";
import {
  getInReadingList,
  getReadingList,
  getAvailableList,
  getAvailableListCount,
} from "@/lib/books";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [inReadingList, setInReadingList] = useState(getInReadingList());
  const [inReadingListCount, setInReadingListCount] = useState(0);
  const [availableListCount, setavailableListCount] = useState(0);
  const [availableList, setAvailableList] = useState([]);
  const [readingList, setReadingList] = useState([]);

  useEffect(() => {
    setInReadingListCount(inReadingList.length);
    setReadingList(getReadingList());
    setAvailableList(getAvailableList());
    setavailableListCount(availableList.length);
  }, [inReadingList]);

  useEffect(() => {
    setavailableListCount(getAvailableListCount());
  }, [availableList, inReadingList]);

  useEffect(() => {
    const handleStorageChange = () => {
      setInReadingList(getInReadingList());
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        inReadingList,
        setInReadingList,
        inReadingListCount,
        availableListCount,
        readingList,
        availableList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
