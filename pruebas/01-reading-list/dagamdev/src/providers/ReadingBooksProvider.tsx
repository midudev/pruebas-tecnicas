'use client'

import { useState, useEffect, type ReactNode } from 'react'
import { ReadingBooksContext } from '@/contexts/ReadingBooks'
import type { Book } from '@/utils/types'
import { getReadingBooks, getBooksByISBNs } from '@/utils/services'
import { LOCAL_KEYS } from '@/utils/config'

export default function ReadingBooksProvider({children}: {children: ReactNode}){
  const [readingBooks, setReadingBooks] = useState<Book[]>([])
  const [openList, setOpenList] = useState(false)
  
  useEffect(()=> {
    
    setReadingBooks(getReadingBooks())

  }, [])

  useEffect(()=> {
    const handleStorage = (e: StorageEvent) => {
      if(e.key == LOCAL_KEYS.READING_BOOKS && e.newValue){
        const ISBNs: string[] = JSON.parse(e.newValue)
        if(ISBNs.length != readingBooks.length) {
          setReadingBooks(getBooksByISBNs(ISBNs))
        }
      }
    }

    window.addEventListener('storage', handleStorage)

    return () => {
      window.removeEventListener('storage', handleStorage)
    }
  }, [readingBooks])

  return (
    <>
      <ReadingBooksContext.Provider value={{
        readingBooks,
        addBook(newBook) {
          setReadingBooks(rb=> [...rb, newBook])
        },
        removeBook(bookISBN) {
          setReadingBooks(rb=> rb.filter(b=> b.ISBN != bookISBN))
        },
        openList,
        setOpenList
      }}>
        {children}
      </ReadingBooksContext.Provider>
    </>
  )
}