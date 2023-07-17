import { Book } from '@/types/book';
import books from '../data/books.json';

export const getBooks = (wait?: number): Book[] | Promise<Book[]> => {
  let finalBooks: Book[] = [];

  for (let i = 0; i < books.library.length; i++) {
    const { book } = books.library[i];
    finalBooks.push(book);
  }

  if (wait) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(finalBooks);
      }, wait);
    });
  }

  return finalBooks;
};
