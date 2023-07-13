import { ChangeEvent, useContext } from 'react'
import { genres } from '../services/data'
import { LibraryContext } from '../App'

export function BooksFilters () {
  const { filterBooks } = useContext(LibraryContext)

  function handleGenreChange (event: ChangeEvent<HTMLSelectElement>): void {
    const currentValue = event.target.value
    filterBooks({ genre: currentValue })
  }

  return (
    <form className='p-2 flex gap-5 items-center'>
      <div className='flex flex-col items-start'>
        <label htmlFor='genre' className='mr-2 text-sm font-medium text-gray-700'>
          Genre
        </label>
        <select id='genre' defaultValue={undefined} onChange={handleGenreChange} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block'>
          <option value=''>All</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>{genre}</option>
          ))}
        </select>
      </div>
    </form>
  )
}
