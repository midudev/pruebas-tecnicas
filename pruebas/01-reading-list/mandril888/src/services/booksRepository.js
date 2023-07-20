import books from "../../../books.json";

const awaitTimeout = (delay) =>
  new Promise((resolve) => setTimeout(resolve, delay));

export async function getAllBooks() {
  await awaitTimeout(Math.random() * 1000);
  return books.library;
}
