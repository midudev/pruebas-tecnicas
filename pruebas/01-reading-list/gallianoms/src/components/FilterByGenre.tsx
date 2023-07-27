import { Library } from '../interfaces/Book'

interface FilterByGenreProps {
  selectedGenre: string
  setSelectedGenre: (selectedGenre: string) => void
  bookList: Library | undefined
  setFilteredBookList: (bookList: Library | undefined) => void
  genreCounts: number
}

const FilterByGenre = ({
  selectedGenre,
  setSelectedGenre,
  bookList,
  setFilteredBookList,
  genreCounts,
}: FilterByGenreProps) => {
  //
  const handleFilterBooksByGenre = (genre: string) => {
    setSelectedGenre(genre)
    if (!bookList?.library) {
      setFilteredBookList(bookList)
    } else if (genre === '') {
      setFilteredBookList(bookList)
    } else {
      const filteredBooks = bookList.library.filter(
        book => book.book.genre === genre
      )
      const filteredLibrary: Library = {
        library: filteredBooks,
      }
      setFilteredBookList(filteredLibrary)
    }
  }

  return (
    <div className='indicator'>
      <span className='indicator-item indicator-top indicator-end badge bg-orange-300 text-slate-700 text-xs font-semibold'>
        {genreCounts}
      </span>
      <select
        className='form-control select input w-24 md:w-52 select-sm'
        value={selectedGenre}
        onChange={e => {
          const genre = e.target.value
          handleFilterBooksByGenre(genre)
        }}
      >
        <option value=''>All Genres</option>
        <option value='Fantasía'>Fantasía</option>
        <option value='Ciencia ficción'>Ciencia ficción</option>
        <option value='Zombies'>Zombies</option>
        <option value='Terror'>Terror</option>
      </select>
    </div>
  )
}

export default FilterByGenre
