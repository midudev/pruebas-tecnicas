import { useContext, useMemo, useState } from 'react'

import ContextBook, { IContextBook } from './context/BookContext'

import PrincipalForm from './components/PrincipalForm'
import BookPages from './components/Book/BooksPages'

import debounce from 'just-debounce-it'

import './App.css'

function App() {
  const [genre, setGenre] = useState('')
  const [keyword, setKeyword] = useState('')
  const [numberOfPages, setNumberOfPages] = useState(0)

  const { books } = useContext(ContextBook) as IContextBook

  const max = useMemo(
    () => books.reduce((max, book) => Math.max(max, book.book.pages), 0),
    [books]
  )

  const GENRES = Array.from(new Set(books.map((book) => book.book.genre)))

  const handleInputPages = (value: string) => {
    const x = debounce(() => setNumberOfPages(Number(value)), 500)
    x()
    return () => x.cancel()
  }

  return (
    <>
      <header className="">
        <h1 className="text-3xl p-10 font-bold">Organiza tu lectura</h1>
      </header>

      <PrincipalForm
        genre={genre}
        GENRES={GENRES}
        handleInputPages={handleInputPages}
        max={max}
        numberOfPages={numberOfPages}
        setGenre={setGenre}
        keyword={keyword}
        setKeyword={setKeyword}
      />

      <BookPages
        genre={genre}
        numberOfPages={numberOfPages}
        keyword={keyword}
      />
    </>
  )
}

export default App
