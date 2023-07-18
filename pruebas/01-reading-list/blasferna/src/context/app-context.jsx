"use client";

import React, { createContext, useState, useEffect, useContext } from "react";
import { getInReadingList, READING_LIST_STORAGE_KEY } from "@/lib/books";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [inReadingList, setInReadingList] = useState(getInReadingList());
  const [inReadingListCount, setInReadingListCount] = useState(0);

  useEffect(() => {

    localStorage.setItem(READING_LIST_STORAGE_KEY, JSON.stringify(inReadingList));
    setInReadingListCount(inReadingList.length)
  }, [inReadingList]);

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
    <AppContext.Provider value={{ inReadingList, setInReadingList, inReadingListCount }}>
      {children}
    </AppContext.Provider>
  );
};


export const useAppContext = () => useContext(AppContext)
