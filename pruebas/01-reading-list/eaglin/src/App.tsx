import { useState } from 'react'
import './App.css'

import BookListToRead from './components/BookListToRead'

import BookList from './components/BookList'

import HeaderComponent from './components/Header'
import { useSetBooks } from './hooks/useSetBooks'
import { type LibraryElement } from './types'
export enum BOOK_GENRES {
  CYFY = 'Ciencia ficción',
  TERROR = 'Terror',
  FANTASY = 'Fantasía',
  ALL = 'All'
}

function App () {
  const { library, readingBooks, addReading } = useSetBooks()
  const [filter, setFilter] = useState<BOOK_GENRES>(BOOK_GENRES.ALL)

  // const readingBooks = library.filter(ele => ele.toRead)

  // const { readingBooks } = useSetBooks(library, filter)

  const filterBooks = library.filter((ele: LibraryElement) => {
    if (filter === BOOK_GENRES.ALL) return true
    else return filter === ele.book.genre
  })

  const handleChageCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value as BOOK_GENRES)
  }
  return <div className='main-container' style={{ }}>
   <HeaderComponent handleChageCategory={handleChageCategory}/>
    <div style={{ display: 'flex', marginTop: 20 }}>
     <BookList addElement={addReading} library={filterBooks} style={{ flexDirection: 'row', flexWrap: 'wrap', display: 'flex', maxWidth: '60vw', gap: 40, flex: 1 }} />
     <BookListToRead addElement={addReading} library={readingBooks} imgHeight={150} imgWidth={100}/>
     </div>
  </div>
}

export default App
