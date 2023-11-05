import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BookProvider } from './store/BookContext.tsx';

createRoot(document.getElementById('root')!).render(
    <BookProvider>
        <App />
    </BookProvider>,
);
