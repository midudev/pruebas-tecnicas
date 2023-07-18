import { useEffect, useState } from 'react';
import { Book } from '../types';

import { BookItem } from '../components';
import BOOKS_JSON from '../../../books.json';
import '../styles/Home.css';


export const Home = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [lectureBooks, setLectureBooks] = useState<Book[]>([]);

  useEffect(() => {
    const readBooks: Book[] = JSON.parse(localStorage.getItem('reading-book') || '[]');
    const listBooks: Book[] = BOOKS_JSON.library.map(library => library.book);
    setLectureBooks(readBooks);
    setBooks( listBooks.filter(book => !readBooks.includes(book)) );
  }, []);

  const saveBook = (isbnBook: string) => {
    const book = books.find(book => book.ISBN === isbnBook);
    if(book) {
      const readingBooks = [book, ...lectureBooks];
      localStorage.setItem('reading-book', JSON.stringify(readingBooks));
      setLectureBooks(readingBooks);
      setBooks(books.filter(book => book.ISBN !== isbnBook));
    }
  }

  return (
    <>
      <h1 className='app-title'>BookStore</h1>
      <header>
        <div className="app-general-info">
          <span>{books.length} aviable books</span>
          <span>{lectureBooks.length} books to read</span>
        </div>
      </header>
      
      <main>
        <section className='library'>
          {
            books.map(book => (
              <BookItem key={book.ISBN} book={book} saveBook={saveBook} />
            ))
          }
        </section>
      </main>

    </>
  )
}
