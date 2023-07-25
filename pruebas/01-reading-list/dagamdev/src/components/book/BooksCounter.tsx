'use client'

import { useReadingBooks } from '@/hooks/useReadingBooks'

export default function BooksCounter({text, books}: {
  text: string
  books?: string[]
}){
  const { readingBooks } = useReadingBooks()

  const content = text.replace('{}', (books ? books.length-readingBooks.filter(f=> books.some(s=> s == f.ISBN)).length : readingBooks.length).toLocaleString())

  return (
    <strong>
      {content}
    </strong>
  )
}