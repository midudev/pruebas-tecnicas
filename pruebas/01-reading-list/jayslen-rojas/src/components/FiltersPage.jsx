import { useFilters } from '../hooks/useFilters'

export function FiltersPage () {
  const { updateFiltersState, filters } = useFilters()
  return (
    <div className="flex flex-col items-center">
      <label htmlFor="">Filtrar por paginas</label>
      <input type="range" name="" id="" max={1000} min={0} onChange={(event) => {
        updateFiltersState({ value: +event.target.value })
      }}/>
      <p>{filters.pages}</p>
    </div>
  )
}
