import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { type Book } from '../types'

export function useReadList () {
  const { readBooks, setReadBooks } = useContext(AppContext)

  function addBookToList (book: Book): void {
    const existentBook = readBooks.find(item => item.ISBN === book.ISBN)
    if (existentBook === undefined) {
      setReadBooks([...readBooks, book])
    }
  }

  return { readBooks, addBookToList }
}
