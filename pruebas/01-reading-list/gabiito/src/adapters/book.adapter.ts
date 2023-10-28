import { BookStoreItem, Library } from "@/types";

export function adaptLibrary(library: Library): BookStoreItem[] {
  const books: BookStoreItem[] = [];

  library.library.forEach((shelf) => {
    books.push({
      ...shelf.book,
      order: -99,
    });
  });

  return books;
}