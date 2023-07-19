import { useComputed$, useContext, useStore } from "@builder.io/qwik";
import { BooksContext } from "~/components/books/books-provider";
import { filterBooks } from "~/services/booksService";
import type { BooksFilter } from "~/types/books";
import useBooksInMyList from "./useBooksInMyList";


export default function useBooks(initialFilters: BooksFilter) {
  const { genres } = useContext(BooksContext);
  const booksInMyList = useBooksInMyList();
  const filters = useStore<BooksFilter>({
    genre: "none",
    minPages: 0,
    ...initialFilters,
  });
  const filteredBooks = useComputed$(() =>
    filterBooks(filters, booksInMyList.value)
  );

  return {
    books: filteredBooks,
    filters,
    genres,
  };
}
