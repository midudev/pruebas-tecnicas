import { writable } from "svelte/store";
import { getAllBooks } from "../services/books";
import type { BooksAdater, Library } from "../types/books";
import { booksAdapter } from "../adapters/booksAdapter";

interface BookStore {
  books: BooksAdater[];
  favorites: string[];
  filteredBooks: BooksAdater[];
}

function createBooks() {
  const { subscribe, set, update } = writable({
    books: [],
    favorites: [],
    filteredBooks: [],
  });

  return {
    subscribe,
    set,
    update,
    getAllBooks: () => {
      const data = getAllBooks();
      const dataAdapter = booksAdapter(data);
      const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
      const filteredBooks = dataAdapter.filter(
        (book) => !favorites.includes(book.ISBN)
      );
      set({ books: dataAdapter, favorites, filteredBooks: filteredBooks });
    },
    toggleFavorite: (ISBN: string) => {
      update((state: BookStore) => {
        const { favorites } = state;
        const isFavorite = favorites.includes(ISBN);

        const newFavorites = isFavorite
          ? favorites.filter((item) => item !== ISBN)
          : [...favorites, ISBN];

        localStorage.setItem("favorites", JSON.stringify(newFavorites));

        return { ...state, favorites: newFavorites };
      });
    },

    setFilteredBooks: (filteredBooks: BooksAdater[]) => {
      update((state: BookStore) => {
        const { favorites } = state;
        const booksNotRead = filteredBooks.filter(
          (book) => !favorites.includes(book.ISBN)
        );
        return { ...state, filteredBooks: booksNotRead };
      });
    },

    sincronizeFavorites: () => {
      const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

      update((state: BookStore) => {
        const { books } = state;
        const filteredBooks = books.filter(
          (book) => !favorites.includes(book.ISBN)
        );
        return { ...state, favorites, filteredBooks };
      });
    },
  };
}

export const booksStore = createBooks();
