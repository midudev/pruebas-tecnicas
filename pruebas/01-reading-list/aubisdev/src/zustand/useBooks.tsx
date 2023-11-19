import { Book } from "../models";
import { create } from "zustand";
import { persist, subscribeWithSelector } from "zustand/middleware";
import { share } from "shared-zustand";

export interface BookState {
  userLectureList: Book[];
  books: Book[];
  selectedGenres: string[];
  setBooks: (books: Book[]) => void;
  addToLectureList: (book: Book) => void;
  setSelectedGenres: (genres: string[]) => void;
  removeFromLectureList: (bookToRemoveISBN: string) => void;
  setUserLectureList: (userLectureList: Book[]) => void;
}

export const useBook = create<BookState>()(
  persist(
    subscribeWithSelector((set) => ({
      books: [],
      userLectureList: [],
      selectedGenres: [],
      setBooks: (newAvailableBooksState: Book[]) =>
        set(() => ({
          books: newAvailableBooksState,
        })),
      setUserLectureList: (newLectureList: Book[]) =>
        set(() => ({
          userLectureList: newLectureList,
        })),
      addToLectureList: (newBook: Book) =>
        set((state) => ({
          userLectureList: [...state.userLectureList, newBook],
        })),
      removeFromLectureList: (bookISBN: string) =>
        set((state) => ({
          userLectureList: state.userLectureList.filter(
            (book) => book.ISBN !== bookISBN
          ),
        })),
      setSelectedGenres: (genres: string[]) =>
        set(() => ({ selectedGenres: genres })),
    })),
    {
      name: "book-storage",
      getStorage: () => localStorage,
    }
  )
);

/*
 * To sync data through different browser tabs
 */
if ("BroadcastChannel" in globalThis /* || isSupported() */) {
  // share the property "count" of the state with other tabs
  share("books", useBook);
  share("userLectureList", useBook);
  share("selectedGenres", useBook);
}
