import './App.css';
import React from 'react';
import AvailableBooks from './components/AvailableBooks';
import ReadBooks from './components/ReadBooks';
import { useState } from 'react';

function App() {

  const [alreadyRead, setAlreadyRead] = useState(localStorage.getItem("alreadyRead")? localStorage.getItem("alreadyRead"):[])

  
  return (
    <>
    <AvailableBooks alreadyRead={alreadyRead}/>
    <ReadBooks alreadyRead={alreadyRead} setAlreadyRead={setAlreadyRead}/>

    </>
  );
}

export default App;
