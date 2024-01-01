import { useMemo, useState } from 'react'

import { type Book } from '../types/book'
import { BOOKS, LIST } from '../app/constants'
import { useReadingListStore } from '../store/readingList'

export const useFilters = (selectedList: string) => {
  const [genre, setGenre] = useState<Book['genre']>('')
  const [pages, setPages] = useState<Book['pages']>(1200)
  const { readingList } = useReadingListStore()

  const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGenre(event.target.value)
  }

  const handlePagesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPages(Number(event.target.value))
  }

  const resetGenreFilter = () => {
    setGenre('')
  }

  const resetPagesFilter = () => {
    setPages(1200)
  }

  const filteredBooks = useMemo(() => {
    return BOOKS.filter((book) => {
      if (selectedList === LIST.ALL) {
        if (genre !== '' && book.genre !== genre) return false
        if (pages !== 1200 && book.pages > pages) return false
        if (readingList.includes(book.ISBN)) return false
      } else if (selectedList === LIST.READING_LIST) {
        if (!readingList.includes(book.ISBN)) return false
        if (genre !== '' && book.genre !== genre) return false
        if (pages !== 1200 && book.pages > pages) return false
      }

      return true
    })
  }, [genre, pages, selectedList, readingList])

  return {
    genre,
    pages,
    handleGenreChange,
    handlePagesChange,
    resetGenreFilter,
    resetPagesFilter,
    filteredBooks
  }
}
