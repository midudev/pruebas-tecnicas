import './App.css';
import ListOfBooks from './components/ListOfBooks';
import BooksToRead from './components/BooksToRead';
import { useReadingListContext } from './context/ReadingListContext';
import Filters from './components/Filters';
import { useAvailableBooksContext } from './context/AvailableBooksContext';

function App() {
  const {availableBooks} = useAvailableBooksContext()
  const {booksToRead} = useReadingListContext()

  
  return (
    <div className="App">
      <div className="body">
        <h1>Reading List</h1> 
        <h4>{availableBooks.length} libros disponibles</h4>
        <Filters />
        <ListOfBooks books={availableBooks}/>
      </div>
      {booksToRead.length!==0 && <BooksToRead/>}
    </div>
  );
}

export default App;
