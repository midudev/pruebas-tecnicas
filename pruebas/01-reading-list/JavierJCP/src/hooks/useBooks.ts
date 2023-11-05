import { useState } from 'react';
import { library } from '../mocks/library.json';

export function useBooks() {
  const mappedBooks = library.map((book) => ({
    id: book.book.ISBN,
    title: book.book.title,
    pages: book.book.pages,
    genre: book.book.genre,
    cover: book.book.cover,
    synopsis: book.book.synopsis,
    year: book.book.year,
    author: {
      name: book.book.author.name,
      otherBooks: book.book.author.otherBooks,
    },
  }));
  const [books, setBooks] = useState(mappedBooks);
  return { books, setBooks };
}
