import { useState, useEffect } from 'react'
import { useBooksStore } from '../store/BooksStore'

export default function Filters (): JSX.Element {
  const { books, filterByGenre, resetBooks } = useBooksStore()
  const [availableGenres, setAvailableGenres] = useState<string[]>([])

  useEffect(() => {
    const genres = books.map(book => book.genre)
    const plainGenres = new Set(genres)
    setAvailableGenres([...plainGenres])
  }, [])

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    if (event.target.value !== 'all') {
      filterByGenre(event.target.value)
    } else {
      resetBooks()
    }
  }

  return (
    <section className="filters-section">
        <aside>
            <label htmlFor="genre-filter">
                <small>Filtrar por género</small>
                <select name="genre-fitler" id="genre-filter" onChange={handleChange}>
                  <option value='all'>Todos</option>
                  {availableGenres?.map(genre => <option key={genre} value={genre}>{genre}</option>)}
                </select>
            </label>
        </aside>
    </section>
  )
}
