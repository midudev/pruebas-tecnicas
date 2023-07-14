import type { Book } from "~/types"

import { component$ } from "@builder.io/qwik"
import type { DocumentHead } from "@builder.io/qwik-city"
import { BooksList } from "~/components/BooksList"
import books from "../../../books.json"
import { ReadingList } from "~/components/router-head/ReadingList"

export default component$(() => {
  const mappedBooks: Book[] = books.library.map(({ book }) => book)

  return (
    <section class="relative">
      <BooksList books={mappedBooks} />

      <div class="sticky bottom-0 mt-8">
        <ReadingList books={mappedBooks} />
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
