'use client'

import { useState, useEffect, type ReactNode } from 'react'
import { BooksContext } from '@/contexts/BooksContext'
import type { Book } from '@/utils/types'
import { getBooks } from '@/utils/services'

export default function BooksProvider({children}: {children: ReactNode}){
  const [books, setBooks] = useState<Book[]>([])

  useEffect(()=> {
    setBooks(getBooks())
  }, [])
  
  return (
    <>
      <BooksContext.Provider value={{
        books,
        updateBooks(newBooks) {
          setBooks(newBooks)
        },
      }}>
        {children}
      </BooksContext.Provider>
    </>
  )
}