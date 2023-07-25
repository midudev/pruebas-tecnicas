'use client'

import { useContext } from "react"
import { Book } from "../interfaces/library.interface"
import components from '../styles/library.module.css'
import { mainContext } from "../context/main.context"
import { libraryHookCRUD } from "../hooks/library.hook"

interface bookProps { book:Book , intoToReadList:boolean }
const BookComponent = ({ book:{cover,title} , intoToReadList }:bookProps) => {

    const { libraryHookCRUD:{setAndUnsetForReading:{setForReading,unsetForReading}} } = useContext(mainContext);

    return(
        <div
            className={components.bookCard}
            onClick={() => (intoToReadList) ? unsetForReading(title) : setForReading(title) }
        >
            <img src={cover}/>
        </div>
    )

}

export default BookComponent