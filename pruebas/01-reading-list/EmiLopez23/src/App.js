import './App.css';
import ListOfBooks from './components/ListOfBooks';
import BooksToRead from './components/BooksToRead';
import Filters from './components/Filters';
import { useAvailableBooksContext } from './context/AvailableBooksContext';
import { useState } from 'react';
import { useReadingListContext } from './context/ReadingListContext';

function App() {
  const {availableBooks} = useAvailableBooksContext()
  const {booksToRead} = useReadingListContext()
  const [showReadingList,setShowReadingList] = useState(false)

  
  return (
    <div className="App">
      <div className="body">
        <h1>Reading List</h1> 
        <h4>{availableBooks.length} available books</h4>
        <h4>{booksToRead.length} books in reading list</h4>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'100%'}}>
        <Filters />
        <button className='reading-list-btn' onClick={()=>setShowReadingList(!showReadingList)}>Reading List</button>
        </div>
        <ListOfBooks showReadingList={setShowReadingList}/>
      </div>
      {showReadingList && <BooksToRead showReadingList={setShowReadingList}/>}
    </div>
  );
}

export default App;
