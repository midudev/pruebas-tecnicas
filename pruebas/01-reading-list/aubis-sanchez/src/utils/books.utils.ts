import bookData from "../../../books.json";
import { Book } from "../models";

export const getBooksGenres = (): string[] => {
  return bookData.library.reduce((acc, curr) => {
    if (!acc.includes(String(curr.book.genre))) acc.push(curr.book.genre);
    return acc;
  }, [] as string[]);
};

export const getBooksBySelectedGenres = (genres: string[]): Book[] => {
  return bookData.library.reduce((acc, curr) => {
    if (genres.includes(curr.book.genre)) {
      acc.push(curr.book);
    }
    return acc;
  }, [] as Book[]);
};

export const getDefaultBooks = () => {
  return bookData.library.map((book) => {
    return book.book;
  }, [] as Book[]);
};
