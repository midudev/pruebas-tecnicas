import React from 'react';
import ReactDOM from 'react-dom/client';
import './normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import './index.css';
import { WhatABook } from './WhatABook';
import { Provider } from 'react-redux';
import { store } from './store';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Provider store={store}>

      <WhatABook/>

    </Provider>

  </React.StrictMode>
)
