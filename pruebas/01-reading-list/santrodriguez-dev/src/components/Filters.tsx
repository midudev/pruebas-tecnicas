import { memo, useRef } from 'react'
import { useFilters } from '../hooks/useFilters'

// eslint-disable-next-line react/display-name
export const Filters = memo(() => {
  const genreFilterRef = useRef<HTMLSelectElement>(null)
  const timerDebounceId = useRef<NodeJS.Timeout>()
  const { handleChangeFilter, genres, setInputSearchValue } = useFilters()

  const handleSearchInputChange = (ev: React.FormEvent<HTMLInputElement>) => {
    const { value } = ev.currentTarget
    if (timerDebounceId.current) clearTimeout(timerDebounceId.current)
    timerDebounceId.current = setTimeout(() => {
      setInputSearchValue(value.trim())
    }, 300)
  }

  return (
    <section className="pt-6 flex gap-x-4">
      <div className="mb-6">
        <label htmlFor="search-input" className="block mb-2 text-sm sm:text-xl font-medium text-gray-900 dark:text-white">Buscar por título</label>
        <input
          type="text"
          id="search-input"
          placeholder='Juego de Tronos'
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handleSearchInputChange}
        />
      </div>
      <div>
        <label htmlFor="genre-select" className="block mb-2 text-sm sm:text-xl font-medium text-gray-900 dark:text-white">Filtrar por género</label>
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
      </div>
    </section>
  )
})
