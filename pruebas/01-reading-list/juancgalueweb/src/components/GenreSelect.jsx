import { Select } from 'antd'
import { useEffect } from 'react'
import { shallow } from 'zustand/shallow'
import { useBooksStore } from '../stores/books'

export const GenreSelect = () => {
  const [
    books,
    categories,
    setCategories,
    booksBySelectedCategory,
    setSelectedCategory,
    selectedCategory
  ] = useBooksStore(
    (state) => [
      state.books,
      state.categories,
      state.setCategories,
      state.booksBySelectedCategory,
      state.setSelectedCategory,
      state.selectedCategory
    ],
    shallow
  )

  const handleChange = (value) => {
    booksBySelectedCategory(value)
    setSelectedCategory(value)
  }

  useEffect(() => {
    setCategories()
  }, [books])

  return (
    <Select
      defaultValue={selectedCategory}
      style={{ width: 150, textAlign: 'left' }}
      onChange={handleChange}
      options={categories.map((cat) => {
        return { value: cat, label: cat }
      })}
    />
  )
}
