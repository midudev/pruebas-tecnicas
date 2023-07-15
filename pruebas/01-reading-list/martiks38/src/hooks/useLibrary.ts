import { useMemo } from 'react'

import db from '@/assets/db/books.json'

import type { Book } from '@/typings/books'

export function useLibrary(): [Book[], string[]] {
  return useMemo(() => {
    const { library } = db
    const books = library.map<Book>(({ book }) => book)
    const genres = [...new Set(books.map(({ genre }) => genre))]

    return [books, genres]
  }, [])
}
