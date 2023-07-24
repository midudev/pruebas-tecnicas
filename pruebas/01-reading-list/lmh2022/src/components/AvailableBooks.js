import React from 'react';
import data from '.././books.json';
import Selector from './Selector';
import {useState, useEffect} from 'react';



function AvailableBooks() {

  const [selected, setSelected] = useState("")
  let books= data.library
  const [filteredBooks, setFilteredBooks] = useState(books)
  const [pages, setPages] = useState(3000)


useEffect(
  ()=>{
    setFilteredBooks(books.filter(f=>f.book.genre===(selected===""?f.book.genre:selected)&&f.book.pages<=pages))

  },[selected, pages]
)





  const handleChange = (event) => {
    setPages(event.target.value)

    console.log(pages)
  }

 
  return (
    <>Hay {filteredBooks.length} libros Disponibles <br/>
          <input type="range" id="page" name="page" min="0" max="2000" onChange={handleChange} value={pages}></input>

        <Selector field="genre" record="book" object={books} setSelected={setSelected} selected={selected}/>
      {filteredBooks.map(e=><div key={e.book.ISBN}>{e.book.title} - {e.book.pages}</div>)}

    </>
  );
}

export default AvailableBooks;
