import { FiltersTypes, useFiltersStore } from '../store/filtersStore'

interface Props {
  tipo: FiltersTypes
}

export default function ButtonRemoveFilter({ tipo }: Props) {
  const setFilters = useFiltersStore((state) => state.setFilters)
  const setfilterBooks = useFiltersStore((state) => state.setFilterBooks)

  const handleClick = () => {
    setFilters(tipo, null)
    setfilterBooks()
  }

  return (
    <>
      <button
        onClick={handleClick}
        className='rounded-sm shadow-sm shadow-slate-400  h-9  bg-rose-700  px-2 '
      >
        X
      </button>
    </>
  )
}
