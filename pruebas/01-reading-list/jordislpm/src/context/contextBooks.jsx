import { createContext, useContext, useReducer} from "react";
import { FiltersContext } from "./contextFilters";


export const BooksAvailable = createContext(null)


function ContextBook ({ children }){

    const localMemory = localStorage.getItem("books");

    const initialState = localMemory 
    ? JSON.parse(localMemory)
    : {
            listBooks: [],
            listRead:[],
            genres:[]
        };


    // const initialState = {
    //     listBooks: [],
    //     listRead:[],
    //     genres:[]
    // }

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
                if(allGenres.length == 0){
                    allGenres.push("Todas")
                }
                 if(!allGenres.includes(book.genre)){
                    allGenres.push(book.genre)
                     }
            });
                localStorage.setItem("books", JSON.stringify({
                    ...state,
                    listBooks: initBooks,
                    genres:allGenres
                    
                }))
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

            localStorage.setItem("books", JSON.stringify({
                ...state,
            listBooks: newListBook,
             listRead:[...state.listRead, newRead]  
            }))
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
            localStorage.setItem("books", JSON.stringify({
                ...state,
                listRead: newListRest,
                listBooks:[...state.listBooks, newRead]
                
            }))
            return {
                ...state,
                listRead: newListRest,
                listBooks:[...state.listBooks, newRead]
                
            }
        };
    }
    };

export default ContextBook;

