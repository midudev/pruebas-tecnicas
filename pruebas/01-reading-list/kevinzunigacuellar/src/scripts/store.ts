import { createStore, produce } from "solid-js/store";
import booksJson from "../data/books.json";
import { createEffect } from "solid-js";

interface Author {
  name: string;
  otherBooks: string[];
}

interface Book {
  title: string;
  pages: number;
  genre: string;
  cover: string;
  synopsis: string;
  year: number;
  ISBN: string;
  author: Author;
}

interface Store {
  showcaseBooks: Book[];
  readingList: Book[];
  filters: {
    genre: string;
    pages: number;
    search: string;
  };
}

const initialBooks = booksJson.library.map((bookData) => {
  return {
    ...bookData.book,
  };
});

const LOCAL_STORAGE_KEY = "store";

const localStoreData = localStorage.getItem(LOCAL_STORAGE_KEY);

export const [store, setStore] = createStore<Store>(
  localStoreData
    ? JSON.parse(localStoreData)
    : {
        showcaseBooks: initialBooks,
        readingList: [],
        filters: {
          genre: "todos",
          pages: getMaxPages(),
          search: "",
        },
      },
);

function onStorageUpdate() {
  setStore(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)!));
}

createEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(store));
  window.addEventListener("storage", onStorageUpdate);

  return () => {
    window.removeEventListener("storage", onStorageUpdate);
  };
});

export function addToReadingList(book: Book) {
  setStore(
    "readingList",
    produce((readingList) => {
      readingList.push(book);
    }),
  );
}

export function removeFromReadingList(isbn: string) {
  const filteredReadingList = store.readingList.filter(
    (book) => book.ISBN !== isbn,
  );
  setStore("readingList", filteredReadingList);
}

export function getMaxPages() {
  return Math.max(...initialBooks.map((book) => book.pages));
}

export function getMinPages() {
  return Math.min(...initialBooks.map((book) => book.pages));
}

export function getAllGenres() {
  return Array.from(new Set(initialBooks.map((book) => book.genre)));
}

export function filterByGenre(genre: string) {
  setStore("filters", "genre", genre);
}

export function filterByPages(pages: number) {
  setStore("filters", "pages", pages);
}

createEffect(() => {
  const { pages, genre, search } = store.filters;
  const readingListIsbn = store.readingList.map((book) => book.ISBN);
  const filterbooks = initialBooks.filter(
    (book) =>
      book.pages <= pages &&
      (genre === "todos" || book.genre === genre) &&
      !readingListIsbn.includes(book.ISBN) &&
      (book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.name.toLowerCase().includes(search.toLowerCase())),
  );
  setStore("showcaseBooks", filterbooks);
});

export function getRemainingBookCount() {
  return initialBooks.length - store.readingList.length;
}

export function IncreaseIdxReadingList(idx: number) {
  setStore(
    "readingList",
    produce((readingList) => {
      const book = readingList[idx]!;
      readingList.splice(idx, 1);
      readingList.splice(idx - 1, 0, book);
    }),
  );
}

export function DecreaeIdxReadingList(idx: number) {
  setStore(
    "readingList",
    produce((readingList) => {
      const book = readingList[idx]!;
      readingList.splice(idx, 1);
      readingList.splice(idx + 1, 0, book);
    }),
  );
}

export function filterBySearch(search: string) {
  setStore("filters", "search", search);
}
