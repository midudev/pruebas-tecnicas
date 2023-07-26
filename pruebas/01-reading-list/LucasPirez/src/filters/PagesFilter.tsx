import { ChangeEvent, useMemo } from 'react'
import { useFiltersStore } from '../store/filtersStore'
import { adapterBook } from '../adapter/adapterBook'

export default function PagesFilter() {
  const book = useFiltersStore((state) => state.books)
  const setfilterPages = useFiltersStore((state) => state.setFilters)
  const setfilterBooks = useFiltersStore((state) => state.setFilterBooks)
  const pagesvalue = useFiltersStore((state) => state.filters.pages)

  const max = useMemo<number>(() => {
    const b = book.reduce((acc, act) => {
      const { pages } = adapterBook(act)
      if (acc > pages) {
        return acc
      }
      return pages
    }, 0)

    return b
  }, [book])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    const newValue = value === '0' ? null : parseInt(value)

    setfilterPages('pages', newValue)
    setfilterBooks()
  }
  return (
    <div className='flex flex-col items-center gap-2'>
      <p className='text-rose-600  font-semibold text-lg'>
        Filtrar por paginas
      </p>
      <div className='relative'>
        <input
          type='range'
          min={0}
          max={max}
          step={100}
          onChange={handleChange}
          className=' bg-transparent touch-manipulation'
          value={pagesvalue ?? 0}
        />
        <p>{pagesvalue}</p>
      </div>
    </div>
  )
}
