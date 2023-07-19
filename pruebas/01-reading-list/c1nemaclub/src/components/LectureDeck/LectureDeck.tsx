import React from 'react';
import './LectureDeck.css';

type LectureDeckProps = {
  children: React.ReactNode;
  loading?: boolean;
  bookCount?: number;
};

function LectureDeck({ children }: LectureDeckProps) {
  return (
    <div className={'book-deck'}>
      <h2>Lista de Lectura</h2>
      <div className={'book-scene'}>
        <div className='book-stack'>{children}</div>
      </div>
    </div>
  );
}

export default LectureDeck;
