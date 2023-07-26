import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { LibraryFiltersProvider } from './components/context/LibraryFiltersContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <LibraryFiltersProvider>
    <App />
  </LibraryFiltersProvider>,
)
