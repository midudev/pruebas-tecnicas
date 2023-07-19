import type { Book, BookISBN, Filter, Genre } from "~/types"

import { $, component$, useSignal, useStore } from "@builder.io/qwik"
import type { DocumentHead } from "@builder.io/qwik-city"
import { BooksList } from "~/components/BooksList"
import INITIAL_BOOKS from "~/db/books.json"
import { ReadingList } from "~/components/ReadingList"
import { Filters } from "~/components/Filters"
import { getSortingFunction } from "~/helpers/getSortingFunction"
import { GENRES_DICT } from "~/constants"

const ALL_BOOKS = INITIAL_BOOKS.library.map(({ book }) => ({
  ...book,
  isInReadingList: false
}))

export default component$(() => {
  const booksStore = useStore<{ books: Book[] }>({ books: ALL_BOOKS })
  const currentFilter = useSignal<Filter>("title")

  const readingList: Book[] = useStore([])

  const sortBooks = $(() => {
    const sortingFunction = getSortingFunction(currentFilter.value)

    booksStore.books.sort(sortingFunction)
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
  })

  const removeBookFromReadingList = $((BookISBN: BookISBN) => {
    const index = readingList.findIndex(book => book.ISBN === BookISBN)

    const bookExists = index !== -1
    if (!bookExists) return

    const removedBook = booksStore.books.find(book => book.ISBN === BookISBN)

    if (removedBook) removedBook.isInReadingList = false

    readingList.splice(index, 1) // remove book from reading list
  })

  const updateFilterAndSortBooks = $((filter: Filter) => {
    currentFilter.value = filter
    sortBooks()
  })

  const filterBooksByGenre = $((genre: Genre) => {
    if (genre === "all") {
      booksStore.books = ALL_BOOKS
      sortBooks()

      return
    }

    const filteredByGenre = ALL_BOOKS.filter(
      book => book.genre.toLowerCase() === GENRES_DICT[genre]
    )

    booksStore.books = filteredByGenre
    sortBooks()
  })

  return (
    <section class="relative">
      <Filters
        onFilterChange={updateFilterAndSortBooks}
        onGenreChange={filterBooksByGenre}
      />
      <BooksList books={booksStore.books} onBookSelect={addBookToReadingList} />

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
