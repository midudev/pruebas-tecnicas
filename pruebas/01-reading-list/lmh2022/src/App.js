import './App.css';
import React from 'react';
import AvailableBooks from './components/AvailableBooks/AvailableBooks';
import ReadBooks from './components/ReadBooks/ReadBooks';
import { useState } from 'react';

function App() {

  const [alreadyRead, setAlreadyRead] = useState(localStorage.getItem("alreadyRead") ? JSON.parse(localStorage.getItem("alreadyRead")) : [])

  console.log(alreadyRead)

  return (
    <>
      <AvailableBooks alreadyRead={alreadyRead} />
      <ReadBooks alreadyRead={alreadyRead} setAlreadyRead={setAlreadyRead} />

    </>
  );
}

export default App;
