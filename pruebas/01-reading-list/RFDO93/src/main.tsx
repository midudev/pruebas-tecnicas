import ReactDOM from 'react-dom/client'
import './assets/css/index.css'
import BookProvider from './context/BookContext.tsx'
import App from './App.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <BookProvider>
    <App />
  </BookProvider>,
)
