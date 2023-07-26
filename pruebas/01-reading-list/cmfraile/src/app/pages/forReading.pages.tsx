'use client'

import { useContext } from "react"
import { mainContext } from "../context/main.context"
import BookComponent from "../components/book"
import styles from '../styles/library.module.css'
import { sortAbc } from "./library.pages"

const ForReading = () => {

    const { userList:{forReading} } = useContext(mainContext) ;

    return(
        <div className={styles.forReading}>
            { (forReading.length > 0) && <p> lecturas pendientes: </p>}
            { forReading.sort( (a,b) => sortAbc(a.title,b.title)).map( (x,i) => (<BookComponent key={i} book={x} intoToReadList={true}/>)) }
        </div>
    )

}

export default ForReading