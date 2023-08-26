import { createContext, useState, useContext, useEffect } from "react";
import { BooksContext } from "./contextBooksProvider";
import { ERROR_MESSAGES } from "../constants/errorMessages";
import { ReadListContext } from "./contextUserListProvider";

export const FiltersContext = createContext();

export default function FiltersProvider({ children }) {
  const { books, error, setError } = useContext(BooksContext);
  const { savedBooks } = useContext(ReadListContext); 

  const [filters, setFilters] = useState({
    sortByTitle: "",
    sortByPages: false,
    genre: "",
    genres: [],
    maxPosiblePages: 0,
    pages: {
      minPages: 10,
      maxPages: 0,
    },
  });

  useEffect(() => {
    if (!books || !books.length) return;

    const getUniqueGenres = () => {
      const allGenres = Array.from(new Set(books?.map((book) => book.genre)));

      return allGenres;
    };

    const getBookWithMorePages = () => {
      const bookWithMorePages = books?.reduce((prevBook, currentBook) => {
        return prevBook.pages > currentBook.pages ? prevBook : currentBook;
      });

      return bookWithMorePages.pages;
    };

    setFilters((prevFilters) => ({
      ...prevFilters,
      genres: getUniqueGenres(),
      maxPosiblePages: getBookWithMorePages(),
      pages: {
        minPages: 10,
        maxPages: getBookWithMorePages(),
      },
    }));
  }, [books]);

  const { sortByTitle, genre, pages, sortByPages } = filters;

  const filter = books?.filter((book) => {
    if (
      (!genre || book.genre === genre) &&
      book.title?.toLowerCase().includes(sortByTitle) &&
      book.pages <= pages.maxPages &&
      !savedBooks.includes(book)
    )
      return true;

    return false;
  });

  const filteredBooks = filter;

  useEffect(() => {
    if (error === ERROR_MESSAGES.FETCH_ERROR) return;

    if ((sortByTitle || genre || sortByPages) && !filteredBooks.length) {
      setError(ERROR_MESSAGES.NOT_FOUND);
    } else {
      setError(null);
    }
  }, [filteredBooks, error]);

  return (
    <FiltersContext.Provider value={{ filters, setFilters, filteredBooks }}>
      {children}
    </FiltersContext.Provider>
  );
}
