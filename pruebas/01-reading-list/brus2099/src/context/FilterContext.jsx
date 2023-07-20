import { createContext } from "react";
import { useState, useEffect } from "react";
import { library } from "../assets/books.json";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {

  const [books, setBooks] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');

  useEffect(() => {
    setBooks(library);
  }, []);

  const genres = [];
  genres.push('Todos');
  books.forEach(({ book }) => {
    if (!genres.includes(book.genre)) {
      genres.push(book.genre);
    }
  });

  useEffect(() => {
    console.log(selectedGenre);
  }, [selectedGenre]);

  return (
    <FilterContext.Provider value={{ books, genres, selectedGenre, setSelectedGenre }}>
      {children}
    </FilterContext.Provider>
  );
};