import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik"
import type { DocumentHead } from "@builder.io/qwik-city"
import BOOKS from "~/db/books.json"

import { BooksLibrary } from "~/components/BooksLibrary"
import type { Book } from "~/types"

const INITIAL_BOOKS: Book[] = BOOKS.library.map(({ book }) => ({
  ...book,
  isInReadingList: false
}))

const INITIAL_READING_LIST: Book[] = []

export default component$(() => {
  const readingList = useSignal<Book[]>(INITIAL_READING_LIST)
  const books = useSignal<Book[]>(INITIAL_BOOKS)
  const hasReadLocalStorage = useSignal(false)

  useVisibleTask$(() => {
    const savedBooks = localStorage.getItem("__books_list__")
    const savedReadingList = localStorage.getItem("__reading_list__")

    if (savedBooks) {
      books.value = JSON.parse(savedBooks)
    }

    if (savedReadingList) {
      readingList.value = JSON.parse(savedReadingList)
    }

    hasReadLocalStorage.value = true
  })

  return hasReadLocalStorage.value ? (
    <BooksLibrary
      initialBooks={books.value}
      initialReadingList={readingList.value}
    />
  ) : (
    <div class="text-5xl text-white w-full flex justify-center items-center h-screen">
      loading...
    </div>
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
