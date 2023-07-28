import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { store } from './store/index';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <Provider store={store}>
    <App />
</Provider>
  // </React.StrictMode>,
)
