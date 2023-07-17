import { Book } from "../models";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface BookState {
  userLectureList: Book[];
  books: Book[];
  selectedGenres: string[];
  setBooks: (books: Book[]) => void;
  addToLectureList: (book: Book) => void;
  setSelectedGenres: (genres: string[]) => void;
  removeFromLectureList: (bookToRemoveISBN: string) => void;
  //findBookOnLecture: (bookISBN: string) => boolean;
}

export const useBook = create<BookState>()(
  persist(
    (set) => ({
      books: [],
      userLectureList: [],
      selectedGenres: [],
      setBooks: (newAvailableBooksState) =>
        set(() => ({
          books: newAvailableBooksState,
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
    }),
    {
      name: "book-storage",
      getStorage: () => localStorage,
    }
  )
);
