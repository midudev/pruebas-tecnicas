import { createContext } from "react";
import { useState, useEffect } from "react";
import { library } from "../assets/books.json";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {

  const [books, setBooks] = useState([]);
  const  [genres, setGenres] = useState();
  useEffect(() => {
    setBooks(library);
    let genres = [];
    books.forEach( ({ book }) => {
      genres.push(book.genre);
    });
  });

  console.log(genres)


  return (
    <FilterContext.Provider value={{ books }}>
      {children}
    </FilterContext.Provider>
  );
};