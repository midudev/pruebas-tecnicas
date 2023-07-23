'use client'
import { library } from '../utils/data-books'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useBooks } from '../context/books'

export default function Filters() {
  const { dispatch } = useBooks()
  const uniqueGenres = new Set(library.map((b) => b.book.genre)) // elimina los genres duplicados
  const genres = [...uniqueGenres.values()]
  const searchByText = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'FilterByText',
      payload: evt.target.value
    })
  }
  return (
    <section className='relative mb-10 flex w-full flex-col items-center justify-center gap-5'>
      <label className='flex items-center gap-4 rounded-lg border-2 border-slate-800 bg-white bg-opacity-90 p-2'>
        <MagnifyingGlassIcon className='h-6 w-6  stroke-black' />
        <input
          type='text'
          placeholder='Harry Potter'
          className='text-bg-black bg-transparent p-1 text-lg placeholder:text-black/40'
          onChange={searchByText}
        />
      </label>
      <select
        name='select'
        className='right-5 flex w-min flex-col items-center rounded-md px-4 py-3 text-black md:absolute'
        onChange={(e) => {
          dispatch({
            type: 'FilterByGenre',
            payload: e.target.value
          })
        }}
      >
        <option className='py-10'>Todos</option>
        {genres.map((genre) => (
          <option key={genre} className='py-2'>
            {genre}
          </option>
        ))}
      </select>
    </section>
  )
}
