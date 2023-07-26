import { createContext, useState, useCallback } from "react";
import getBooks from "../services/getBooks";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const LibraryContext = createContext();
LibraryContext.displayName = "LibraryContext";

function LibraryProvider({ children }) {
  const [availableBooks, setAvailableBooks] = useState(() => getBooks());
  const [readingList, setReadingList] = useState(() => {
    const jsonValue = window.localStorage.getItem("readingList");
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  });
  const { setLocalStorage } = useLocalStorage({ key: "readingList" });

  const addToReadingList = useCallback(
    (book) => {
      setReadingList([...readingList, book]);
      setAvailableBooks(
        availableBooks.filter((item) => item.book.title !== book.title)
      );
      setLocalStorage("readingList", [...readingList, book]);
    },
    [setLocalStorage]
  );

  const removeFromReadingList = useCallback(
    (book) => {
      setReadingList(readingList.filter((item) => item.title !== book.title));
      setLocalStorage(
        "readingList",
        readingList.filter((item) => item.title !== book.title)
      );
      setAvailableBooks([...availableBooks, { book }]);
    },
    [setLocalStorage]
  );

  return (
    <LibraryContext.Provider
      value={{
        availableBooks,
        readingList,
        addToReadingList,
        removeFromReadingList,
        setReadingList,
      }}
    >
      {children}
    </LibraryContext.Provider>
  );
}

export default LibraryProvider;
