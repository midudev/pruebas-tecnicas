import React from 'react';
import { BiSolidAddToQueue } from 'react-icons/bi';

function Book({ book, onAddToReadingList }) {
  return (
    <article
      key={book.ISBN}
      className='mt-4 bg-stone-300 dark:bg-zinc-800 m-2 flex flex-col justify-center items-center rounded-md relative hover:bg-stone-200 dark:hover:bg-zinc-700 transition-colors duration-300'
      title={book.synopsis}
    >
      <img
        src={book.cover}
        alt={book.title}
        className='w-32 h-32 object-contain mt-4'
      />
      <h3 className='md:text-md text-center mt-4 text-gray-900 dark:text-gray-300 h-12'>
        {book.title}
      </h3>
      <div className='absolute top-2 right-2'>
        <button
          onClick={() => onAddToReadingList(book)}
          className='bg-white rounded-full p-2'
        >
          <BiSolidAddToQueue className='text-black' />
        </button>
      </div>
    </article>
  );
}

export default Book;
