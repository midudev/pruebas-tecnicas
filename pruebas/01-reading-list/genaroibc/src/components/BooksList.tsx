import { component$, type PropFunction } from "@builder.io/qwik"
import type { Book, BookISBN } from "~/types"
import { IconBookmarkFilled, IconBookmarkPlus } from "./shared/Icons"

type Props = {
  books: Book[]
  onBookSelect: PropFunction<(BookISBN: BookISBN) => void>
}

export const BooksList = component$(({ books, onBookSelect }: Props) => {
  return (
    <section class="grid grid-cols-[repeat(auto-fill,minmax(min(100%,200px),1fr))] gap-6">
      {books.map(
        ({ cover, title, ISBN, isInReadingList, genre, pages, year }) => (
          <article
            key={ISBN}
            class="aspect-[1/1.6] flex flex-col justify-center items-center group brightness-95 grayscale-[0.3] hover:grayscale-0 hover:brightness-110 hover:shadow-lg transition-all duration-300 ease-in-out hover:scale-105 text-white"
          >
            {isInReadingList ? (
              <span class="absolute top-2 right-2">
                <IconBookmarkFilled size={32} />
              </span>
            ) : (
              <span class="absolute top-2 right-2">
                <IconBookmarkPlus size={32} />
              </span>
            )}

            <h6 class="whitespace-nowrap truncate max-w-full py-4">
              title -- {title}
            </h6>
            <h6 class="whitespace-nowrap truncate max-w-full py-4">
              genre -- {genre}
            </h6>
            <h6 class="whitespace-nowrap truncate max-w-full py-4">
              pages -- {pages}
            </h6>
            <h6 class="whitespace-nowrap truncate max-w-full py-4">
              year -- {year}
            </h6>
            <button
              onClick$={() => onBookSelect(ISBN)}
              class="w-full h-full rounded-md"
            >
              <img src={cover} width={300} height={500} />
            </button>
          </article>
        )
      )}
    </section>
  )
})
