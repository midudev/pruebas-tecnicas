import library from "@/../../books.json";
import { adaptLibrary } from "@/adapters";
import { ALL_GENRES, BookStore, Filter, FilterType, Library } from "@/types";
import { isSubstring } from "@/helpers";

export const getAvailableBooks = (books: BookStore, filters: Filter[] | null) => {
  const allBooks = adaptLibrary(library as Library);
  const availableBooks = allBooks.filter((book) => !books || !books[book.ISBN]);

  if (filters === null) {
    return availableBooks;
  }

  const genreFilter = filters.find((filter) => filter[FilterType.GENRE])?.[FilterType.GENRE];
  const searchFilter = filters.find((filter) => filter[FilterType.SEARCH])?.[FilterType.SEARCH];

  return availableBooks
    .filter(({genre}) => genreFilter === undefined || genre === genreFilter)
    .filter(({title}) => !searchFilter || isSubstring(title, searchFilter));
};

export const getGenreList = () => {
  const allBooks = adaptLibrary(library as Library);
  const genres = allBooks.map((book) => book.genre);

  return [ALL_GENRES, ...new Set(genres)];
};
