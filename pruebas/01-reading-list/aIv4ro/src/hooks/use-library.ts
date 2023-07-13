import { useState } from 'react'
import { IBook } from '../types/book'
import { getBooks } from '../services/getBooks'

interface LibraryFilter {
  genre?: string
}

export interface LibraryHook {
  filteredBooks: IBook[]
  filterBooks: (filter: LibraryFilter) => void
  readingList: IBook[]
}

export function useLibrary (): LibraryHook {
  const [books] = useState<IBook[]>(getBooks())
  const [filteredBooks, setFilteredBooks] = useState<IBook[]>([...books])
  const [readingList] = useState<IBook[]>([])

  function filterBooks ({ genre }: LibraryFilter) {
    const newFilteredBooks = genre == null || genre === '' ? [...books] : books.filter(book => book.genre === genre)
    setFilteredBooks([...newFilteredBooks])
  }

  return { filteredBooks, filterBooks, readingList }
}
