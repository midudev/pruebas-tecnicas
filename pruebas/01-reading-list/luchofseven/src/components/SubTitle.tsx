import { useBooksStore } from '../store/BooksStore'

export default function SubTitle (): JSX.Element {
  const { books, booksToRead } = useBooksStore()

  return (
    <div className="counter-books">
      <div>
        <span>{books.length}</span>
        <h4>libros pendientes</h4>
      </div>
      <div>
        <span>{booksToRead.length}</span>
        <h4>en la lista de lectura</h4>
      </div>
    </div>
  )
}
