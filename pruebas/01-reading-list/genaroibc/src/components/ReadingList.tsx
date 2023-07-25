import type { PropFunction, QwikDragEvent } from "@builder.io/qwik"
import { component$, useSignal, $ } from "@builder.io/qwik"
import { pluralize } from "~/helpers/pluralize"
import type { Book, BookISBN } from "~/types"
import { IconLibraryOutlined } from "./shared/Icons"

type Props = {
  books: Book[]
  onBookSelect: PropFunction<(BookISBN: BookISBN) => void>
}

export const ReadingList = component$(({ books, onBookSelect }: Props) => {
  const isDraggingOver = useSignal(false)

  const booksAvailabilityMessage = pluralize("libro", books.length)

  const onDragEnterOrOver = $((event: QwikDragEvent) => {
    // @ts-ignore
    event.preventDefault()
    isDraggingOver.value = true
  })

  return (
    <aside
      class={`bg-black text-white px-4 md:px-8 py-6 max-w-full overflow-auto ${
        isDraggingOver.value
          ? "outline-dashed outline-2 outline-blue-200 bg-zinc-950"
          : ""
      }`}
      onDragEnter$={onDragEnterOrOver}
      onDragOver$={onDragEnterOrOver}
      onDragLeave$={event => {
        // @ts-ignore
        event.preventDefault?.()
        isDraggingOver.value = false
      }}
      onDrop$={event => {
        const bookISBN = event.dataTransfer.getData("text/plain")

        onBookSelect(bookISBN)
        isDraggingOver.value = false
      }}
    >
      <p class="flex items-center gap-2 font-bold text-xl mb-4">
        <IconLibraryOutlined size={34} />
        <span>Lista de lectura</span>
        <span class="mx-2">|</span>
        <span class="text-blue-500">{books.length}</span>
        <span>{booksAvailabilityMessage}</span>
      </p>

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
              class="aspect-[1/1.4] group"
              style={{
                transform: `translateX(-${1.8 * index}rem)`
              }}
            >
              <button
                onClick$={() => onBookSelect(book.ISBN)}
                class="w-28 h-full"
              >
                <img
                  src={book.cover}
                  alt={book.title}
                  width={300}
                  height={500}
                  class="h-full w-full shadow-2xl group-hover/list:grayscale-[1] group-hover/list:brightness-75 hover:!grayscale-0 hover:!brightness-110 group-hover:-translate-x-5 transition-all duration-300 rounded-md"
                />
              </button>
            </li>
          ))
        )}

        {isDraggingOver.value && (
          <li
            class="aspect-[1/1.4] group"
            style={{
              transform: `translateX(-${1.8 * books.length}rem)`
            }}
          >
            <p class="w-28 aspect-[1/1.4] grid place-content-center font-medium text-white p-2 leading-6 bg-slate-900 text-center rounded-md">
              No hay libros aún. Añade alguno!
            </p>
          </li>
        )}
      </ul>
    </aside>
  )
})

const NoBooksMessage = component$(() => {
  return (
    <p class="w-28 aspect-[1/1.4] h-full grid place-content-center font-medium text-white p-2 leading-6 bg-slate-900 text-center rounded-md">
      No hay libros aún. Añade alguno!
    </p>
  )
})
