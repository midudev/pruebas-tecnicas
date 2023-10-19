import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { FiltersProvider } from './context/filters.jsx';
import { ReadingListProvider } from './context/reading-list.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <FiltersProvider>
      <ReadingListProvider>
        <App />
      </ReadingListProvider>
    </FiltersProvider>
  </BrowserRouter>
);
