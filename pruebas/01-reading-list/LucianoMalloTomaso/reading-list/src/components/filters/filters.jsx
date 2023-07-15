import { useId } from 'react'
import './Filters.css'
import { useFilters } from '../../hooks/useFilters'
import { library } from '../../mocks/books.json'

export function Filters () {
  const { filters, setFilters } = useFilters()
  const minQuantityOfPages = useId()
  const categoryFilteredId = useId()

  // Create a function that take all the genres inside the array and create a new array with all the genres.
  function getGenres () {
    const genres = []
    library.forEach((element) => {
      const genre = element.book.genre
      if (!genres.includes(genre)) {
        genres.push(genre)
      }
    })
    return genres
  }
  const genres = getGenres()

  function handlePagesQtyChange (event) {
    setFilters(preState => (
      {
        ...preState,
        minPages: event.target.value
      }
    ))
  }

  function handleGenreChange (event) {
    setFilters(preState => (
      {
        ...preState,
        genre: event.target.value
      }
    ))
  }
  function handleSortChange (event) {
    setFilters(preState => (
      {
        ...preState,
        orderByTitle: event.target.checked
      }
    ))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={minQuantityOfPages}>Min.Books</label>
        <input
          type='range'
          id={minQuantityOfPages}
          min='0'
          max='1000'
          onChange={handlePagesQtyChange}
          value={filters.minPages}
        />
        <span>$ {0}</span>
      </div>
      <div>
        <label htmlFor={categoryFilteredId}>Category</label>
        <select
          id={categoryFilteredId}
          onChange={handleGenreChange}
        >
          <option value='all'>All</option>
          {genres.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor='orderByTitle'>Sort by title</label>
        <input type='checkbox' onChange={handleSortChange} />

      </div>
    </section>
  )
}
