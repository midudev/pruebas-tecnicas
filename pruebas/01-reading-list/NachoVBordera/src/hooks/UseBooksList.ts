import { Book } from "../types";
import getAllbooksUseCase from "../usecases/getAllBooks.usecase";
import React from "react";

export const UseBookList = () => {
  const [filter, setFilter] = React.useState("");
  const [filteredBooks, setFilteredBooks] = React.useState<Book[]>([]);

  React.useEffect(() => {
    const books = getAllbooksUseCase();
    const filtered = filter
      ? books.filter((book) => book.book.title.includes(filter))
      : books;
    setFilteredBooks(filtered);
  }, [filter]);

  return { filter, setFilter, filteredBooks };
};
