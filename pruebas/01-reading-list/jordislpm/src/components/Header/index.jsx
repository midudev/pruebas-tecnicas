import React from 'react'
import styles from "./header.module.css"
import Form from '../Form'
import useFilter from '../../Hooks/useFilter';
import icon from "../../../public/book.svg";


const Header = () => {

const {books, read}=useFilter()



  return (
    <div className={styles.header}>
        <div className={styles.boxTitle}>
          <img className={styles.icon} src={icon}></img>
          <h1>Book Lover</h1>
        </div>
           
        <p className={styles.availables}>{`Tienes ${books.length} libro${books.length != 1 ? "s" : ""} disponible${books.length != 1 ? "s" : ""}`}</p>
        {read.length == 0
        ? 
        <p className={styles.read}>{`Agrega algunos libros en tu lista de lectura`}</p>
      :
      <p className={styles.read}>{`Tienes ${read.length} libro${read.length != 1 ? "s" : ""} en tu lista de lectura`}</p>
      }
        <Form/> 
    </div>
  )
}

export default Header