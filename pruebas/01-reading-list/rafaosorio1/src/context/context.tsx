import { createContext, useMemo, useState } from "react";
import { Book, LibraryItem } from "../types";
import { db } from "../Data";

interface ContextType {
  addBookRead: (book: Book) => void;
  filteredsBooks: LibraryItem[];
  filteredBooksForGenre: LibraryItem[];
  valueSlider: number;
  valueSelect: string;
  genres: string[];
  handleFilteredSeletec: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleFilteredSlider: (event: Event, value: number | number[]) => void;
}

export const AppContext = createContext<ContextType>({} as ContextType);
export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [valueSlider, setValueSlider] = useState(0);
  const [valueSelect, setValueSelect] = useState("");

  const data = db.library;
  //SLIDER
  //@ts-ignore
  const handleChangeSlider = (event: Event, value: number | number[]) => {
    setValueSlider(value as number);
  };

  //SELECT
  //@ts-ignorets-ignore
  const handleFilteredSeletec = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValueSelect(event.target.value);
  };

  const filteredBooks = useMemo(
    () => data.filter((book) => book.book.pages >= valueSlider),
    [valueSlider, data]
  );

  const filteredBooksForGenre = useMemo(
    () => data.filter((book) => book.book.genre >= valueSelect),
    [valueSelect, data]
  );

  const getGenre = db.library.map((item) => item.book.genre);

  const genres = [...new Set(getGenre)];

  //FUNCIONES

  const addBookRead = (book: Book) => {
    if (localStorage.getItem("booksToRead")) {
      const booksToRead = JSON.parse(localStorage.getItem("booksToRead") || "");
      booksToRead.push(book);
      localStorage.setItem("booksToRead", JSON.stringify(booksToRead));
    } else {
      const booksToRead = [];
      booksToRead.push(book);
      localStorage.setItem("booksToRead", JSON.stringify(booksToRead));
    }
  };

  const valueProps: ContextType = {
    addBookRead,
    filteredsBooks: filteredBooks,
    valueSlider,
    valueSelect,
    genres,
    handleFilteredSeletec,
    handleFilteredSlider: handleChangeSlider,
    filteredBooksForGenre,
  };

  return (
    <AppContext.Provider value={valueProps}>{children}</AppContext.Provider>
  );
};
