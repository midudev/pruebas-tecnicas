'use client';

import { useListStore } from '@/stores/listStore';
import { type Book } from '@/types/book';
import Image from 'next/image';

type BookCardProps = {
  book: Book;
};

function BookCard({ book }: BookCardProps) {
  const books = useListStore((state) => state.books);
  const addBook = useListStore((state) => state.addBook);
  const removeBook = useListStore((state) => state.removeBook);

  const handleCardClick = (book: Book) => {
    if (books.includes(book)) {
      removeBook(book.ISBN);
    } else {
      addBook(book);
    }
  };

  return (
    <article
      className='bg-secondary rounded-md p-4 h-[200px] cursor-pointer hover:scale-95 transition-all'
      onClick={() => handleCardClick(book)}
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
  );
}

export default BookCard;
