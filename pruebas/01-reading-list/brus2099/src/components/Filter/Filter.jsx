import React, {useContext} from 'react';
import { FilterContext } from '../../context/FilterContext';

const Filter = () => {

  const { genres, setSelectedGenre } = useContext( FilterContext );

  const updateGenre = (e) => {
    setSelectedGenre(e.target.value);
  };

  return (
    <div style={{ border: '5px solid #9055ff' }}>
      <h2>Filter</h2>
      <p>Genero</p>
      <select name="genere" onChange={ updateGenre }>
        {
          genres.map( (genre, index) => <option key={index}>{genre}</option> )
        }
      </select>
    </div>
  );
};

export default Filter;