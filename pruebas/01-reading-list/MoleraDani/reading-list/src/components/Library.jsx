import { useEffect } from 'react'
import { useLibraryStore } from '../store/library'
import { useFilters } from '../hooks/useFilters'

const MAX_BOOKS = 21

export function Library () {
  const [library, getBooks, addToReadLibrary] = useLibraryStore((state) => [state.library, state.getBooks, state.addToReadLibrary])
  const { filterBooks } = useFilters()
  const filteredProducts = filterBooks(library)

  // Listener sincronización pestañas
  useEffect(() => {
    const updateStore = () => {
      useLibraryStore.persist.rehydrate()
    }
    window.addEventListener('storage', updateStore)
    return () => window.removeEventListener('storage', updateStore)
  }, [])

  useEffect(() => {
    getBooks()
  }, [getBooks])

  const handleClickBook = (book) => {
    addToReadLibrary(book)
  }

  return (
    <ul className='library-grid'>
      {
          filteredProducts?.slice(0, MAX_BOOKS).map(book => {
            return (
              <li key={book?.isbn} onClick={() => handleClickBook(book)}>
                <img src={book?.cover} alt={`${book.title} cover`} />
              </li>
            )
          })
        }
    </ul>
  )
}
