import React, { useState } from 'react'
import books from '../../books.json';
import { BookGridComponent } from './components/BookGridComponent/BookGridComponent';
import { RandomBookComponent } from './components/RandomBookComponent/RandomBookComponent';
import { NavComponent } from './components/navComponent/navComponent';
import { ReadingListComponent } from './components/ReadingListComponent/ReadingListComponent';

export const App = () => {
  const [bookList, setBookList] = useState(books['library']);
  const [readingListVisible, setReadingListVisible] = useState(false);

  const handleReadingList = () => {
    setReadingListVisible(!readingListVisible);
  }

  return (

    <div className="padre">
      <NavComponent handleReadingList={handleReadingList} />
      <div className="content">
        <ReadingListComponent readingListVisible={readingListVisible} />
        <RandomBookComponent bookList={bookList} />
        <BookGridComponent bookList={bookList} />
      </div>
    </div>

  )
}
