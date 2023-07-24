import { defineStore, skipHydrate } from "pinia";
import { Book } from "~/types/books";
import { useLocalStorage } from "@vueuse/core";

// main is the name of the store. It is unique across your application
// and will appear in devtools
export const useBookStore = defineStore("bookStore", {
  // a function that returns a fresh state
  state: () => {
    return {
      counter: 0,
      books: useLocalStorage("my-state", [] as Book[]),
    };
  },
  // optional getters
  getters: {
    // getters receive the state as first parameter
    // doubleCounter: (state) => state.counter * 2,
    // use getters in other getters
    // doubleCounterPlusOne(): number {
    //     return this.doubleCounter + 1;
    // },
  },
  // optional actions
  actions: {
    reset() {
      // `this` is the store instance
      this.counter = 0;
      this.books = [] as Book[];
    },
    addBook(book: Book) {
      this.books.push(book);
    },
    removeBook(selectedBook: Book) {
      this.books = this.books.filter((book: Book) => {
        return selectedBook.book.ISBN !== book.book.ISBN;
      });
    },
  },
  hydrate(state, initialState: any) {
    // in this case we can completely ignore the initial state since we
    // want to read the value from the browser
    state.books = useLocalStorage<Book[]>("my-state", []);
  },
});
