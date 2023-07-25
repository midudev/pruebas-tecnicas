import ReactDOM from 'react-dom/client'
import { FiltersProvider } from './contexts/filters.tsx'
import { ReadingListProvider } from './contexts/readingList.tsx'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <FiltersProvider>
    <ReadingListProvider>
      <App />
    </ReadingListProvider>
  </FiltersProvider>
)
