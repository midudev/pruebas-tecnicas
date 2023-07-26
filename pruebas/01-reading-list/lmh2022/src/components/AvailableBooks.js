import React from 'react';
import {useState, useEffect} from 'react';
import data from '.././books.json';
import Selector from './Selector';
import RangeControl from './RangeControl';
import './AvailableBooks.css';



function AvailableBooks({alreadyRead}) {

  const [selected, setSelected] = useState(localStorage.getItem("genre")? localStorage.getItem("genre"):"") //nullish coalescing me daba error de sintaxis
  const books= data.library
  const [filteredBooks, setFilteredBooks] = useState(books)
  const [pages, setPages] = useState(localStorage.getItem("pages")?localStorage.getItem("pages"):2000)

  //console.log(filteredBooks)





  useEffect(
    ()=>{
      setFilteredBooks(books.filter(f=>
        f.book.genre===(selected===""?f.book.genre:selected)&&
        f.book.pages<=pages&&
        !alreadyRead.includes(f.book.ISBN)
        ))
      localStorage.setItem("genre", selected?selected:"")
      localStorage.setItem("pages", pages?pages:2000)
      onstorage = ()=> {setSelected(localStorage.getItem("genre")); setPages(localStorage.getItem("pages"))}
     },[selected, pages, alreadyRead]
  )

  const handleDragStart = (event) => {
      localStorage.setItem("dragging", event.target.id)
  }
 
 
  return (
    <>Hay {filteredBooks.length}  libros Disponibles <br/>

      <RangeControl setCurrentValue={setPages} currentValue={pages} attribute="pages" item="book" object={books}/>
      <Selector field="genre" record="book" object={books} setSelected={setSelected} selected={selected}/>

      <div className="availablebooks" >
        {filteredBooks.map(e=><div id={e.book.ISBN} draggable onDragStart={handleDragStart} key={e.book.ISBN} className="book" style={{backgroundImage: "url("+e.book.cover+")"}} >
        {e.book.ISBN} 
          </div>)}
      </div>

    </>
  );
}

export default AvailableBooks;
