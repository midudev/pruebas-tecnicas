import { TextInput, MultiSelect, MultiSelectItem } from '@tremor/react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { useFilters } from '../hooks/useFilters'

export function Filters () {
  const { searchFilterId, genresFilterId, pagesFilterId, genres, minPages, maxPages, filters, handleChange, handleGenresChange } = useFilters()

  return (
    <section className='flex flex-col gap-3 justify-between lg:gap-10 sm:gap-5 sm:flex-row'>
      <div className='flex flex-col gap-1 lg:w-2/4 md:w-1/3'>
        <label className='font-bold' htmlFor={searchFilterId}>Título o autor</label>
        <TextInput id={searchFilterId} icon={MagnifyingGlassIcon} placeholder='George Orwell' value={filters.search} onChange={handleChange} />
      </div>
      <div className='flex flex-col gap-1 lg:w-1/4 md:w-1/3'>
        <label className='font-bold' htmlFor={genresFilterId}>Género</label>
        <MultiSelect id={genresFilterId} placeholder='Todos los géneros' value={filters.genres} onValueChange={handleGenresChange}>
          {
                genres.map((genre) => (
                  <MultiSelectItem key={genre} value={genre}>{genre}</MultiSelectItem>
                ))
              }
        </MultiSelect>
      </div>
      <div className='flex flex-col gap-1 lg:w-1/4 md:w-1/3'>
        <label className='font-bold' htmlFor={pagesFilterId}>Número de páginas</label>
        <div className='flex gap-2'>
          <TextInput type='number' className='w-min min-w-[85px]' id={pagesFilterId} placeholder='' value={filters.pages} onChange={handleChange} />
          <input className='w-full' id={pagesFilterId} type='range' min={minPages} max={maxPages} step={1} value={filters.pages} onChange={handleChange} />
        </div>
      </div>
    </section>
  )
}
