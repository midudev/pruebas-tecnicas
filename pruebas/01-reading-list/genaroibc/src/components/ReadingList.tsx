import type { PropFunction } from "@builder.io/qwik"
import { component$, useSignal, useVisibleTask$, useId } from "@builder.io/qwik"
import { pluralize } from "~/helpers/pluralize"
import type { Book, BookISBN } from "~/types"
import { IconCirclePlus, IconLibraryOutlined } from "./shared/Icons"

type Props = {
  books: Book[]
  onBookSelect: PropFunction<(BookISBN: BookISBN) => void>
  onDrop: PropFunction<(bookISBN: BookISBN) => void>
}

export const ReadingList = component$(
  ({ books, onBookSelect, onDrop }: Props) => {
    const isDraggingOver = useSignal(false)

    const booksAvailabilityMessage = pluralize("libro", books.length)

    const readingListId = useId()

    useVisibleTask$(() => {
      const readingList = document.getElementById(readingListId)

      if (!readingList) return

      window.addEventListener("dragenter", (event: DragEvent) => {
        event.preventDefault()
        event.stopPropagation()

        isDraggingOver.value = true
      })

      window.addEventListener("dragover", (event: DragEvent) => {
        event.preventDefault()
        event.stopPropagation()

        isDraggingOver.value = true
      })

      window.addEventListener("drop", (event: DragEvent) => {
        isDraggingOver.value = false

        const eventTarget = event.target as HTMLElement | null

        if (!eventTarget) return

        if (
          eventTarget.matches(`#${readingListId}`) ||
          eventTarget.matches(`#${readingListId} *`)
        ) {
          const bookISBN = event.dataTransfer?.getData("text/plain")

          if (!bookISBN) return
          onDrop(bookISBN)
        }
      })
    })

    return (
      <aside
        id={readingListId}
        class={`bg-slate-950 text-white px-4 md:px-8 py-6 max-w-full overflow-auto ${
          isDraggingOver.value
            ? "outline-dashed outline-2 outline-blue-200 bg-slate-800"
            : ""
        }`}
      >
        <div class="max-w-7xl mx-auto">
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
            {books.map((book, index) => (
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
            ))}

            {books.length === 0 && !isDraggingOver.value && (
              <li>
                <NoBooksMessage />
              </li>
            )}

            {isDraggingOver.value && (
              <li
                class="aspect-[1/1.4] group outline-dashed outline-2 outline-blue-400 rounded-md"
                style={{
                  transform: `translateX(-${1.8 * books.length}rem)`
                }}
              >
                <p class="w-28 aspect-[1/1.4] grid place-content-center font-medium text-white p-2 leading-6 bg-slate-900 text-center rounded-md">
                  <span aria-hidden aria-label="drop to add the book">
                    <IconCirclePlus size={50} />
                  </span>
                </p>
              </li>
            )}
          </ul>
        </div>
      </aside>
    )
  }
)

const NoBooksMessage = component$(() => {
  return (
    <p class="w-28 aspect-[1/1.4] h-full grid place-content-center font-medium text-white p-2 leading-6 bg-slate-900 text-center rounded-md">
      No hay libros aún. Añade alguno!
    </p>
  )
})
