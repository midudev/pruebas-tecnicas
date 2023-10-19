import { useUserLists } from '../store/userLists'
import { useContext } from 'react'
import { BooksContext } from '../context/books'

export function useBooks() {
  const { books } = useContext(BooksContext)
  const lists = useUserLists(state => state.lists)

  const booksInLists = []
  lists.forEach(list => {
    list.books.forEach(book => {
      booksInLists.push(book.ISBN)
    })
  })

  return { books, booksInLists }
}
