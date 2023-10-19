import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./styles/main.css"
import './styles/variables.css';
import ContextBook from './context/contextBooks.jsx'
import FiltersProvider from './context/contextFilters.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <ContextBook>
      <FiltersProvider>
        <App/>
      </FiltersProvider>
    </ContextBook>
)
