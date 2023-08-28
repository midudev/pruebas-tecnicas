import { ReactElement } from 'react'
import { useBooksStore } from '../store/booksStore'

const GenreFilter = (): ReactElement => {
  const { filters, filter } = useBooksStore()

  const filterGenreBooks = (genre: string): void => {
    filter('genre', genre)
  }

  return (
    <div className='flex flex-col gap-1'>
      <label htmlFor='genreFilter' className='font-medium' title={`Género seleccionado es ${filters.genre || 'no seleccionado'}`}>
        Filtrar por género
      </label>

      <select
        value={filters.genre}
        onChange={(e) => filterGenreBooks(e.target.value)}
        id='genreFilter'
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5'
      >
        <option value=''>Todas las categorías</option>
        <option value='Fantasía'>Fantasía</option>
        <option value='Ciencia ficción'>Ciencia ficción</option>
        <option value='Zombies'>Zombies</option>
        <option value='Terror'>Terror</option>
      </select>
      {/* {filters.genre && <span>GENRE {filters.genre}</span>} */}
    </div>
  )
}

export default GenreFilter
