import './App.css';
import { Books } from './components/Books';
import { Header } from './components/Header';

function App() {
  return (
    <div className="max-w-5xl mx-auto">
      <Header />
      <main className="grid place-content-center">
        <Books />
      </main>
    </div>
  );
}

export default App;
