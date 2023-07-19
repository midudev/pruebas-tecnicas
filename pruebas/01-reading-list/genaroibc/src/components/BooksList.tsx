import { component$, type PropFunction } from "@builder.io/qwik"
import type { Book, BookISBN } from "~/types"
import { BookCard } from "./shared/BookCard"

type Props = {
  books: Book[]
  onBookSelect: PropFunction<(BookISBN: BookISBN) => void>
}

export const BooksList = component$(({ books, onBookSelect }: Props) => {
  return (
    <section class="grid grid-cols-[repeat(auto-fill,minmax(min(100%,200px),1fr))] gap-12">
      {books.map(book => (
        <button
          key={book.ISBN}
          onClick$={() => onBookSelect(book.ISBN)}
          class="w-full h-full rounded-md"
        >
          <BookCard {...book} />
        </button>
      ))}
    </section>
  )
})
