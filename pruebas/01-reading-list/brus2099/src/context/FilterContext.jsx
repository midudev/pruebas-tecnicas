import { createContext } from "react";
import { useState, useEffect } from "react";
import { library } from "../assets/books.json";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {

  const [books, setBooks] = useState([]);
  const [booklist, setBooklist] = useState([]);
  const [displayedBooks, setDisplayedBooks] = useState([]);
  const [lectureList, setLectureList] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');

  useEffect(() => {
    setBooks(library);
  }, []);

  useEffect(() => {
    setBooklist(books);
  }, [books]);

  const genres = [];
  genres.push('Todos');
  books.forEach(({ book }) => {
    if (!genres.includes(book.genre)) {
      genres.push(book.genre);
    }
  });

  return (
    <FilterContext.Provider value={{
      booklist, setBooklist,
      displayedBooks,
      setDisplayedBooks,
      lectureList,
      setLectureList,
      selectedGenre,
      setSelectedGenre,
      genres,
    }}>
      {children}
    </FilterContext.Provider>
  );
};