import { getFilteredBooks } from "$lib/services/books";
import { createEventDispatcher } from "svelte";

type BooksFilteredEvent = {
  filteredBooks: IBook[];
};

export const useBookFilteredEvent = () => {
  const dispatchBooksFiltered = createEventDispatcher<BooksFilteredEvent>();

  const sendBooksFiltered = (filters: IBooks.Filters) => {
    const books = getFilteredBooks(filters);
    dispatchBooksFiltered('filteredBooks', books);
  }

  return {
    sendBooksFiltered
  }
}