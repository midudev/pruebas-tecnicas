import type { Signal } from "@builder.io/qwik";
import {
  Slot,
  component$,
  createContextId,
  useContextProvider,
} from "@builder.io/qwik";
import useLocalStorage from "~/hooks/useLocalStorage";
import type { BooksInMyList } from "~/types/books";

interface BooksInMyListContextType {
  booksInMyList: Signal<BooksInMyList>;
}

export const BooksInMyListContext = createContextId<BooksInMyListContextType>("books-list-context");

export const BooksInMyListProvider = component$(() => {
  const booksInMyList = useLocalStorage<BooksInMyList>('books-in-my-list', {});

  useContextProvider(BooksInMyListContext, {
    booksInMyList,
  });
  return (
    <>
      <Slot />
    </>
  );
});
