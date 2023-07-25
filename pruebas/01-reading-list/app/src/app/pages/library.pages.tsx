'use client'

import styles from '../styles/library.module.css'
import BookComponent from "../components/book"
import Filter from "../components/filter"
import { useContext } from 'react'
import { mainContext } from '../context/main.context'

export const sortAbc = (text1:string,text2:string) => (text1.toLowerCase() < text2.toLowerCase()) ? -1 : (text1.toLowerCase() > text2.toLowerCase()) ? 1 : 0 ;

const Library = () => {

    const { userList:{library} } = useContext(mainContext);

    return(
        <>
            <Filter/>
            <div className={styles.bookList}>{
                library
                .sort( (a,b) => sortAbc(a.title,b.title) )
                .map( (x,i) => (<BookComponent key={i} book={x} cleanOption={false}/>) ) 
            }</div>
        </>
    )

}

export default Library