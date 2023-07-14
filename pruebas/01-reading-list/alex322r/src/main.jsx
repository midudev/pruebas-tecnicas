import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GlobalStateProvider } from './context/globalContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <GlobalStateProvider>
    <App />
  </GlobalStateProvider>

)
