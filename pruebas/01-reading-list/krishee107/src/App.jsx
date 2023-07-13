import React, { useState } from 'react'
import books from '../../books.json';
import { BookGridComponent } from './components/BookGridComponent/BookGridComponent';

export const App = () => {
  const [bookList, setBookList] = useState(books['library']);

  return (
    <div>

      <BookGridComponent bookList={bookList} />


    </div>
  )
}
