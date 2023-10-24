import type { Book } from '@/types'
import { createContext, useEffect, useState } from 'react'

export interface FiltersContext {
  rangeFilter: number | null
  selectFilter: string | null
  readingList: Book[]
  updateRangeFilter: (range: number | null) => void
  updateSelectFilter: (select: string | null) => void
  addBookToReadingList: (book: Book) => void
  removeBookFromReadingList: (book: Book) => void
  getIfBookisInReadingList: (book: Book) => boolean
}

export const FiltersContext = createContext<FiltersContext | null>(null)

interface Props {
  children: React.ReactNode
}

export default function FiltersProvider({ children }: Props) {
  const [rangeFilter, setRangeFilter] = useState<number | null>(null)
  const [selectFilter, setSelectFilter] = useState<string | null>(null)
  const [readingList, setReadingList] = useState<Book[]>([])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setReadingList(JSON.parse(localStorage.getItem('readingList') as string) || [])
    }
  }, [])

  const updateRangeFilter = (range: number | null) => {
    setRangeFilter(range)
  }

  const updateSelectFilter = (select: string | null) => {
    setSelectFilter(select)
  }

  const getIfBookisInReadingList = (book: Book) => {
    return readingList.some((item) => item.ISBN === book.ISBN)
  }

  const addBookToReadingList = (book: Book) => {
    const isBookInReadingList = getIfBookisInReadingList(book)

    if (!isBookInReadingList) {
      const newReadingList = [...readingList, book]
      setReadingList(newReadingList)
      localStorage.setItem('readingList', JSON.stringify(newReadingList))
    }
  }

  const removeBookFromReadingList = (book: Book) => {
    const newReadingList = readingList.filter((item) => item.ISBN !== book.ISBN)
    setReadingList(newReadingList)
    localStorage.setItem('readingList', JSON.stringify(newReadingList))
  }

  return (
    <FiltersContext.Provider
      value={{
        rangeFilter,
        selectFilter,
        updateRangeFilter,
        updateSelectFilter,
        addBookToReadingList,
        removeBookFromReadingList,
        readingList,
        getIfBookisInReadingList
      }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
