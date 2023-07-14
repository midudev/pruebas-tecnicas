import { useBookContext } from '../hooks/useBookContext'

function RangeFilter () {
  const { book, setFilterPage, filterPage } = useBookContext()

  const pages = book.map(book => book.book.pages)
  const maxPages = Math.max(...pages)

  const handleChangePage = (e) => {
    setFilterPage(e.target.value)
  }

  return (
    <div className='flex items-center gap-2 text-white font-bold'>
      <input type="range" id='pages' min='0' max={maxPages} onChange={handleChangePage} />
      <label htmlFor='pages'>Pages: <span>{filterPage}</span></label>
    </div>
  )
}

export { RangeFilter }
