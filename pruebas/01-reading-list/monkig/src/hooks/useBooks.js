import { useEffect } from 'react'
import jsonData from './../mocks/books.json'
import useLocalStorage from './useLocalStorage'

const parseredBooks = jsonData.library.map(item => item.book)
export default function useBooks () {
  const [availableBooks, setAvailableBooks] = useLocalStorage('availableBooks')

  useEffect(() => {
    if (!availableBooks) {
      setAvailableBooks(parseredBooks)
    }
  }, [])

  // const [filters, setFilters] = useState({ genre: 'any' })

  // const filteredBooksByGenre = (books) => {
  //   return books.filter(book => book.genre !== filters.genre)
  // }

  return { availableBooks, setAvailableBooks }
}
