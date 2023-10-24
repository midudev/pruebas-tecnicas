import { Book } from "@/global/types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface BookStore {
  favoritos: Book[];
  addBook: (newBook: Book) => void;
  removeBook: (book: Book) => void;
  isFavorite: (book: string) => boolean;
}

export const useBookStore = create(
  persist<BookStore>(
    (set, get) => ({
      favoritos: [],
      addBook: (newBook) =>
        set((state) => ({ favoritos: [...state.favoritos, newBook] })),
      removeBook: (book) =>
        set((state) => ({
          favoritos: state.favoritos.filter((fav) => fav.title !== book.title),
        })),
      isFavorite: (book: string) => {
        return get().favoritos.some((fav) => fav.title === book);
      },
    }),

    {
      name: "bookstore-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
