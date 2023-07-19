import { useRef } from 'react'
import { useFilters } from '../hooks/useFilters'

export const Filters = () => {
  const genreFilterRef = useRef<HTMLSelectElement>(null)
  const { handleChangeFilter, genres } = useFilters()

  console.log('Filters rendered')

  return (
    <section className="w-52 pt-6">
      <label htmlFor="genre-select" className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Filtrar por género</label>
      <select
        id="genre-select"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        ref={genreFilterRef}
        defaultValue=""
        onChange={() => {
          if (!genreFilterRef.current) return
          const { value } = genreFilterRef.current
          handleChangeFilter(value)
        }}>
        <option value="">Escoge un género</option>
        {genres.map(genre => <option key={genre} value={genre}>{genre}</option>)}
      </select>
    </section>
  )
}
