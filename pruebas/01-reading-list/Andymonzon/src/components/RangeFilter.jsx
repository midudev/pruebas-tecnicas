import { useState } from 'react'
import { useBookContext } from '../hooks/useBookContext'

function RangeFilter () {
  const [minPage, setMinPage] = useState(0)

  const { book, setFilterPage } = useBookContext()

  const pages = book.map(book => book.book.pages)
  const maxPages = Math.max(...pages)

  const handleChangePage = (e) => {
    setMinPage(e.target.value)
    setFilterPage(e.target.value)
  }

  return (
    <div className='flex items-center gap-2 text-white font-bold'>
      <input type="range" id='pages' min='0' max={maxPages} onChange={handleChangePage} />
      <label htmlFor='pages'>Pages: <span>{minPage}</span></label>
    </div>
  )
}

export { RangeFilter }
