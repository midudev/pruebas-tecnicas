import './App.css'
import ListBooks from './components/ListBooks'
import { useBookStore } from './store/bookStore'

function App () {
  // const [books, setBooks] = useState([])
  const books = useBookStore(state => state.books)
  const readingList = useBookStore(state => state.readingList)
  const removeBook = useBookStore(state => state.removeBook)

  return (
    <>
      <h3>Lista de libros</h3>

      {<ListBooks books={books}/>}

      <h3>Lista de lectura</h3>
      {readingList.length > 0 && (
        <ul>
          {readingList.map(book => {
            return <li key={book.id}>
              <h3>{book.title}</h3>
              <button onClick={() => removeBook(book.id)}>Remove book</button>
            </li>
          })}
        </ul>
      )}

    </>
  )
}

export default App
