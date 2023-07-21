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
  const { genreFilter, searchQuery } = useFilterContext();
  const [inReadingList, setInReadingList] = useState(getInReadingList());
  const [inReadingListCount, setInReadingListCount] = useState(0);
  const [availableListCount, setavailableListCount] = useState(0);
  const [availableList, setAvailableList] = useState([]);
  const [readingList, setReadingList] = useState([]);

  useEffect(() => {
    setInReadingListCount(inReadingList.length);
    setReadingList(getReadingList({ genreFilter, searchQuery }));
    setAvailableList(getAvailableList({ genreFilter, searchQuery }));
    setavailableListCount(availableList.length);
  }, [inReadingList, genreFilter, searchQuery]);

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

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [genreFilter, setGenreFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <FilterContext.Provider
      value={{ genreFilter, setGenreFilter, searchQuery, setSearchQuery }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => useContext(FilterContext);
