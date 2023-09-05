import { Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { Book } from './components/Book';
import { Header } from './components/Header';
import { useFilters } from './hooks/useFilters';
import { library as initialBooks } from './mocks/books.json';

function App() {
  const { filterBooks } = useFilters();

  const filteredBooks = filterBooks(initialBooks);
  const filteredBooksMapped = filteredBooks.map(({ book }) => book);

  return (
    <div className="max-w-5xl mx-auto pt-20 pb-14 px-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="header" element={<Header />} />
        <Route path="book/:id" element={<Book books={filteredBooksMapped} />} />
      </Routes>
      <div
        className="fixed -z-10 h-[134px] w-[134px] lg:w-[300px] lg:h-[300px] rounded-full 
        bg-red-600 blur-[150px] lg:blur-[350px] opacity-50 left-0 top-0"
      ></div>
      <div
        className="fixed -z-10 h-[134px] w-[134px] lg:w-[300px] lg:h-[300px] rounded-full 
        bg-amber-600 blur-[150px] lg:blur-[350px] opacity-50 right-0 bottom-0"
      ></div>
    </div>
  );
}

export default App;
