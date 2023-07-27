import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import {Provider } from 'react-redux';
import {store} from './app/store.ts'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
