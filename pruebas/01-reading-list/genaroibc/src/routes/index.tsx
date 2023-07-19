import type { Book, BookISBN, Filter } from "~/types"

import { $, component$, useStore } from "@builder.io/qwik"
import type { DocumentHead } from "@builder.io/qwik-city"
import { BooksList } from "~/components/BooksList"
import INITIAL_BOOKS from "~/db/books.json"
import { ReadingList } from "~/components/ReadingList"
import { Filters } from "~/components/Filters"
import { getFilterFunction } from "~/helpers/getFilterFunction"

export default component$(() => {
  const allBooks: Book[] = useStore(
    INITIAL_BOOKS.library.map(({ book }) => ({
      ...book,
      isInReadingList: false
    }))
  )

  const readingList: Book[] = useStore([])

  const handleAddBookToReadingList = $((newBookISBN: BookISBN) => {
    const index = allBooks.findIndex(book => book.ISBN === newBookISBN)

    const bookExists = index !== -1
    if (!bookExists) return

    const isAlreadyInReadingList = readingList.some(
      book => book.ISBN === newBookISBN
    )
    if (isAlreadyInReadingList) return

    const newBook = allBooks[index]

    newBook.isInReadingList = true

    readingList.push(newBook)
  })

  const handleRemoveBookFromReadingList = $((BookISBN: BookISBN) => {
    const index = readingList.findIndex(book => book.ISBN === BookISBN)

    const bookExists = index !== -1
    if (!bookExists) return

    const removedBook = allBooks.find(book => book.ISBN === BookISBN)

    if (removedBook) removedBook.isInReadingList = false

    readingList.splice(index, 1)
  })

  const onFilterChange = $((filter: Filter) => {
    const filterFunction = getFilterFunction(filter)

    allBooks.sort(filterFunction)
  })

  return (
    <section class="relative">
      <Filters onFilterChange={onFilterChange} />
      <BooksList books={allBooks} onBookSelect={handleAddBookToReadingList} />

      <div class="sticky bottom-0 mt-8 z-30">
        <ReadingList
          books={readingList}
          onBookSelect={handleRemoveBookFromReadingList}
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
