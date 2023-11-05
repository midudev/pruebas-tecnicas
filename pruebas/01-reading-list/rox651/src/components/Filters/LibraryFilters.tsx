import { useLibraryFilters } from '../../hooks'
import OpenReadListButton from './OpenReadListButton'

const LibraryFilters = () => {
  const {
    genres,
    maxPages,
    minPages,

    searchValue,
    pagesState,
    selectedGenre,

    onInputChange,
    onSelectChange,
    onPagesStateChange,

    clearFilters,
  } = useLibraryFilters()

  return (
    <nav className="py-2 flex flex-wrap items-center justify-center gap-4 ">
      <input placeholder="Search a book..." className="bg-transparent px-2 border-black border " type="text" value={searchValue} onChange={onInputChange} />
      <select name="Movies genres" value={selectedGenre} onChange={onSelectChange}>
        <option value="">All books</option>
        {genres.map((genre, index) => {
          return (
            <option key={index} value={genre}>
              {genre}
            </option>
          )
        })}
      </select>
      <fieldset className="grid">
        <small>{pagesState}</small>
        <input type="range" name="" id="" value={pagesState} min={minPages} max={maxPages} onChange={onPagesStateChange} />
      </fieldset>
      <button className={' bg-blue-500 text-white px-4 py-1  transition-colors rounded-md hover:bg-blue-700'} onClick={clearFilters}>
        Reset filters
      </button>
      <OpenReadListButton />
    </nav>
  )
}

export default LibraryFilters
