/*
    * Con el hook useZustandBookStore,
    * se obtienen las propiedades de la estore para una mejor lectura del código
*/

import { useBookStore } from '../store/booksStore'

export function useZustandBookStore () {
  const books = useBookStore(state => state.books)
  const readingList = useBookStore(state => state.readingList)
  const category = useBookStore(state => state.category)

  const updateBooks = useBookStore(state => state.updateBooks)
  const updateCategory = useBookStore(state => state.updateCategory)

  const addBookToReadingList = useBookStore(state => state.addBookToReadingList)
  const removeToReadingList = useBookStore(state => state.removeToReadingList)

  return {
    books,
    readingList,
    category,

    updateBooks,
    updateCategory,

    addBookToReadingList,
    removeToReadingList
  }
}
