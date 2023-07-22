import { getSortingFunction } from "~/helpers/getSortingFunction"
import { saveLocally } from "~/helpers/saveLocally"
import { $, useSignal, useStore } from "@builder.io/qwik"
import type { Book, BookISBN, Filter, Genre } from "~/types"

type Params = {
  initialBooks: Book[]
  initialReadingList: Book[]
}

export const useLibrary = ({ initialBooks, initialReadingList }: Params) => {
  const booksStore = useStore<{ books: Book[] }>({ books: initialBooks })
  const currentFilter = useSignal<Filter>("title")
  const currentGenre = useSignal<Genre>("all")
  const readingList: Book[] = useStore(initialReadingList)

  const saveStateLocally = $(() => {
    saveLocally([
      ["__reading_list__", readingList],
      ["__books_list__", booksStore.books]
    ])
  })

  const addBookToReadingList = $((newBookISBN: BookISBN) => {
    const newBookIndex = booksStore.books.findIndex(
      book => book.ISBN === newBookISBN
    )

    const bookExists = newBookIndex !== -1
    if (!bookExists) return

    const isAlreadyInReadingList = readingList.some(
      book => book.ISBN === newBookISBN
    )
    if (isAlreadyInReadingList) return

    const newBook = booksStore.books[newBookIndex]

    newBook.isInReadingList = true

    readingList.push(newBook)

    saveStateLocally()
  })

  const removeBookFromReadingList = $((BookISBN: BookISBN) => {
    const index = readingList.findIndex(book => book.ISBN === BookISBN)

    const bookExists = index !== -1
    if (!bookExists) return

    const removedBook = booksStore.books.find(book => book.ISBN === BookISBN)

    if (removedBook) removedBook.isInReadingList = false

    readingList.splice(index, 1) // remove book from reading list

    saveStateLocally()
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
    readingList,
    updateFilter,
    updateGenre
  }
}
