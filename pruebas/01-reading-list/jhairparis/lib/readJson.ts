import type { JsonType } from "@/types/data";
import b from "../../books.json";
import type { GenreType } from "@/types/context";

export default function read() {
  const main: JsonType = b;
  const genre: GenreType = {};
  const arrPages: number[] = [];

  for (const { book } of main.library) {
    const g = book.genre;
    arrPages.push(book.pages);
    if (genre[g] === undefined) genre[g] = g;
  }

  arrPages.sort((a, b) => a - b);
  const nPages: [number, number] = [arrPages[0], arrPages[arrPages.length - 1]];

  return {
    main,
    genre,
    copy: JSON.stringify(main.library),
    nPages,
  };
}
