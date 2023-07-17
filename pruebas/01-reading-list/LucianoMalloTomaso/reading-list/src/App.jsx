import './App.css'
import Books from './components/books/books'
import { Header } from './components/commonComponents/header/header'
import ListOfLecture from './components/listOfLecture/listOfLecture'
import { library } from './mocks/books'
import { useFilters } from './hooks/useFilters'
import { useState } from 'react'
import { ListOfLectureProvider } from './contexts/listOfLecture'

function App () {
  const [books] = useState(library)
  const { filterBooks, sortBooks } = useFilters()

  const mappedBooks = books.map((book) => {
    return {
      title: book.book.title,
      genre: book.book.genre,
      cover: book.book.cover,
      pages: book.book.pages,
      author: book.book.author.name,
      otherBooks: book.book.author.otherBooks
    }
  })

  const filteredBooks = filterBooks(mappedBooks)
  const sortedBooks = sortBooks(filteredBooks)

  return (
    <ListOfLectureProvider>
      <Header />
      <ListOfLecture />
      <Books books={sortedBooks} />
    </ListOfLectureProvider>
  )
}

export default App
