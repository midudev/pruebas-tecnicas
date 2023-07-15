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

  const handleRemoveElement = (ISBN, fromList) => {
    removeElement(
      ISBN,
      fromList,
      filtered,
      setFiltered,
      lecture,
      setLecture,
      activeGenre
    )
    setActiveGenre('') // Actualizar el estado de activeGenre
  }

  return (
    <>
      <Category
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
        library={library}
        setFiltered={setFiltered}
      />
      <BookContainer title={`${filtered.length} Available books`}>
        {filtered.map((el) => (
          <Book
            key={el.book.ISBN}
            title={el.book.title}
            image={el.book.cover}
            genre={el.book.genre}
            activeGenre={activeGenre}
            onClick={
              () => handleRemoveElement(el.book.ISBN, 'filtered') // Utilizar la función handleRemoveElement
            }
          />
        ))}
      </BookContainer>
      <BookContainer title={`${lecture.length} List of lecture: `}>
        {lecture.map((el) => (
          <Book
            key={el.book.ISBN}
            title={el.book.title}
            image={el.book.cover}
            genre={el.book.genre}
            onClick={
              () => handleRemoveElement(el.book.ISBN, 'lecture') // Utilizar la función handleRemoveElement
            }
          />
        ))}
      </BookContainer>
    </>
  )
}

export default App
