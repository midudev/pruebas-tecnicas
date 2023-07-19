import { type PropFunction, component$ } from "@builder.io/qwik"
import { BOOK_FILTERS, BOOK_GENRES } from "~/constants"
import { isValidFilter } from "~/helpers/isValidFilter"
import { isValidGenre } from "~/helpers/isValidGenre"
import type { Filter, Genre } from "~/types"

type Props = {
  onFilterChange: PropFunction<(filter: Filter) => void>
  onGenreChange: PropFunction<(genre: Genre) => void>
}

export const Filters = component$(
  ({ onFilterChange, onGenreChange }: Props) => {
    return (
      <section class="flex justify-between items-center my-12">
        <div class="flex items-center">
          <label class="mr-2">Sort by</label>
          <select
            class="rounded-md"
            onChange$={event => {
              const filter = event.target.value

              if (isValidFilter(filter)) onFilterChange(filter)
            }}
          >
            {BOOK_FILTERS.map(filter => (
              <option key={filter}>{filter}</option>
            ))}
          </select>
        </div>

        <div class="flex-items-center">
          <label class="mr-2">Genres</label>
          <select
            class="rounded-md"
            onChange$={event => {
              const genre = event.target.value

              if (isValidGenre(genre)) onGenreChange(genre)
            }}
          >
            {BOOK_GENRES.map(filter => (
              <option key={filter}>{filter}</option>
            ))}
          </select>
        </div>
      </section>
    )
  }
)
