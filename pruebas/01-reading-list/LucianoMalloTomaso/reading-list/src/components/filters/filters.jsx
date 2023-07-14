import { useId } from 'react'
import './Filters.css'
// import { useFilters } from '../../hooks/useFilters'
import { library } from '../../mocks/books.json'

export function Filters () {
  // const { filters, setFilters } = useFilters()
  const minQuantityOfBooks = useId()
  const categoryFilteredId = useId()

  // 2. Create a function that take all the categories inside the object and create a new object with all the categories with the inicial in capital letter and the original.

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

  function handlePriceChange (event) {
  }

  function handleCategoryChange (event) {
  }
  function handleSortChange (event) {
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={minQuantityOfBooks}>Min.Books</label>
        <input
          type='range'
          id={minQuantityOfBooks}
          min='0'
          max='1000'
          onChange={handlePriceChange}
          value={0}
        />
        <span>$ {0}</span>
      </div>
      <div>
        <label htmlFor={categoryFilteredId}>Category</label>
        <select
          id={categoryFilteredId}
          onChange={handleCategoryChange}
        >
          <option value='all'>All</option>
          {genres.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor='orderByPages'>Sort by pages</label>
        <input type='checkbox' onChange={handleSortChange} />

      </div>
    </section>
  )
}
