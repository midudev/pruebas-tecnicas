import { useBooksStore } from '../store/booksStore'

const GenreFilter = () => {
  const { filters, filter } = useBooksStore()

  const filterGenreBooks = (genre: string) => {
    filter('genre', genre)
  }

  return (
    <div className='flex gap-2'>
      <label htmlFor='genreFilter' title={`Género seleccionado es ${filters.genre || 'no seleccionado'}`}>
        <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6 text-gray-700 fill-current' viewBox='0 0 24 24'><path fill='#1C274C' d='M10 9.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S8.448 8 9 8s1 .672 1 1.5ZM15 11c.552 0 1-.672 1-1.5S15.552 8 15 8s-1 .672-1 1.5.448 1.5 1 1.5ZM9.447 14.398a.75.75 0 1 0-.894 1.204A5.766 5.766 0 0 0 12 16.75a5.766 5.766 0 0 0 3.447-1.148.75.75 0 1 0-.894-1.204A4.267 4.267 0 0 1 12 15.25a4.267 4.267 0 0 1-2.553-.852Z' /><path fill='#1C274C' fill-rule='evenodd' d='M12 1.25C6.042 1.25 1.25 6.219 1.25 12.3v7.423c0 1.847 1.912 3.123 3.593 2.258a2.07 2.07 0 0 1 2.129.137 3.572 3.572 0 0 0 4.056 0l.353-.242a1.085 1.085 0 0 1 1.238 0l.353.242a3.572 3.572 0 0 0 4.056 0 2.07 2.07 0 0 1 2.13-.137c1.68.865 3.592-.412 3.592-2.258v-7.422C22.75 6.219 17.958 1.25 12 1.25ZM2.75 12.3c0-5.295 4.162-9.55 9.25-9.55s9.25 4.255 9.25 9.55v7.423c0 .798-.79 1.242-1.406.924a3.57 3.57 0 0 0-3.665.235 2.071 2.071 0 0 1-2.358 0l-.353-.243a2.585 2.585 0 0 0-2.936 0l-.353.242a2.071 2.071 0 0 1-2.358 0 3.57 3.57 0 0 0-3.665-.234c-.617.318-1.406-.126-1.406-.924v-7.422Z' clip-rule='evenodd' /></svg>
      </label>

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
      {/* {filters.genre && <span>GENRE {filters.genre}</span>} */}
    </div>
  )
}

export default GenreFilter
