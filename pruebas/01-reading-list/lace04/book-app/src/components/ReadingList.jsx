import React from 'react';
import { BiSolidMinusSquare } from 'react-icons/bi';

function ReadingList({ books, onRemove }) {
  return (
    <section className='bg-slate-200 dark:bg-gray-900 h-full p-4 rounded-lg mt-10 flex flex-col items-center'>
      <h1 className='text-3xl md:text-4xl text-center font-bold m-5 text-gray-900 dark:text-gray-300'>
        Lista Lectura
      </h1>
      <div className='text-lg md:text-xl mb-4 text-gray-900 dark:text-gray-300'>
        Libros disponibles: {books.length}
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2'>
        {books.map((book) => (
          <div
            key={book.ISBN}
            className='bg-white dark:bg-gray-800 m-2 flex flex-col justify-center items-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 relative lg:max-w-[170px] md:min-w-[130px] md:mr-10 my-4'
          >
            <img
              src={book.cover}
              alt={book.title}
              className='w-32 h-28 object-contain mt-4'
            />
            <h3 className='md:text-xs text-center m-4 h-12 text-gray-900 dark:text-gray-300'>
              {book.title}
            </h3>

            <div className='absolute top-2 right-2'>
              <button onClick={() => onRemove(book)}>
                <BiSolidMinusSquare
                  className='text-red-500 text-2xl'
                  size={32}
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ReadingList;
