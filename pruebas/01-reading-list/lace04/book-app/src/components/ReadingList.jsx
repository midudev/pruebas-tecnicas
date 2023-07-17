import React from 'react';

import { BiSolidMinusSquare } from 'react-icons/bi';

function ReadingList({ books, onRemove }) {
  return (
    <div className='bg-zinc-900 h-full p-4'>
      <h1 className='text-4xl text-center font-bold m-5'>Lista Lectura</h1>
      <div className='text-xl mb-4'>Libros disponibles: {books.length}</div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
        {books.map((book) => (
          <div
            key={book.ISBN}
            className='bg-zinc-800 m-2 flex flex-col justify-center items-center rounded-md hover:bg-zinc-700 relative'
          >
            <img
              src={book.cover}
              alt={book.title}
              className='w-32 h-28 object-contain mt-4'
            />
            <h3 className='md:text-xs text-center m-4 h-12'>{book.title}</h3>

            <div className='absolute top-2 right-2'>
              <button onClick={() => onRemove(book)}>
                <BiSolidMinusSquare className='text-red-500 text-2xl' />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReadingList;
