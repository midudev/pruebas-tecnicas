import {useState, useEffect, useContext} from 'react'
import { getGenresBooks } from '../../services/getBooksService';


function FilterBooks() {


  return (
    <div className=" flex justify-center items-center">
          <h1 className="mr-4">Filtrar por genero</h1>
          <select
            value={selectedGenre}
            onChange={handleGenreChange}
            className="p-2 border rounded-md"
          >
             <option value="">todos</option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
           
            
          </select>
    </div> 
  )
}

export default FilterBooks