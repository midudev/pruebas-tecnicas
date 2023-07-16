import './App.css'
import { useState } from 'react'
import { Book } from './components/Book'
import { BookContainer } from './components/BookContainer'
import data from '../../books.json'
import { removeElement } from './utilities/utils'
import { Category } from './components/Category'

function App() {
  const [library, setLibrary] = useState(data.library)
  const [lecture, setLecture] = useState([])
  const [filtered, setFiltered] = useState([])
  const [activeGenre, setActiveGenre] = useState('')

  return (
    <>
      <Category
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
        library={library}
        setFiltered={setFiltered}
        lecture={lecture}
      />
      <BookContainer
        categoryAvailable={filtered.length}
        totalAvailable={library.length - lecture.length}
        category={activeGenre}
        typeContainer={'library'}
        titleContainer={'Libreria'}
      >
        {filtered.map((el) => (
          <Book
            key={el.book.ISBN}
            title={el.book.title}
            image={el.book.cover}
            genre={el.book.genre}
            activeGenre={activeGenre}
            onClick={() =>
              removeElement(
                el.book.ISBN,
                'filtered',
                filtered,
                setFiltered,
                lecture,
                setLecture
              )
            }
          />
        ))}
      </BookContainer>
      <BookContainer
        totalAvailable={lecture.length}
        typeContainer="lecture"
        titleContainer="Lectura"
      >
        {lecture.map((el) => (
          <Book
            key={el.book.ISBN}
            title={el.book.title}
            image={el.book.cover}
            genre={el.book.genre}
            onClick={() =>
              removeElement(
                el.book.ISBN,
                'lecture',
                filtered,
                setFiltered,
                lecture,
                setLecture
              )
            }
          />
        ))}
      </BookContainer>
    </>
  )
}

export default App
