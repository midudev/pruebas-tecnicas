import { defineStore } from "pinia";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "../utils/localStorage";
import { ref, computed } from "vue";
import bookList from "../books.json";
import { Book, LibraryElement } from "../types";

export const useBookStore = defineStore("books", () => {
  // Get local storage data if exists
  const savedBooks = loadFromLocalStorage("books");
  const savedReadingList = loadFromLocalStorage("readingList");
  const savedSelectedPages = loadFromLocalStorage("selectedPages");
  const savedSelectedCategory = loadFromLocalStorage("selectedCategory");

  const books = ref(
    savedBooks ||
      bookList.library.sort((a, b) => {
        // sort alphabetically
        return a.book.title.localeCompare(b.book.title);
      })
  );

  // Get all categories
  const genres = computed(() => {
    const genres = new Set<string>();
    books.value.forEach((book: LibraryElement) => {
      genres.add(book.book.genre);
    });
    return Array.from(genres);
  });

  // Get max pages
  const maxBookPages = computed(() => {
    return Math.max(
      ...bookList.library.map((book: LibraryElement) => book.book.pages)
    );
  });

  const selectedPages = ref(savedSelectedPages || 0);
  const selectedCategory = ref(savedSelectedCategory || "");

  const filteredBooks = computed(() => {
    saveToLocalStorage("selectedPages", selectedPages.value);
    saveToLocalStorage("selectedCategory", selectedCategory.value);
    return books.value.filter((book: LibraryElement) => {
      return (
        book.book.pages >= selectedPages.value &&
        (selectedCategory.value === "" ||
          book.book.genre === selectedCategory.value)
      );
    });
  });

  const readingList = ref<Book[]>(savedReadingList || []);

  // Push and remove from reading list
  const addToReadingList = (book: Book) => {
    readingList.value.push(book);
    const index = books.value.findIndex(
      (b: LibraryElement) => b.book.title === book.title
    );
    books.value.splice(index, 1);
    // Save to local storage
    saveToLocalStorage("books", books.value);
    saveToLocalStorage("readingList", readingList.value);
  };

  const removeFromReadingList = (book: Book) => {
    readingList.value = readingList.value.filter((b) => b.title !== book.title);
    books.value.push({ book });
    // sort alphabetically
    books.value.sort((a: LibraryElement, b: LibraryElement) =>
      a.book.title.localeCompare(b.book.title)
    );
    // Save to local storage
    saveToLocalStorage("books", books.value);
    saveToLocalStorage("readingList", readingList.value);
  };

  // Keep tabs synced
  window.addEventListener("storage", (event) => {
    if (event.key === "books" && event.newValue) {
      books.value = JSON.parse(event.newValue);
    } else if (event.key === "readingList" && event.newValue) {
      readingList.value = JSON.parse(event.newValue);
    } else if (event.key === "selectedPages" && event.newValue) {
      selectedPages.value = JSON.parse(event.newValue);
    } else if (event.key === "selectedCategory" && event.newValue) {
      selectedCategory.value = JSON.parse(event.newValue);
    }
  });

  return {
    books,
    genres,
    maxBookPages,
    readingList,
    selectedPages,
    selectedCategory,
    filteredBooks,
    addToReadingList,
    removeFromReadingList,
  };
});
