import { booksContext } from '@context/constants'
import { useContext } from 'react'

export function useBooks () {
  const { books, filterBooksByGenre, getLocalStorageBooks } = useContext(booksContext)
  return { books, filterBooksByGenre, getLocalStorageBooks }
}
