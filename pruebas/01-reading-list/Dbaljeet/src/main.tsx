import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BookContextProvider } from './context/BookContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BookContextProvider>
      <App />
    </BookContextProvider>
  </React.StrictMode>
)
