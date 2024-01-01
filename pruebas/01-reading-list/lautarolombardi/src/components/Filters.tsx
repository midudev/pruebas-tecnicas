import { IoMdClose } from 'react-icons/io'

import { GENRES } from '../app/constants'

const Filters = ({
  genre,
  pages,
  handleGenreChange,
  handlePagesChange,
  resetGenreFilter,
  resetPagesFilter
}: {
  genre: string
  pages: number
  handleGenreChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
  handlePagesChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  resetGenreFilter: () => void
  resetPagesFilter: () => void
}) => {
  return (
    <nav className="flex flex-col gap-5 md:flex-row md:justify-between">
      <div className="flex flex-col gap-3">
        <label htmlFor="genre">Filtrar por género:</label>
        <div className='flex items-center justify-between gap-5'>
          <select
            className="flex-1 p-2 outline outline-1 outline-[var(--text-color)] focus:outline-2"
            id="genre"
            name="genre"
            role="list"
            value={genre}
            onChange={handleGenreChange}
          >
            <option value="">Seleccione un género</option>
            {GENRES.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
          {genre !== '' && (
            <button className="p-1 bg-[var(--text-color)] text-[var(--bg-color)] transition-all duration-300 text-2xl hover:bg-[var(--hover-color)] hover:text-[var(--text-color)]" onClick={resetGenreFilter}>
              <IoMdClose />
            </button>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="pages">Filtrar por cantidad de páginas:</label>
        <input
          className="cursor-pointer accent-[var(--text-color)]"
          id="pages"
          max={1200}
          min={43}
          name="pages"
          type="range"
          value={pages}
          onChange={handlePagesChange}
        />
        <div className='flex items-center justify-between'>
          <p>Máximo de páginas: {pages}</p>
          {pages !== 1200 && (
            <button className="p-1 bg-[var(--text-color)] text-[var(--bg-color)] transition-all duration-300 text-2xl hover:bg-[var(--hover-color)] hover:text-[var(--text-color)]" onClick={resetPagesFilter}>
              <IoMdClose />
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Filters
