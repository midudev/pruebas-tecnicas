import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./useStore";
import { Genre, Library } from "@/interfaces/interfaces";
import { useDebouncer } from "./useDebouncer";
import { addBook } from "@/store/MyListBooks/slice";

export const useFilteredBooks = () => {
  const { data, loanding, error } = useAppSelector((state) => state.books);

  const { maxPages, genre } = useAppSelector((state) => state.booksFilter);
  const { finalBooksList, handlePreviousList } = useDebouncer();

  const dispatch = useAppDispatch();
  const addBookToFavs = (book: Library) => {
    dispatch(addBook(book));
  };

  useEffect(() => {
    const newList = () => {
      if (maxPages === null && genre === Genre.ALL) return data;
      if (maxPages === null)
        return data.filter((books) => books.book.genre === genre);
      if (genre === Genre.ALL)
        return data.filter((books) => books.book.pages <= maxPages);
      return data.filter(
        (books) => books.book.genre === genre && books.book.pages <= maxPages
      );
    };
    handlePreviousList(newList());
  }, [data, maxPages, genre]);

  return { data, loanding, error, finalBooksList, addBookToFavs };
};
