import { BookList } from './components/ListOfBooks'
import { Header } from './components/HeroHeader'
import { BookListProvider } from './context/BookListContex'

function App () {
  return (
    <BookListProvider>
    <Header/>
      <main className="font-spaceGrotesk max-w-5xl m-auto px-4">
        <h1 className="text-3xl font-semibold text-center my-5">Books</h1>
        <BookList />
      </main>
    </BookListProvider>
  )
}

export default App
