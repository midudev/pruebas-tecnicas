import { Select } from 'antd'
import { useEffect } from 'react'
import { shallow } from 'zustand/shallow'
import { useBooksStore } from '../stores/books'

export const GenreSelect = () => {
  const [
    books,
    categories,
    setCategories,
    booksFilter,
    setSelectedCategory,
    selectedCategory,
    sliderValue
  ] = useBooksStore(
    (state) => [
      state.books,
      state.categories,
      state.setCategories,
      state.booksFilter,
      state.setSelectedCategory,
      state.selectedCategory,
      state.sliderValue
    ],
    shallow
  )

  const handleChange = (value) => {
    setSelectedCategory(value)
    booksFilter(value, sliderValue)
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
