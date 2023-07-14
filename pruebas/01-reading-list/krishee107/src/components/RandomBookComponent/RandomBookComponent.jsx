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
            <h1 className='title'>
                Bienvenid@, <br></br>
                <span>Feliz lectura</span>
            </h1>
            <div className="bookInspiration">
                {randomBook &&
                    <div className="randomBook">
                        <div className="randomBookCover">
                            <img src={randomBook.cover} alt={randomBook.title} />
                        </div>
                        <div className="randomBookInfo">
                            <div className="randomBookTitle">
                                <h2>{randomBook.title}</h2>
                            </div>
                            <div className="randomBookAuthor">
                                Escrito por <span>{randomBook.author.name}</span> - {randomBook.year}
                            </div>
                            <div className="randomBookGenre">
                                {randomBook.genre}
                            </div>
                            <div className="randomBookDescription">
                                {randomBook.synopsis}
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div >
    )
}
