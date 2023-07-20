import React from 'react';
import data from '../../../books.json';
import { useState, useEffect } from 'react';
import AvailableBooksCount from './components/AvailableBooksCount';
import ReadingList from './components/ReadingList';
import BookList from './components/BookList';
import Filters from './components/Filters';
import Header from './components/Header';

function App() {
  //Estados
  //darkmode
  const [darkMode, setDarkMode] = useState(
    () => JSON.parse(localStorage.getItem('darkMode')) || false
  );
  //Lista de libros
  const [books, setBooks] = useState(data.library);
  //Filtro por genero
  const [selectedGenre, setSelectedGenre] = useState(
    () => JSON.parse(localStorage.getItem('selectedGenre')) || ''
  );
  //Filtro por paginas
  const [minPages, setMinPages] = useState(
    () => JSON.parse(localStorage.getItem('minPages')) || 0
  );
  //Lista de lectura
  const [readingList, setReadingList] = useState(
    JSON.parse(localStorage.getItem('readingList')) || []
  );
  // Lista de géneros disponibles (extraída de la lista de libros)
  const genres = [...new Set(data.library.map((book) => book.book.genre))];

  // useEffect para guardar en el almacenamiento local si el modo oscuro está activado o no
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  //useEffect para guardar en el almacenamiento local la lista de libros, el género seleccionado y el número mínimo de páginas
  useEffect(() => {
    localStorage.setItem('readingList', JSON.stringify(readingList));
    localStorage.setItem('selectedGenre', JSON.stringify(selectedGenre));
    localStorage.setItem('minPages', JSON.stringify(minPages));
  }, [readingList, selectedGenre, minPages]);

  //useEffect para escuchar los cambios en el almacenamiento local (pestañas, recargas, etc.)
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

  //Funciones
  //Funcion para añadir libros a la lista de lectura
  function handleAddToReadingList(book) {
    setReadingList((readingList) => [...readingList, book]);
  }
  //Funcion para eliminar libros de la lista de lectura
  function handleRemoveFromReadingList(book) {
    setReadingList((readingList) =>
      readingList.filter((b) => b.ISBN !== book.ISBN)
    );
  }

  return (
    <main className='flex flex-col md:flex-row justify-center min-h-screen pb-16'>
      <div className='w-full md:w-7/12 lg:mr-32 md:mr-10'>
        {/* Componente para mostrar el encabezado con el título y el botón de cambio de modo oscuro */}
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <AvailableBooksCount
          books={books}
          selectedGenre={selectedGenre}
          minPages={minPages}
          readingList={readingList}
        />
        {/* Componente para mostrar los filtros (género y número mínimo de páginas) */}
        <Filters
          genres={genres}
          selectedGenre={selectedGenre}
          onSelectGenre={setSelectedGenre}
          minPages={minPages}
          maxPages={Math.max(...data.library.map((book) => book.book.pages))}
          onSetMinPages={setMinPages}
        />
        {/* Componente para mostrar la lista de libros disponibles */}
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
      {/* Componente para mostrar la lista de lectura del usuario */}
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
