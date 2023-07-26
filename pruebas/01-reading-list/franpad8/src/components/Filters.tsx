import { type ChangeEvent, useId } from 'react'
import { Genre } from '../types.d'
import './Filters.css'

interface Props {
  pagesFilter: number
  categoryFilter: Genre
  changeCategoryFilter: (category: Genre) => void
  changePagesFilter: (pages: number) => void
  categoryCountElement: JSX.Element | null
}

function Filters ({
  categoryFilter,
  pagesFilter,
  changeCategoryFilter,
  changePagesFilter,
  categoryCountElement
}: Props) {
  const categorySelectId = useId()
  const priceSelectId = useId()

  function handleCategoryChange (event: ChangeEvent<HTMLSelectElement>) {
    if (!Object.values(Genre).includes(event.target.value as Genre)) return
    changeCategoryFilter(event.target.value as Genre)
  }

  function handlePriceChange (event: ChangeEvent<HTMLInputElement>) {
    changePagesFilter(Number(event.target.value))
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
    </div>
  )
}

export default Filters
