'use client'

import { AvailableBooks } from './components/available-books';
import { Book } from './types/book';

import _books from '../data/books.json';
import { SelectedBooks } from './components/selected-books';
import { useEffect, useState } from 'react';

const BOOKS = _books.library.map(({book}) => book) as Book[];

function getBooksOnLocalStorage(): Book[] {
  const _selectedBooks = localStorage.getItem('selectedBooks');
  if (_selectedBooks) {
    return JSON.parse(_selectedBooks) as Book[];
  }
  return [];
}


export default function Home() {

  const [availableBooks, setAvailableBooks] = useState([] as Book[]);
  const [selectedBooks, setSelectedBooks] = useState(getBooksOnLocalStorage());

  window.addEventListener('storage', (event) => {

    if(event.key === 'selectedBooks') {
      setSelectedBooks(getBooksOnLocalStorage());
    }

  });

  const createHandleBook = (book: Book) => () => {

    const exists = !!selectedBooks.find(({ ISBN }) => ISBN === book.ISBN);

    if (exists) {
      setSelectedBooks(selectedBooks.filter(({ ISBN }) => ISBN !== book.ISBN));
    } else {
      setSelectedBooks([...selectedBooks, book]);
    }

  }

  useEffect(() => {
      
    const books = BOOKS.filter(({ ISBN }) => !selectedBooks.find((book) => book.ISBN === ISBN));
  
    setAvailableBooks(books);

    localStorage.setItem('selectedBooks', JSON.stringify(selectedBooks));
  
  }, [selectedBooks]);


  

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 pt-24 md:p-24 gap-8">

      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Libros <span className="text-blue-600">MiduPruebas</span>
      </h1>

      <div className='w-full flex gap-8'>

        <div className="w-full">
          <AvailableBooks books={availableBooks} handleBook={createHandleBook} />
        </div>        
        
        <div className='w-[400px]'>        
          <SelectedBooks books={selectedBooks} handleBook={createHandleBook} />  
        </div>

      </div>

      

    </main>
  )
  
}
