import { useState } from 'react'
import { IBook } from '../types/book'
import { getBooks } from '../services/getBooks'

export interface LibraryHook {
  filteredBooks: IBook[]
  filterBooks: () => void
  readingList: IBook[]
}

export function useLibrary () {
  const [books] = useState<IBook[]>(getBooks())
  const [filteredBooks, setFilteredBooks] = useState<IBook[]>([...books])
  const [readingList] = useState<IBook[]>([])

  function filterBooks () {
    setFilteredBooks([...books])
  }

  return { filteredBooks, filterBooks, readingList }
}
