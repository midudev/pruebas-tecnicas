import { useDispatch, useSelector } from "react-redux"
import { BookCard } from "./BookCard";
import { incrementCurrentBook, decrementCurrentBook, resetCurrentBook, setIsFav, setAll, setIsModal } from '../store/slices/WhatABook/';
import { useEffect, useState } from "react";
import { EmptyFavorites } from "./EmptyFavorites";

export const Books = () => {

    const dispatch = useDispatch();
    const { booksAvailable, myBooks, currentBook, myFavs, isModal } = useSelector(state => state.WhatABook);
    const [reduxBooksAvailable, setReduxBooksAvailable] = useState([]);
    const [reduxMyFavs, setReduxMyFavs] = useState([]);
    const [reduxMyBooks, setReduxMyBooks] = useState([]);
    const [isFavorite, setIsFavorite] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {

        setReduxBooksAvailable([...booksAvailable]);
        setReduxMyBooks([...myBooks]);
        setReduxMyFavs([...myFavs]);

    }, [booksAvailable, myBooks, myFavs]);

    const handleWindowChange = () => {

        setScreenWidth(window.innerWidth);

    }

    useEffect(() => {
      
        window.addEventListener('resize', handleWindowChange);

        return () => {
            
            window.removeEventListener('resize', handleWindowChange);

        }

    }, []);
    

  return (
    <>
    
        <main className="mt-5 mx-auto mb-3 h-100">

            <div className={myBooks.length === 0 ? '' : 'Books'}>

                <section className="Books__available rounded border">

                    <div className="d-flex flex-column Books__header">

                        <h4>Libros disponibles: <span>{booksAvailable.length}</span></h4>

                    </div>

                    {

                        console.log(screenWidth)

                    }

                    <div className={myBooks.length === 0 ? "mx-3 Books__cards mb-3" : "mx-3 Books__cards--smaller mb-3"}>

                        {

                            reduxBooksAvailable.map( ({book}, index) => (

                                <BookCard key={index} book={book} type={1}/>

                            ))

                        }

                    </div>

                </section>

                {

                    myBooks.length === 0 ? (

                        <></>    
                        
                    ) : (

                        <section className={ screenWidth <= 1024 ?  "Books__myBooks rounded border position-static" : isModal ? "Books__myBooks rounded border position-static" : "Books__myBooks rounded border position-sticky"}>
  
                            <div className="d-flex justify-content-between">

                                <button className="btn Books__headerButtons" onClick={() => {

                                    setIsFavorite(false);
                                    dispatch(setAll());
                                    dispatch(resetCurrentBook());

                                }}>Todos</button>
                                <button className="btn Books__headerButtons" onClick={() => {

                                    setIsFavorite(true);
                                    dispatch(setIsFav());
                                    dispatch(resetCurrentBook());

                                }}>Favoritos</button>

                            </div>

                            <div className="d-flex flex-column Books__header">

                                <h4>{isFavorite ? "Mis favoritos: " : "Mis libros: "}<span>{!isFavorite ? `${myBooks.length}` : `${myFavs.length}`}</span></h4>

                            </div>

                            <div className={isFavorite ? "mx-3 flex-grow-1 d-flex flex-column justify-content-center align-items-center" : "mx-3 flex-grow-1"}>

                                {

                                    reduxMyBooks.length === 0 ? (

                                        <></>

                                    ) : !isFavorite ? (

                                        <BookCard book={reduxMyBooks[currentBook].book} type={2}/>

                                    ) : myFavs.length === 0 ? (

                                        <EmptyFavorites/>

                                    ) : (

                                        <BookCard book={reduxMyFavs[currentBook]?.book} type={2} isFavorite={isFavorite}/>

                                    )

                                }

                                

                            </div>

                            <div className="d-flex justify-content-between mt-5 Book__footer">

                                <button className="btn Book__footerIcons" onClick={() => dispatch(decrementCurrentBook())}><img src="/src/assets/images/leftArrow.svg" alt="Flecha izquierda" width="20px" height="20px"/></button>
                                <button className="btn Book__footerIcons" onClick={() => dispatch(incrementCurrentBook())}><img src="/src/assets/images/rightArrow.svg" alt="Flecha derecha" width="20px" height="20px"/></button>

                            </div>
        
                        </section>

                    )

                }

            </div>

        </main>
    
    </>
  )
}
