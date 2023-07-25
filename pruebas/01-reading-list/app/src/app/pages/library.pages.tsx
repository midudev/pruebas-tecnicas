'use client'
import styles from '../styles/components.module.css'

import BookComponent from "../components/book"
import Filter from "../components/filter"
import { Book } from "../interfaces/library.interface"

export const sortAbc = (text1:string,text2:string) => {
    if (text1.toLowerCase() < text2.toLowerCase()) {
        return -1;
      } else if (text1.toLowerCase() > text2.toLowerCase()) {
        return 1;
      }
      return 0;
}

interface libraryProps { userList:Book[] }
const Library = ({ userList }:libraryProps) => {

    return(
        <>
            <Filter/>
            <div className={styles.bookList}>{
                userList
                .sort( (a,b) => sortAbc(a.title,b.title) )
                .map( (x,i) => (<BookComponent key={i} book={x} cleanOption={false}/>) ) 
            }</div>
        </>
    )

}

export default Library