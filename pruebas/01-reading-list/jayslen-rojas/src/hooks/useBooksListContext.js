import { useContext, useEffect } from 'react'
import { BookListContext } from '../context/BookListContex'
import { BooksContext } from '../context/BooksContext'

export function UseBookContext () {
  const { bookList, updateBookList } = useContext(BookListContext)
  const { storage, updateStorageState } = useContext(BooksContext)

  const { updateBooks } = useContext(BooksContext)

  const addBook = ({ book }) => {
    updateBooks({ isSaved: true, book })
    updateBookList({ value: [...bookList, book] })
  }

  const removeBook = ({ book }) => {
    updateBooks({ isSaved: false, book })
    const newBookList = bookList.filter(item => item.ISBN !== book.ISBN)
    updateBookList({ value: newBookList })
  }

  const clearList = () => {
    const mappedItems = []
    const newBookList = [...storage]
    for (let i = 0; i < newBookList.length; i++) {
      newBookList[i].book.isSaved = false
      mappedItems.push(newBookList[i])
    }
    updateStorageState({ value: mappedItems })
    updateBookList({ value: [] })
    localStorage.setItem('books-storage', JSON.stringify(mappedItems))
  }

  // sincronizacion del carrito entre pestana

  useEffect(() => {
    localStorage.setItem('list-books', JSON.stringify(bookList))
  }, [bookList])

  useEffect(() => {
    const bookListInStorage = JSON.parse(localStorage.getItem('list-books'))
    if (bookListInStorage) {
      updateBookList({ value: bookListInStorage })
    }

    const handleStorageChange = (event) => {
      if (event.key === 'list-books') {
        updateBookList({ value: JSON.parse(event.newValue) })
      }
    }

    window.addEventListener('storage', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  return { bookList, addBook, removeBook, clearList, updateBookList }
}
