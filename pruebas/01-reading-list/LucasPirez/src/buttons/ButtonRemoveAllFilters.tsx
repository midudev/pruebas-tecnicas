import { useFiltersStore } from '../store/filtersStore'

export default function ButtonRemoveFilters() {
  const setRemoveFilters = useFiltersStore((state) => state.setRemoveAllFilters)

  return <button onClick={setRemoveFilters}> Remove Filters</button>
}
