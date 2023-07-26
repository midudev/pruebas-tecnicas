import { ChangeEvent } from 'react'
import { AboutTypes, useFiltersStore } from '../store/filtersStore'

export default function SeachFilter() {
  const setSeachState = useFiltersStore((state) => state.setSearchState)
  const stateSearch = useFiltersStore((state) => state.searchState)

  const setFiltersBooks = useFiltersStore((state) => state.setFilterBooks)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    setSeachState({ value })
    setFiltersBooks()
  }

  const handleChangeRadio = (about: AboutTypes) => {
    setSeachState({ about })
    setFiltersBooks()
  }

  return (
    <div className='flex flex-col items-start'>
      <p className='mb-1 text-rose-600  font-semibold text-lg'>Buscar</p>
      <input
        type='text'
        placeholder={`Search with ${stateSearch?.about ?? 'title'}`}
        onChange={handleChange}
        value={stateSearch.value}
        className='p-1 pl-4 rounded-md '
      />
      <div className='flex items-center gap-2'>
        <input
          type='radio'
          name='about'
          value={'title'}
          onChange={() => handleChangeRadio('title')}
          title='perro'
          defaultChecked
        />
        <label>title</label>
        <input
          type='radio'
          name='about'
          value={'athor'}
          onChange={() => handleChangeRadio('author')}
        />
        <label>author</label>
      </div>
    </div>
  )
}
