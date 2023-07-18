import { useEffect, useState } from 'react';
import { Book } from '../types';

import BOOKS_JSON from '../../books.json';
import './App.css'


function App() {
  const [books, setBooks] = useState<Book[]>([]);
  useEffect(() => {
    const listBooks: Book[] = BOOKS_JSON.library.map(library => library.book);
    setBooks(listBooks);
  }, []);

  return (
    <>
      <main className='library'>
        {
          books.map(book => (
            <article className='library-book' key={book.ISBN}>
              <img className='book-img' src={book.cover} alt={book.title} />
              <div className='book-info'>
                <h3 className='book-info__title'>{ book.title }</h3>
                <span className='book-info__author'>{ book.author.name }</span>
              </div> 
            </article>
          ))
        }
      </main>
    </>
  )
}

export default App;
