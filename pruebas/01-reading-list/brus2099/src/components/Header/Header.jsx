import React from 'react';
import LectureList from '../LectureList/LectureList';


const Header = () => {
  return (
    <header style={{ border: '5px solid cornflowerblue' }}>
      <h2>Heading</h2>
      <h1>📚 Libreria</h1>
      <LectureList />
    </header>
  );

};

export default Header;
