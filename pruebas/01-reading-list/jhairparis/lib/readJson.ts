import type { JsonType } from "@/types/data";
import b from "../../books.json";
import type { GenreType } from "@/types/context";

export default function read() {
  const main: JsonType = b;
  const genre: GenreType = {};

  for (const { book } of main.library) {
    const g = book.genre;
    if (genre[g] === undefined) genre[g] = g;
  }

  return { main, genre, copy: JSON.stringify(main.library) };
}
