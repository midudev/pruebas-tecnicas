import {
  type Signal,
  createContextId,
  useContext,
  useContextProvider,
  useSignal,
  useStore,
  useVisibleTask$,
  useTask$,
} from '@builder.io/qwik'
import { fetchBooks } from '~/api/fetchBooks'
import { StoredBook, type Book } from '~/types/types'

import debugFactory from 'debug'

const debug = debugFactory('ctx/BookStore')

interface BookStore {
  books: Signal<Book[]>
  booksWithUserPreferences: Signal<Book[]>
  readingList: Signal<Book[]>
}

const STORE_ID = 'books-reading-list'
const BookContext = createContextId<BookStore>(STORE_ID)

export const useProvideGlobalState = () => {
  const books = useSignal<Book[]>([])

  const booksWithUserPreferences = useSignal<Book[]>([])

  const readingList = useSignal<Book[]>([])

  // Solo se ejecuta una vez, al cargar la página
  // Nos traemos todos los libros y vamos a guardarlos en el estado de dos variables
  // books y booksWithUserPreferences (la original no la vamos a tocar)
  useTask$(async () => {
    try {
      const fetchedBooks = await fetchBooks()
      books.value = fetchedBooks
      booksWithUserPreferences.value = fetchedBooks
    } catch (error) {
      console.error(error)
    }
  })

  // Aquí recuperamos la información del localStorage
  // sobre preferencias del usuario y la mergeamos con los libros
  useVisibleTask$(() => {
    const getBooksFromLocalStorage = () => {
      try {
        const storedReadingList = localStorage.getItem(STORE_ID)

        if (storedReadingList) {
          const parsedReadingList = JSON.parse(storedReadingList)

          // Merge fetchedBooks with parsedReadingList
          const mergedBooks = booksWithUserPreferences.value.map((book) => {
            // Find the book in the parsedReadingList
            const storedBook = parsedReadingList.find(
              (storedBook: StoredBook) => storedBook.title === book.title
            )

            // If the book is found in the parsedReadingList, replace the priority and isInReadingList values
            if (storedBook) {
              return {
                ...book,
                priority: storedBook.priority,
                isInReadingList: storedBook.isInReadingList,
              }
            }

            // If the book is not found in the parsedReadingList, return the book as is
            return book
          })

          booksWithUserPreferences.value = mergedBooks
          debug('There are some books in the local storage')
        } else {
          debug('There are no books in the local storage')
        }
      } catch (error) {
        console.error('An error occurred while fetching books', error)
        booksWithUserPreferences.value = []
      }
    }

    getBooksFromLocalStorage()

    window.addEventListener('storage', getBooksFromLocalStorage)

    return () => {
      window.removeEventListener('storage', getBooksFromLocalStorage)
    }
  })

  // Se ejecuta cada vez que se modifica el estado de los libros
  // y actualiza el localStorage
  useVisibleTask$(({ track }) => {
    track(booksWithUserPreferences) // track the booksWithUserPreferences signal

    readingList.value = booksWithUserPreferences.value.filter(
      (book) => book.isInReadingList
    )

    const booksToStore = readingList.value.map((book) => ({
      id: book.id,
      title: book.title,
      priority: book.priority, // assuming 'priority' is a property of your Book type
      isInReadingList: book.isInReadingList,
      cover: book.cover,
    }))

    localStorage.setItem(STORE_ID, JSON.stringify(booksToStore))
    debug('These are all the books on the reading list', booksToStore)
  })

  const store = useStore({
    books,
    booksWithUserPreferences,
    readingList,
  })

  useContextProvider(BookContext, store)
}

export const useGlobalState = () => {
  return useContext(BookContext)
}
