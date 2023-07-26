import { useContext, useState } from 'react'
import './App.css'
import ListOfBook from './components/Book/ListOfBook'
import ContextBook, { IContextBook } from './context/BookContext'

function App() {
  const [genre, setGenre] = useState('')

  const { books, readingList } = useContext(ContextBook) as IContextBook

  const GENRES = Array.from(new Set(books.map((book) => book.book.genre)))

  return (
    <>
      <h1 className="text-3xl p-10 font-bold">Organiza tu lectura</h1>

      <form className="flex flex-col w-[300px] m-auto">
        <label htmlFor="genre">Selecciona el género</label>
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
      </form>

      <main className="flex flex-wrap w-full m-auto justify-center py-5  gap-5">
        <ListOfBook
          library={books}
          title="Libros disponibles"
          left={true}
          genre={genre}
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
