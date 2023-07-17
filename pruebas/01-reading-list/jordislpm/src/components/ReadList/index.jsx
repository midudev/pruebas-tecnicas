import React, {useContext}from 'react'
import { BooksAvailable } from '../../context/context'
import { Book } from '../Book'
import styles from "./readList.module.css"

const ReadList = () => {

const [store, dispatch] = useContext(BooksAvailable)
const {listBooks, listRead} = store;

const modifiers = {
    addRead : "moveToListBook", 
}


  return (
    <div className={styles.readList}>
        <h2 className={styles.h2}>Lista de lectura</h2>
        <div  className={styles.list}>
        {listRead && listRead.map((element)=>{
             return(
                <Book 
                key={element.id}
                id={element.id}
                title={element.title}
                cover={element.cover}
                book={element}
                modifiers={modifiers}/>
            )
        })}
        </div>
        
    </div>
  )
}

export default ReadList