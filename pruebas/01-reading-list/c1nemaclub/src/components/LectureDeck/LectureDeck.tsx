import React from 'react';
import './LectureDeck.css';

type LectureDeckProps = {
  children: React.ReactNode;
  loading?: boolean;
  bookCount?: number;
};

function LectureDeck({ children, bookCount }: LectureDeckProps) {
  if (bookCount === 0) return <h2 className="deck-title">No hay libros en la lista de lectura</h2>;
  return (
    <div className={'book-deck'}>
      <h2 className="deck-title">Lista de Lectura ({bookCount})</h2>
      <div className={'book-scene'}>
        <div className='book-stack'>{children}</div>
      </div>
    </div>
  );
}

export default LectureDeck;
