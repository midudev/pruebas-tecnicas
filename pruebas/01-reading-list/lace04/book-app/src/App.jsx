import React from 'react';
import data from '../../../books.json';
import { useState, useEffect } from 'react';
import ReadingList from './components/ReadingList';
import BookList from './components/BookList';
import Filters from './components/Filters';

import { FiSun, FiMoon } from 'react-icons/fi';

function App() {
  //darkmode
  const [darkMode, setDarkMode] = useState(
    () => JSON.parse(localStorage.getItem('darkMode')) || false
  );
  const [books, setBooks] = useState(data.library);
  const [selectedGenre, setSelectedGenre] = useState(
    () => JSON.parse(localStorage.getItem('selectedGenre')) || ''
  );
  const [minPages, setMinPages] = useState(
    () => JSON.parse(localStorage.getItem('minPages')) || 0
  );
  const [readingList, setReadingList] = useState(
    JSON.parse(localStorage.getItem('readingList')) || []
  );
  const genres = [...new Set(data.library.map((book) => book.book.genre))];

  //darkmode
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('readingList', JSON.stringify(readingList));
    localStorage.setItem('selectedGenre', JSON.stringify(selectedGenre));
    localStorage.setItem('minPages', JSON.stringify(minPages));
  }, [readingList, selectedGenre, minPages]);

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'readingList') {
        setReadingList(JSON.parse(e.newValue));
      }
      if (e.key === 'darkMode') {
        setDarkMode(JSON.parse(e.newValue));
      }
      if (e.key === 'selectedGenre') {
        setSelectedGenre(JSON.parse(e.newValue));
      }
      if (e.key === 'minPages') {
        setMinPages(JSON.parse(e.newValue));
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
    <main className='flex flex-col md:flex-row justify-center min-h-screen pb-16'>
      <header className='w-full md:w-7/12 lg:mr-32 md:mr-10'>
        <div className='flex text-center justify-center'>
          <h1 className='text-3xl text-center font-bold m-5 md:text-4xl text-gray-900 dark:text-gray-300 w-2/3'>
            <a
              href='https://github.com/midudev/pruebas-tecnicas/tree/main/pruebas/01-reading-list'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-900 dark:text-gray-300 hover:cursor-pointer'
            >
              Books App{' '}
              <b className='text-xs font-normal items-end'>Prueba Tecnica #1</b>
            </a>
          </h1>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className='bg-zinc-300 dark:bg-zinc-900 text-gray-900 dark:text-gray-300 rounded-full p-2 my-5 w-10 flex justify-center items-center'
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
        </div>
        <div className='text-lg md:text-xl m-4 md:mb-4 text-gray-900 dark:text-gray-300'>
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
      </header>
      <section className='w-full md:w-3/12 lg:ml-4 md:ml-0'>
        <ReadingList
          books={readingList}
          onRemove={handleRemoveFromReadingList}
        />
      </section>
    </main>
  );
}

export default App;
