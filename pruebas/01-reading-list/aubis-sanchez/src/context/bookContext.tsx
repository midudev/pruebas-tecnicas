import { PropsWithChildren, createContext, useState } from "react";
import { Book } from "../models";

export interface BookContextType {
  userLectureList: Book[];
  addToLectureList: (book: Book) => void;
}

export const BookContext = createContext<BookContextType | null>(null);

const BookProvider = ({ children }: PropsWithChildren) => {
  const [userLectureList, setUserLectureList] = useState<Book[]>([]);

  const addToLectureList = (book: Book) => {
    setUserLectureList((prevState) => [...prevState, book]);
  };

  return (
    <BookContext.Provider
      value={{
        userLectureList,
        addToLectureList,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;
