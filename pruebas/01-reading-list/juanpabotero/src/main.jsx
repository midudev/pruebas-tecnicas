import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { FiltersProvider } from './context/filters.jsx';
import './index.css';
import { ReadingListProvider } from './context/reading-list.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <ReadingListProvider>
      <App />
    </ReadingListProvider>
  </FiltersProvider>
);
