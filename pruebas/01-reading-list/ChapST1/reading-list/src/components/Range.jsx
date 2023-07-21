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
      const newBooks = filteredBooks.filter(({ bookPages }) => bookPages >= pageFilter)

      updateBooks(newBooks)
      return
    }

    const filterBooks = filteredBooks.filter(({ bookPages, bookGenre }) => {
      return bookPages >= pageFilter && bookGenre === genderFilter
    })

    updateBooks(filterBooks)
  }, [pageFilter, updateBooks])

  return (
    <label htmlFor='range-input' className='text-[#ededea] text-center'>
      Filtrar por numeros de paginas

      <div className='flex items-center justify-center  mt-4 gap-4 relative'>
        <span className='text-[#7b7b7a]'>Min {minValue}</span>
        <span className=' text-[#b4b4b4] absolute left-[50%] bottom-[-30px] translate-x-[-50%]'>Pag: {pageFilter}</span>
        <input
          type='range'
          name='input-range'
          id='range-input'
          className='block mx-auto accent-[#404040] bg-blue-300'
          step={1}
          min={minValue}
          max={maxValue}
          onChange={handleChange}
        />
        <span className='text-[#7b7b7a]'>Max {maxValue}</span>
      </div>
    </label>
  )
}
