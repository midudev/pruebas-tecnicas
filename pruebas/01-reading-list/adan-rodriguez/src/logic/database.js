import { library } from "../database/books.json";

export const books = library.map(({ book }) => book);
