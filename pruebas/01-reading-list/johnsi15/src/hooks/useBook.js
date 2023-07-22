import { useEffect, useState } from 'react'
import { useBookStore } from '../store/bookStore'

export function useBook () {
  const booksStore = useBookStore(state => state.books)
  const readingList = useBookStore(state => state.readingList)
  const genres = useBookStore(state => state.genres)

  const [genre, setGenres] = useState('All')
  const [books, setBooks] = useState(booksStore)

  useEffect(() => {
    if (genre !== 'All') {
      const filteredBooks = booksStore.filter(book => book.genre === genre)
      setBooks(filteredBooks)
    } else {
      setBooks(booksStore)
    }
  }, [genre, booksStore])

  const filterByGenre = (genre) => {
    setGenres(genre)
  }

  return { books, readingList, genres, genre, filterByGenre }
}
