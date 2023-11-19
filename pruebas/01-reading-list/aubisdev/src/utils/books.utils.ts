import bookData from "../../../books.json";
import { convertToAutocompleteData } from "../adapters/autocomplete.adapter";
import { Book, Priority } from "../models";
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

export const getPriority = (amountOfBooks: number, bookPosition) => {
  if (amountOfBooks === 1) return Priority.High;
  if (amountOfBooks === 2 && bookPosition === 0) return Priority.High;
  if (amountOfBooks === 2 && bookPosition === 1) return Priority.Medium;
  const priority = Math.floor(amountOfBooks / 3);
  if (bookPosition < priority) {
    return Priority.High;
  } else if (bookPosition < priority * 2) {
    return Priority.Medium;
  } else {
    return Priority.Low;
  }
};

export const getPriorityColor = (priority: Priority): string => {
  return priority === Priority.High
    ? "green"
    : priority === Priority.Medium
    ? "orange"
    : "red";
};
