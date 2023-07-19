import { component$ } from "@builder.io/qwik"
import type { Book } from "~/types"
import {
  IconBookOutlined,
  IconBookmarkFilled,
  IconBookmarkPlus,
  IconCalendarOutlined
} from "~/components/shared/Icons"

export const BookCard = component$(
  ({ cover, genre, isInReadingList, pages, title, year, author }: Book) => {
    return (
      <article class="aspect-[1/1.6] group hover:shadow-lg transition-transform duration-300 ease-in-out text-white relative bg-black rounded-md">
        <div class="relative overflow-hidden rounded-tl-md rounded-tr-md">
          <BookBadge isInReadingList={isInReadingList} />

          <img
            src={cover}
            width={300}
            height={500}
            class="brightness-95 grayscale-[0.3] group-hover:grayscale-0 group-hover:brightness-110 transition-all duration-300 aspect-[1/1.4] group-hover:scale-110"
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
        </div>

        <div class="p-4">
          <h6 class="whitespace-nowrap truncate max-w-full my-2 font-bold text-base text-left">
            {title}
          </h6>

          <p class="whitespace-nowrap truncate max-w-full my-2 font-medium text-sm text-left">
            {author.name}
          </p>

          <span class="whitespace-nowrap truncate px-2 py-1 block mt-4 bg-gray-800 text-gray-400 rounded-xl text-xs w-fit">
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
