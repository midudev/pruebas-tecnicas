import './App.css';
import { library as initialBooks } from './mocks/books.json';
import { Books } from './components/Books';
import { Header } from './components/Header';
import { ReadingList } from './components/ReadingList';
import { ReadingListProvider } from './context/reading-list';
import { useFilters } from './hooks/useFilters';

function App() {
  const { filterBooks } = useFilters();

  const filteredBooks = filterBooks(initialBooks);

  return (
    <ReadingListProvider>
      <div className="max-w-5xl mx-auto px-2">
        <Header initialBooks={initialBooks} filteredBooks={filteredBooks} />
        <ReadingList />
        <main className="grid place-content-center">
          <Books books={filteredBooks} />
        </main>
      </div>
      <div
        className="fixed -z-10 h-[134px] w-[134px] lg:w-[300px] lg:h-[300px] rounded-full 
        bg-red-600 blur-[150px] lg:blur-[350px] opacity-50 left-0 top-0"
      ></div>
      <div
        className="fixed -z-10 h-[134px] w-[134px] lg:w-[300px] lg:h-[300px] rounded-full 
        bg-amber-600 blur-[150px] lg:blur-[350px] opacity-50 right-0 bottom-0"
      ></div>
    </ReadingListProvider>
  );
}

export default App;
