import { type ChangeEvent, useId } from 'react'
import { Genre } from '../types.d'
import './Filters.css'

interface Props {
  pagesFilter: number
  categoryFilter: Genre
  searchFilter: string
  changeCategoryFilter: (category: Genre) => void
  changePagesFilter: (pages: number) => void
  changeSearchFilter: (search: string) => void
  categoryCountElement: JSX.Element | null
}

function Filters ({
  categoryFilter,
  pagesFilter,
  searchFilter,
  changeCategoryFilter,
  changePagesFilter,
  changeSearchFilter,
  categoryCountElement
}: Props) {
  const categorySelectId = useId()
  const priceSelectId = useId()
  const searchInputId = useId()

  function handleCategoryChange (event: ChangeEvent<HTMLSelectElement>) {
    if (!Object.values(Genre).includes(event.target.value as Genre)) return
    changeCategoryFilter(event.target.value as Genre)
  }

  function handlePriceChange (event: ChangeEvent<HTMLInputElement>) {
    changePagesFilter(Number(event.target.value))
  }

  function handleSearchChange (event: ChangeEvent<HTMLInputElement>) {
    changeSearchFilter(event.target.value)
  }

  return (
    <div className='filters'>
      <div>
        <label htmlFor={priceSelectId}>N° Páginas (menor que): </label>
        <input type='range' min='0' max='2000' id={priceSelectId} onChange={handlePriceChange} value={pagesFilter} />
        <label>{pagesFilter}</label>
      </div>
      <div className='categoryFilter'>
        <div>
          <label htmlFor={categorySelectId}>Categoría: </label>
          <select id={categorySelectId} onChange={handleCategoryChange} value={categoryFilter}>
            {
              Object.values(Genre).map((genre: string) => {
                return <option key={genre} value={genre}>{genre}</option>
              })
            }
          </select>
        </div>
        {categoryCountElement}
      </div>
      <div>
        <label htmlFor={searchInputId}>Búsqueda por título: </label>
        <input id={searchInputId} type='text' name='search' onChange={handleSearchChange} value={searchFilter} />
      </div>
    </div>
  )
}

export default Filters
