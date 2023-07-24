import { books } from "./database";

export const genres = Array.from(new Set(books.map((book) => book.genre)));
