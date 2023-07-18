import React from 'react';
import Header from './components/layouts/Header';
import Libreria from './components/Libreria';
import LibrosState from './context/librosState';

function App() {

  return (
    <LibrosState>
      <Header/>
      <div className='mt-5'>
        <div>
          <Libreria/>
        </div>
      </div>
    </LibrosState>
  );
}

export default App;
