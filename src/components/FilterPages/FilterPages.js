

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterPages } from '../redux/actions';
import './FilterPages.modules.css'

function FilterPages() {
  // Estado local para almacenar el valor del rango de páginas seleccionado
  const [maxPages, setMaxPages] = useState('');

  // Utilizamos useDispatch para acceder a la función dispatch de Redux
  const dispatch = useDispatch();

  // Función handleMaxPagesChange para manejar el cambio en el rango de páginas
  const handleMaxPagesChange = (e) => {
    setMaxPages(e.target.value);
    dispatch(filterPages(e.target.value));
  };

  return (
    <div>
      <div>
        {/* Mostramos el rango de páginas seleccionado */}
        <p>Páginas desde {maxPages} hasta 1500</p>

        {/* Input de tipo rango (slider) para seleccionar el número máximo de páginas */}
        <input 
        className='range'
          type="range"
          onChange={handleMaxPagesChange}
          min={1}
          max={1500}
          step={50}
          value={maxPages}
          
        ></input>
      </div>
    </div>
  );
}

export default FilterPages;
