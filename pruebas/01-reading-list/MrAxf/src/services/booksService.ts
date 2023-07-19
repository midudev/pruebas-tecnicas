import booksData from "~/content/books.json";
import type { Book, BooksFilter, ReadList } from "~/types/books";
import MiniSearch from "minisearch";

let books: Book[] = [];
let genres: string[] = [];
const minisearch = new MiniSearch({
  fields: ["title", "genre", "synopsis", "year", "ISBN", "author.name"],
  idField: "ISBN",
  extractField: (document, fieldName) => {
    return fieldName.split(".").reduce((doc, key) => doc && doc[key], document);
  },
  searchOptions: {
    boost: { title: 2, synopsis: 1, "author.name": 1 },
    fuzzy: 0.2,
    filter(result) {
      return result.score >= 5;
    },
  },
});

export function getBooks() {
  if (books.length === 0) {
    books = booksData.library.map((item) => item.book);
    minisearch.addAll(books);
  }
  return books;
}

export function getGenres() {
  const books = getBooks();
  if (genres.length === 0) {
    genres = Array.from(
      books.reduce((acc: Set<string>, item) => {
        acc.add(item.genre);
        return acc;
      }, new Set<string>())
    );
  }
  return genres;
}

export function filterBooks(filter: BooksFilter, readList: ReadList) {
  if (books.length === 0) getBooks();

  const searchedBooks = filter.searchText
    ? (minisearch
        .search(filter.searchText)
        .filter((item) => item.score > 1)
        .map((item) => books.find((book) => book.ISBN === item.id)) as Book[])
    : books;

  const filteredBooks = searchedBooks.filter(
    (item) =>
      (!filter.isInReadList || filterreadList(item, readList)) &&
      (!filter.genre ||
        filter.genre === "none" ||
        filterGenre(item, filter.genre)) &&
      (!filter.minPages || filterPages(item, filter.minPages))
  );

  if (filter.priorityOrder === undefined) return filteredBooks;

  const orderedBooks = filteredBooks.sort((item1, item2) =>
    orderPriority(
      readList[item1.ISBN],
      readList[item2.ISBN],
      filter.priorityOrder as boolean
    )
  );

  return orderedBooks;
}

function filterreadList(book: Book, readList: ReadList) {
  return Boolean(readList[book.ISBN]);
}

function filterGenre(book: Book, genre: string) {
  return book.genre === genre;
}

function filterPages(book: Book, minPages: number) {
  return book.pages >= minPages;
}

function orderPriority(
  item1: number | undefined = 0,
  item2: number | undefined = 0,
  priority: boolean
) {
  return (item1 - item2) * (priority ? -1 : 1);
}
