import { type PropFunction, component$ } from "@builder.io/qwik"
import {
  BOOK_FILTERS,
  BOOK_GENRES,
  FILTERS_DICT,
  GENRES_DICT
} from "~/constants"
import { isValidFilter } from "~/helpers/isValidFilter"
import { isValidGenre } from "~/helpers/isValidGenre"
import type { Filter, Genre } from "~/types"

type Props = {
  onFilterChange: PropFunction<(filter: Filter) => void>
  onGenreChange: PropFunction<(genre: Genre) => void>
  filter: Filter
  genre: Genre
}

export const Filters = component$(
  ({ onFilterChange, onGenreChange, filter, genre }: Props) => {
    return (
      <section class="flex justify-between items-center my-4">
        <div class="flex items-start gap-2 flex-col md:!flex-row md:items-center">
          <label class="text-lg text-white">Ordenar por</label>
          <select
            value={filter}
            class="rounded-md"
            onChange$={event => {
              const filter = event.target.value

              if (isValidFilter(filter)) onFilterChange(filter)
            }}
          >
            {BOOK_FILTERS.map(filter => (
              <option key={filter} value={filter}>
                {FILTERS_DICT[filter]}
              </option>
            ))}
          </select>
        </div>

        <div class="flex items-end gap-2 flex-col md:!flex-row md:items-center">
          <label class="text-lg text-white">Filtrar por género</label>
          <select
            value={genre}
            class="rounded-md"
            onChange$={event => {
              const genre = event.target.value

              if (isValidGenre(genre)) onGenreChange(genre)
            }}
          >
            {BOOK_GENRES.map(filter => (
              <option key={filter} value={filter}>
                {GENRES_DICT[filter]}
              </option>
            ))}
          </select>
        </div>
      </section>
    )
  }
)
