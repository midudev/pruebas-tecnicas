import { getSortingFunction } from "~/helpers/getSortingFunction"
import { $, useSignal, useStore, useTask$ } from "@builder.io/qwik"
import type { Book, BookISBN, Filter, Genre } from "~/types"
import { useBroadcastChannel } from "./useBroadcastChannel"
import { LOCAL_STORAGE_KEYS } from "~/constants"
import { useLocalStorage } from "./useLocalStorage"

type BCFiltersUpdateMessage = { type: "sortBooks"; payload: { filter: Filter } }
type BCBooksUpdateMessage = {
  type: "removeBookFromReadingList" | "addBookToReadingList"
  payload: { bookISBN: string }
}
type BCGenreUpdateMessage = {
  type: "updateGenre"
  payload: { genre: Genre }
}

type BCMessage =
  | BCBooksUpdateMessage
  | BCFiltersUpdateMessage
  | BCGenreUpdateMessage

type Params = {
  initialBooks: Book[]
  initialReadingList: Book[]
  initialFilter: Filter
  initialGenre: Genre
}

export const useLibrary = ({
  initialBooks,
  initialReadingList,
  initialGenre,
  initialFilter
}: Params) => {
  const currentFilter = useSignal<Filter>(() => initialFilter)
  const currentGenre = useSignal<Genre>(initialGenre)
  const booksStore = useStore<{ books: Book[] }>({ books: initialBooks })
  const readingList = useStore<{ books: Book[] }>({ books: initialReadingList })
  const { save: saveLocally } = useLocalStorage()

  const { sendMessage } = useBroadcastChannel<BCMessage>(
    "BooksLibraryChannel",
    bcData => {
      const { type: message, payload } = bcData

      if (message === "removeBookFromReadingList") {
        removeBookFromReadingList(payload.bookISBN)
        return
      }

      if (message === "addBookToReadingList") {
        addBookToReadingList(payload.bookISBN)
        return
      }

      if (message === "sortBooks") {
        updateFilter(payload.filter)
        return
      }

      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (message === "updateGenre") {
        updateGenre(payload.genre)
        return
      }
    }
  )

  const saveBooksLocally = $(() => {
    saveLocally([
      [LOCAL_STORAGE_KEYS.readingList, readingList.books],
      [LOCAL_STORAGE_KEYS.books, booksStore.books]
    ])
  })

  const saveFilterLocally = $(() => {
    saveLocally([[LOCAL_STORAGE_KEYS.filter, currentFilter.value]])
  })

  const saveGenreLocally = $(() => {
    saveLocally([[LOCAL_STORAGE_KEYS.genre, currentGenre.value]])
  })

  const addBookToReadingList = $((newBookISBN: BookISBN) => {
    const newBookIndex = booksStore.books.findIndex(
      book => book.ISBN === newBookISBN
    )

    const bookExists = newBookIndex !== -1
    if (!bookExists) return

    const isAlreadyInReadingList = readingList.books.some(
      book => book.ISBN === newBookISBN
    )
    if (isAlreadyInReadingList) return

    const newBook = booksStore.books[newBookIndex]

    newBook.isInReadingList = true

    readingList.books.push(newBook)

    saveBooksLocally()
    sendMessage({
      type: "addBookToReadingList",
      payload: {
        bookISBN: newBookISBN
      }
    })
  })

  const removeBookFromReadingList = $((bookISBN: BookISBN) => {
    const index = readingList.books.findIndex(book => book.ISBN === bookISBN)

    const bookExists = index !== -1
    if (!bookExists) return

    const removedBook = booksStore.books.find(book => book.ISBN === bookISBN)

    if (removedBook) removedBook.isInReadingList = false

    readingList.books.splice(index, 1) // remove book from reading list

    saveBooksLocally()
    sendMessage({
      type: "removeBookFromReadingList",
      payload: {
        bookISBN
      }
    })
  })

  const sortBooks = $(() => {
    const sortingFunction = getSortingFunction(currentFilter.value)

    booksStore.books.sort(sortingFunction)

    saveFilterLocally()
    sendMessage({
      type: "sortBooks",
      payload: {
        filter: currentFilter.value
      }
    })
  })

  const updateFilter = $((filter: Filter) => {
    if (filter === currentFilter.value) return

    currentFilter.value = filter
    sortBooks()
  })

  const updateGenre = $((genre: Genre) => {
    if (genre === currentGenre.value) return
    currentGenre.value = genre

    saveGenreLocally()
    sendMessage({
      type: "updateGenre",
      payload: {
        genre: currentGenre.value
      }
    })
  })

  useTask$(() => {
    sortBooks() // sort books in the first render
  })

  return {
    currentGenre: currentGenre.value,
    currentFilter: currentFilter.value,
    books: booksStore.books,
    removeBookFromReadingList,
    addBookToReadingList,
    readingList: readingList.books,
    updateFilter,
    updateGenre
  }
}
