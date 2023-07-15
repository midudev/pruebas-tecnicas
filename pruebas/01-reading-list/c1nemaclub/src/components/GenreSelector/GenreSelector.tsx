import React from 'react';
import { genres } from '../../utils';

type GenreSelectorProps = {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

function GenreSelector({ onChange }: GenreSelectorProps) {
  return (
    <select onChange={onChange} defaultValue={""}  >
        <option value="" defaultChecked>Todas</option>
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
