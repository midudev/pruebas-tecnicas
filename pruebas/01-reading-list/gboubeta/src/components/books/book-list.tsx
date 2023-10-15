import { component$ } from "@builder.io/qwik";

import { BookCard } from "./book-card";
import { useLibraryBooks } from "~/hooks/library-books";

export const BookList = component$(() => {
  const { bookListState, toggleBetwenLists$ } = useLibraryBooks();

  const filteredLibrary = bookListState.library.filter(({ book }) => {
    return !bookListState.readingList.some(({ book: listBook }) => {
      return listBook.ISBN === book.ISBN;
    });
  });

  return (
    <ul class="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-8 w-full p-4">
      {filteredLibrary.map(({ book }) => {
        return (
          <li key={book.ISBN}>
            <BookCard longPressAction$={toggleBetwenLists$} book={book} />
          </li>
        );
      })}
    </ul>
  );
});
