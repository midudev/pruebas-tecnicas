import type { Book, BookISBN } from "~/types"

import { $, component$, useStore } from "@builder.io/qwik"
import type { DocumentHead } from "@builder.io/qwik-city"
import { BooksList } from "~/components/BooksList"
import INITIAL_BOOKS from "~/db/books.json"
import { ReadingList } from "~/components/ReadingList"

export default component$(() => {
  const allBooks: Book[] = INITIAL_BOOKS.library.map(({ book }) => book)

  const readingList: Book[] = useStore([])

  const handleAddBookToReadingList = $((newBookISBN: BookISBN) => {
    const index = allBooks.findIndex(book => book.ISBN === newBookISBN)

    const bookExists = index !== -1
    if (!bookExists) return

    const isAlreadyInReadingList = readingList.some(
      book => book.ISBN === newBookISBN
    )
    if (isAlreadyInReadingList) return

    readingList.push(allBooks[index])
  })

  const handleRemoveBookFromReadingList = $((BookISBN: BookISBN) => {
    const index = readingList.findIndex(book => book.ISBN === BookISBN)

    const bookExists = index !== -1
    if (!bookExists) return

    readingList.splice(index, 1)
  })

  return (
    <section class="relative">
      <BooksList books={allBooks} onBookSelect={handleAddBookToReadingList} />

      <div class="sticky bottom-0 mt-8">
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
