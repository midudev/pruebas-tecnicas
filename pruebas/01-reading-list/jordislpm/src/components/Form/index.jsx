import React, { useContext } from "react";
import { BooksAvailable } from "../../context/context";
import styles from "./form.module.css"

const Form = () => {

    const [store, dispatch] = useContext(BooksAvailable);  
    const {listBooks, listRead, genres} = store;
  return (
    <form>
        Form
        <input type="range" placeholder="Filtrar por paginas"></input>
        <select>
            {genres && genres.map((genre)=>{
                return<option key={genre}>{genre}</option>
            })}
        </select>
    </form>
  )
}

export default Form