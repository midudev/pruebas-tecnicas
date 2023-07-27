import { create } from 'zustand'
import { useBooksStore } from './books'

export const useSearchBooks = create((set, get) => ({
  search: '',
  searchedBooks: [],
  setSearch: (input) => set({ search: input }),
  searchBooks: () => {
    const { copyBooks } = useBooksStore.getState()
    const { search } = get()
    // Buscar en el arreglo de copyBooks los libros cuyo título contenga el texto de búsqueda (search)
    const filteredBooks = copyBooks.filter((book) =>
      book.title.toLowerCase().includes(search.toLowerCase())
    )

    // Actualizar el estado searchedBooks con los resultados de la búsqueda
    set({ searchedBooks: filteredBooks })
  },
  removeBookFromSearchedBooks: (bookId) => {
    // Esta función es para cuando se agrega el libro al readingList
    const { searchedBooks } = get()
    const findClickedBook = searchedBooks.find((book) => book.ISBN === bookId)
    if (findClickedBook) {
      set({
        searchedBooks: searchedBooks.filter((book) => book.ISBN !== bookId)
      })
    }
  },
  addAgainBookToSearchedBooks: (bookId) => {
    // Esta función es para cuando se elimina el libro del readingList
    const { copyBooks, selectedCategory } = useBooksStore.getState()
    const { searchedBooks } = get()
    const bookRemovedFromReadingList = copyBooks.find(
      (book) => book.ISBN === bookId
    )
    if (bookRemovedFromReadingList) {
      if (selectedCategory === 'Todos') {
        set({ searchedBooks: [...searchedBooks, bookRemovedFromReadingList] })
        return
      }
      if (
        selectedCategory !== 'Todos' &&
        selectedCategory !== bookRemovedFromReadingList.genre
      ) {
        return
      }
      set({ searchedBooks: [...searchedBooks, bookRemovedFromReadingList] })
    }
  }
}))
