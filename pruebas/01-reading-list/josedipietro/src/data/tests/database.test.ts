import { expect, test } from "vitest";
import database from "../database";

test("Database initialization should get books", async () => {
  expect(database.books).toHaveLength(0);

  await database.initialize();

  expect(database.books).not.toHaveLength(0);
});

test("Database should return the book with less pages", async () => {
  await database.initialize();

  const { books } = database;

  const lessPagesBook = books.reduce((prevBook, currentBook) => {
    if (prevBook.pages < currentBook.pages) return prevBook;
    return currentBook;
  });

  expect(lessPagesBook.pages).toBe(database.minPagesBook.pages);
});

test("Database should return the book with max pages", async () => {
  await database.initialize();

  const { books } = database;

  const maxPagesBook = books.reduce((prevBook, currentBook) => {
    if (prevBook.pages > currentBook.pages) return prevBook;
    return currentBook;
  });

  expect(maxPagesBook.pages).toBe(database.maxPagesBook.pages);
});

test("Database should return all the book's genres", async () => {
  await database.initialize();

  const { books } = database;

  const genres: string[] = [];

  books.forEach((book) => {
    if (!genres.includes(book.genre)) genres.push(book.genre);
  });

  expect(genres).toMatchObject(database.genres);
});
