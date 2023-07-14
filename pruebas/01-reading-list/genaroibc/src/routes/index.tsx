import type { Book } from "~/types"

import { component$ } from "@builder.io/qwik"
import type { DocumentHead } from "@builder.io/qwik-city"
import { BooksList } from "~/components/BooksList"
import books from "../../../books.json"

export default component$(() => {
  const mappedBooks: Book[] = books.library.map(({ book }) => book)

  return (
    <>
      <BooksList books={mappedBooks} />
    </>
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
