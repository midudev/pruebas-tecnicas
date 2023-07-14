import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./styles/main.css"
import ContextBook from './context/context.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextBook>
      <App/>
    </ContextBook>
  </React.StrictMode>,
)
