import './App.css';
import { library as initialBooks } from "./mocks/books.json";
import { Books } from './components/Books';
import { Header } from './components/Header';
import { ReadingList } from './components/ReadingList';
import { ReadingListProvider } from './context/reading-list';
import { useFilters } from './hooks/useFilters';

function App() {
  const { filterBooks } = useFilters()

  const filteredBooks = filterBooks(initialBooks)

  return (
    <ReadingListProvider>
      <div className="max-w-5xl mx-auto">
        <Header books={filteredBooks} />
        <ReadingList />
        <main className="grid place-content-center">
          <Books books={filteredBooks} />
        </main>
      </div>
    </ReadingListProvider>
  );
}

export default App;
