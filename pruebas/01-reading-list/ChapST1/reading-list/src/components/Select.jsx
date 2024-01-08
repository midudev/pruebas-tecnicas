import { useCategories } from '../hooks/useCategories'
import { useZustandBookStore } from '../hooks/useZustandBooksStore'

export function Select () {
  const { updateCategory, category } = useZustandBookStore()
  const { categories } = useCategories()

  const handleCategoryChange = (event) => {
    const category = event.target.value
    updateCategory(category)
  }

  return (
    <select
      name=''
      id=''
      className=' px-2 py-1 rounded-md text-[#fefefe]  outline-none bg-[#171717]'
      value={category}
      onChange={handleCategoryChange}
    >
      {
        categories.map((category, index) => {
          return <option key={index} value={category}>{category}</option>
        })
      }
    </select>
  )
}
