import { BookList } from './components/ListOfBooks'
// import { bookIcon } from '../src/assets/book.png'

function App () {
  return (
    <>
    <header>

    </header>
      <main className="font-spaceGrotesk max-w-5xl m-auto px-4">
        <h1 className="text-3xl font-semibold text-center my-5">Books</h1>
        <BookList />
      </main>
    </>
  )
}

export default App
