import { useBooksContext } from "../../../hooks/useBooksContext";
// import { useBooks } from "../../../hooks/useBooks";
import { BookList } from "../../../types.d";
import { useMemo } from "react";

export function useBookStatus() {
  const { books, selectedBooks, bookStatus, setBookStatus } = useBooksContext();

  const booksAvaliable = useMemo(() => {
    return books.filter(
      (book) =>
        !selectedBooks?.some(
          (selected) => selected.book.ISBN === book.book.ISBN
        )
    );
  }, [books, selectedBooks]);

  const updateBookStatus = (status: BookList) => {
    setBookStatus(status);
  };

  return { books: booksAvaliable, selectedBooks, bookStatus, updateBookStatus };
}
