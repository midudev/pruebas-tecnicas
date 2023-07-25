import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik"
import type { Book } from "~/types"
import {
  IconBookOutlined,
  IconBookmarkFilled,
  IconBookmarkPlus,
  IconCalendarOutlined
} from "~/components/shared/Icons"

export const BookCard = component$(
  ({
    cover,
    genre,
    isInReadingList,
    pages,
    title,
    year,
    author,
    ISBN
  }: Book) => {
    const isDragging = useSignal(false)

    useVisibleTask$(() => {
      if (isInReadingList) return

      const el = document.getElementById(ISBN)
      if (!el) return

      el.addEventListener("dragstart", (event: DragEvent) => {
        event.dataTransfer?.setData("text/plain", ISBN)
        isDragging.value = true
      })
      el.addEventListener("dragend", () => (isDragging.value = false))
    })

    return (
      <article
        id={ISBN}
        draggable={!isInReadingList}
        class={`aspect-[1/1.6] group hover:shadow-lg transition-transform duration-300 ease-in-out text-white relative bg-blue-950 rounded-md ${
          isInReadingList
            ? "cursor-pointer"
            : "cursor-grab hover:animate-shake-and-scale"
        } ${isDragging.value ? "opacity-25" : ""}`}
      >
        <div class="relative overflow-hidden rounded-tl-md rounded-tr-md">
          <BookBadge isInReadingList={isInReadingList} />

          <img
            src={cover}
            alt={title}
            width={300}
            height={500}
            class="brightness-95 grayscale-[0.3] group-hover:grayscale-0 group-hover:brightness-110 transition-all duration-300 aspect-[1/1.4] group-hover:scale-110 pointer-events-none"
          />

          <ul class="absolute bottom-0 flex items-center justify-between gap-4 w-full py-1.5 px-3 bg-black/60 text-gray-200">
            <li class="whitespace-nowrap truncate max-w-full text-xs flex items-center gap-1">
              <IconBookOutlined /> {pages}
            </li>

            <li class="whitespace-nowrap truncate max-w-full text-xs flex items-center gap-1">
              <IconCalendarOutlined />
              {year}
            </li>
          </ul>

          <span class="absolute inset-0 shadow-inner group-hover:opacity-0 transition-opacity duration-300" />
        </div>

        <div class="p-4 relative bg-gradient-to-br from-slate-950 to-blue-950 rounded-bl-md rounded-br-md">
          <h6 class="whitespace-nowrap truncate max-w-full my-2 font-bold text-base text-left">
            {title}
          </h6>

          <p class="whitespace-nowrap truncate max-w-full my-2 font-medium text-sm text-left">
            {author.name}
          </p>

          <span class="whitespace-nowrap truncate px-2 py-1 block mt-4 bg-gray-700 text-gray-300 rounded-xl text-xs w-fit">
            {genre.toLocaleLowerCase()}
          </span>
        </div>
      </article>
    )
  }
)

type BadgeProps = {
  isInReadingList: boolean
}

const BookBadge = component$(({ isInReadingList }: BadgeProps) => {
  return (
    <section
      aria-hidden={true}
      class="bg-black/50 p-2 absolute top-1 right-1 z-20 rounded-full"
    >
      {isInReadingList ? (
        <IconBookmarkFilled size={32} />
      ) : (
        <IconBookmarkPlus size={32} />
      )}
    </section>
  )
})
