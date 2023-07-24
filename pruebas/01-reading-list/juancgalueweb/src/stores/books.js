import { create } from 'zustand'

export const useBooksStore = create((set, get) => ({
  books: [],
  copyBooks: [],
  readingList: [],
  categories: [],
  selectedCategory: 'Todos',
  setBooks: async () => {
    try {
      const response = await fetch('./src/data/books.json')
      if (!response.ok) throw new Error('Fallo al cargar la data')
      const jsonData = await response.json()
      const { library } = jsonData
      const books = library.map((item) => item.book)
      set({ books })
      set({ copyBooks: books })
    } catch (error) {
      console.log('Error al cargar los libros')
    }
  },
  setReadingList: (bookId) => {
    const { copyBooks, readingList } = get()
    // Encontrar el libro al que se le hizo click en el arreglo de books
    const findClickedBook = copyBooks.find((book) => book.ISBN === bookId)
    // Si encontramos el libro al que se le hace click, actualizamos los estados
    if (findClickedBook) {
      set({ readingList: [...readingList, findClickedBook] })
      set({ copyBooks: copyBooks.filter((book) => book.ISBN !== bookId) })
    }
  },
  removeFromReadingList: (bookId) => {
    const { copyBooks, readingList } = get()
    // Encontrar el libro a remover de la readingList
    const bookToRemove = readingList.find((book) => book.ISBN === bookId)
    // Si encontramos el libro en el readingList, actualizamos los estados
    if (bookToRemove) {
      const updatedReadingList = readingList.filter(
        (book) => book.ISBN !== bookId
      )
      set({ readingList: updatedReadingList })
      set({ copyBooks: [...copyBooks, bookToRemove] })
    }
  },
  setCategories: () => {
    const { books } = get()
    const getCategories = books.map((book) => book.genre)
    const uniqueCategories = [...new Set(getCategories), 'Todos']
    const sortedCategories = uniqueCategories.sort((a, b) => {
      if (a === 'Todos') return -1
      if (b === 'Todos') return 1
      return 0
    })
    set({ categories: sortedCategories })
  },
  booksBySelectedCategory: (value) => {
    const { readingList, books } = get()
    // Función para obtener la lista de libros que no están en readingList
    const getBooksNotInReadingList = (books, readingList) => {
      return books.filter((book) => {
        return !readingList.some(
          (readingBook) => readingBook.ISBN === book.ISBN
        )
      })
    }

    if (value === 'Todos') {
      const newBooks = getBooksNotInReadingList(books, readingList)
      console.log('newBooks', newBooks)
      set({ copyBooks: newBooks })
      return
    }

    const booksToBeFiltered = getBooksNotInReadingList(books, readingList)
    const filteredBooks = booksToBeFiltered.filter(
      (book) => book.genre === value
    )
    set({ copyBooks: filteredBooks })
  },
  setSelectedCategory: (value) => set({ selectedCategory: value })
}))
