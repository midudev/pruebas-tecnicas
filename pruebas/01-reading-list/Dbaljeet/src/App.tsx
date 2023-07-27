import { ChangeEvent, useContext, useMemo, useState } from 'react'

import ContextBook, { IContextBook } from './context/BookContext'

import ListOfBook from './components/Book/ListOfBook'

import debounce from 'just-debounce-it'

import './App.css'

function App() {
  const [genre, setGenre] = useState('')
  const [numberOfPages, setNumberOfPages] = useState(0)

  const { books, readingList } = useContext(ContextBook) as IContextBook

  const max = useMemo(
    () => books.reduce((max, book) => Math.max(max, book.book.pages), 0),
    [books]
  )
  const GENRES = Array.from(new Set(books.map((book) => book.book.genre)))

  const handleInputPages = (ev: ChangeEvent<HTMLInputElement>) => {
    const x = debounce(() => setNumberOfPages(Number(ev.target.value)), 500)
    x()
    return () => x.cancel()
  }

  return (
    <>
      <h1 className="text-3xl p-10 font-bold">Organiza tu lectura</h1>

      <form className="flex flex-col w-[300px] m-auto">
        <label htmlFor="genre">Selecciona el género literario</label>
        <select
          id="genre"
          defaultValue=""
          onChange={(ev) => setGenre(ev.target.value)}
          className="bg-black"
        >
          <option value="">Todos</option>
          {GENRES.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>

        <span className="flex flex-col">
          <label>Filtra por el número de páginas</label>
          <input
            onChange={(ev) => handleInputPages(ev)}
            type="range"
            min={0}
            max={max}
          />
          {numberOfPages === 0 ? '-' : `Menos de: ${numberOfPages} páginas`}
        </span>
      </form>

      <main className="flex flex-wrap w-full m-auto justify-center py-5">
        <ListOfBook
          library={books}
          title="Libros disponibles"
          left={true}
          genre={genre}
          numberOfPages={numberOfPages}
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
