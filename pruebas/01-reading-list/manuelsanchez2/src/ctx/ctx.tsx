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
import { type Book } from '~/types/types'

import debugFactory from 'debug'
import { DEFAULT_GENRE } from '~/constants/constants'

const debug = debugFactory('ctx/BookStore')

interface Filters {
  genre: string
  title: string
  numberOfPages: number
  isReadingListSorted: boolean
}

interface BookStore {
  books: Signal<Book[]>
  booksWithUserPreferences: Signal<Book[]>
  filters: Filters
}

const STORE_ID = 'books-reading-list'
const BookContext = createContextId<BookStore>(STORE_ID)

export const useProvideGlobalState = () => {
  const books = useSignal<Book[]>([])
  const booksWithUserPreferences = useSignal<Book[]>([])
  const filters = useStore<Filters>({
    genre: DEFAULT_GENRE,
    title: '',
    numberOfPages: 750,
    isReadingListSorted: false,
  })

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
          booksWithUserPreferences.value = parsedReadingList
          debug('There are some books in the local storage')
        } else {
          booksWithUserPreferences.value = books.value
          console.log(booksWithUserPreferences.value)
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
    track(booksWithUserPreferences)

    localStorage.setItem(
      STORE_ID,
      JSON.stringify(booksWithUserPreferences.value)
    )
  })

  const store = useStore({
    books,
    booksWithUserPreferences,
    filters,
  })

  useContextProvider(BookContext, store)
}

export const useGlobalState = () => {
  return useContext(BookContext)
}
