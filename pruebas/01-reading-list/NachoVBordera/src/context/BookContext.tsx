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

export const BookProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [filter, setFilter] = React.useState<string>("");
  const [genere, setGenere] = React.useState<string>("");
  const [pages, setPages] = React.useState<number>(0);
  const [filteredBooks, setFilteredBooks] = React.useState<Book[]>([]);

  const filterBooks = (books: Book[]) => {
    let filtered = [...books];

    filtered = filter
      ? filtered.filter((book) =>
          book.book.title.toLowerCase().includes(filter.toLowerCase())
        )
      : filtered;

    filtered = genere
      ? filtered.filter((book) => book.book.genre === genere)
      : filtered;

    filtered = pages
      ? filtered.filter((book) => book.book.pages >= pages)
      : filtered;

    setFilteredBooks(filtered);
  };

  React.useEffect(() => {
    const books = getAllbooksUseCase();
    filterBooks(books);
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
