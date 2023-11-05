import { Books } from './components/Books';
import { Filters } from './components/Filters';
import { useFilters } from './hooks/useFilters';
import { BookIcon } from './components/icons';
import { ReadingList } from './components/ReadingList';
import { useReadingList } from './hooks/useReadingList';
import { useState } from 'react';

function App() {
  const { books, readingList } = useReadingList();
  const { filterBooks } = useFilters();
  const [sort, setSort] = useState(false);

  const filteredBooks = filterBooks(books);

  const handleSort = () => {
    setSort(!sort);
  };
  return (
    <>
      <header>
        <h1 className='title'>
          Mi Biblioteca <BookIcon />
        </h1>
      </header>

      <main>
        <div className='container'>
          <div className='libros__disponibles'>
            <h2>Libros disponibles: {books.length} 📖</h2>
            <Filters />
            <Books books={filteredBooks} />
          </div>
          <aside className='lista__lectura'>
            <h2>Libros en Lectura: {readingList.length}📖</h2>
            <div className='sort'>
              <label htmlFor='sort'>Ordenar por Año: </label>
              <input type='checkbox' id='sort' onChange={handleSort} />
            </div>
            <ReadingList sort={sort} />
          </aside>
        </div>
      </main>
    </>
  );
}

export default App;
