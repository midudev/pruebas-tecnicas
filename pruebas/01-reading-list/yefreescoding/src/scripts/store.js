import library from '../mocks/books.json';
// import { useState } from 'react';

const books = library?.library;

// formatted books array to have more control over them
export const myBooksProps = books.map((book) => ({
  title: book.book.title,
  pages: book.book.pages,
  genre: book.book.genre,
  dataGenre: slugify(book.book.genre),
  year: book.book.year,
  synopsis: book.book.synopsis,
  cover: book.book.cover,
  author: book.book.author.name,
  ISBN: book.book.ISBN,
}));

export function slugify(str) {
  str = str.replace(/\s+/g, ''); // remove spaces
  str = str.replace(/[^\w\s]/gi, ''); // remove symbols
  str = str.toLowerCase(); // convert to lowercase
  return str;
}

export const BookCategories = myBooksProps.filter((obj, index, self) => {
  return index === self.findIndex((o) => o.genre === obj.genre);
});
