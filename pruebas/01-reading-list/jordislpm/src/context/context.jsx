import { createContext, useReducer } from "react";
import useBooks from "../Hooks/useBooks";

export const BooksAvailable = createContext(null)
export const ReadList = createContext(null)

function reducer(state, action){

};



function ContextBook ({ children }){

    const [books]= useBooks([]);
    const initialState = books;
    const [state, dispatch]=useReducer(reducer, initialState);
    return(
        <BooksAvailable.Provider value={books}>
            {children}
        </BooksAvailable.Provider>
    )
}

export default ContextBook;