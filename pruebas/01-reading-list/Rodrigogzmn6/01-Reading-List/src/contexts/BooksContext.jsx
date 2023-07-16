import React, { useEffect, useState } from "react";
import Books from "../assets/books.json";

const BooksContext = React.createContext([]);

const BooksContextProvider = ({ children }) => {
  const [books, setBooks] = useState(Books.library);
  const [readingList, setReadingList] = useState([]);
  const [genders, setGenders] = useState(["All"]);

  useEffect(() => {
    books.forEach((book) => {
      if (!genders.includes(book.book.genre)) {
        setGenders([...genders, book.book.genre]);
      }
    });
  });

  const moveToReadingList = (id) => {
    const bookToMove = books.find((book) => book.book.ISBN === id);

    if (bookToMove) {
      setBooks(books.filter((book) => book.book.ISBN !== id));
      setReadingList([...readingList, bookToMove]);
    }
  };

  const moveToLibrary = (id) => {
    const bookToMove = readingList.find((book) => book.book.ISBN === id);

    if (bookToMove) {
      setReadingList(readingList.filter((book) => book.book.ISBN !== id));
      setBooks([...books, bookToMove]);
    }
  };

  return (
    <BooksContext.Provider
      value={{
        genders,
        books,
        readingList,
        moveToReadingList,
        moveToLibrary,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export { BooksContext, BooksContextProvider };
