import { useRef } from 'react'
import { useFilters } from '../hooks/useFilters'
import { NUM_ITEMS } from '../constants'

export const Filters = () => {
  const genreFilterRef = useRef<HTMLSelectElement>(null)
  const { currentPage, handleChangeFilter, handleSetCurrentPage, genres } = useFilters()

  console.log('Filters rendered')

  return (
    <section className='flex gap-5 bg-teal-900'>
      <div>
        Filtrar por pagina {currentPage}
        <div>
          <span>desde: {NUM_ITEMS * (currentPage - 1)}</span>
          <span>hasta: {(currentPage * NUM_ITEMS) - 1}</span>
        </div>
        <div>
          <button onClick={() => { handleSetCurrentPage(false) }}>{'<'}</button>
          <span>{currentPage}</span>
          <button onClick={() => { handleSetCurrentPage(true) }}>{'>'}</button>
        </div>
      </div>
      <div>
        <label htmlFor="genre-select">Escoge un género</label>
        <select
          name="genreFilter"
          id="genre-select"
          ref={genreFilterRef}
          onChange={() => {
            if (!genreFilterRef.current) return
            const { value } = genreFilterRef.current
            handleChangeFilter(value)
          }}>
          <option value="">-- Todos --</option>
          {genres.map(genre => <option key={genre} value={genre}>{genre}</option>)}
        </select>
      </div>
    </section>
  )
}
