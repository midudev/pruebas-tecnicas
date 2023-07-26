import React from 'react'
import { useId } from 'react'
import {useLibraryFilters} from '../hooks/useFilters'
import './Filters.css'

//componente filters.
export function Filters() {
  // se destructura el hook useLibraryFilters
  const { filters, setFilters } = useLibraryFilters()

  //
  const minPagesFilterId = useId()
  const genreFilterId = useId()

  const handleChangeMinPages = (event) => {
    setFilters(prevState => ({
      ...prevState,
      minPages: event.target.value
    }))
  }
  const handleChangeGenre = (event) => {
    
    setFilters(prevState => ({
      ...prevState,
      genre: event.target.value
    }))
  }

  return (
    
    <section className='filters'>
      <div>
          <label htmlFor={minPagesFilterId}> Filtrar por páginas:</label>
          <input 
            type='range'
            id={minPagesFilterId}
            min='1'
            max='1500'
            onChange={handleChangeMinPages}
            value={filters.minPages}
           />
           <span>{filters.minPages}</span>
      </div>
      <div>
          <label htmlFor={genreFilterId}>Género:</label>
          <select id={genreFilterId} onChange={handleChangeGenre} value={filters.genre}>
              <option value='all'> todas</option>
              <option value='Zombies'>Zombies</option>
              <option value='Ciencia ficción'>Ciencia ficción </option>
              <option value='Fantasía'>Fantasía</option>
              <option value='Terror'>Terror</option>
              
          </select>
      </div>

    </section>
  )
}
