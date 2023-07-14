import { component$ } from "@builder.io/qwik"
import type { Book } from "~/types"

type Props = {
  books: Book[]
}

export const BooksList = component$(({ books }: Props) => {
  return (
    <section class="grid grid-cols-[repeat(auto-fill,minmax(min(100%,200px),1fr))] gap-6">
      {books.map(({ cover, title, ISBN }) => (
        <article
          key={ISBN}
          class="aspect-[1/1.6] flex flex-col justify-center items-center group brightness-95 grayscale-[0.3] hover:grayscale-0 hover:brightness-110 hover:shadow-lg transition-all duration-300 ease-in-out hover:scale-105"
        >
          <img
            src={cover}
            width={300}
            height={500}
            class="w-full h-full rounded-md"
          />

          <h6 class="whitespace-nowrap truncate max-w-full py-4">{title}</h6>
        </article>
      ))}
    </section>
  )
})
