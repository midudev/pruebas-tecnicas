import React from 'react';

const Filter = () => {
  return (
    <div style={{ border: '5px solid #9055ff' }}>
      <h2>Filter</h2>
      <p>Genero</p>
      <select name="genere">
        <option value="fantasia">Fantasia</option>
        <option value="terror">Terror</option>
        <option value="ciencia-ficcion">Ciencia Ficcion</option>
        <option value="romance">Romance</option>
        <option value="historia">Historia</option>
        <option value="otros">Otros</option>
      </select>
    </div>
  );
};

export default Filter;