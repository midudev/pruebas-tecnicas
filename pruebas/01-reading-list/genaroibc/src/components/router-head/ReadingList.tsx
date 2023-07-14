import { component$ } from "@builder.io/qwik"
import type { Book } from "~/types"

type Props = {
  books: Book[]
}

export const ReadingList = component$(({ books }: Props) => {
  return (
    <aside class="bg-slate-950 p-4">
      <ul class="flex items-center gap-2 group/list w-fit">
        {books.map((book, index) => (
          <li
            key={book.ISBN}
            class="aspect-[1/1.6] group"
            style={{
              transform: `translateX(-${1.8 * index}rem)`
            }}
          >
            <img
              src={book.cover}
              alt={book.title}
              width={300}
              height={500}
              class="h-full shadow-2xl group-hover/list:grayscale-[1] group-hover/list:brightness-75 hover:!grayscale-0 hover:!brightness-110 group-hover:-translate-x-5 transition-all duration-300"
            />
          </li>
        ))}
      </ul>
    </aside>
  )
})
