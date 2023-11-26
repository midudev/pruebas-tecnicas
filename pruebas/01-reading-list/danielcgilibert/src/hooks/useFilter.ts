import { useEffect, useState } from 'react'
import { useStore } from '../store/bookStore'

export function useFilter() {
  const [selectCategory, setSelectCategory] = useState<string[]>([])
  const [numberPages, setNumberPages] = useState(0)
  const [search, setSearch] = useState('')
  const { books, setFilterBooks } = useStore()
  const handleSelectCategory = (genre: string) => {
    if (!selectCategory.includes(genre)) {
      setSelectCategory((prev) => [...prev, genre])
    } else {
      setSelectCategory((prev) => prev.filter((item) => item !== genre))
    }
  }

  useEffect(() => {
    const filter = books.filter((book) => {
      // filter by genre
      if (!(selectCategory.includes(book.genre) || selectCategory.length === 0))
        return false

      // filter by number of pages
      if (!(book.pages <= numberPages || numberPages === 0)) return false

      // filter by search
      if (!book.title.toLowerCase().includes(search.toLowerCase())) return false

      return true
    })

    setFilterBooks(filter)
  }, [selectCategory, numberPages, search])

  return {
    handleSelectCategory,
    selectCategory,
    setNumberPages,
    numberPages,
    search,
    setSearch
  }
}
