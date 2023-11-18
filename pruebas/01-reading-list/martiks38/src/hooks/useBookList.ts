import { useContext } from 'react'
import { BookListContext } from '@/context/bookList'

export function useBookList() {
  const context = useContext(BookListContext)

  if (!context) throw new Error('useBookList must be used within a BookListContext')
  const { state, ...actions } = context

  return { ...state, ...actions }
}
