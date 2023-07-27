import { useContext, useMemo, useState } from 'react'

import ContextBook, { IContextBook } from './context/BookContext'

import ListOfBook from './components/Book/ListOfBook'

import debounce from 'just-debounce-it'

import './App.css'
import PrincipalForm from './components/PrincipalForm'

function App() {
  const { books, readingList } = useContext(ContextBook) as IContextBook

  const [genre, setGenre] = useState('')
  const [keyword, setKeyword] = useState('')
  const [numberOfPages, setNumberOfPages] = useState(0)

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

      <main className="flex flex-wrap w-full m-auto justify-center py-5">
        <ListOfBook
          library={books}
          title="Libros disponibles"
          left={true}
          genre={genre}
          numberOfPages={numberOfPages}
          keyword={keyword}
        />
        <ListOfBook
          library={readingList}
          title="Libros añadidos"
          left={false}
        />
      </main>
    </>
  )
}

export default App
