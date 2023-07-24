import { useBooksStore } from '../store/booksStore'

const GenreFilter = () => {
  const { filters, filter } = useBooksStore()

  const filterGenreBooks = (genre: string) => {
    filter('genre', genre)
  }

  return (
    <>
      <label htmlFor='genreFilter'>Filtrar por género</label>

      <select
        value={filters.genre}
        onChange={(e) => filterGenreBooks(e.target.value)}
        id='genreFilter'
      >
        <option value=''>Todas las categorías</option>
        <option value='Fantasía'>Fantasía</option>
        <option value='Ciencia ficción'>Ciencia ficción</option>
        <option value='Zombies'>Zombies</option>
        <option value='Terror'>Terror</option>
      </select>
      {filters.genre && <span>GENRE {filters.genre}</span>}
    </>
  )
}

export default GenreFilter
