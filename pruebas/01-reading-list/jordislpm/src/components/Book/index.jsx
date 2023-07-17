import React, {useContext}from 'react'
import styles from "./book.module.css"
import { BooksAvailable } from '../../context/context'



export const Book = ({title, id, cover, book, modifiers}) => {

  const [store, dispatch] = useContext(BooksAvailable)
  const {listBooks, listRead} = store;
  const {addRead} = modifiers

  const click = ()=>{
    dispatch({type:addRead, book:book})
  }

  return (
    <li onClick={click} className={styles.book}>
        <img src={cover}/>
    </li>
  )
}
