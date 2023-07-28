import { Header } from './components/Header/Header';
import { Books } from './components/Books/Books';
import { Lectures } from './components/Lectures/Lectures';
import { useBooksStore } from './store/store';

export default function App() {
  const view = useBooksStore((state) => state.view);
  return (
    <main>
      <Header />
      {view === 'books' && <Books />}
      {view === 'lectures' && <Lectures />}
    </main>
  );
}
