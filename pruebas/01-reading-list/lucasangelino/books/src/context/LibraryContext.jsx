import { createContext, useState } from "react";
import getBooks from "../services/getBooks";

export const LibraryContext = createContext();
LibraryContext.displayName = "LibraryContext";

function LibraryProvider({ children }) {
  const [availableBooks, setAvailableBooks] = useState(() => getBooks());
  const [readingList, setReadingList] = useState([]);

  const addToReadingList = (book) => {
    setReadingList([...readingList, book]);
    setAvailableBooks(
      availableBooks.filter((item) => item.book.title !== book.title)
    );
    localStorage.setItem("readingList", JSON.stringify([...readingList, book]));
  };

  const removeFromReadingList = (book) => {
    setReadingList(readingList.filter((item) => item.title !== book));
    setAvailableBooks([
      ...availableBooks,
      { book: readingList.find((item) => item.title === book) },
    ]);
    localStorage.setItem(
      "readingList",
      JSON.stringify(readingList.filter((item) => item.title !== book))
    );
  };

  return (
    <LibraryContext.Provider
      value={{
        availableBooks,
        readingList,
        addToReadingList,
        removeFromReadingList,
      }}
    >
      {children}
    </LibraryContext.Provider>
  );
}

export default LibraryProvider;
