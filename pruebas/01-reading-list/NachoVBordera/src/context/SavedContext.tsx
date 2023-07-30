import React, { ReactNode } from "react";

export interface BookData {
  title: string;
  ISBN: string;
}

interface BookProviderProps {
  children: ReactNode;
}

interface BookContextData {
  books: BookData[];
  addBook: (book: BookData) => void;
  removeBook: (isbn: string) => void;
}

const BookSavedContext = React.createContext<BookContextData | undefined>(
  undefined
);
const items = JSON.parse(localStorage.getItem("savedBooks") as string) ?? [];

const BookSavedProvider: React.FC<BookProviderProps> = ({ children }) => {
  const [books, setBooks] = React.useState<BookData[]>(items);

  const addBook = (book: BookData) => {
    if (!books.some((existingBook) => existingBook.ISBN === book.ISBN)) {
      setBooks((prevBooks) => [...prevBooks, book]);
      localStorage.setItem("savedBooks", JSON.stringify([...books, book]));
    }
  };

  const removeBook = (ISBN: string) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.ISBN !== ISBN));
    localStorage.length === 1
      ? localStorage.setItem("savedBooks", JSON.stringify([]))
      : localStorage.setItem("savedBooks", JSON.stringify(books));
  };

  return (
    <BookSavedContext.Provider
      value={{
        books,
        addBook,
        removeBook,
      }}
    >
      {children}
    </BookSavedContext.Provider>
  );
};

// Hook personalizado para acceder al contexto de libros
const useBookContext = () => {
  const context = React.useContext(BookSavedContext);
  if (!context) {
    throw new Error("useBookContext must be used within a BookProvider");
  }
  return context;
};

export { BookSavedProvider, useBookContext };
