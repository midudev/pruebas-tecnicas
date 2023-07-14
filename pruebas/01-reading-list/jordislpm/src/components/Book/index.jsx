import React from 'react'
import styles from "./book.module.css"


export const Book = ({title, id, cover}) => {
  return (
    <li className={styles.book}>
        <img src={cover}/>
    </li>
  )
}
