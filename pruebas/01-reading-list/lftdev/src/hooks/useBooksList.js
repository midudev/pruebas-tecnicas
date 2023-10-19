import useLocalStorage from './useLocalStorage'

export default function useBooksList (booksList) {
  const [availableBooks, setAvailableBooks] = useLocalStorage('availableBooks', booksList)

  const addToAvailables = (book) => Array.isArray(book)
    ? setAvailableBooks(book)
    : setAvailableBooks(availableBooks.toSpliced(availableBooks.length, 1, book))

  const removeFromAvailables = (book) => setAvailableBooks(availableBooks.filter(item => item !== book))
  return [
    availableBooks,
    addToAvailables,
    removeFromAvailables
  ]
}
