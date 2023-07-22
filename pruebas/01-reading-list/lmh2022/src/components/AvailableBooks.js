import React from 'react';
import data from '.././books.json';
import Selector from './Selector';

function AvailableBooks() {

  let books= data.library
  console.log(books)
  let filteredBooks= books.filter(f=>f.book.genre==="Fantasía")

  return (
    <>
        <Selector field="genre" record="book" object={books}/>
      {filteredBooks.map(e=><div key={e.book.ISBN}>{e.book.title}</div>)}

    </>
  );
}

export default AvailableBooks;
