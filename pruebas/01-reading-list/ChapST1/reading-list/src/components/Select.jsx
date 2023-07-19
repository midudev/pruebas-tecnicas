import { useBookZustandStore } from '../hooks/useBookZustandStore'
import { useBooksCategories } from '../hooks/useBooksCategories'
import { useFilteredBooks } from '../hooks/useFilteredBooks'

export function Select () {
  const { booksCategories } = useBooksCategories()
  const { updateGenderFilter, updateBooks } = useBookZustandStore()
  const { filteredBooks } = useFilteredBooks()

  const handleChange = async (e) => {
    const categoryValue = e.target.value

    if (categoryValue === 'Todas') {
      updateGenderFilter(categoryValue)
      updateBooks(filteredBooks)
      return
    }

    const filterBooks = filteredBooks.filter(({ book }) => book.genre === categoryValue)

    updateGenderFilter(categoryValue)
    updateBooks(filterBooks)
  }

  return (
    <label htmlFor='' className=''>
      Fitrar libros por generos
      <select name='' id='' className=' px-5 py-1 block mt-3 mx-auto bg-[#0a0a0a] border border-[#404040] ' onChange={handleChange}>
        {
            booksCategories?.map((category, index) => {
              return <option key={index} value={category}>{category}</option>
            })
        }
      </select>
    </label>
  )
}
