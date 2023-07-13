'use client';

import { type Book } from '@/types/book';
import Image from 'next/image';
import BookCard from './BookCard';

type BooksProps = {
  books: Book[];
};

function Books({ books }: BooksProps) {
  return (
    <>
      {books.map((book) => (
        <BookCard key={book.ISBN} book={book} />
      ))}
    </>
  );
}

export default Books;
