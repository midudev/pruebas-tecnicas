import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './scss/index.scss';
import { FilterProvider } from './context/filters.tsx';
import { ReadingListProvider } from './context/readingList.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <FilterProvider>
    <ReadingListProvider>
      <App />
    </ReadingListProvider>
  </FilterProvider>
);
