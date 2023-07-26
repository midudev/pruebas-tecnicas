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
import { DEFAULT_GENRE } from '~/constants/constants'

import debugFactory from 'debug'

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
const FILTERS_ID = 'filters'

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

  // It is only once executed when the app is loaded
  // We fetch the books from the API and create also booksWithUserPreferences,
  // which is the one we will use to store the user preferences
  useTask$(async () => {
    try {
      const fetchedBooks = await fetchBooks()
      books.value = fetchedBooks
      booksWithUserPreferences.value = fetchedBooks
    } catch (error) {
      console.error(error)
    }
  })

  // Get books with our preferences from local storage
  // + update other tabs when reading list will change
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

  // Get filter preferences from local storage
  // + update other tabs when filters will change
  useVisibleTask$(() => {
    const getStoredFilters = () => {
      const storedFilters = localStorage.getItem(FILTERS_ID)

      if (storedFilters) {
        const parsedFilters = JSON.parse(storedFilters)
        filters.genre = parsedFilters.genre
        filters.title = parsedFilters.title
        filters.numberOfPages = parsedFilters.numberOfPages
        filters.isReadingListSorted = parsedFilters.isReadingListSorted
      }
    }

    getStoredFilters()

    window.addEventListener('storage', getStoredFilters)

    return () => {
      window.removeEventListener('storage', getStoredFilters)
    }
  })

  // Update local storage when reading list or filters will change
  useVisibleTask$(({ track }) => {
    track(booksWithUserPreferences)
    track(filters)

    localStorage.setItem(
      STORE_ID,
      JSON.stringify(booksWithUserPreferences.value)
    )

    localStorage.setItem(FILTERS_ID, JSON.stringify(filters))
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
