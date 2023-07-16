import { useContext } from 'react'
import { BooksContext } from '../context/BooksContext'

export default function Filters () {
  const { booksFilter, books } = useContext(BooksContext)

  const handleRangeChange = (e) => {
    const value = e.target.value

    if (value === 'any') {
      booksFilter.setBooksFilter({
        ...booksFilter.booksFilter,
        pages: { min: books.pages.min, max: books.pages.max }
      })
      return
    }

    const min = value.split(' ')[0]
    const max = value.split(' ')[2] || books.pages.max
    booksFilter.setBooksFilter({
      ...booksFilter.booksFilter,
      pages: { min, max }
    })
  }
  const handleSelectChange = (e) => {
    const value = e.target.value
    booksFilter.setBooksFilter({
      ...booksFilter.booksFilter,
      genre: value
    })
  }

  return (
    <form onSubmit={e => e.preventDefault()} className='p-2 h-16'>
      <label htmlFor="Pages select" className='text-slate-400 px-2'>Filter by pages</label>
      <select className='bg-red' name="Pages select" defaultValue={'any'} onChange={handleRangeChange}>
        <option value="any">Any pages</option>
          {books.pages && books.pages.pages.map((page, index) => {
            if (index % 2 === 0) {
              const nextPage = books.pages.pages[index + 1]
              const pageRange = nextPage !== undefined ? `${page} - ${nextPage}` : `${page}`
              return (
                <option className='text-center' key={pageRange} value={pageRange}>
                  {pageRange}
                </option>
              )
            }
            return null
          })}
      </select>

      <label htmlFor="Genre select" className='text-slate-400 px-2'>Filter by genre</label>
      <select name="Genre select" defaultValue={'any'} onChange={handleSelectChange} >
        <option value="any">Any Genre</option>
        {books.genres && books.genres.map(genre => <option key={`${genre}`} value={`${genre}`}>{genre}</option>)}
      </select>

      <label htmlFor="orderBy" className='text-slate-400 px-2'>Order by</label>
      <select name="orderBy" defaultValue={'any'} onChange={handleSelectChange} >
        <option value="any">Any</option>
        <option value="any">Lower Price</option>
        <option value="any">Higher Price</option>
        <option value="any">Name</option>

      </select>

    </form>

  )
}
