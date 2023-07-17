import React from 'react'
import { useEffect, useState, useContext} from 'react'
import styles from "./bookList.module.css"
import { Book } from '../Book'
import { BooksAvailable } from '../../context/context'

const BookList = () => {

const [store, dispatch] = useContext(BooksAvailable)

const {listBooks, listRead} = store;
const modifiers = {
    addRead : "moveToRead", 
}


return (

    <section className={styles.section}>
        <h1>BookList</h1>
        <ul className={styles.booklist}>
        {listBooks && listBooks.map((element)=>{
            return(
                <Book
                book={element} 
                key={element.id}
                id={element.id}
                title={element.title}
                cover={element.cover}
                modifiers={modifiers}/>
            )
       })}
        </ul>
    
    </section>
  )
}

export default BookList