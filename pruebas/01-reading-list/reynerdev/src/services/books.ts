import { z } from "zod";
import books from "../mock/books.json";
import { booksSchema } from "~/types/books";

export const getBooks = () => {
  return booksSchema.parse(books);
};
