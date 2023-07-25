'use client'
import styles from '../styles/library.module.css'

import BookComponent from "../components/book"
import Filter from "../components/filter"
import { userList } from '../hooks/library.hook'

export const sortAbc = (text1:string,text2:string) => (text1.toLowerCase() < text2.toLowerCase()) ? -1 : (text1.toLowerCase() > text2.toLowerCase()) ? 1 : 0 ;

export interface libraryProps { userList:userList , genres:string[] , minAndMaxOfPages:number[] }
const Library = ({ userList:{library,forReading} , genres , minAndMaxOfPages , setGenreAndPages }:libraryProps) => {

    return(
        <>
            <Filter userList={{library,forReading}} genres={genres} minAndMaxOfPages={minAndMaxOfPages}/>
            <div className={styles.bookList}>{
                library
                .sort( (a,b) => sortAbc(a.title,b.title) )
                .map( (x,i) => (<BookComponent key={i} book={x} cleanOption={false}/>) ) 
            }</div>
        </>
    )

}

export default Library