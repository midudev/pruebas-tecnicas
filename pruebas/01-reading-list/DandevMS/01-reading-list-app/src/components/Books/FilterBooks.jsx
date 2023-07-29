import {useContext, useState} from 'react'
import {BooksContext} from '../../context/BooksContextProvider'

function FilterBooks() {

  /**
  * @description usando el contexto global para acceder a los estados y funciones
  */
  const {genres, filterBooksByGenre} = useContext(BooksContext);

  const [selectedGenre, setSelectedGenre] = useState("");


  return (


    <div className=" flex justify-center items-center">
          <h1 className="mr-4">Filtrar por genero</h1>
          <select
            value={selectedGenre}
            onChange={(e) => {
              const genre = e.target.value;
              setSelectedGenre(genre);
              filterBooksByGenre(genre);
            }}
            className="p-2 border rounded-md"
          >
             <option value="todos">todos</option>
            {genres.map((genre, index) => (
              <option key={index} value={genre}>
                {genre}

              </option>
            ))}
           
            
          </select>
    </div> 
  )
}

export default FilterBooks