'use client'
import { useState } from 'react'
import { LibraryData, Library } from '@/types/library'
import data from '../../../../../books.json'
import SelectedBooks from './selectedBooks'
import AvailableBooks from './availableBooks'

export function Main () {
  const [libraryData, setLibraryData] = useState<LibraryData>(data)
  const [selectedBooks, setSelectedBooks] = useState<Library[]>([])

  const selectBook = (selectedBook: Library) => {
    setSelectedBooks([...selectedBooks, selectedBook])
    setLibraryData({
      library: libraryData.library.filter(book => book !== selectedBook)
    })
  }

  const deselectBook = (deselectedBook: Library) => {
    setSelectedBooks(selectedBooks.filter(book => book !== deselectedBook))
    setLibraryData({
      library: [...libraryData.library, deselectedBook]
    })
  }

  return (
    <div className={`flex min-h-screen flex-col items-center justify-between p-24 ${selectedBooks.length > 0 ? 'pr-72' : ''}`}>
      <h1>Store books</h1>
      <AvailableBooks
        libraryData={libraryData}
        selectBook={selectBook}
      />
      <SelectedBooks
        selectedBooks={selectedBooks}
        deselectBook={deselectBook}
      />
    </div>
  )
}
