import { useDispatch, useSelector } from "react-redux"
import { getAllGenres, getMaxPages, getMinPages } from "../helpers/";
import { useEffect, useState } from "react";
import { allowSave, denySave, filterGenre, filterRange, getLocalStorage, resetCurrentBook } from "../store/slices/WhatABook";

export const Filters = () => {

    const dispatch = useDispatch();
    const { books = [] } = useSelector(state => state.WhatABook);
    const [minNumPages, setMinNumPages] = useState(0);
    const [maxNumPages, setMaxNumPages] = useState(0);
    const [rangeNumber, setRangeNumber] = useState(0);
    const [currentGenre, setCurrentGenre] = useState("");
    const [genres, setGenres] = useState([]);
    const [undo, setUndo] = useState(false);

    useEffect(() => {

        const min = getMinPages(books);
        setMaxNumPages(getMaxPages(books));
        setGenres(getAllGenres(books));

        setMinNumPages(min);
        setRangeNumber(min);

    }, [books])

    const onRangeChange = (e) => {

        setRangeNumber(Number(e.target.value));

    }

    const onSubmitRange = (e) => {

        e.preventDefault();
        setUndo(true);
        dispatch(getLocalStorage());
        dispatch(denySave());
        dispatch(resetCurrentBook());
        dispatch(filterRange(rangeNumber));

    }

    const onSubmitGenre = (e) => {

        e.preventDefault();
        if(currentGenre !== "default") {

            setUndo(true);
            dispatch(getLocalStorage());
            dispatch(denySave());
            dispatch(resetCurrentBook());
            dispatch(filterGenre(currentGenre));

        }


    }

    const onDecrementRange = () => {

        if(rangeNumber === minNumPages) return;
        setRangeNumber(rangeNumber - 1);
        const range = document.getElementById("NumPaginas");
        range.value = rangeNumber - 1;

    }

    const onIncrementRange = () => {

        if(rangeNumber === maxNumPages) return;
        setRangeNumber(rangeNumber + 1);
        const range = document.getElementById("NumPaginas");
        range.value = rangeNumber + 1;

    }

    const onUndo = () => {

        dispatch(getLocalStorage());
        dispatch(allowSave());
        setUndo(false);

    }
    

  return (
    <>

        <section className="container mt-3">

            <div className="row gap-3">

                <form className="d-flex flex-column col-sm" onSubmit={(e) => onSubmitRange(e)}>

                    <label className="mb-3">Buscar por número de páginas</label>
                    <input type="range" min={minNumPages} max={maxNumPages} id="NumPaginas" onChange={(e) => onRangeChange(e)} value={rangeNumber}/>
                    
                    <div className="d-flex justify-content-center gap-3 align-items-center mt-2 mb-3">

                        <button className="btn form_buttonLeft" onClick={onDecrementRange} type="button"><img src="/src/assets/images/leftArrow.svg" alt="Flecha izquierda" width="20px"/></button>
                        <p className="text-center m-0">{rangeNumber}</p>
                        <button className="btn form_buttonRight" onClick={onIncrementRange} type="button"><img src="/src/assets/images/rightArrow.svg" alt="Flecha izquierda" width="20px"/></button>

                    </div>

                    <div className="d-flex justify-content-center mt-auto">

                        <input type="submit" className="btn col-md-3 col-12 form__Input" value="Buscar"/>

                    </div>

                </form>

                <form className="col-sm d-flex flex-column" onSubmit={(e) => onSubmitGenre(e)}>

                    <label className="mb-3">Buscar por genero</label>

                    <select name="genre" id="genre" className="form-select filter__select mb-3" onChange={(e) => setCurrentGenre(e.target.value)}>

                        <option value="default">-</option>

                        {
                            genres.map((genre) => (

                                <option key={genre} value={genre}>{genre}</option>

                            ))
                        }

                    </select>

                    <div className="d-flex justify-content-center mt-auto">

                        <input type="submit" className="btn col-md-3 col-12 form__Input" value="Buscar"/>

                    </div>

                </form>

            </div>

            <div className="d-flex justify-content-center">

                <button className={ !undo ? "btn btn-danger d-none" : "btn btn-danger d-block"} style={{fontSize: "1.3rem"}} onClick={onUndo}>Deshacer</button>

            </div>

        </section>
    </>
  )
}
