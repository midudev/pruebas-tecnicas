import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BooksProvider, FilterProvider } from './context/context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BooksProvider>
    <FilterProvider>
    <App />
    </FilterProvider>
  </BooksProvider>
)
