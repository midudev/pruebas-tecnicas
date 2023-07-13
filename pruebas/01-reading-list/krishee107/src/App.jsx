import React, { useState } from 'react'
import books from '../../books.json';
import { BookGridComponent } from './components/BookGridComponent/BookGridComponent';
import { RandomBookComponent } from './components/RandomBookComponent/RandomBookComponent';

export const App = () => {
  const [bookList, setBookList] = useState(books['library']);

  return (
    <div>
      <RandomBookComponent bookList={bookList} />
      <BookGridComponent bookList={bookList} />


    </div>
  )
}
