'use client'

import { Book } from "../interfaces/library.interface"
import components from '../styles/library.module.css'

interface bookProps { book:Book , cleanOption:boolean }
const BookComponent = ({ book , cleanOption }:bookProps) => {

    return(
        <div
            className={components.bookCard}
        ><img src={book.cover}/></div>
    )

}

export default BookComponent