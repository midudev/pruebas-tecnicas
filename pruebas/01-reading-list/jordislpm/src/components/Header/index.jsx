import React from 'react'
import styles from "./header.module.css"
import { useContext, useState } from 'react'
import { BooksAvailable } from '../../context/contextBooks'
import Form from '../Form'
import useFilter from '../../Hooks/useFilter'


const Header = () => {

const [books, read, setFilters]=useFilter()



  return (
    <div className={styles.header}>
           <h1>Book Lover</h1>
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