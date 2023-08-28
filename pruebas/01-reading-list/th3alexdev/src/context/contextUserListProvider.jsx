import { createContext, useState, useEffect } from "react";

export const ReadListContext = createContext();

export default function ReadListProvider({ children }) {
  const savedBooksInLocalStorage =
    JSON.parse(localStorage.getItem("savedBooks")) || [];

  const [savedBooks, setSavedBooks] = useState(
    Array.from(new Set(savedBooksInLocalStorage))
  );

  const addBook = (book) => {
    setSavedBooks((prevSavedBooks) =>
      Array.from(new Set(prevSavedBooks).add(book))
    );
  };

  const removeBook = (ISBN) => {
    setSavedBooks((prevSavedBooks) =>
      prevSavedBooks.filter((book) => book.ISBN !== ISBN)
    );
  };

  useEffect(() => {
    localStorage.setItem("savedBooks", JSON.stringify(savedBooks));
  }, [savedBooks]);

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === "savedBooks" && e.newValue !== null) {
        setSavedBooks(JSON.parse(e.newValue));
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  
  return (
    <ReadListContext.Provider
      value={{
        savedBooks,
        addBook,
        removeBook,
      }}
    >
      {children}
    </ReadListContext.Provider>
  );
}


