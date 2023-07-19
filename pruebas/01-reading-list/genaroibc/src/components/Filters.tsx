import { type PropFunction, component$ } from "@builder.io/qwik"
import { BOOK_FILTERS } from "~/constants"
import { isValidFilter } from "~/helpers/isValidFilter"
import type { Filter } from "~/types"

type Props = {
  onFilterChange: PropFunction<(filter: Filter) => void>
}

export const Filters = component$(({ onFilterChange }: Props) => {
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
    </section>
  )
})
