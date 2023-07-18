"use client";

import { createContext, useState, useEffect, useContext } from "react";
import {
  getInReadingList,
  READING_LIST_STORAGE_KEY,
  getReadingList,
  getAvailableList,
} from "@/lib/books";

export const AppContext = createContext();

export const AppProvider = ({ children, database }) => {
  const [inReadingList, setInReadingList] = useState(getInReadingList());
  const [inReadingListCount, setInReadingListCount] = useState(0);
  const [availableListCount, setavailableListCount] = useState(0);
  const [availableList, setAvailableList] = useState([]);
  const [readingList, setReadingList] = useState([]);

  useEffect(() => {
    localStorage.setItem(
      READING_LIST_STORAGE_KEY,
      JSON.stringify(inReadingList)
    );
    setInReadingListCount(inReadingList.length);
    setReadingList(getReadingList(database));
    setAvailableList(getAvailableList(database));
    setavailableListCount(availableList.length);
  }, [inReadingList]);

  useEffect(() => {
    setavailableListCount(database.library.length-inReadingList.length);
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
