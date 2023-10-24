import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useBooksStore = defineStore("counter", {
  state: () => ({
    booksList: useStorage("booksList", []),
  }),
  getters: {
    totalBooksList: (state) => state.booksList.length,
  },
  actions: {
    addBookList(book) {
      this.booksList.push(book);
    },
    removeBookList(isbn) {
      const position = this.booksList.findIndex(
        (book) => book.book.ISBN === isbn
      );
      this.booksList.splice(position, 1);
    },
  },
});
