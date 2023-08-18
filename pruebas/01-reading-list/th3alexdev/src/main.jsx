import React from 'react'
import ReactDOM from 'react-dom/client'
import { BooksProvider } from './context/contextBooksProvider'
import App from './App'
import './css/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BooksProvider>
    <App />
  </BooksProvider>,
)
