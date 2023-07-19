import { useContext } from 'react'
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

  return { bookList, addBook, removeBook, clearList }
}
