import './Filters.css'
import { FilterTypes } from '../types.d'
import { Button } from './Button'
import { Range } from './Range'
import { Select } from './Select'
import { useFilters } from '../hooks/useFilters'

export function Filters () {
  const {
    genres,
    genre,
    pages,
    maxPages,
    handleOnChangeFilter,
    handleResetFilters
  } = useFilters()

  return (
    <form className='filters'>
      <Select
        options={genres}
        name={FilterTypes.GENRE}
        value={genre}
        onChange={handleOnChangeFilter}
        label='Género' />
      <Range
        name={FilterTypes.PAGES}
        value={pages}
        max={maxPages}
        onChange={handleOnChangeFilter}
        label='Páginas mínimas' />
      <Button
        text='Limpiar filtros'
        onClick={handleResetFilters}
        style={{ alignSelf: 'flex-end', justifySelf: 'flex-end' }}
      />
    </form>
  )
}
