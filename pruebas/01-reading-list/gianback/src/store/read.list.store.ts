import { writable } from "svelte/store";

const booksStored = localStorage.getItem("favorites");
window.addEventListener("storage", (event) => {
  if (event.key === "favorites") {
    bookList.update(JSON.parse(event.newValue));
  }
});
export const bookList = writable(JSON.parse(booksStored) || []);

bookList.subscribe((value) =>
  localStorage.setItem("favorites", JSON.stringify(value))
);
