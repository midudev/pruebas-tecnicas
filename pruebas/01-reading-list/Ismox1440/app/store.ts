import { Book } from "@/models/book";
import { library } from "@/utils/get-library";
import { create } from "zustand";

type State = {
  readingList: Book[];
  library: library;
};

type Action = {
  setBook: (book: Book) => void;
  removeBook: (book: Book) => void;
};

const setLocalStorage = (key: string, value: any) =>
  window?.localStorage?.setItem(key, JSON.stringify(value));

const getLocalStorage = (key: string) =>
  JSON.parse(window?.localStorage?.getItem(key) ?? "");

const useStore = create<State & Action>((set) => ({
  readingList: getLocalStorage("readingList") ?? [],
  library: [],
  setReadingList: (readingList: Book[]) => set({ readingList }),
  setBook: (book: Book) =>
    set((state: State) => {
      const newList = [...state.readingList, book];
      setLocalStorage("readingList", newList);
      return { readingList: newList };
    }),
  removeBook: (book: Book) =>
    set((state: State) => {
      const newList = state.readingList.filter((b) => b.ISBN !== book.ISBN);
      setLocalStorage("readingList", newList);
      return {
        readingList: newList,
      };
    }),
}));

export default useStore;
