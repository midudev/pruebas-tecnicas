import { useState, useContext } from 'react'

import { BooksContext } from '../context/BooksContext'
import { UserContext } from '../context/UserContext'
import Filters from './Filters'
import BookCard from './BookCard'

export default function AvailableBooks () {
  const { counter, books } = useContext(BooksContext)
  const { addToReadingList } = useContext(UserContext)
  const [currentPage, setCurrentPage] = useState(1)

  const booksPerPage = 6
  const startIndex = (currentPage - 1) * booksPerPage
  const endIndex = startIndex + booksPerPage

  const currentBooks = books.availableBooks && books.availableBooks.slice(startIndex, endIndex)

  // Función para cambiar a la siguiente página
  const nextPage = () => {
    setCurrentPage(prevPage => prevPage + 1)
  }

  // Función para cambiar a la página anterior
  const prevPage = () => {
    setCurrentPage(prevPage => prevPage - 1)
  }

  return (
    <section id='availableBooksSection' className='my-1 mx-10'>
      <h2 className='p-2 text-xl text-slate-300'>Books: {counter.availableBooksCounter}</h2>
      <Filters />
      <div className='h-[500px] relative'>
        {currentBooks.length > 0
          ? <ul className='grid grid-cols-3 gap-5 items-center p-2'>
          {
            currentBooks.map(book => (
              <BookCard key={book.ISBN} book={book} addToReadingList={addToReadingList} />
            ))}
        </ul>
          : <span className='text-slate-300'>No se encontraron libros</span>}

          {currentPage > 1 && <button className='absolute left-0 bottom-0 text-slate-300' onClick={prevPage}>Previous</button>}
          {currentBooks.length > 0 && currentBooks.length === booksPerPage && (
            <button className='absolute right-0 bottom-0 text-slate-300' onClick={nextPage}>Next</button>
          )}
      </div>
    </section>
  )
}
