'use client'
import { useState, useEffect } from 'react'
import { LibraryData, Library } from '@/types/library'
import data from '../../../../../books.json'
import SelectedBooks from './selectedBooks'
import AvailableBooks from './availableBooks'
import GenreFilter from './genreFilter'

export function Main () {
  const [libraryData, setLibraryData] = useState<LibraryData>(data)
  const [selectedBooks, setSelectedBooks] = useState<Library[]>([])
  const [genres, setGenres] = useState<string[]>([])
  const [selectedGenre, setSelectedGenre] = useState('All')
  const filteredBooks = libraryData.library.filter(item => selectedGenre === 'All' || item.book.genre === selectedGenre)

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

  useEffect(() => {
    const allGenres = libraryData.library.map(book => book.book.genre)
    const uniqueGenres = Array.from(new Set(allGenres))
    setGenres(['All', ...uniqueGenres])
  }, [])

  return (
    <div className={`flex min-h-screen flex-col items-center justify-between p-24 ${selectedBooks.length > 0 ? 'pr-72' : ''}`}>
      <div className='flex flex-col items-center'>
        <h1>Store books</h1>
        <h2>Books Availables: {filteredBooks.length}</h2>
        <GenreFilter
          genres={genres}
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
        />
      </div>

      <AvailableBooks
        libraryData={filteredBooks}
        selectBook={selectBook}
        selectedGenre={selectedGenre}
      />
      <SelectedBooks
        selectedBooks={selectedBooks}
        deselectBook={deselectBook}
      />
    </div>
  )
}
