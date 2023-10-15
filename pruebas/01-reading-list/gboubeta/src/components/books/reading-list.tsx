import { $, component$ } from "@builder.io/qwik";
import { useLibraryBooks } from "~/hooks/library-books";
import { BookCard } from "./book-card";
import { LongPressButton } from "../shared/long-press-button";

export const ReadingList = component$(() => {
  const { bookListState, toggleBetwenLists$ } = useLibraryBooks();

  if (bookListState.readingList.length < 1) {
    return <div class="w-full"></div>;
  }

  const clearReadingList$ = $(() => {
    bookListState.isLoading = true;
    bookListState.readingList = [];
    bookListState.isLoading = false;
  });

  return (
    <div class="flex flex-col gap-2 w-full p-4 bg-slate-500 lg:min-h-[90vh] rounded-xl">
      <section class="flex flex-row justify-between lg:max-xl:flex-col lg:max-xl:gap-2 lg:max-xl:-mb-5">
        <h2 class="text-2xl">Reading list</h2>
        <div class="flex flex-row gap-2 lg:max-xl:w-full lg:max-xl:justify-end">
          <div
            data-testid="books-reading-list"
            class="rounded-2xl bg-slate-800 text-slate-200 text-xl px-4 flex justify-center items-center"
          >
            {bookListState.readingList.length > 0 &&
              bookListState.readingList.length}
          </div>
          <LongPressButton action$={clearReadingList$}>
            Clear list
          </LongPressButton>
        </div>
      </section>

      <div class="flex flex-col gap-4">
        <div class="xl:h-6"></div>
        <ul class="grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-1 2xl:grid-cols-2 gap-8 w-full p-4">
          {bookListState.readingList.map(({ book }) => {
            return (
              <li key={book.ISBN}>
                <BookCard longPressAction$={toggleBetwenLists$} book={book} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
});
