import React from 'react';
import style from './LectureDeck.module.css';

type LectureDeckProps = {
  children: React.ReactNode;
  loading?: boolean;
  bookCount?: number;
};

function LectureDeck({ children }: LectureDeckProps) {
  return (
    <div className={style['book-deck']}>
      <h2>Lista de Lectura</h2>
      <div className={style['book-column']}>{children}</div>
    </div>
  );
}

export default LectureDeck;
