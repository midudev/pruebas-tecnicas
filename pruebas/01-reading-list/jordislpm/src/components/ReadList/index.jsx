import React from 'react'
import { Book } from '../Book'
import styles from "./readList.module.css"
import useFilter from '../../Hooks/useFilter'

const ReadList = () => {



const modifiers = {
    addRead : "moveToListBook", 
}
const {read}=useFilter()


  return (
    <aside className={styles.readList}>
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
                modifiers={modifiers}
                add={false}/>
            )
        })}
        </div>
        
    </aside>
  )
}

export default ReadList