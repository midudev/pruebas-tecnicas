import { defineStore } from "pinia";
import { Book } from "~/types/books";

// main is the name of the store. It is unique across your application
// and will appear in devtools
export const useBookStore = defineStore("bookStore", {
  // a function that returns a fresh state
  state: () => ({
    counter: 0,
    books: [] as Book[],
  }),
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
      console.log(this.books);
    },
    removeBook(selectedBook: Book) {
      this.books = this.books.filter((book) => {
        return selectedBook.book.ISBN !== book.book.ISBN;
      });
    },
  },
});
