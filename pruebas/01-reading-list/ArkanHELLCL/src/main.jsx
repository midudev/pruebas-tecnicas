import {createRoot} from 'react-dom/client'
import { ReadingListProvider } from './context/readingList.jsx'
import { FiltersProvider } from './context/filters.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <ReadingListProvider>
    <FiltersProvider>
      <App />
    </FiltersProvider>
  </ReadingListProvider>
)
