import React from 'react';
import {useState, useEffect} from 'react';
import data from '.././books.json';
import Selector from './Selector';
import RangeControl from './RangeControl';
import book from './AvailableBooks.css';



function AvailableBooks() {

  const [selected, setSelected] = useState("")
  let books= data.library
  const [filteredBooks, setFilteredBooks] = useState(books)
  const [pages, setPages] = useState(2000)






  useEffect(
    ()=>{
      setFilteredBooks(books.filter(f=>f.book.genre===(selected===""?f.book.genre:selected)&&f.book.pages<=pages))

    },[selected, pages]
  )





 
 
  return (
    <>Hay {filteredBooks.length}  libros Disponibles <br/>

      <RangeControl setCurrentValue={setPages} currentValue={pages} attribute="pages" item="book" object={books}/>
      <Selector field="genre" record="book" object={books} setSelected={setSelected} selected={selected}/>

      {filteredBooks.map(e=>
        <div key={e.book.ISBN} 
        style={{backgroundImage: "url("+e.book.cover+")"}} className={book}>
          {e.book.title} - {e.book.pages}
        
        
        </div>)}

    </>
  );
}

export default AvailableBooks;
