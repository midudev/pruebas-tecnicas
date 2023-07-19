import { useContext } from 'react'
import { BooksContext } from '../context/BooksContext'
import { BookListContext } from '../context/BookListContex'
import { availableBook } from '../logic/getAvailableBooks'
import { Filters } from './Filters'

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
        <div>
          <h2 className="text-lg">
            Libros disponibles <span>{numOfBooksAvailable}</span>
          </h2>
          <h2 className="text-lg">
            Libros en la lista <span>{bookList.length}</span>
          </h2>
        </div>
        <Filters/>
      </section>
    </header>
  )
}
