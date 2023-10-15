/**
 * @vitest-environment happy-dom
 */

import { describe, it, expect } from "vitest";

import { setActivePinia, createPinia, storeToRefs } from "pinia";
import { useBookStore } from "./store/books";

// Inicializar pinia
setActivePinia(createPinia());

const store = useBookStore();
const { readingList, books, selectedPages, selectedCategory, filteredBooks } =
  storeToRefs(store);
const { addToReadingList, removeFromReadingList } = store;

describe("books", () => {
  it("should get genres", () => {
    const { genres } = useBookStore();

    expect(genres).toStrictEqual([
      "Ciencia ficción",
      "Zombies",
      "Terror",
      "Fantasía",
    ]);
  });

  it("should filter by pages and genre", () => {
    selectedPages.value = 250;
    selectedCategory.value = "Zombies";
    expect(filteredBooks.value).toHaveLength(1);
  });

  it("should add/remove from reading list", () => {
    const booksLength = books.value.length;

    // Se agregan dos libros y se remueve uno
    addToReadingList(books.value[0].book);
    addToReadingList(books.value[1].book);
    removeFromReadingList(readingList.value[0]);

    expect(readingList.value).toHaveLength(1);
    expect(books.value).toHaveLength(booksLength - 1);
  });
});
