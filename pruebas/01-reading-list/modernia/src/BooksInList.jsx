import React from 'react'
import Book from './Book'

export default function BooksInList({books, handleRemove}) {
  return (
    <section className='border-[1px] rounded-md border-gray-500 bg-gray-900 col-span-4 mt-4'>
      <h2 className='text-2xl'>Lista de lectura</h2>
      <div className='books-list'>
        {
          books?.map((book) => (
            <Book key={book.ISBN} book={book}>
              <span onClick={handleRemove} id={book.ISBN} className='text-lg font-bold'>Remove from list</span>
            </Book>
          ))
        }
      </div>
    </section>
  )
}
