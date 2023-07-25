// context/todoContext.tsx
import { createContext, useContext, useState } from 'react'
import { library as InitialLibrary } from './../mocks/books.json'
import { type LibraryElement } from '../types'

export enum BOOK_GENRES {
  CYFY = 'Ciencia ficción',
  TERROR = 'Terror',
  FANTASY = 'Fantasía',
  ALL = 'All'
}

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

export interface FilterContent {
  filter: BOOK_GENRES
  setFilter?: (e: BOOK_GENRES) => void
}
export const FilterContext = createContext<FilterContent>(
  {
    filter: BOOK_GENRES.ALL,
    setFilter: () => {}

  }
)

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [filter, setFilter] = useState<BOOK_GENRES>(localStorage.getItem('__filter__') != null
    ? (JSON.parse(localStorage.getItem('__library__')!) as BOOK_GENRES)
    : BOOK_GENRES.ALL)

  window.addEventListener('storage', event => {
    if (event.key === '__filter__') {
      setFilter(JSON.parse(event.newValue!) as BOOK_GENRES)
    }
  })

  return (
    <FilterContext.Provider value={
      { filter, setFilter }
      }>
{ children }
    </FilterContext.Provider>
  )
}

export const useBookContext = () => useContext(BooksContext)
