'use client'
import styles from '../styles/components.module.css'

import BookComponent from "../components/book"
import Filter from "../components/filter"
import { Book } from "../interfaces/library.interface"

interface libraryProps { userList:Book[] }
const Library = ({ userList }:libraryProps) => {

    return(
        <>
            <Filter/>
            <div className={styles.bookList}>{ userList.map( (x,i) => (<BookComponent key={i} book={x} cleanOption={false}/>) ) }</div>
        </>
    )

}

export default Library