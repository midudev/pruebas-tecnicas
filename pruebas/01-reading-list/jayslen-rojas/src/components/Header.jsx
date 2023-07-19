import { useContext } from 'react'
import { BooksContext } from '../context/BooksContext'
import { BookListContext } from '../context/BookListContex'
import { availableBook } from '../logic/getAvailableBooks'
import { FiltersGenre } from './FiltersGenre'
import { FiltersPage } from './FiltersPage'

export function Header () {
  const { books } = useContext(BooksContext)
  const { bookList } = useContext(BookListContext)
  const numOfBooksAvailable = availableBook({
    allBooks: books,
    booksInList: bookList
  })

  return (
    <header className="my-6">
      <h1 className="text-3xl font-semibold text-center">Books</h1>
      <section className="flex justify-between items-center">
        <div className='flex gap-2'>
          <h2 className='bg-[#4f9d69] text-white px-2 py-1 rounded-full'>
             Disponibles <span className='font-bold'>{numOfBooksAvailable}</span>
          </h2>
          <h2 className='bg-[#f99c39] text-white px-2 py-1 rounded-full'>
            En lista <span className='font-bold'>{bookList.length}</span>
          </h2>
        </div>
        <div className='flex gap-2'>
          <FiltersGenre/>
          <FiltersPage/>
        </div>
      </section>
    </header>
  )
}
