import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import BooksProvider from '@/contexts/books.tsx'
import ReadingListProvider from '@/contexts/reading-list.tsx'
import FiltersProvider from './contexts/filters.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BooksProvider>
      <ReadingListProvider>
        <FiltersProvider>
          <App />
        </FiltersProvider>
      </ReadingListProvider>
    </BooksProvider>
  </React.StrictMode>
)
