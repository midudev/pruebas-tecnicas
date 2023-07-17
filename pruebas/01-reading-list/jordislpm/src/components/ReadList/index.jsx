import React, {useContext}from 'react'
import { BooksAvailable } from '../../context/contextBooks'
import { Book } from '../Book'
import styles from "./readList.module.css"
import useFilter from '../../Hooks/useFilter'

const ReadList = () => {

const [store, dispatch] = useContext(BooksAvailable)


const modifiers = {
    addRead : "moveToListBook", 
}
const [books, read, setFilters]=useFilter()


  return (
    <div className={styles.readList}>
        <h2 className={styles.h2}>Lista de lectura</h2>
        <div  className={styles.list}>
        {read && read.map((element)=>{
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