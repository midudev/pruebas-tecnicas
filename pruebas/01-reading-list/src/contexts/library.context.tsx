import React, { createContext, useContext, useEffect, useState } from "react";
import { IBook } from "./../types/books";
import jsonData from "../../books.json";

export const LibraryContext = createContext<ILibraryState | null>(null);

export const useLibrary = () => {
  const context = useContext(LibraryContext);

  if (!context) throw new Error("useLibrary debe usarse con un provider");
  return context;
};

interface Props {
  children: React.ReactNode;
}

interface ILibraryState {
  books: IBook[];
  setBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
  myList: IBook[];
  setMyList: React.Dispatch<React.SetStateAction<IBook[]>>;
  filteredBooks: IBook[];
  setFilteredBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
}

interface ILibraryStorage {
  books: IBook[];
  myList: IBook[];
  filteredBooks: IBook[];
}

export const LibraryProvider: React.FC<Props> = ({ children }) => {
  const [books, setBooks] = useState<IBook[]>(() => {
    const libraryStorage = localStorage.getItem("libraryData");
    if (libraryStorage) {
      const parsedLibraryStorage = JSON.parse(libraryStorage);
      return parsedLibraryStorage.books;
    } else {
      return jsonData.library;
    }
  });

  const [myList, setMyList] = useState<IBook[]>(() => {
    const libraryStorage = localStorage.getItem("libraryData");
    if (libraryStorage) {
      const parsedLibraryStorage = JSON.parse(libraryStorage);
      return parsedLibraryStorage.myList;
    } else {
      return [];
    }
  });
  const [filteredBooks, setFilteredBooks] = useState<IBook[]>([]);

  // useEffect(() => {
  //   const libraryStorage = localStorage.getItem("libraryData");
  //   if (libraryStorage) {
  //     const parsedLibraryStorage = JSON.parse(libraryStorage);
  //     setBooks(parsedLibraryStorage.books);
  //     setMyList(parsedLibraryStorage.myList);
  //     setFilteredBooks(parsedLibraryStorage.filteredBooks);
  //   }
  // }, []);

  useEffect(() => {
    const libraryData: ILibraryStorage = { books, myList, filteredBooks };
    console.log("data to saved", libraryData);
    localStorage.setItem("libraryData", JSON.stringify(libraryData));
  }, [books, myList, filteredBooks]);

  useEffect(() => {
    const sortBooksByTitle = () => {
      const sortedBooks = [...books];
      sortedBooks.sort((a, b) => a.book.title.localeCompare(b.book.title));
      setFilteredBooks(sortedBooks);
    };
    sortBooksByTitle();
  }, [books]);

  return (
    <LibraryContext.Provider
      value={{
        books,
        setBooks,
        myList,
        setMyList,
        filteredBooks,
        setFilteredBooks,
      }}
    >
      {children}
    </LibraryContext.Provider>
  );
};
