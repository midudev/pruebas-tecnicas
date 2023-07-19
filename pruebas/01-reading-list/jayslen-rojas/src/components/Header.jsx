import { useContext, useId } from 'react'
import { BooksContext } from '../context/BooksContext'
import { BookListContext } from '../context/BookListContex'
import { useFilters } from '../hooks/useFilters'
import { availableBook } from '../logic/getAvailableBooks'

export function Header () {
  const filtersId = useId()
  const { books } = useContext(BooksContext)
  const { bookList } = useContext(BookListContext)
  const { filterBooks } = useFilters()
  const libros = availableBook({ allBooks: books, booksInList: bookList })

  return (
    <header className="my-6">
      <h1 className="text-3xl font-semibold text-center">Books</h1>
      <h2 className='text-lg'>Libros disponibles <span>{libros}</span></h2>
      <h2 className='text-lg'>Libros en la lista <span>{bookList.length}</span></h2>

      <label htmlFor={filtersId}>Filtrar por genero</label>
      <select name="filters" id={filtersId} className='g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' onChange={filterBooks}>
        <option value="Todos">Todos</option>
        <option value="Fantasia">Fantasía</option>
        <option value="Ciencia ficcion">Ciencia Ficcion</option>
        <option value="Zombies">Zombies</option>
        <option value="Terror">Terror</option>

      </select>
    </header>
  )
}
