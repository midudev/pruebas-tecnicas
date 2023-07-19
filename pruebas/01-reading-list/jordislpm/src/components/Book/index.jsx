import React, {useContext, useEffect, useState}from 'react'
import styles from "./book.module.css"
import { BooksAvailable } from '../../context/contextBooks'
import plus from "../../../public/icons/plus.svg"
import remove from "../../../public/icons/remove.svg"



export const Book = ({add= true, title, id, cover, book, modifiers}) => {

  const [store, dispatch] = useContext(BooksAvailable)
  const {listBooks, listRead} = store;
  const {addRead} = modifiers

  const [added, setAdded]= useState(null)

  const click = ()=>{
    dispatch({type:addRead, book:book})
  }


  useEffect(()=>{

  },[add])


  return (
    <li className={styles.book}>
        <img className={styles.img} src={cover}/>
        <p className={styles.tittle}>{title}</p>
        {add ? 
        <button onClick={click} alt="agregar a lista de lectura" className={`${styles.button} ${styles.add}`}><img className={styles.icon}src={plus}/></button> 
        :
        <button onClick={click} alt="agregar a lista de lectura" className={`${styles.button} ${styles.remove}`}><img className={styles.icon} src={remove}/></button>
        }
        
    </li>
  )
}
