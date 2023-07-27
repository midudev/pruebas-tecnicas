import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BooksContextProvider } from 'contexts/books'
import { FiltersContextProvider } from 'contexts/filters'

const root = document.getElementById('root') as Element

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <FiltersContextProvider>
      <BooksContextProvider>
        <App />
      </BooksContextProvider>
    </FiltersContextProvider>
  </React.StrictMode>
)
