import type { Signal } from "@builder.io/qwik";
import {
  Slot,
  component$,
  createContextId,
  useContextProvider,
  useSignal,
} from "@builder.io/qwik";
import { getBooks, getGenres } from "~/services/booksService";
import type { Book } from "~/types/books";

interface BookContextType {
  books: Readonly<Signal<Book[]>>;
  genres: string[];
}

export const BooksContext = createContextId<BookContextType>("books-context");

export const BooksProvider = component$(() => {
  const books = useSignal(getBooks());
  const genres = getGenres();

  useContextProvider(BooksContext, {
    books,
    genres,
  });
  return (
    <>
      <Slot />
    </>
  );
});
