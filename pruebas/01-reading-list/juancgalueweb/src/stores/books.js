import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const URL = import.meta.env.PROD
  ? 'https://pruebas-tecnicas-01-reading-list-juancgalueweb.vercel.app/'
  : 'http://localhost:5173/'

const fileName = 'books.json'

export const useBooksStore = create(
  persist(
    (set, get) => ({
      books: [],
      copyBooks: [],
      readingList: [],
      copyReadingList: [],
      categories: [],
      selectedCategory: 'Todos',
      maxPage: null,
      minPage: null,
      sliderValue: null,
      setBooks: async () => {
        try {
          const response = await fetch(`${URL}/${fileName}`)
          if (!response.ok) throw new Error('Fallo al cargar la data')
          const jsonData = await response.json()
          const { library } = jsonData
          const books = library.map((item) => item.book)
          const booksPages = books.map((book) => book.pages)
          set({ books })
          set({ copyBooks: books })
          set({ maxPage: Math.max(...booksPages) })
          set({ minPage: Math.min(...booksPages) })
          const { maxPage } = get()
          set({ sliderValue: maxPage })
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
          if (
            !Object.prototype.hasOwnProperty.call(findClickedBook, 'priority')
          ) {
            findClickedBook.priority = null
          }
          set({ readingList: [...readingList, findClickedBook] })
          set({ copyReadingList: [...readingList, findClickedBook] })
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
          set({ copyReadingList: updatedReadingList })
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
      booksFilter: (genre, pageNumber) => {
        const { readingList, books } = get()
        // Función para obtener la lista de libros que no están en readingList
        const getBooksNotInReadingList = (books, readingList) => {
          return books.filter((book) => {
            return !readingList.some(
              (readingBook) => readingBook.ISBN === book.ISBN
            )
          })
        }

        // Obtener la lista de libros que no están en readingList
        let filteredBooks = getBooksNotInReadingList(books, readingList)

        // Filtrar por género si el valor no es 'Todos'
        if (genre !== 'Todos') {
          filteredBooks = filteredBooks.filter((book) => book.genre === genre)
        }

        // Filtrar por número de páginas
        filteredBooks = filteredBooks.filter((book) => book.pages <= pageNumber)

        set({ copyBooks: filteredBooks })
      },
      setSelectedCategory: (value) => set({ selectedCategory: value }),
      setSliderValue: (value) => set({ sliderValue: value }),
      modifyReadingListWithPriorities: (rate, bookId) => {
        const { readingList, books } = get()
        const updatedReadingList = readingList.map((book) => {
          if (book.ISBN === bookId) {
            return { ...book, priority: rate }
          }
          return book
        })
        const modifiedOriginalBooks = books.map((book) => {
          if (book.ISBN === bookId) {
            return { ...book, priority: rate }
          }
          return book
        })
        set({ readingList: updatedReadingList })
        set({ copyReadingList: updatedReadingList })
        set({ books: modifiedOriginalBooks })
      },
      sortReadingListByPriority: (checked) => {
        const { readingList, copyReadingList } = get()
        if (checked) {
          const sortedList = readingList.toSorted((a, b) => {
            return b.priority - a.priority
          })
          set({ readingList: sortedList })
        } else {
          set({ readingList: copyReadingList })
        }
      }
    }),
    {
      name: 'reading-list-midudev-test'
    }
  )
)
