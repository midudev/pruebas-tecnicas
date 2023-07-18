import { useContext } from 'react'
import { BookListContext } from '../context/BookListContex'
import { BooksContext } from '../context/BooksContext'

export function UseBookContext () {
  const { bookList, updateBookList } = useContext(BookListContext)
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

  return { bookList, addBook, removeBook }
}
