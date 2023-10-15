// import { useFilters } from '../hooks/useFilters'
import { useId } from 'react'
import { useFilters } from '../hooks/useFilters'

export function FiltersGenre () {
  const filtersId = useId()
  const { updateFiltersState } = useFilters()

  return (
    <div className='flex flex-col'>
          <label htmlFor={filtersId}>Filtrar por genero:</label>
          <select
            name="filters"
            id={filtersId}
            className=" text-sm rounded-lg p-2.5 bg-[#d4cbc1]"
            onChange={(event) => {
              updateFiltersState({ value: event.target.value })
            }}
            >
            <option value="Todos">Todos</option>
            <option value="Fantasia">Fantasía</option>
            <option value="Ciencia ficcion">Ciencia Ficcion</option>
            <option value="Zombies">Zombies</option>
            <option value="Terror">Terror</option>
          </select>
              </div>
  )
}
