import { ALL_CATEGORIES } from '../constants'
import { useBookZustandStore } from '../hooks/useBookZustandStore'
import { useBooksCategories } from '../hooks/useBooksCategories'
import { useFilteredBooks } from '../hooks/useFilteredBooks'

export function Select () {
  const { booksCategories } = useBooksCategories()
  const { updateGenderFilter, updateBooks } = useBookZustandStore()
  const { filteredBooks } = useFilteredBooks()

  const handleChange = async (e) => {
    const categoryValue = e.target.value

    if (categoryValue === ALL_CATEGORIES) {
      updateGenderFilter(categoryValue)
      updateBooks(filteredBooks)
      return
    }

    const newBooks = filteredBooks.filter(({ bookGenre }) => bookGenre === categoryValue)

    updateBooks(newBooks)
    updateGenderFilter(categoryValue) // el error es este update
  }

  return (
    <label htmlFor='select-input' className='text-[#ededea] text-center'>
      Fitrar libros por categoria

      <select name='select-input' id='select-input' className=' px-5 py-1 block mt-3 mx-auto bg-[#0a0a0a] border border-[#404040] text-[#ededea] outline-none ' onChange={handleChange}>
        {
            booksCategories?.map((category, index) => {
              return <option key={index} value={category} className='text-[#7b7b7a]'>{category}</option>
            })
        }
      </select>
    </label>
  )
}
