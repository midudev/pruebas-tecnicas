import { createContext } from 'react'
import { LibraryHook, useLibrary } from './hooks/use-library'
import { Library } from './components/library'

const defaultLibrary: LibraryHook = {
  filteredBooks: [],
  setGenre: () => { console.log('set genre') },
  addBookToReadingList: () => { console.log('add book to reading list') },
  removeBookFromReadingList: () => { console.log('remove book from reading list') },
  readingList: [],
  remainingBooks: 0
}

export const LibraryContext = createContext<LibraryHook>(defaultLibrary)

function App () {
  const library = useLibrary()

  return (
    <LibraryContext.Provider value={library}>
      <header className='p-2'>
        <h1 className='text-2xl font-semibold'>Reading List</h1>
      </header>
      <Library />
    </LibraryContext.Provider>
  )
}

export default App
