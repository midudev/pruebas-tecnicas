import { useLibraryStore } from '../store/library'

export function List () {
  const [toReadLibrary, removeFromReadLibrary] = useLibraryStore((state) => [
    state.toReadLibrary,
    state.removeFromReadLibrary
  ])

  const handleDeleteFromList = (book) => {
    removeFromReadLibrary(book)
  }

  return (
    <article className='reading-list-aside'>
      <h3>Lista de lectura</h3>
      <ul className='library-grid'>
        {toReadLibrary.map((book) => (
          <li key={book.isbn} onClick={() => handleDeleteFromList(book)}>
            <img src={book.cover} alt={`${book.title} cover`} />
          </li>
        ))}
      </ul>
    </article>
  )
}
