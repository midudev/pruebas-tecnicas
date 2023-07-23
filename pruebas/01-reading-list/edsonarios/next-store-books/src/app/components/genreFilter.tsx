import { useStore } from '@/app/store/store'

const GenreFilter = () => {
  const { library, listGenres, selectedGenre, setSelectedGenre, setFilteredBooks } = useStore(state => state)

  const filterGenre = (newGenre: string) => {
    setSelectedGenre(newGenre)
    setFilteredBooks(library.filter(item => newGenre === 'All' || item.book.genre === newGenre))
  }

  return (
    <div className='flex flex-wrap justify-center top-0'>
      <label>
        Genre:
        <select className='text-zinc-950' value={selectedGenre} onChange={(e) => filterGenre(e.target.value)}>
          {listGenres.map((genre, index) => (
            <option key={index} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </label>
    </div>
  )
}

export default GenreFilter
