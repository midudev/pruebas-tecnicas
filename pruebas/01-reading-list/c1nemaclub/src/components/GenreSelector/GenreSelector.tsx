import React from 'react';
import { genres } from '../../utils';
import style from './GenreSelector.module.css';

type GenreSelectorProps = {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

function GenreSelector({ onChange }: GenreSelectorProps) {
  return (
    <select className={style['genre-selector']} onChange={onChange} defaultValue={''}>
      <option value='' defaultChecked>
        Todas
      </option>
      {genres.map((genre: string) => {
        return (
          <option key={genre} value={genre}>
            {genre}
          </option>
        );
      })}
    </select>
  );
}

export default GenreSelector;
