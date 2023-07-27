import { writable } from "svelte/store";
import { library } from "../../../books.json";

// Recuperar datos del LocalStorage si están disponibles
const storedReadingList = localStorage.getItem("storedReadingList");
const initialReadingList: Library[] = storedReadingList
  ? JSON.parse(storedReadingList)
  : [];
const storedAvailableList = localStorage.getItem("storedAvailableList");
const initialAvailableList: Library[] = storedAvailableList
  ? JSON.parse(storedAvailableList)
  : library;

const pagesList = library.map((b) => b.book.pages);

export const pages = {
  min: Math.min(...pagesList),
  max: Math.max(...pagesList),
};
export const genres = Array.from(new Set(library.map((b) => b.book.genre)));

export const readingList = writable<Library[]>(initialReadingList);
export const availableList = writable<Library[]>(initialAvailableList);
export const filters = writable({
  genre: "",
  page: pages.min,
});

window.addEventListener("storage", (event) => {
  if (event.key == "storedReadingList") {
    readingList.set(JSON.parse(event.newValue));
  }
  if (event.key == "storedAvailableList") {
    availableList.set(JSON.parse(event.newValue));
  }
});
