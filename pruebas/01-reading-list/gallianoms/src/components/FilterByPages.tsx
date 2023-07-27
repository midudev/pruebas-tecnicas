import { useState, useEffect } from 'react'
import { Library } from '../interfaces/Book'

interface FilterByPagesProps {
  bookList: Library
  setFilteredBookList: (bookList: Library | undefined) => void
}

const FilterByPages = ({
  bookList,
  setFilteredBookList,
}: FilterByPagesProps) => {
  const [selectedPages, setSelectedPages] = useState(0)

  const handleFilterBooksByPages = (pages: number) => {
    setSelectedPages(pages)

    const filteredBooks = bookList.library.filter(
      book => book.book.pages >= pages
    )
    setFilteredBookList({ library: filteredBooks })
  }

  useEffect(() => {
    const minPages = Math.min(...bookList.library.map(book => book.book.pages))
    setSelectedPages(minPages)
  }, [bookList])

  return (
    <div className='flex items-center'>
      <input
        type='range'
        min={Math.min(...bookList.library.map(book => book.book.pages))}
        max={Math.max(...bookList.library.map(book => book.book.pages))}
        value={selectedPages}
        step={1}
        className='range range-xs range-warning w-44'
        onChange={e => handleFilterBooksByPages(parseInt(e.target.value))}
      />
      <p className='text-sm text-gray-600 pl-4 font-semibold'>
        Filter {selectedPages} pages
      </p>
    </div>
  )
}

export default FilterByPages
