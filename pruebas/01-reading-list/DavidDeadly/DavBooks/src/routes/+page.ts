import { getAllBooks, mapBookResponse } from "$lib";

export function load() {
  const response = getAllBooks();
  const books = mapBookResponse({ response });

  return { books }
}