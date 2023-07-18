import './App.css';
import booksData from "./books.json"
import { useState} from 'react'
import ListOfBooks from './components/ListOfBooks';
import BooksToRead from './components/BooksToRead';

function App() {
  const [filteredBooks,setFilteredBooks] = useState(booksData.library)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Reading List</h1>
        <h4>{filteredBooks.length} libros disponibles</h4>
      </header>
      <ListOfBooks books={filteredBooks}/>
      <BooksToRead/>
    </div>
  );
}

export default App;
