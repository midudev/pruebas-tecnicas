import { useComputed$, useContext, useStore } from "@builder.io/qwik";
import { BooksContext } from "~/components/books/books-provider";
import { filterBooks } from "~/services/booksService";
import type { BooksFilter } from "~/types/books";
import useReadList from "./useReadList";

export default function useBooks(initialFilters: BooksFilter) {
  const { genres } = useContext(BooksContext);
  const readList = useReadList();
  const filters = useStore<BooksFilter>({
    genre: "none",
    minPages: 0,
    ...initialFilters,
  });
  const filteredBooks = useComputed$(() =>
    filterBooks(filters, readList.value)
  );

  return {
    books: filteredBooks,
    filters,
    genres,
  };
}
