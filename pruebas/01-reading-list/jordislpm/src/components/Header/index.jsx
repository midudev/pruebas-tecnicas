import React from 'react'
import styles from "./header.module.css"
import { useContext, useState } from 'react'
import { BooksAvailable } from '../../context/context'
import { useEffect } from 'react'

const Header = () => {

const [store, dispatch] = useContext(BooksAvailable);  
const {listBooks, listRead} = store;



  return (
    <div className={styles.header}>
      Header
        <h1>Book Lover</h1>
        <p className={styles.availables}>{`Tienes ${listBooks.length} libros disponibles`}</p>
        <p>{`Tienes ${listRead.length} libros en tu lista de tectura`}</p>
    </div>
  )
}

export default Header