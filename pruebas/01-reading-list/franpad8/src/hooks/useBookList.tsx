import { useEffect, useState } from 'react'
import { type Book } from '../types.d'

function useBookList (books: Book[]) {
  const [bookList, setBookList] = useState<Book[]>([])

  function setBookListFromStorage () {
    const ids = window.localStorage.getItem('bookList')?.split(',')
    if (ids === null || ids === undefined) return

    const list: Book[] = ids
      .map(id => books.find(book => book.ISBN === id))
      .filter(book => book !== undefined) as Book[]
    setBookList(list)
  }

  useEffect(() => {
    window.addEventListener('storage', setBookListFromStorage)
    setBookListFromStorage()
  }, [])

  function addToBookList (book: Book) {
    const newBookList = [...bookList, book]
    window.localStorage.setItem('bookList', newBookList.map(book => book.ISBN).join(','))
    setBookList(newBookList)
  }

  function removeFromBookList (bookToRemove: Book): void {
    const newBookList = bookList.filter(book => book.ISBN !== bookToRemove.ISBN)
    window.localStorage.setItem('bookList', newBookList.map(book => book.ISBN).join(','))
    setBookList(newBookList)
  }

  return { bookList, addToBookList, removeFromBookList }
}

export default useBookList
