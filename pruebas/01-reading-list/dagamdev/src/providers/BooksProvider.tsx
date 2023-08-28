'use client'

import { useState, useEffect, type ReactNode } from 'react'
import { BooksContext } from '@/contexts/BooksContext'
import type { Book } from '@/utils/types'
import { getBooks, getBooksISBNs } from '@/utils/services'
import { useFilters } from '@/hooks/useFilters'
import { useOrganize } from '@/hooks/useOrganize'
import { LOCAL_KEYS } from '@/utils/config'

export default function BooksProvider({children}: {children: ReactNode}){
  const [books, setBooks] = useState<Book[]>([])
  const { filters } = useFilters()
  const { organize } = useOrganize()

  useEffect(()=> {
    setBooks(getBooks())
  }, [])

  useEffect(()=> {
    let updatedBooks = getBooks()

    updatedBooks = updatedBooks.filter(f=> {
      const gender = filters.gender ? f.genre.toLowerCase() == filters.gender : true
      const pages = filters.pages ? f.pages >= filters.pages : true
      const title = filters.title ? (f.title == filters.title || f.title.toLowerCase().includes(filters.title.toLowerCase())) : true

      return gender && pages && title
    })

    if(organize == 'pages') updatedBooks.sort((a,b)=> b.pages - a.pages)
    if(organize == 'priority') {
      const priorityISBNs = getBooksISBNs(LOCAL_KEYS.PRIORITY_BOOKS)

      updatedBooks = [
        ...updatedBooks.filter(f=> priorityISBNs?.some(s=> s == f.ISBN)),
        ...updatedBooks.filter(f=> !priorityISBNs?.some(s=> s == f.ISBN))
      ]
    }
    if(organize == 'alphabetical') updatedBooks.sort((a,b)=> a.title.localeCompare(b.title))

    setBooks(updatedBooks)
  }, [filters, organize])
  
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