import React, { useEffect, useState } from "react";
import Books from "../assets/books.json";

const BooksContext = React.createContext([]);

const BooksContextProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [readingList, setReadingList] = useState([]);
  const [genders, setGenders] = useState(["All"]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    Books.library.forEach((book) => {
      if (!genders.includes(book.book.genre)) {
        setGenders([...genders, book.book.genre]);
      }
    });

    window.addEventListener("storage", () => {
      setLists();
    });

    return () => {
      window.removeEventListener("storage", () => {});
    };

    // checkLocalStorage();
  }, [books, readingList]);

  useEffect(() => {
    checkLocalStorage();
  }, []);

  const setLists = () => {
    setBooks(JSON.parse(localStorage.getItem("library")));
    setReadingList(JSON.parse(localStorage.getItem("readingList")));
  };

  const checkLocalStorage = () => {
    if (
      !localStorage.getItem("library") &&
      !localStorage.getItem("readingList")
    ) {
      localStorage.setItem("library", JSON.stringify(Books.library));
      localStorage.setItem("readingList", JSON.stringify([]));
    }

    setLists();
  };

  const moveToReadingList = (id) => {
    checkLocalStorage();
    const library = JSON.parse(localStorage.getItem("library"));
    const readingList = JSON.parse(localStorage.getItem("readingList"));
    const bookToMove = library.find((book) => book.book.ISBN === id);

    if (bookToMove) {
      const newLibrary = library.filter((book) => book.book.ISBN !== id);
      const newReadingList = [...readingList, bookToMove];

      localStorage.setItem("library", JSON.stringify(newLibrary));
      localStorage.setItem("readingList", JSON.stringify(newReadingList));
      setLists();
    }
  };

  const moveToLibrary = (id) => {
    checkLocalStorage();
    const library = JSON.parse(localStorage.getItem("library"));
    const readingList = JSON.parse(localStorage.getItem("readingList"));
    const bookToMove = readingList.find((book) => book.book.ISBN === id);

    if (bookToMove) {
      const newReadingList = readingList.filter(
        (book) => book.book.ISBN !== id
      );
      const newLibrary = [...library, bookToMove];

      localStorage.setItem("library", JSON.stringify(newLibrary));
      localStorage.setItem("readingList", JSON.stringify(newReadingList));
      setLists();
    }
  };

  const filterLibraryBooks = (filter) => {
    setFilter(filter);
  };

  return (
    <BooksContext.Provider
      value={{
        genders,
        books,
        readingList,
        moveToReadingList,
        moveToLibrary,
        filter,
        filterLibraryBooks,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export { BooksContext, BooksContextProvider };
