import { useMemo } from 'react'
import { Chip } from './chip'
import { useBooks } from '@hooks/index'
import { getGenres } from '@utils/get-genres'

export function Filters () {
  const { filterBooksByGenre, books } = useBooks()
  const genres = useMemo(() => getGenres(), [])

  return (
    <div className='bg-white p-4 w-80 shadow-sm rounded-lg'>
      <div className='flex justify-between items-center'>
        <h3 className='text-2xl font-semibold'>Filters</h3>
        {books?.length > 0 && <Chip value={`${books?.length} books`} />}
      </div>
      <label htmlFor='countries' className='block mb-2 text-sm text-gray-500'>
        Select a genre
      </label>
      <div className='relative'>
        <select
          id='countries'
          className='block appearance-none w-full border border-gray-300 text-black py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:border-gray-500'
          onChange={(evt) => { filterBooksByGenre({ genre: evt.target.value }) }}
          defaultValue='all'
        >
          <option selected value='all'>Todos los generos</option>
          {genres?.map((genre) => (
            <option key={genre} value={genre}>{genre}</option>
          ))}
        </select>
        <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 pt-1 text-gray-400'>
          <svg
            className='fill-current h-4 w-4'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
          >
            <path d='M10 12l-8-8 1.5-1.5 6.5 6.5 6.5-6.5 1.5 1.5z' />
          </svg>
        </div>
      </div>
    </div>
  )
}
