import {createRoot} from 'react-dom/client'
import { FiltersProvider } from './context/filters.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <App />
  </FiltersProvider>
)
