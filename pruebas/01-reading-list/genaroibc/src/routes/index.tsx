import type { Book, BookISBN } from "~/types"

import { $, component$, useStore } from "@builder.io/qwik"
import type { DocumentHead } from "@builder.io/qwik-city"
import { BooksList } from "~/components/BooksList"
import INITIAL_BOOKS from "../../../books.json"
import { ReadingList } from "~/components/ReadingList"

export default component$(() => {
  const allBooks: Book[] = INITIAL_BOOKS.library.map(({ book }) => book)

  const readingList: Book[] = useStore([])

  const updateReadingList = $((newBookISBN: BookISBN) => {
    const index = allBooks.findIndex(book => book.ISBN === newBookISBN)

    const bookExists = index !== -1
    if (!bookExists) return

    const isAlreadyInReadingList = readingList.some(
      book => book.ISBN === newBookISBN
    )
    if (isAlreadyInReadingList) return

    readingList.push(allBooks[index])
  })

  return (
    <section class="relative">
      <BooksList books={allBooks} onBookSelect={updateReadingList} />

      <div class="sticky bottom-0 mt-8">
        <ReadingList books={readingList} />
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
