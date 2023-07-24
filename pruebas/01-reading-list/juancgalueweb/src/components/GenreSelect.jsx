import { Select } from 'antd'
import { useEffect } from 'react'
import { shallow } from 'zustand/shallow'
import { useBooksStore } from '../stores/books'

export const GenreSelect = () => {
  const [
    categories,
    copyBooks,
    setCategories,
    booksBySelectedCategory,
    setSelectedCategory
  ] = useBooksStore(
    (state) => [
      state.categories,
      state.copyBooks,
      state.setCategories,
      state.booksBySelectedCategory,
      state.setSelectedCategory
    ],
    shallow
  )

  const handleChange = (value) => {
    booksBySelectedCategory(value)
    setSelectedCategory(value)
  }

  useEffect(() => {
    setCategories()
  }, [copyBooks])

  return (
    <Select
      defaultValue='Todos'
      style={{ width: 150, textAlign: 'left' }}
      onChange={handleChange}
      options={categories.map((cat) => {
        return { value: cat, label: cat }
      })}
    />
  )
}
