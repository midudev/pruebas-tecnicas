import './App.css';
import { Books } from './components/Books';
import { Header } from './components/Header';
import { ReadingList } from './components/ReadingList';
import { ReadingListProvider } from './context/reading-list';

function App() {
  return (
    <ReadingListProvider>
      <div className="max-w-5xl mx-auto">
        <Header />
        <ReadingList />
        <main className="grid place-content-center">
          <Books />
        </main>
      </div>
    </ReadingListProvider>
  );
}

export default App;
