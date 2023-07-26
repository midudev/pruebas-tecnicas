import {
  Slot,
  component$,
  useContextProvider,
  useStore,
  useVisibleTask$,
} from "@builder.io/qwik";

import {
  LibraryBooksContext,
  type LibraryBooksState,
} from "./library-books.context";

const bookListInitialState: LibraryBooksState = {
  currentPage: 1,
  isLoading: false,
  library: [],
  readingList: [],
};

export const LibraryBooksProvider = component$(() => {
  const bookListState = useStore<LibraryBooksState>(bookListInitialState);

  useContextProvider(LibraryBooksContext, bookListState);

  useVisibleTask$(async () => {
    const localStorageInfo = await localStorage.getItem("library-books-state");

    if (localStorageInfo) {
      // console.log({ localStorageInfo })
      const {
        currentPage = 1,
        isLoading = false,
        library = [],
        readingList = [],
      } = JSON.parse(localStorageInfo) as LibraryBooksState;

      bookListState.currentPage = currentPage;
      bookListState.isLoading = isLoading;
      bookListState.library = library;
      bookListState.readingList = readingList;
    }
  });

  useVisibleTask$(({ track }) => {
    track(() => [bookListState.isLoading]);

    localStorage.setItem("library-books-state", JSON.stringify(bookListState));
  });

  return <Slot />;
});
