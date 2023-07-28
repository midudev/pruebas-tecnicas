import React, { ReactNode } from "react";
import { Book } from "../types";
import getAllbooksUseCase from "../usecases/getAllBooks.usecase";

export type BookContext = {
  setFilter: () => any;
  filter: string;
  filteredBooks: Book[];
};

export const BookContext = React.createContext<any | null>(
  getAllbooksUseCase()
);

// ... (El resto del código es el mismo)

export const BookProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [filter, setFilter] = React.useState("");
  const [genere, setGenere] = React.useState("");
  const [pages, setPages] = React.useState("");
  const [filteredBooks, setFilteredBooks] = React.useState<Book[]>([]);

  const filterBooks = () => {
    const books = getAllbooksUseCase();
    let filtered = [...books];

    if (filter) {
      filtered = filtered.filter((book) =>
        book.book.title.toLowerCase().includes(filter.toLowerCase())
      );
    }

    if (genere) {
      filtered = filtered.filter((book) => book.book.genre === genere);
    }

    if (pages) {
      filtered = filtered.filter((book) => book.book.pages >= +pages);
    }

    setFilteredBooks(filtered);
  };

  React.useEffect(() => {
    filterBooks();
  }, [filter, genere, pages]);

  return (
    <BookContext.Provider
      value={{
        setFilter,
        filteredBooks,
        filter,
        setGenere,
        genere,
        setPages,
        pages,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
