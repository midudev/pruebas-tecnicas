import './App.css'
import Books from './components/books/books'
import { Header } from './components/commonComponents/header/header'
import { library } from './mocks/books'

function App () {
  const mappedBooks = library.map((book) => {
    return {
      title: book.book.title,
      cover: book.book.cover,
      pages: book.book.pages,
      author: book.book.author.name,
      otherBooks: book.book.author.otherBooks
    }
  })
  return (
    <>
      <Header />
      <Books books={mappedBooks} />
      <footer className='footer'>el footer</footer>
    </>
  )
}

export default App
