import { JsonType } from "@/types/books";
import b from "../../books.json";

export default function read() {
  const main: JsonType = b;
  const genre = new Set(main.library.map((book) => book.book.genre));

  return { main, genre, copy: JSON.stringify(main.library) };
}
