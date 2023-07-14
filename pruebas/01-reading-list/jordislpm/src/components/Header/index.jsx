import React from 'react'
import styles from "./header.module.css"
import { useContext, useState } from 'react'
import { BooksAvailable } from '../../context/context'
import { useEffect } from 'react'

const Header = () => {

const booksAvailable = useContext(BooksAvailable)

const [availables,setAvailables]= useState(booksAvailable)

useEffect(()=>{
    setAvailables(booksAvailable)
},[booksAvailable])

  return (
    <div className={styles.header}>
      Header
        <h1>Book Lover</h1>
        <p className={styles.availables}>{`Tienes ${availables.length} libros disponibles`}</p>
        <p>{`Tienes 0 libros en tu lista de tectura`}</p>
    </div>
  )
}

export default Header