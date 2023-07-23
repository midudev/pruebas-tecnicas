import { AutocompleteBook, Book } from "../models";

export const convertToAutocompleteData = (
  books: Book[]
): AutocompleteBook[] => {
  return books.map((book) => {
    return {
      label: book.title,
      id: book.ISBN,
    };
  });
};
