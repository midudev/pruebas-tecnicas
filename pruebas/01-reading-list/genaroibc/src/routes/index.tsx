import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik"
import type { DocumentHead } from "@builder.io/qwik-city"
import BOOKS from "~/db/books.json"

import { BooksLibrary } from "~/components/BooksLibrary"
import type { Genre, Book, Filter } from "~/types"
import { isValidGenre } from "~/helpers/isValidGenre"
import { isValidFilter } from "~/helpers/isValidFilter"

const INITIAL_BOOKS: Book[] = BOOKS.library.map(({ book }) => ({
  ...book,
  isInReadingList: false
}))

const INITIAL_READING_LIST: Book[] = []

export default component$(() => {
  const readingList = useSignal<Book[]>(INITIAL_READING_LIST)
  const books = useSignal<Book[]>(INITIAL_BOOKS)
  const genre = useSignal<Genre>("all")
  const filter = useSignal<Filter>("title")
  const hasReadLocalStorage = useSignal(false)

  useVisibleTask$(() => {
    const savedBooks = localStorage.getItem("__books_list__")
    if (savedBooks) {
      books.value = JSON.parse(savedBooks)
    }

    const savedReadingList = localStorage.getItem("__reading_list__")
    if (savedReadingList) {
      readingList.value = JSON.parse(savedReadingList)
    }

    const savedGenre = JSON.parse(localStorage.getItem("__genre__") ?? "null")
    if (isValidGenre(savedGenre)) {
      genre.value = savedGenre
    }

    const savedFilter = JSON.parse(localStorage.getItem("__filter__") ?? "null")
    if (isValidFilter(savedFilter)) {
      filter.value = savedFilter
    }

    hasReadLocalStorage.value = true
  })

  return hasReadLocalStorage.value ? (
    <BooksLibrary
      initialBooks={books.value}
      initialReadingList={readingList.value}
      initialGenre={genre.value}
      initialFilter={filter.value}
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
