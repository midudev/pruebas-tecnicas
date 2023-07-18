import React, { Fragment, useState } from 'react';
import clienteAxios from './config/axios';
import Header from './components/layouts/Header';
import Libreria from './components/Libreria';
import Aside from './components/layouts/aside';
import LibrosState from './context/librosState';

function App() {

  return (
    <LibrosState>
      <Header/>
      <div className='mt-5'>
        <div className=''>
          <Libreria/>
        </div>
      </div>
    </LibrosState>
  );
}

export default App;
