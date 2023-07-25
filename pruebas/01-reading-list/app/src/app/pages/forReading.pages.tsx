'use client'

import { useContext } from "react"
import { mainContext } from "../context/main.context"
import BookComponent from "../components/book"
import styles from '../styles/library.module.css'

const ForReading = () => {

    const { userList:{forReading} } = useContext(mainContext) ;

    return(
        <div className={styles.forReading}>
            { forReading.map( (x,i) => (<BookComponent key={i} book={x} intoToReadList={true}/>)) }
        </div>
    )

}

export default ForReading