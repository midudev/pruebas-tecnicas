import { ChangeEvent, useMemo } from 'react'
import { useFiltersStore } from '../store/filtersStore'
import { adapterBook } from '../adapter/adapterBook'

export default function GenreFilter() {
  const books = useFiltersStore((state) => state.books)
  const setFilter = useFiltersStore((state) => state.setFilterBooks)
  const setFilterGenre = useFiltersStore((state) => state.setFilters)
  const filterGenre = useFiltersStore.getState().filters.genre ?? 'All'

  const genreArr = useMemo(() => {
    const genreFil: string[] = []

    books.forEach((book) => {
      const { genre } = adapterBook(book)
      if (!genreFil.includes(genre)) genreFil.push(genre)
    })
    return genreFil
  }, [books])

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target

    const newValue = value === 'All' ? null : value

    setFilterGenre('genre', newValue)
    setFilter()
  }

  return (
    <div className='flex flex-col items-center gap-2'>
      <p className='text-rose-600  font-semibold text-lg'>Filtrar por genero</p>
      <select
        onChange={handleChange}
        value={filterGenre}
        className='p-1 rounded-md'
      >
        <option value={'All'}>All</option>
        {genreArr.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  )
}
