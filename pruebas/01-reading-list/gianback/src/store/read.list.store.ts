import { writable } from "svelte/store";

const booksStored = localStorage.getItem("favorites");
window.addEventListener("storage", (event) => {
  if (event.key === "favorites") {
    readBookList.set(JSON.parse(event.newValue));  
  }
});
export const readBookList = writable(JSON.parse(booksStored) || []);

readBookList.subscribe((value) =>
  localStorage.setItem("favorites", JSON.stringify(value))
);
