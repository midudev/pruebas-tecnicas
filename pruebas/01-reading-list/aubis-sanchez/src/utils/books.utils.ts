import bookData from "../../../books.json";
import { convertToAutocompleteData } from "../adapters/autocomplete.adapter";
import { Book } from "../models";
import { SortBy } from "../models/sorting.model";

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

export const getAmountOfBooksByGenre = (genre: string): number => {
  return bookData.library.filter((book) => book.book.genre === genre).length;
};

export const orderBooksByPagesNumber = (
  books: Book[],
  order: SortBy
): Book[] => {
  return order === SortBy.desc
    ? books.sort((a, z) => z.pages - a.pages)
    : order === SortBy.asc
    ? books.sort((a, z) => a.pages - z.pages)
    : books;
};

export const getAutocompleteBooksData = () => {
  return convertToAutocompleteData(getDefaultBooks());
};
