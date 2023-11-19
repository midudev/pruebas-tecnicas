import { useId } from 'react'
import { useFilters } from '@/hooks/use-filters'
import { useBooks } from '@/hooks/use-books'

const SELECT_OPTIONS = [
  { value: 'todos', label: 'Todos' },
  { value: 'fantasía', label: 'Fantasía' },
  { value: 'ciencia ficción', label: 'Ciencia Ficción' },
  { value: 'zombies', label: 'Zombies' },
  { value: 'terror', label: 'Terror' }
]

export default function Filters() {
  const pageFilterId = useId()
  const genreFilterId = useId()
  const { maxPages, minPages } = useBooks()
  const { filters, applyFilter } = useFilters()

  const handleChangePages = (e: React.ChangeEvent<HTMLInputElement>) => {
    applyFilter({ prop: 'minPages', value: Number(e.target.value) })
  }

  const handleChangeGenre = (e: React.ChangeEvent<HTMLSelectElement>) => {
    applyFilter({ prop: 'genre', value: e.target.value })
  }

  return (
    <div className='flex flex-col gap-2 text-zinc-400'>
      <div className='flex gap-3'>
        <label htmlFor={pageFilterId}>Desde</label>
        <input
          id={pageFilterId}
          type='range'
          value={filters.minPages}
          onChange={handleChangePages}
          min={minPages}
          max={maxPages}
          className='cursor-grab'
        />
        <span>{filters.minPages} páginas</span>
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor={genreFilterId}>Filtra por género</label>
        <select
          id={genreFilterId}
          className='text-zinc-300 cursor-pointer w-full max-w-[185px] py-2 px-1 border border-zinc-500 bg-zinc-600 rounded-md'
          onChange={handleChangeGenre}
          value={filters.genre}
        >
          {SELECT_OPTIONS.map(option => (
            <option
              className='checked:text-white'
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
