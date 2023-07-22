import { useContext } from 'react'
import { BooksContext } from '@/contexts/books'

export function useBooks() {
  const context = useContext(BooksContext)

  if (context === undefined) {
    throw new Error('useBooks must be used within a BooksProvider')
  }

  return context
}
