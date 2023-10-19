import useFilters from '../hooks/useFilters'
import { GENDERS } from '../utils/constants'

export function Aside ({ booksAvailable }) {
  const { filters: { pages, gender, title }, setFilters, resetFilters } = useFilters()

  const handleFilterChange = ({ target: { name, value } }) => {
    setFilters(prevState => {
      const newState = {
        ...prevState,
        [name]: value
      }
      window.localStorage.setItem('filters', JSON.stringify(newState))
      return newState
    })
  }

  return (
    <aside className='p-4 flex flex-col gap-4'>
      <input
        type='search'
        className='p-2 rounded-md bg-rhino-100 text-rhino-800'
        name='title'
        onChange={handleFilterChange}
        placeholder='Harry Potter, Juego de Tronos...'
        value={title}
      />
      <div className='flex flex-col md:flex-row items-start gap-4 justify-between md:items-center'>
        <div className='flex flex-wrap items-center gap-4 rounded-md'>
          <label htmlFor='genders' className='w-full md:w-auto font-semibold text-left flex flex-col gap-2'>
            Generos
            <select
              id='genders'
              name='gender'
              className='px-3 py-2 rounded-md bg-rhino-500 text-white'
              onChange={handleFilterChange}
              value={gender}
            >
              {GENDERS.map(gender => <option key={gender} value={gender}>{gender}</option>)}
            </select>
          </label>
          <label htmlFor='pages' className='font-semibold text-left flex flex-col gap-2'>
            Paginas minimas
            <div className='flex-1 flex items-center gap-2 '>
              <input
                type='range'
                id='pages'
                name='pages'
                min='0'
                max='1200'
                onChange={handleFilterChange}
                value={pages}
                className='accent-rhino-300'
              />
              <span>
                {pages}
              </span>
            </div>
          </label>
        </div>
        <span className='text-2xl font-semibold'>{booksAvailable} Libros disponibles</span>
      </div>
      <label htmlFor='reset' className='font-semibold'>
        <button
          id='reset'
          className='px-3 py-2 rounded-md bg-rhino-500 text-white'
          onClick={resetFilters}
        >
          Reset
        </button>
      </label>
    </aside>
  )
}
