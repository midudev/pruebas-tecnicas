import { useEffect, useState } from 'react'
import { IBook } from '../types/book'
import { getBooks } from '../services/getBooks'
import { updateLocalStorage } from '../services/local-storage'

export interface LibraryHook {
  filteredBooks: IBook[]
  setGenre: React.Dispatch<React.SetStateAction<string | null>>
  addBookToReadingList: (book: IBook) => void
  removeBookFromReadingList: (book: IBook) => void
  readingList: IBook[]
  remainingBooks: number
}

export function useLibrary () {
  const [books] = useState<IBook[]>(getBooks())
  const [filteredBooks, setFilteredBooks] = useState<IBook[]>([...books])
  const [readingList, setReadingList] = useState<IBook[]>([])
  const [genre, setGenre] = useState<string | null>(null)

  useEffect(() => {
    const readingListString = localStorage.getItem('readingList')
    if (readingListString == null) return
    const json = JSON.parse(readingListString) as IBook[]
    setReadingList(json)
  }, [])

  useEffect(() => {
    const newFilteredBooks = books.filter(book => {
      const isBookinReadingList = readingList.findIndex(b => b.ISBN === book.ISBN) !== -1
      return !isBookinReadingList && (genre == null || genre === '' || book.genre === genre)
    })
    setFilteredBooks([...newFilteredBooks])
  }, [books, genre, readingList])

  function addBookToReadingList (book: IBook) {
    setReadingList(prev => {
      const index = prev.findIndex(b => b.ISBN === book.ISBN)
      if (index !== -1) return prev
      const newReadingList = [...prev, book]
      updateLocalStorage(newReadingList)
      return newReadingList
    })
  }

  function removeBookFromReadingList (book: IBook) {
    setReadingList(prev => {
      const index = prev.findIndex(b => b.ISBN === book.ISBN)
      if (index === -1) return prev
      const newReadingList = [...prev]
      newReadingList.splice(index, 1)
      updateLocalStorage(newReadingList)
      return newReadingList
    })
  }

  return { filteredBooks, readingList, addBookToReadingList, removeBookFromReadingList, setGenre, remainingBooks: books.length - readingList.length }
}
