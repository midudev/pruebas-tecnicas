// context/todoContext.tsx
import { createContext, useContext, useState } from 'react'
import { library as InitialLibrary } from './../mocks/books.json'
import { type LibraryElement } from '../types'

export interface GlobalContent {
  library: LibraryElement[]
  readingBooks: LibraryElement[] | []
  setReadingBooks: (e: LibraryElement[]) => void
  setLibrary: (e: LibraryElement[]) => void
}
export const BooksContext = createContext<GlobalContent>(
  {
    library: InitialLibrary,
    readingBooks: [],
    setReadingBooks: () => {},
    setLibrary: () => {}
  }
)

export const BooksProvider = ({ children }: { children: React.ReactNode }) => {
  window.addEventListener('storage', event => {
    if (event.key === '__library__') {
      setLibrary(JSON.parse(event.newValue!) as LibraryElement[])
      setReadingBooks(JSON.parse(event.newValue!).filter((ele: LibraryElement) => ele.toRead))
    }
  })

  const initialBooks: LibraryElement[] = localStorage.getItem('__library__') != null
    ? (JSON.parse(localStorage.getItem('__library__')!) as LibraryElement[])
    : InitialLibrary
  const toReadBooks: LibraryElement[] = localStorage.getItem('__library__') != null
    ? (JSON.parse(localStorage.getItem('__library__')!) as LibraryElement[]).filter(ele => ele.toRead)
    : []
  console.log('LOS LIROS INICIALES SON: ', initialBooks)
  const [library, setLibrary] = useState<LibraryElement[]>(initialBooks)
  const [readingBooks, setReadingBooks] = useState<LibraryElement[]>(
    toReadBooks
  )

  return (
    <BooksContext.Provider value={
      { library, readingBooks, setReadingBooks, setLibrary }
      }>
{ children }
    </BooksContext.Provider>
  )
}

export const useBookContext = () => useContext(BooksContext)
