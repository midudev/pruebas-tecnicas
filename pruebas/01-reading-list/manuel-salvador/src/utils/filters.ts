import { IBook } from '@/types';

export const getMaxPages = (books: IBook[]): number => {
  if (books.length === 0) {
    return 0;
  }

  const bookWithMostPages = books.reduce((prevBook, currentBook) => {
    return currentBook.pages > prevBook.pages ? currentBook : prevBook;
  });

  return bookWithMostPages.pages;
};

export const getMinPages = (books: IBook[]): number => {
  if (books.length === 0) {
    return 0;
  }

  const bookWithMostPages = books.reduce((prevBook, currentBook) => {
    return currentBook.pages < prevBook.pages ? currentBook : prevBook;
  });

  return bookWithMostPages.pages;
};
