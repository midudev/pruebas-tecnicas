import {
  $,
  component$,
  useOnWindow,
  useSignal,
  useStore,
  useTask$,
  useVisibleTask$,
} from "@builder.io/qwik";

import type { LibraryBooksState } from "~/contexts/library-books.context";

import { useLibraryBooks } from "~/hooks/library-books";

import { BookList } from "./book-list";

import { getBookGenres } from "~/services/get-book-genres";
import { getBookMaxPages } from "~/services/get-book-max-pages";
import { getLibraryBooks } from "~/services/get-library-books";

export const AvailableBooks = component$(() => {
  const { bookListState } = useLibraryBooks();

  const filteredLibrary = bookListState.library.filter(({ book }) => {
    return !bookListState.readingList.some(({ book: listBook }) => {
      return listBook.ISBN === book.ISBN;
    });
  });

  const genres = useSignal<string[]>([]);
  const maxPages = useSignal<number>();

  interface filterStore {
    count: number;
    filter: {
      genre?: string;
      pages?: number;
    };
  }

  const filterState = useStore<filterStore>({
    count: 0,
    filter: {},
  });

  useTask$(async () => {
    genres.value = await getBookGenres();
    maxPages.value = await getBookMaxPages();
  });

  useVisibleTask$(async () => {
    const localStorageInfo = await localStorage.getItem(
      "available-books-state",
    );

    if (localStorageInfo) {
      const {
        count = 0,
        filter = {
          genre: "",
        },
      } = JSON.parse(localStorageInfo) as filterStore;

      filterState.count = count;
      filterState.filter.genre = filter.genre;
      filterState.filter.pages = filter.pages;
    } else {
      // Default filters
      filterState.filter.genre = "All";
      filterState.filter.pages = maxPages.value;
    }
  });

  useVisibleTask$(async ({ track }) => {
    track(() => [filterState.filter.pages, filterState.filter.genre]);

    bookListState.isLoading = true;
    const { count, books: pageBooks } = await getLibraryBooks({
      offset: 0,
      filter: filterState.filter,
    });

    // console.log({ pageBooks });

    filterState.count = count;
    const newLibrary = [...pageBooks].map((book) => {
      return { book: book };
    });
    bookListState.library = newLibrary;
    bookListState.isLoading = false;

    // console.log(JSON.stringify({ bookListState }))
    // console.log(JSON.stringify({ library: bookListState.library }))
  });

  useVisibleTask$(({ track }) => {
    track(() => [
      filterState.count,
      filterState.filter.pages,
      filterState.filter.genre,
    ]);

    localStorage.setItem("available-books-state", JSON.stringify(filterState));
  });

  useOnWindow(
    "storage",
    $(async (event) => {
      const { key, newValue } = event as StorageEvent;
      if (newValue !== null) {
        if (key === "library-books-state") {
          const {
            currentPage = 1,
            isLoading = false,
            library = [],
            readingList = [],
          } = JSON.parse(newValue) as LibraryBooksState;

          bookListState.currentPage = currentPage;
          bookListState.isLoading = isLoading;
          bookListState.library = library;
          bookListState.readingList = readingList;
        }
        if (key === "available-books-state") {
          const {
            count = 0,
            filter = {
              genre: "All",
            },
          } = JSON.parse(newValue) as filterStore;

          filterState.count = count;
          filterState.filter.genre = filter.genre;
          filterState.filter.pages = filter.pages;
        }
      }
    }),
  );

  return (
    <div class="flex flex-col gap-2 justify-center w-full p-4">
      <section class="flex flex-row justify-between">
        <h2 class="text-2xl">Available books</h2>
        {filteredLibrary.length > 0 && (
          <div
            data-testid="books-available-list"
            class="rounded-2xl bg-slate-400 text-slate-800 text-xl px-4 flex justify-center items-center"
          >
            {filteredLibrary.length > 0 && filteredLibrary.length}
          </div>
        )}
      </section>

      <div class="flex flex-col gap-4">
        <div class="min-h-6 lg:h-6 flex flex-col sm:flex-row justify-between gap-4">
          <div class="flex flex-row gap-4 justify-center items-center">
            <label for="pages" class="text-sm font-medium text-slate-200">
              Filter by pages
            </label>
            {filterState.filter.pages !== undefined && (
              <input
                class="h-2 rounded-lg appearance-none cursor-pointer bg-slate-700"
                onChange$={(event, element) => {
                  filterState.filter.pages = Number(element.value);
                }}
                type="range"
                id="pages"
                name="pages"
                min="0"
                max={maxPages.value}
                value={filterState.filter.pages}
              />
            )}
            <span>{filterState.filter.pages}</span>
          </div>
          <div class="flex flex-row gap-4 justify-center items-center">
            {filterState.filter.genre !== undefined && (
              <>
                <label
                  for="underline_select"
                  class="text-sm font-medium text-slate-200"
                >
                  Filter by genre
                </label>
                <select
                  id="underline_select"
                  onChange$={(event, element) => {
                    filterState.filter.genre = element.value;
                  }}
                  class={[
                    "text-sm text-center text-slate-300 bg-transparent",
                    "border-0 border-b-2 appearance-none border-purple-700/40",
                    "focus:outline-none focus:ring-0 focus:border-purple-700 peer",
                  ]}
                >
                  <option
                    value="All"
                    selected={
                      !genres.value.some(
                        (genre) => filterState.filter.genre === genre,
                      )
                    }
                  >
                    All
                  </option>
                  {genres.value.map((genre) => (
                    <option
                      key={genre}
                      value={genre}
                      selected={filterState.filter.genre === genre}
                    >
                      {genre}
                    </option>
                  ))}
                </select>
              </>
            )}
          </div>
        </div>
        <BookList />
      </div>
    </div>
  );
});
