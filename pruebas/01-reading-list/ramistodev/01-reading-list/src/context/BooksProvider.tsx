import { useState, useEffect } from "react";
import booksJson from "../../books.json";
import { BooksContext } from "./BooksContext";
import { type Library, BookList } from "../types.d";

export const BooksProvider = ({ children }: { children: React.ReactNode }) => {
  const [books, setBooks] = useState<Library[]>(booksJson.library);
  const [selectedBooks, setSelectedBooks] = useState<Library[]>(
    JSON.parse(localStorage.getItem("readingList") || "[]")
  );
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [bookStatus, setBookStatus] = useState<BookList>(BookList.AVAILABLE);

  const initialMaxPages = Math.max(...books.map((book) => book.book.pages));

  const [maxPages, setMaxPages] = useState<number>(initialMaxPages);

  // Sincronización entre pestañas
  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key === "readingList") {
        setSelectedBooks(JSON.parse(event.newValue || "[]"));
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  return (
    <BooksContext.Provider
      value={{
        books,
        setBooks,
        selectedGenre,
        setSelectedGenre,
        maxPages,
        setMaxPages,
        selectedBooks,
        setSelectedBooks,
        bookStatus,
        setBookStatus,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};
