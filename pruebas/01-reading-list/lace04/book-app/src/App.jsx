import React from 'react';

import data from '../../../books.json';
import { useState, useEffect } from 'react';
import ReadingList from './components/ReadingList';
import BookList from './components/BookList';
import Filters from './components/Filters';

function App() {
  const [books, setBooks] = useState(data.library);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [minPages, setMinPages] = useState(0);
  const [readingList, setReadingList] = useState(
    JSON.parse(localStorage.getItem('readingList')) || []
  );
  const genres = [...new Set(data.library.map((book) => book.book.genre))];

  useEffect(() => {
    localStorage.setItem('readingList', JSON.stringify(readingList));
  }, [readingList]);

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'readingList') {
        setReadingList(JSON.parse(e.newValue));
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  function handleAddToReadingList(book) {
    setReadingList((readingList) => [...readingList, book]);
  }

  function handleRemoveFromReadingList(book) {
    setReadingList((readingList) =>
      readingList.filter((b) => b.ISBN !== book.ISBN)
    );
  }

  return (
    <div className='flex flex-col md:flex-row justify-center min-h-screen'>
      <div className='w-full md:w-7/12 lg:mr-32 md:mr-10'>
        <h1 className='text-4xl text-center font-bold m-5'>Books App</h1>
        <div className='text-xl mb-4'>
          Libros disponibles:{' '}
          {
            books.filter(
              (book) =>
                (!selectedGenre || book.book.genre === selectedGenre) &&
                book.book.pages >= minPages &&
                !readingList.some((b) => b.ISBN === book.book.ISBN)
            ).length
          }
        </div>
        <Filters
          genres={genres}
          selectedGenre={selectedGenre}
          onSelectGenre={setSelectedGenre}
          minPages={minPages}
          maxPages={Math.max(...data.library.map((book) => book.book.pages))}
          onSetMinPages={setMinPages}
        />
        <BookList
          books={books.filter(
            (book) =>
              (!selectedGenre || book.book.genre === selectedGenre) &&
              book.book.pages >= minPages &&
              !readingList.some((b) => b.ISBN === book.book.ISBN)
          )}
          onAddToReadingList={handleAddToReadingList}
        />
      </div>
      <div className='w-full md:w-3/12 lg:ml-4 md:ml-0'>
        <ReadingList
          books={readingList}
          onRemove={handleRemoveFromReadingList}
        />
      </div>
    </div>
  );
}

export default App;
