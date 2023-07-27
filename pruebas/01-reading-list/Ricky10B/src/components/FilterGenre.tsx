import { useState, useMemo } from 'react'
import { useFilters } from '../hooks/useFiltersActions'
import { useAppSelector } from '../hooks/store'

export function FilterGenre () {
  const [genres, setGenres] = useState([''])
  const { filterGenre, handleNewGenre } = useFilters()
  const { library, countBooks } = useAppSelector(state => state.librariesReducer)

  const { available, filterForGenre, readingList } = countBooks

  useMemo(() => {
    const generos = new Set(library.map(({ book }) => book.genre))  
    const generosDiferentes = [...generos]
    setGenres(generosDiferentes)
  }, [library])

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault()
    const { value } = event.target
    handleNewGenre({ genre: value })
  }
  
  return (
    <section className='mx-5'>
      <label htmlFor="genres" className="block mb-2 font-medium text-gray-100">Filtrar por género</label>
      <select
        id='genres'
        className="outline-none border rounded-lg block p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
        onChange={handleChange}
        value={filterGenre}
      >
        <option value=''>Todos</option>
        {genres.map(genre => (
          <option key={genre} value={genre}>{genre}</option>
        ))}
      </select>

      <div className='flex flex-col gap-1 md:flex-row md:gap-3 [&>p]:font-bold [&>p]:text-gray-400 [&>p>span]:text-gray-100 mb-1 mt-3'>
        <p>Libros Disponibles: <span>{ available - readingList }</span></p>
        <p>Libros en la lista de lectura: <span>{ readingList }</span></p>
        {
          filterGenre && (
            <p>Libros del género {filterGenre}: <span>{ filterForGenre }</span></p>
          )
        }
      </div>
    </section>
  )
}