import { Header } from './components/Header'
import { BookList } from './components/ListOfBooks'
import { SavedBooks } from './components/SavedBooks'
import { BookListProvider } from './context/BookListContex'
import { BooksProvider } from './context/BooksContext'

function App () {
  return (
    <BooksProvider>
      <BookListProvider>
    <SavedBooks/>
      <main className="max-w-5xl m-auto px-4">
        <Header/>
        <BookList />
      </main>
    </BookListProvider>
    </BooksProvider>
  )
}

export default App
