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
        <p className={styles.availables}>{`Tienes ${books.length} libros disponibles`}</p>
        <p className={styles.read}>{`Tienes ${read.length} libros en tu lista de lectura`}</p>
        <Form/>
    </div>
  )
}

export default Header