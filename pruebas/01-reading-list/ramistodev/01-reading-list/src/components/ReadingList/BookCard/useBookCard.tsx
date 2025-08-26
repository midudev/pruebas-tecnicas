import { useState } from "react";
import { useBooksContext } from "../../../hooks/useBooksContext";
import { useBooks } from "../../../hooks/useBooks";
import { type Library, BookList } from "../../../types.d";

export function useBookCard() {
  const { books } = useBooks();
  const { selectedBooks, setSelectedBooks, bookStatus } = useBooksContext();
  const [fadingOut, setFadingOut] = useState<string | null>(null);

  const handleClick = (book: Library) => {
    setFadingOut(book.book.ISBN);
    setTimeout(() => {
      if (bookStatus === BookList.AVAILABLE) {
        handleSelectBook([book]);
      } else {
        handleUnselectBook([book]);
      }
      setFadingOut(null);
    }, 300);
  };

  const handleSelectBook = (book: Library[]) => {
    setSelectedBooks([...(selectedBooks ?? []), ...book]);
  };

  const handleUnselectBook = (book: Library[]) => {
    setSelectedBooks(
      selectedBooks?.filter((selected) => !book.includes(selected)) || []
    );
  };

  return { books, bookStatus, fadingOut, handleClick };
}
