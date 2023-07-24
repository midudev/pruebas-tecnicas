import { type PropFunction, component$ } from "@builder.io/qwik"
import { pluralize } from "~/helpers/pluralize"
import type { Book, BookISBN } from "~/types"

type Props = {
  books: Book[]
  onBookSelect: PropFunction<(BookISBN: BookISBN) => void>
}

export const ReadingList = component$(({ books, onBookSelect }: Props) => {
  const booksCount = pluralize("book", books.length)

  return (
    <aside class="bg-blue-950 px-8 p-4 max-w-full overflow-auto">
      <ul
        style={books.length > 0 ? { width: 0 } : undefined}
        class="flex items-center gap-2 group/list"
      >
        {books.length === 0 ? (
          <li>
            <NoBooksMessage />
          </li>
        ) : (
          books.map((book, index) => (
            <li
              key={book.ISBN}
              class="aspect-[1/1.6] group"
              style={{
                transform: `translateX(-${1.8 * index}rem)`
              }}
            >
              <button onClick$={() => onBookSelect(book.ISBN)} class="w-28">
                <img
                  src={book.cover}
                  alt={book.title}
                  width={300}
                  height={500}
                  class="h-full shadow-2xl group-hover/list:grayscale-[1] group-hover/list:brightness-75 hover:!grayscale-0 hover:!brightness-110 group-hover:-translate-x-5 transition-all duration-300"
                />
              </button>
            </li>
          ))
        )}
      </ul>

      <p>
        <span class="text-white">{booksCount} in reading list</span>
      </p>
    </aside>
  )
})

const NoBooksMessage = component$(() => {
  return (
    <div class="py-8">
      <p class="text-2xl font-bold text-white mb-4">
        No books in your reading list
      </p>

      <p class="text-white">
        Add books to your reading list by clicking or dragging and dropping them
      </p>
    </div>
  )
})
