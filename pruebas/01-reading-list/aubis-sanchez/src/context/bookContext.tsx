import {
  Dispatch,
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";
import { Book } from "../models";
import { getBooksBySelectedGenres, getDefaultBooks } from "../utils";
import { toast } from "sonner";
import { useToast } from "../hooks/useToast";

export interface BookContextType {
  userLectureList: Book[];
  addToLectureList: (book: Book) => void;
  selectedGenres: string[];
  setSelectedGenres: Dispatch<React.SetStateAction<string[]>>;
  books: Book[];
  removeFromLectureList: (bookToRemoveISBN: string) => void;
}

export const BookContext = createContext<BookContextType | null>(null);

const BookProvider = ({ children }: PropsWithChildren) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [userLectureList, setUserLectureList] = useState<Book[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const { throwSuccessToast, throwErrorToast } = useToast();

  useEffect(() => {
    if (selectedGenres.length === 0) return setBooks(getDefaultBooks());
    else {
      setBooks(getBooksBySelectedGenres(selectedGenres));
    }
  }, [selectedGenres]);

  const addToLectureList = (newBook: Book) => {
    const bookExist = userLectureList.find(
      (book) => book.ISBN === newBook.ISBN
    );
    if (!bookExist) {
      setUserLectureList((prevState) => [...prevState, newBook]);
      throwSuccessToast("Book added successfully");
    } else {
      throwErrorToast("This book already exist in your lecture books");
    }
  };

  const removeFromLectureList = (bookToRemoveISBN: string) => {
    setUserLectureList((prevState) =>
      prevState.filter((book) => book.ISBN === bookToRemoveISBN)
    );
  };

  return (
    <BookContext.Provider
      value={{
        userLectureList,
        addToLectureList,
        selectedGenres,
        setSelectedGenres,
        books,
        removeFromLectureList,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;
