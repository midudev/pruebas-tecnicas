import { useContext } from 'react'
import toast from 'react-hot-toast'
import { AppContext } from '../context/AppContext'
import { type Book } from '../types'

export function useReadList () {
  const { readBooks, setReadBooks } = useContext(AppContext)

  function addBookToList (book: Book): void {
    const existentBook = readBooks.find(item => item.ISBN === book.ISBN)
    if (existentBook === undefined) {
      const newState = [...readBooks, book]
      setReadBooks(newState)
      updateLocalStorage(newState)
      toast.success('Libro añadido a la lista', {
        style: {
          background: '#111',
          color: 'white',
          border: '1px solid rgb(255, 60,60)'
        }
      })
    }
  }

  function isBookInList (book: Book): boolean {
    return readBooks.findIndex(item => item.ISBN === book.ISBN) > -1
  }

  function removeBookFromList (book: Book): void {
    const newState = readBooks.filter(item => item.ISBN !== book.ISBN)
    setReadBooks(newState)
    updateLocalStorage(newState)
  }

  return { readBooks, addBookToList, isBookInList, removeBookFromList }
}

function updateLocalStorage (state: Book[]) {
  localStorage.setItem('todo_app_list', JSON.stringify(state))
}
