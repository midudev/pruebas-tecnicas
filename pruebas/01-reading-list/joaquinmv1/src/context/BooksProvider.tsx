import { createContext, useState } from "react";
import books from '../data/books.json';
import { Book } from "../models/types";

interface ContextValueProps {
  availableBooks: Book[];
  readingList: Book[];
  setAvailableBooks: React.Dispatch<React.SetStateAction<Array<Book>>>;
  setReadingList: React.Dispatch<React.SetStateAction<Array<Book>>>;
}

interface ProviderBooks {
  children: React.ReactNode;
}

export const BooksContext = createContext<ContextValueProps | null>(null);

export const BooksProvider = ({ children }: ProviderBooks) => {
  const [availableBooks, setAvailableBooks] = useState<Array<Book>>(() => {
    try {
      const available = window.localStorage.getItem('available') ?? JSON.stringify(books.library);
      const hasLocalStorage = JSON.parse(available) as Array<Book>;
      return hasLocalStorage;
    } catch (error) {
      return [];
    }
  });

  const [readingList, setReadingList] = useState<Array<Book>>(() => {
    try {
      const reading = window.localStorage.getItem('reading') ?? JSON.stringify([]);
      const hasLocalStorage = JSON.parse(reading) as Array<Book>;
      return hasLocalStorage;
    } catch (error) {
      return [];
    }
  });

  return (
    <BooksContext.Provider value={{
      availableBooks,
      readingList,
      setAvailableBooks,
      setReadingList,
    }}
    >
      {children}
    </BooksContext.Provider>
  )
}

