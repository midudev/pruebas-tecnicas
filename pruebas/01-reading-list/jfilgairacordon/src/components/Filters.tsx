import './Filters.css'
import { FilterTypes } from '../types.d'
import { Button } from './Form/Button'
import { Range } from './Form/Range'
import { Select } from './Form/Select'
import { useFilters } from '../hooks/useFilters'
import { Input } from './Form/Input'

export function Filters () {
  const {
    genres,
    genre,
    pages,
    maxPages,
    name,
    handleOnChangeFilter,
    handleResetFilters
  } = useFilters()

  return (
    <form className='filters'>
      <Input
        name={FilterTypes.NAME}
        type='text'
        value={name}
        onChange={handleOnChangeFilter}
        placeholder='Buscar por título'
        label='Título'
      />
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
