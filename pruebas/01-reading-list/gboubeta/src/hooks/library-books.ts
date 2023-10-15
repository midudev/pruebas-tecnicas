import { $, useContext } from "@builder.io/qwik";
import { LibraryBooksContext } from "~/contexts/library-books.context";
import type { Book, Library } from "~/lib/types";

export const useLibraryBooks = () => {
  const bookListState = useContext(LibraryBooksContext, null);

  if (!bookListState) {
    throw Error("Use hook in an apropriate context");
  }

  const toggleBetwenLists$ = $((book: Book) => {
    /*
     * Si está en la lista lo quita y si no está lo pone
     */
    const indice = bookListState.readingList.findIndex(
      ({ book: b }) => b.ISBN === book.ISBN,
    );
    let newReadingList: Library;

    bookListState.isLoading = true;
    if (indice !== -1) {
      // El elemento ya está en el array, creamos un nuevo array sin él
      newReadingList = bookListState.readingList.filter(
        ({ book: b }) => b.ISBN !== book.ISBN,
      );
    } else {
      // El elemento no está en el array, creamos un nuevo array con él
      newReadingList = [...bookListState.readingList, { book: book }];
    }
    bookListState.readingList = newReadingList;
    bookListState.isLoading = false;
  });

  return {
    bookListState,
    toggleBetwenLists$,
  };
};
