import { useDispatch, useSelector } from "react-redux";
import { allowSave, denySave, getLocalStorage, resetCurrentBook, searchBook } from "../store/slices/WhatABook";
import { useState } from "react";

export const Navbar = () => {

    const dispatch = useDispatch();
    const { books } = useSelector(state => state.WhatABook);
    const [inputBook, setInputBook] = useState("");
    const [undo, setUndo] = useState(false);

    const submit = (e) => {

        e.preventDefault();

        setUndo(true);
        if(inputBook) {

            dispatch(getLocalStorage());
            dispatch(denySave());
            dispatch(resetCurrentBook());
            dispatch(searchBook(inputBook));

        }

    }

    const onUndo = () => {

        dispatch(getLocalStorage());
        dispatch(allowSave());
        setUndo(false);

    }

  return (
    <>
    
        <nav className="navbar navbar-expand-lg py-3 Navbar border-bottom align-items-center justify-content-center">

            <a className="navbar-brand mx-5 navbar__logo border" href="/">WhatA<span className="fw-bold">Book</span></a> {/* navbar__container */}

                <form className="form-inline my-2 my-lg-0 mx-auto navbar__form" onSubmit={submit}>

                    <label htmlFor="SearchBook" className="text-center navbar__label">Busca un libro</label>

                    <div className="d-flex">
                        
                        
                        <input className="form-control mr-sm-2 navbar__input" type="search" placeholder="¿Qué buscas hoy?" id="SearchBook" onChange={(e) => setInputBook(e.target.value)} list="bookNames"/>
                        <datalist id="bookNames">

                            {

                                books.map(({book}) => (

                                    <option key={book.title}>{book.title}</option>

                                ))

                            }

                        </datalist>
                        <button className="btn mx-2 my-sm-0 btn__submit" type="submit" onClick={submit}>Buscar</button>  

                    </div> {/* navbar__label */}

                </form> {/* navbar__form */}

                <button className={ undo ? "btn btn-danger me-3 d-block" : "btn btn-danger me-3 d-none"} onClick={onUndo}><p className="m-0">Regresar</p></button>

        </nav> {/* Navbar */}

    </>
  )
}
