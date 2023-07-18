import { createContext } from "react";
import { useState, useEffect } from "react";
import { library } from "../assets/books.json";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {

  const [books, setBooks] = useState([]);
  useEffect(() => {
    setBooks(library);
    console.log(library);
  });

  return (
    <FilterContext.Provider value={{ books }}>
      {children}
    </FilterContext.Provider>
  );
};