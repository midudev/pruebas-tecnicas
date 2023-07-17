import { useId } from 'react'
import { useLibraryStore } from '../store/library'
import { useFilters } from '../hooks/useFilters'

export function BooksInfo () {
  const [library, filters, setFilters, toReadLibrary] = useLibraryStore(
    (state) => [
      state.library,
      state.filters,
      state.setFilters,
      state.toReadLibrary
    ]
  )

  const pageFilterId = useId()
  const genreFilterId = useId()
  const { filterBooks } = useFilters()
  const filteredProducts = filterBooks(library)

  const handleChangeMinPages = (event) => {
    setFilters('minPages', Number(event.target.value))
  }

  const handleChangeCategory = (event) => {
    setFilters('genre', event.target.value)
  }

  return (
    <>
      <div className='header-info'>
        <h3>Libros disponibles: {filteredProducts.length}</h3>
        <p>En la lista de lectura: {toReadLibrary.length} </p>
      </div>

      <div className='filters-header'>
        <div>
          <label htmlFor={pageFilterId}>Filtrar por páginas</label>
          <input
            type='range'
            min='0'
            max='1500'
            value={filters.minPages}
            onChange={handleChangeMinPages}
          />
          <small>{filters.minPages} páginas</small>
        </div>

        <div>
          <label htmlFor={genreFilterId}>Filtrar por género</label>
          <select
            id={genreFilterId}
            onChange={handleChangeCategory}
            value={filters.genre}
          >
            <option value='Todos'>Todos</option>
            <option value='Ciencia ficción'>Ciencia ficción</option>
            <option value='Fantasía'>Fantasía</option>
            <option value='Zombies'>Zombies</option>
            <option value='Terror'>Terror</option>
          </select>
        </div>
      </div>
    </>
  )
}
