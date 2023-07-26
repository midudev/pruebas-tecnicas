import { createContext, useState, useEffect } from "react";
import { getData } from "../Helpers/getData";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState(null);
  const [maxPages, setMaxPages] = useState(null);
  const [genreList, setGenreList] = useState([]);
  const [filteredByGenre, setFilteredByGenre] = useState(null);
  const [readingList, setReadingList] = useState([]);
  const [pagesValue, setPagesValue] = useState("");
  const [filteredByPages, setFilteredByPages] = useState(null);
  const [filterType, setFilterType] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("BOOKS_LOCAL_STORAGE")) {
      try {
        setBooks(JSON.parse(localStorage.getItem("BOOKS_LOCAL_STORAGE")));
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        setLoading(true);
        getData("books.json").then((books) => {
          setBooks(books.library);
          localStorage.setItem(
            "BOOKS_LOCAL_STORAGE",
            JSON.stringify(books.library)
          );
        });
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    if (localStorage.getItem("READINGLIST_LOCAL_STORAGE")) {
      setReadingList(
        JSON.parse(localStorage.getItem("READINGLIST_LOCAL_STORAGE"))
      );
    }
  }, []);

  useEffect(() => {
    if (books) {
      let set = new Set();
      let maxPages = 0;
      books.map((book) => {
        set.add(book.book.genre);
        maxPages = Math.max(maxPages, book.book.pages);
        return book;
      });
      setGenreList([...set]);
      setMaxPages(maxPages);
      setPagesValue(maxPages);
    }
  }, [books]);

  useEffect(() => {
    if (books) {
      const filteredBooks = books.filter((book) => {
        if (filterType === "filterbygenre") {
          return genreList.includes(book.book.genre);
        }
        if (filterType === "filterbypages") {
          return book.book.pages <= pagesValue;
        }
      });

      if (filterType === "filterbygenre") {
        setFilteredByGenre(filteredBooks);
      }
      if (filterType === "filterbypages") {
        setFilteredByPages(filteredBooks);
      }
    }
  }, [filterType, books, pagesValue]);

  useEffect(() => {
    try {
      if (books) {
        localStorage.setItem("BOOKS_LOCAL_STORAGE", JSON.stringify(books));
      }
      if (readingList.length === 0) {
        localStorage.removeItem("READINGLIST_LOCAL_STORAGE");
      } else {
        localStorage.setItem(
          "READINGLIST_LOCAL_STORAGE",
          JSON.stringify(readingList)
        );
      }
    } catch (error) {
      console.error(error);
    }
  }, [books, readingList]);

  const handleReadingList = (id) => {
    if (books) {
      const newBook = books.find((book) => book.book.ISBN === id);
      const newBooksList = books.filter((book) => book.book.ISBN !== id);
      setReadingList([...readingList, newBook]);
      setBooks(newBooksList);
      localStorage.setItem("BOOKS_LOCAL_STORAGE", JSON.stringify(newBooksList));
    }
  };

  const handleRemoveFromReadingList = (id) => {
    if (readingList && books) {
      const bookToRemove = readingList.find((book) => book.book.ISBN === id);
      if (bookToRemove) {
        setReadingList(
          readingList.filter(
            (book) => book.book.ISBN !== bookToRemove.book.ISBN
          )
        );
        setBooks([...books, bookToRemove]);
        localStorage.setItem("BOOKS_LOCAL_STORAGE", JSON.stringify(books));
      }
    }
  };

  const data = {
    books,
    readingList,
    maxPages,
    genreList,
    filteredByGenre,
    setFilteredByGenre,
    pagesValue,
    setPagesValue,
    filteredByPages,
    setFilteredByPages,
    filterType,
    setFilterType,
    loading,
    handleReadingList,
    handleRemoveFromReadingList,
  };

  return <BooksContext.Provider value={data}>{children}</BooksContext.Provider>;
};
