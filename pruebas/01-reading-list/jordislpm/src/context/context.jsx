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
            const newRead = action.book;
            const newListBook=state.listBooks.filter((book)=>{
                if(newRead.id !== book.id){
                    return book
                }
            });
            return {
                ...state,
            listBooks: newListBook,
             listRead:[...state.listRead, newRead]
                
            }
        };
        case "moveToListBook":{
            const newRead = action.book;
            const newListRest=state.listRead.filter((book)=>{
                if(newRead.id !== book.id){
                    return book
                }
            });
            return {
                ...state,
                listRead: newListRest,
                listBooks:[...state.listBooks, newRead]
                
            }
        }
    }
    };

export default ContextBook;

