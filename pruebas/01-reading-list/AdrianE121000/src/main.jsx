import { FiltersProvider } from './context/filters.jsx';
import { ReadListProvider } from './context/readList.jsx';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <ReadListProvider>
      <App />
    </ReadListProvider>
  </FiltersProvider>
);
