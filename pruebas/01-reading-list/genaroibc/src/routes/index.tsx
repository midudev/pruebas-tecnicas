import type { Book, BookISBN, Filter, Genre } from "~/types"

import { $, component$, useSignal, useStore } from "@builder.io/qwik"
import type { DocumentHead } from "@builder.io/qwik-city"
import { BooksList } from "~/components/BooksList"
import BOOKS from "~/db/books.json"
import { ReadingList } from "~/components/ReadingList"
import { Filters } from "~/components/Filters"
import { getSortingFunction } from "~/helpers/getSortingFunction"
import { GENRES_DICT } from "~/constants"
import { saveLocally } from "~/helpers/saveLocally"

const INITIAL_BOOKS = BOOKS.library.map(({ book }) => ({
  ...book,
  isInReadingList: false
}))

export default component$(() => {
  const booksStore = useStore<{ books: Book[] }>({ books: INITIAL_BOOKS })
  const currentFilter = useSignal<Filter>("title")
  const currentGenre = useSignal<Genre>("all")

  const readingList: Book[] = useStore([])

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

  const onBookSelect = $((bookISBN: BookISBN) => {
    const bookIsInReadingList = readingList.some(book => book.ISBN === bookISBN)

    if (bookIsInReadingList) {
      removeBookFromReadingList(bookISBN)
    } else {
      addBookToReadingList(bookISBN)
    }
  })

  const sortBooks = $(() => {
    const sortingFunction = getSortingFunction(currentFilter.value)

    booksStore.books.sort(sortingFunction)

    saveStateLocally()
  })

  const filteredByGenre =
    currentGenre.value === "all"
      ? booksStore.books
      : booksStore.books.filter(
          book => book.genre.toLowerCase() === GENRES_DICT[currentGenre.value]
        )

  return (
    <section class="relative">
      <Filters
        onFilterChange={$((filter: Filter) => {
          currentFilter.value = filter
          sortBooks()
        })}
        onGenreChange={$((genre: Genre) => {
          currentGenre.value = genre
        })}
      />

      <BooksList books={filteredByGenre} onBookSelect={onBookSelect} />

      <div class="sticky bottom-0 mt-8 z-30">
        <ReadingList
          books={readingList}
          onBookSelect={removeBookFromReadingList}
        />
      </div>
    </section>
  )
})

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description"
    }
  ]
}
