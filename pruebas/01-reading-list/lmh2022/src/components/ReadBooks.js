import React from 'react';
import {useState, useEffect} from 'react';
import './ReadBooks.css';
import data from '.././books.json';



function ReadBooks({alreadyRead, setAlreadyRead}) {

  const books= data.library
  const [filteredBooks, setFilteredBooks] = useState([])

  const handleDragOver = (event) => {
    event.preventDefault()
  }

  const handleOnDrop = (event) => {
      setAlreadyRead([...alreadyRead, localStorage.getItem("dragging")])
  }

useEffect(()=>{  
 
  setFilteredBooks(books.filter(f=>alreadyRead.includes(f.book.ISBN)))
  console.log(filteredBooks)
  
   localStorage.setItem("alreadyRead", alreadyRead)


}, [alreadyRead])


    return (
        <>
          <div className="books" onDragOver={handleDragOver} onDrop={handleOnDrop}>
            
        {filteredBooks.map(e=><div id={e.book.ISBN} key={e.book.ISBN} className="book" style={{backgroundImage: "url("+e.book.cover+")"}} >
          </div>)}
      </div>         
            


        </>
    )

}

export default ReadBooks;