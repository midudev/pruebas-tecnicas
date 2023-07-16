import './App.css'
import Books from './components/books/books'
import { Header } from './components/commonComponents/header/header'
import ListOfLecture from './components/listOfLecture/listOfLecture'
import { library } from './mocks/books'
import { useFilters } from './hooks/useFilters'
import { useState } from 'react'
import { ListOfLectureProvider } from './contexts/listOfLecture'

function App () {
  const [products] = useState(library)
  const { filterBooks, sortBooks } = useFilters()

  const mappedBooks = products.map((book) => {
    return {
      title: book.book.title,
      genre: book.book.genre,
      cover: book.book.cover,
      pages: book.book.pages,
      author: book.book.author.name,
      otherBooks: book.book.author.otherBooks
    }
  })

  const filteredProducts = filterBooks(mappedBooks)
  const sortedProducts = sortBooks(filteredProducts)

  return (
    <ListOfLectureProvider>
      <Header />
      <ListOfLecture />
      <Books books={sortedProducts} />
      <footer className='footer'>el footer</footer>
    </ListOfLectureProvider>
  )
}

export default App
