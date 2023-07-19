import { Header } from './components/Header'
import { BookList } from './components/ListOfBooks'
import { SavedBooks } from './components/SavedBooks'
import { BookListProvider } from './context/BookListContex'
import { BooksProvider } from './context/BooksContext'

function App () {
  return (
    <BookListProvider>
    <BooksProvider>
    <SavedBooks/>
      <main className="font-spaceGrotesk max-w-5xl m-auto px-4">
        <Header/>
        <BookList />
      </main>
    </BooksProvider>
    </BookListProvider>
  )
}

export default App
