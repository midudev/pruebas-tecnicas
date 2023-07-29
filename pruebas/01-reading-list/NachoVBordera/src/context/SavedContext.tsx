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

const BookSavedProvider: React.FC<BookProviderProps> = ({ children }) => {
  const [books, setBooks] = React.useState<BookData[]>([]);

  const addBook = (book: BookData) => {
    if (!books.some((existingBook) => existingBook.ISBN === book.ISBN)) {
      setBooks((prevBooks) => [...prevBooks, book]);
    }
  };

  const removeBook = (ISBN: string) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.ISBN !== ISBN));
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
