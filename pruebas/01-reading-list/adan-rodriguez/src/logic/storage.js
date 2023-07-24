export function getBooksAvailableFromLocalStorage() {
  return JSON.parse(window.localStorage.getItem("books"))?.booksAvailable;
}

export function getReadingListFromLocalStorage() {
  return JSON.parse(window.localStorage.getItem("books"))?.readingList;
}

export function setBooksInLocalStorage({ booksAvailable, readingList }) {
  window.localStorage.setItem(
    "books",
    JSON.stringify({ booksAvailable, readingList }),
  );
}
