import React, { useContext, useState, useRef } from "react";
import { BooksAvailable } from "../../context/context";
import styles from "./form.module.css"

const Form = () => {

    const [store, dispatch] = useContext(BooksAvailable);  
    const {listBooks, listRead, genres} = store;
    const [selectGenre, setSelectGenre]= useState()
    const pages = useRef(0)
    const [paginas, setPaginas]= useState(0)

    const onChangeSelect= (e)=>{
let genre = e.target.value
dispatch({type:"GenreFilter", genre:genre })
    }

    const onChangePages = (e)=>{
        pages.current = e.target.value;
        setPaginas(e.target.value)
        // console.log(paginas)
        dispatch({type: "PageFilter", page:paginas})
    }

  return (
    <form>
        <div>
            Filtar por paginas
            <input 
                value={paginas}
                ref={pages}
                min="10" 
                max="1000" 
                step="10"
                onChange={onChangePages} 
                type="range" 
                placeholder="Filtrar por paginas">
            </input>
            <p>Libros de mas de{paginas}</p>    
        </div>
       <div>
        filtar por genero
       <select onChange={onChangeSelect}>
            {genres && genres.map((genre)=>{
                return<option key={genre}>{genre}</option>
            })}
        </select>
       </div>
       
    </form>
  )
}

export default Form