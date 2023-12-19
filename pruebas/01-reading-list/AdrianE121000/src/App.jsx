import { useContext } from 'react';
import Books from './components/Books';
import Filters from './components/Filters';
import ReadList from './components/ReadList';
import { useFilters } from './hooks/useFilters';
import { library } from './utils/books.json';
import { ReadListContext } from './context/readList';

function App() {
  const books = library;
  const { filterBooks } = useFilters();
  const filteredBooks = filterBooks(books);
  const { readList } = useContext(ReadListContext);
  return (
    <>
      <main>
        <section className='section1'>
          <h1>{filteredBooks.length} Libros disponibles</h1>
          <h3>{readList.length} en lista de lectura</h3>
          <Filters />
          <Books books={filteredBooks} />
        </section>
        <section
          className={`section2 ${readList.length === 0 ? 'hidden' : ''}`}>
          <ReadList />
        </section>
      </main>
    </>
  );
}

export default App;
