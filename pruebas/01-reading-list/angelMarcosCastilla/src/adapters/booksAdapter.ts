import type { BooksAdater, RootLibrary } from "../types/books";

export const booksAdapter = (data: RootLibrary): BooksAdater[] => {
  const { library } = data;

  return library.map(({ book }) => {
    return {
      title: book.title,
      pages: book.pages,
      genre: book.genre,
      cover: book.cover,
      synopsis: book.synopsis,
      year: book.year,
      ISBN: book.ISBN,
      author: {
        name: book.author.name,
        otherBooks: book.author.otherBooks,
      },
    };
  });
};
