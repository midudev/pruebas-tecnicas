import { useEffect, useMemo } from "react";
import { useBooksContext } from "./useBooksContext";
import { BookList } from "../types.d";

export function useBooks() {
  const { books, selectedGenre, maxPages, selectedBooks, bookStatus } =
    useBooksContext();

  const booksByStatus = useMemo(() => {
    return bookStatus === BookList.AVAILABLE ? books : selectedBooks || [];
  }, [books, selectedBooks, bookStatus]);

  const availableBooks = useMemo(() => {
    return bookStatus === BookList.AVAILABLE
      ? booksByStatus.filter(
          (book) =>
            !selectedBooks?.some(
              (selected) => selected.book.ISBN === book.book.ISBN
            )
        )
      : booksByStatus;
  }, [booksByStatus, selectedBooks, bookStatus]);

  const booksByGenre = useMemo(() => {
    return selectedGenre
      ? availableBooks.filter((book) => book.book.genre === selectedGenre)
      : availableBooks;
  }, [availableBooks, selectedGenre]);

  const booksByMaxPages = useMemo(() => {
    return booksByGenre.filter((book) => book.book.pages <= maxPages);
  }, [booksByGenre, maxPages]);

  useEffect(() => {
    localStorage.setItem(
      "readingList",
      selectedBooks ? JSON.stringify(selectedBooks) : "[]"
    );
  }, [selectedBooks]);

  return {
    books: booksByMaxPages,
  };
}
