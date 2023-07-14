import React, { useState } from 'react'
import books from '../../books.json';
import { BookGridComponent } from './components/BookGridComponent/BookGridComponent';
import { RandomBookComponent } from './components/RandomBookComponent/RandomBookComponent';
import { NavComponent } from './components/navComponent/navComponent';

export const App = () => {
  const [bookList, setBookList] = useState(books['library']);

  return (

    <div className="padre">
      <NavComponent />

      <div className="content">
        <RandomBookComponent bookList={bookList} />
        <BookGridComponent bookList={bookList} />
      </div>
    </div>

  )
}
