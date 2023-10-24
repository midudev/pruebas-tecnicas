import React from 'react';
import ReactDOM from 'react-dom/client';

import '@/index.css';
import App from '@/App.tsx';
import { BookProvider } from '@/context/bookContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BookProvider>
      <App />
    </BookProvider>
  </React.StrictMode>,
);

