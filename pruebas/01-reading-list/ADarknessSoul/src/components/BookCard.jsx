import { useDispatch, useSelector } from "react-redux";
import { pushMyBook, removeAvailableBook } from '../store/slices/WhatABook/';

export const BookCard = ({book, type}) => {

    const dispatch = useDispatch();
    const { booksAvailable, myBooks } = useSelector(state => state.WhatABook);
    console.log("tipo: " + type);
    
    const onMoveBook = () => {

        dispatch(pushMyBook(book));
        const newAvailableBooks = booksAvailable.filter(({book: currentBook}) => currentBook.ISBN !== book.ISBN);
        dispatch(removeAvailableBook(book));

    }

  return (
    
    <>
    
        <div className={type === 1 ? "card p-0" : "card p-0 Book__card--size"}>

            <figure className="position-relative Book__figure">

                <img src={book.cover} alt="Portada del libro" width="100%" className="Book__card rounded-top"/>
                <figcaption className="position-absolute Img__figcaption">Ver más...</figcaption>
                
                {

                    type === 1 ? (

                        <></>

                    ) : (

                        <figcaption className="position-absolute Img__figcaption--numbers">1/4</figcaption>

                    )

                }


            </figure>

            <div className="card-body d-flex flex-column p-0">

                <div className="px-3 pt-3">

                    <h2 className="Book__title mt-3 mb-3">{book.title}</h2>

                    <hr/>

                    <p className="Book__synopsis">{book.synopsis}</p>

                </div>

                {

                    type === 1 ? (

                        <div className="mt-auto">

                            <button className="btn col-12 Book__agregar mt-3" onClick={onMoveBook}>Agregar</button>
    
                        </div>  

                    ) : (

                        <div className="mt-auto d-flex justify-content-around">

                            <button className="btn btn-danger Book__buttonIcon"><img src="/src/assets/images/hearth.svg" alt="Botón de me gusta" width="30px" height="30px" className="Book__invert"/></button>
                            <button className="btn btn-info Book__buttonIcon"><img src="/src/assets/images/delete.svg" alt="Botón de borrar"  width="30px" height="30px" className="Book__invert"/></button>

                        </div> 

                    )

                }



            </div>

        </div>
        

    </>

  )
}
