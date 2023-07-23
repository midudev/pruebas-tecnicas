import { getSortingFunction } from "~/helpers/getSortingFunction"
import { saveLocally } from "~/helpers/saveLocally"
import { $, useSignal, useStore } from "@builder.io/qwik"
import type { Book, BookISBN, Filter, Genre } from "~/types"
import { useBroadcastChannel } from "./useBroadcastChannel"

type BCMessageType = "removeBookFromReadingList" | "addBookToReadingList"
type BCMessagePayload = { bookISBN: string }

type BCMessage = { type: BCMessageType; payload: BCMessagePayload }

type Params = {
  initialBooks: Book[]
  initialReadingList: Book[]
}

export const useLibrary = ({ initialBooks, initialReadingList }: Params) => {
  const booksStore = useStore<{ books: Book[] }>({ books: initialBooks })
  const currentFilter = useSignal<Filter>("title")
  const currentGenre = useSignal<Genre>("all")
  const readingList = useStore<{ books: Book[] }>({ books: initialReadingList })

  const { sendMessage } = useBroadcastChannel<BCMessage>(
    "BooksLibraryChannel",
    bcData => {
      const { type: message, payload } = bcData

      console.log(bcData)
      if (message === "removeBookFromReadingList") {
        removeBookFromReadingList(payload.bookISBN)
      }

      if (message === "addBookToReadingList") {
        addBookToReadingList(payload.bookISBN)
      }
    }
  )

  const saveStateLocally = $(() => {
    saveLocally([
      ["__reading_list__", readingList.books],
      ["__books_list__", booksStore.books]
    ])
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

    saveStateLocally()
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

    saveStateLocally()
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

    saveStateLocally()
  })

  const updateFilter = $((filter: Filter) => {
    currentFilter.value = filter
    sortBooks()
  })

  const updateGenre = $((genre: Genre) => {
    currentGenre.value = genre
  })

  return {
    currentGenre: currentGenre.value,
    books: booksStore.books,
    removeBookFromReadingList,
    addBookToReadingList,
    readingList: readingList.books,
    updateFilter,
    updateGenre
  }
}
