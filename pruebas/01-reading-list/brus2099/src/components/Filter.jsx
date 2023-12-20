import React, {useContext, useEffect} from 'react';
import { DataContext } from '../context/DataContext';

const Filter = () => {

  const { genres, setSelectedGenre } = useContext( DataContext );

  const updateGenre = (e) => {
    setSelectedGenre(e.target.value);
  };

  useEffect(() => {
    setSelectedGenre('Todos');
  }, []);

  return (
    <div>
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