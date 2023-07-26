import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BookContextProvider } from './context/BookContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BookContextProvider>
    <App />
  </BookContextProvider>
)
