import { useState } from "react";
import { useBooksContext } from "../../../hooks/useBooksContext";

export function useBookOpt() {
  const [isOpen, setIsOpen] = useState(false);
  const { books, selectedGenre, setSelectedGenre, maxPages, setMaxPages } =
    useBooksContext();

  const genres = Array.from(new Set(books.map((book) => book.book.genre)));
  const [booksMinPages, booksMaxPages] = (() => {
    const pages = Array.from(
      new Set(books.map((book) => book.book.pages.toString()))
    );
    return [
      Math.min(...pages.map(Number)).toString(),
      Math.max(...pages.map(Number)).toString(),
    ];
  })();

  return {
    isOpen,
    setIsOpen,
    selectedGenre,
    setSelectedGenre,
    maxPages,
    setMaxPages,
    booksMinPages,
    booksMaxPages,
    genres,
  };
}
