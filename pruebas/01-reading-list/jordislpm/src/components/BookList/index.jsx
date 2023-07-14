import React from 'react'
import { useEffect, useState, useContext} from 'react'
import useBooks from '../../Hooks/useBooks'
import styles from "./bookList.module.css"
import { Book } from '../Book'
import { BooksAvailable } from '../../context/context'

const BookList = () => {

const libros = useContext(BooksAvailable)


  return (

    <section className={styles.section}>
        <h1>BookList</h1>
        <ul className={styles.booklist}>
        {libros && libros.map((element)=>{
            return(
                <Book 
                key={element.id}
                id={element.id}
                title={element.title}
                cover={element.cover}/>
            )
       })}
        </ul>
    
    </section>
  )
}

export default BookList