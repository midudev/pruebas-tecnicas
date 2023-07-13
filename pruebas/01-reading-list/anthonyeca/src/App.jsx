import './App.css'
import { useState } from 'react'
import { Book } from './components/Book'
import { BookContainer } from './components/BookContainer'
import data from '../../books.json'
import { removeElement } from './utilities/utils'

function App() {
  const [library, setLibrary] = useState(data.library)
  const [lecture, setLecture] = useState([])

  return (
    <>
      <BookContainer title={`${library.length} Available books`}>
        {library.map((el) => (
          <Book
            key={el.book.ISBN}
            title={el.book.title}
            image={el.book.cover}
            onClick={() =>
              removeElement(
                el.book.ISBN,
                'library',
                library,
                setLibrary,
                lecture,
                setLecture
              )
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
            onClick={() =>
              removeElement(
                el.book.ISBN,
                'lecture',
                library,
                setLibrary,
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
