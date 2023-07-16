import { createContext, useReducer, useEffect } from "react";


export const BooksAvailable = createContext(null)


function ContextBook ({ children }){


    const initialState = {
        listBooks: [],
        listRead:[],
        genres:[]
    }

    const [store, dispatch] = useReducer(reducer, initialState);
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
            let allGenres = [];
            let genres = action.books.forEach((book)=>{ 
                 if(!allGenres.includes(book.genre)){
                    allGenres.push(book.genre)
                     }
            });
            return {
                ...state,
                listBooks: initBooks,
                genres:allGenres
                
            }
        };
        case "moveToRead":{
            console.log("move to read")
        }

    }
    };

export default ContextBook;