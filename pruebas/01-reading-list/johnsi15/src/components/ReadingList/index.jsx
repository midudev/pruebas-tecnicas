import { useBookStore } from '../../store/bookStore'

export default function ReadingList ({ books }) {
  const removeBook = useBookStore(state => state.removeBook)

  return (
    <>
      <h3>Lista de lectura</h3>
      {books.length > 0 && (
        <ul>
          {books.map(book => {
            return <li key={book.id}>
              <h3>{book.title}</h3>
              <button onClick={() => removeBook(book.id)}>Remove book</button>
            </li>
          })}
        </ul>
      )}
    </>
  )
}
