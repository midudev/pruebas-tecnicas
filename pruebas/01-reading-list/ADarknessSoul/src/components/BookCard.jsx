import { useDispatch, useSelector } from "react-redux";
import { pushMyBook, removeAvailableBook, pushAvailableBooks, removeMyBook, pushMyFavs, removeFavorite, setIsModal } from '../store/slices/WhatABook/';
import { Modal } from "./Modal";

export const BookCard = ({book = {}, type, isFavorite=false}) => {

    const dispatch = useDispatch();
    const { myBooks, currentBook, myFavs } = useSelector(state => state.WhatABook);

    const onMoveBook = () => {

        dispatch(pushMyBook(book));
        dispatch(removeAvailableBook(book));

    }

    const onRemoveBook = () => {

        dispatch(pushAvailableBooks(book));
        dispatch(removeMyBook(book));
        dispatch(removeFavorite(book));

    }

    const onRemoveFavorite = () => {

        dispatch(removeFavorite(book));

    }

    const onFavoriteBook = () => {

        dispatch(pushMyFavs(book));

    }

  return (
    
    <>

        <div className={type === 1 ? "card p-0" : "card p-0 Book__card--size"}>

            <figure className="position-relative Book__figure">

                <img src={book?.cover} alt="Portada del libro" width="100%" className="Book__card rounded-top" data-bs-toggle="modal" data-bs-target={`#staticBackdrop-${book.ISBN}`} onClick={() => dispatch(setIsModal(true))}/>
                <figcaption className="position-absolute Img__figcaption" data-bs-toggle="modal" data-bs-target={`#staticBackdrop-${book.ISBN}`} onClick={() => dispatch(setIsModal(true))}>Ver más...</figcaption>

            </figure>

            {

            type === 1 ? (

                <></>

            ) : (

                <div className="position-absolute Img__figcaption--numbers no-filter">{currentBook + 1}/{isFavorite ? `${myFavs.length}` : `${myBooks.length}`}</div>

            )

            }

            <div className="card-body d-flex flex-column p-0">

                <div className="px-3 pt-3">

                    <h2 className="Book__title mt-3 mb-3">{book?.title}</h2>

                    <hr/>

                    <p className="Book__synopsis">{book?.synopsis}</p>

                </div>

                {

                    type === 1 ? (

                        <div className="mt-auto">

                            <button className="btn col-12 Book__agregar mt-3" onClick={onMoveBook}>Agregar</button>
    
                        </div>  

                    ) : !isFavorite ? (

                        <div className="mt-auto d-flex justify-content-around">

                            <button className="btn btn-success Book__buttonIcon" onClick={onFavoriteBook}><img src="/src/assets/images/hearth.svg" alt="Botón de me gusta" width="30px" height="30px" className="Book__invert"/></button>
                            <button className="btn btn-danger Book__buttonIcon" onClick={onRemoveBook}><img src="/src/assets/images/delete.svg" alt="Botón de borrar"  width="30px" height="30px" className="Book__invert"/></button>

                        </div> 

                    ) : (

                        <div className="mt-auto">
                            <button className="btn btn-danger Book__buttonIcon col-12" onClick={onRemoveFavorite}><img src="/src/assets/images/delete.svg" alt="Botón de borrar"  width="30px" height="30px" className="Book__invert"/></button>
                        </div>
                    )

                }

            </div>

        </div>
                
        <Modal {...book}/>

    </>

  )
}
