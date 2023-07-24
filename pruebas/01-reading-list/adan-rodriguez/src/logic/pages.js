import { books } from "./database";

export const maxPages = Math.max(...books.map((book) => book.pages));
