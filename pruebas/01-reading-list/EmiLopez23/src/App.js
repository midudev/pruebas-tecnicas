import './App.css';
import ListOfBooks from './components/ListOfBooks';
import BooksToRead from './components/BooksToRead';
import Filters from './components/Filters';
import { useAvailableBooksContext } from './context/AvailableBooksContext';
import { useState } from 'react';
import { useReadingListContext } from './context/ReadingListContext';

function App() {
  const {handleFilters} = useAvailableBooksContext()
  const {booksToRead} = useReadingListContext()
  const [showReadingList,setShowReadingList] = useState(false)
  const [filters,setFilters] = useState({genre:'',title:''})
  const filteredBooks = handleFilters(filters)

  
  
  return (
    <div className="App">
      <main className="body">
        <h1>Available books: {filteredBooks.length}</h1>
        <h3>Books in reading list: {booksToRead.length} </h3>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'100%', flexWrap:'wrap-reverse',gap:'10px'}}>
        <Filters handleFilters={setFilters}/>
        <button className='reading-list-btn' onClick={()=>setShowReadingList(!showReadingList)}>Reading List</button>
        </div>
        <ListOfBooks books={filteredBooks} showReadingList={setShowReadingList}/>
      </main>
      {showReadingList && <BooksToRead showReadingList={setShowReadingList}/>}
    </div>
  );
}

export default App;
