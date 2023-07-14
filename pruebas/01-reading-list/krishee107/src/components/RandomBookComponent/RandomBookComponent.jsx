import React, { useEffect, useState } from 'react'
import { BookItemComponent } from '../BookItemComponent/BookItemComponent';
import './RandomBookComponent.css';

export const RandomBookComponent = ({ bookList }) => {
    const [randomBook, setRandomBook] = useState(bookList[0].book);

    useEffect(() => {
        //Mostrar un libro aleatorio de bookList en randomBook cada 5 segundos
        const interval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * bookList.length);
            setRandomBook(bookList[randomIndex].book);
        }
            , 5000);
        return () => clearInterval(interval);
    }, []);


    return (
        <div className='randomBookContainer'>
            <h1 className='title'>Random Book</h1>
            <div className="bookInspiration">
                {randomBook &&
                    <BookItemComponent book={randomBook} />}
            </div>
        </div>
    )
}
