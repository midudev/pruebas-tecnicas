import { createContext, useReducer, useEffect } from "react";
// import useBooks from "../Hooks/useBooks";
import datos from "../../json/libros.json"


export const BooksAvailable = createContext(null)


function ContextBook ({ children }){

    // const [data] = useBooks()

    const initialState = {
        listBooks: [],
        listRead:[]
    }
    //  const books = reducer(initialState, {type:"init", books:data });


    const [store, dispatch] = useReducer(reducer, initialState);

    // useEffect(()=>{
    //     console.log("¿")
    // console.log(data)
    // console.log("?")
    // const books = reducer(initialState, {type:"init", books:data })
    // dispatch({type:"init", books:data })
    // },[])


    return(
        <BooksAvailable.Provider value={[store, dispatch]}>
            {children}
        </BooksAvailable.Provider>
    )
}

function reducer(state, action){
    switch (action.type) {
        case "init":{
            const initBooks = action.books;
            return {
                ...state,
                listBooks: initBooks
            }
        };
        case "moveToRead":{
            console.log("move to read")
        }

    }
    };

export default ContextBook;