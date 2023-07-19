import { useEffect } from 'react'
import { useBookZustandStore } from '../hooks/useBookZustandStore'
import { useFilteredBooks } from '../hooks/useFilteredBooks'
import { usePagesNumber } from '../hooks/usePagesNumber'
import { ALL_CATEGORIES } from '../constants'

export function Range () {
  const { filteredBooks } = useFilteredBooks()
  const { pagesNumber } = usePagesNumber()
  const { updateBooks, updatePageFilter, genderFilter, pageFilter } = useBookZustandStore()

  const minValue = Math.min(...pagesNumber)
  const maxValue = Math.max(...pagesNumber)

  const handleChange = (event) => {
    const value = Number(event.target.value)
    updatePageFilter(value)
  }

  useEffect(() => {
    if (genderFilter === ALL_CATEGORIES) {
      const newBooks = filteredBooks.filter(({ book }) => book.pages >= pageFilter)
      updateBooks(newBooks)
      return
    }

    const filterBooks = filteredBooks.filter(({ book }) => book.genre === genderFilter)
    const newBooks = filterBooks.filter(({ book }) => book.pages >= pageFilter)

    updateBooks(newBooks)
  }, [pageFilter, updateBooks, genderFilter]) // eslint-disable-line

  return (
    <label htmlFor='range' className=''>
      Filtrar por numeros de paginas

      <div className='flex items-center justify-center  mt-4 gap-4 relative'>
        <span className='absolute left-[50%] bottom-[-30px] translate-x-[-50%]'>Pag: {pageFilter}</span>
        <span>Min {minValue}</span>
        <input
          type='range'
          name=''
          id='range'
          className='block mx-auto accent-[#404040] bg-blue-300'
          step={1}
          min={minValue}
          max={maxValue}
          onChange={handleChange}
        />
        <span>Max {maxValue}</span>
      </div>
    </label>
  )
}
