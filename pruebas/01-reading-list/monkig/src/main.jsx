import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserProvider from './context/UserContext.jsx'
import BooksProvider from './context/BooksContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BooksProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </BooksProvider>
  </React.StrictMode>
)
