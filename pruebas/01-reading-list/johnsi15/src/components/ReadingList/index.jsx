import { useBook } from '../../hooks/useBook'

export default function ReadingList ({ books }) {
  const { handleRemoveBook } = useBook()

  if (books.length === 0) {
    return null
  }

  return (
    <>
      <h3>Lista de lectura</h3>
      <ul>
        {books.map(book => {
          return <li key={book.id}>
            <h3>{book.title}</h3>
            <button onClick={() => handleRemoveBook(book.id)}>Remove book</button>
          </li>
        })}
      </ul>
    </>
  )
}
