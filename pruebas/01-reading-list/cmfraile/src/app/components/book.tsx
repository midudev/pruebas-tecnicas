'use client'

import { useContext } from "react"
import { Book } from "../interfaces/library.interface"
import { mainContext } from "../context/main.context"
import components from '../styles/library.module.css'

interface flagProps {intoToReadList:boolean}
const FlagComponent = ({intoToReadList}:flagProps) =>
    <>
    {   (!intoToReadList)
        ? <p className={components.addBook}> AÑADIR </p>
        : <p className={components.removeBook} > BORRAR </p>
    }
    </>

interface bookProps { book:Book , intoToReadList:boolean }
const BookComponent = ({ book:{cover,title} , intoToReadList }:bookProps) => {

    const { libraryHookCRUD:{setAndUnsetForReading:{setForReading,unsetForReading}} } = useContext(mainContext);

    return(
        <div
            className={components.bookCard}
            onClick={() => (intoToReadList) ? unsetForReading(title) : setForReading(title) }
        >
            <FlagComponent intoToReadList={intoToReadList}/>
            <img src={cover}/>
        </div>
    )

}

export default BookComponent