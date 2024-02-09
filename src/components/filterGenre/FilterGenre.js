

import React from 'react';
import { useDispatch } from 'react-redux';
import { filterBooks } from '../redux/actions';
import './FilterGenre.modules.css';

function FilterGenre() {
  // Lista de géneros disponibles
  const genres = ["Fantasía", "Ciencia ficción", "Zombies", "Terror"];

  // Utilizamos useDispatch para acceder a la función dispatch de Redux
  const dispatch = useDispatch();

  // Función handlerFilter para filtrar libros por género
  function handlerFilter(e) {
    dispatch(filterBooks(e.target.value));
  }

  return (
    <div>
      {/* Selector para filtrar libros por género */}
      <select className='mi-select' placeholder='Género' onChange={handlerFilter}>
        <option value='all'>Mostrar todos</option>
        {/* Renderizamos cada opción de género */}
        {genres.map((genre) => <option key={genre} value={genre}>{genre}</option>)}
      </select>
    </div>
  );
}

export default FilterGenre;
