import { useBooks } from '../hooks/useBooks'
import { type Book } from '../types'
import './BooksGrid.css'
import { SingleBook } from './SingleBook'

export function BooksGrid () {
  const { loading, books, addBook, filterBooks } = useBooks()

  const handleBookClick = (book: Book) => {
    addBook(book)
  }

  const filteredBooks = filterBooks(books)

  return (
    <main className='books-grid'>
      <ul>
        {
          loading
            ? <span>Cargando...</span>
            : filteredBooks.map((book) => {
              return (
                <SingleBook text='Añadir' key={book.ISBN} book={book} onClick={ handleBookClick } />
              )
            })
        }
        {
          (filteredBooks.length === 0 && !loading) &&
            <li style={{ gridColumn: 'span 2' }}>😭 No hay libros que mostrar</li>
        }
      </ul>
    </main>
  )
}
