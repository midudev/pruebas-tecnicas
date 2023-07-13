'use client';

import { type Book } from '@/types/book';
import Image from 'next/image';

type BooksProps = {
  books: Book[];
};

function Books({ books }: BooksProps) {
  return (
    <>
      {books.map((book) => (
        <article
          key={book.ISBN}
          className='bg-secondary rounded-md p-4 h-[200px] cursor-pointer hover:scale-95 transition-all'
        >
          <Image
            className='object-cover h-full w-full'
            src={book.cover}
            alt={book.title}
            width={600}
            height={600}
            priority
            draggable={false}
          />
        </article>
      ))}
    </>
  );
}

export default Books;
