import { createContext, useContext, useReducer} from "react";
import { FiltersContext } from "./contextFilters";


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
                if(allGenres.length == 0){
                    allGenres.push("Todas")
                }
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
        };
        case "PageFilter":{
            const pages = action.page;
            const listBookPages=state.listBooks.filter((book)=>{
                        return book.pages > pages});
            const listReadPages=state.listRead.filter((book)=>{
                return book.pages > pages});

            return {
                ...state,
                listRead: listReadPages,
                listBooks:listBookPages
            }
        };
        case "GenreFilter":{
            const genre = action.genre;
            console.log(action.genre)
            const listBookGenre=state.listBooks.filter((book)=>{
                        return book.genre == genre});
            const listReadGenre=state.listRead.filter((book)=>{
                return book.genre == genre});

            return {
                ...state,
                listRead: listReadGenre,
                listBooks:listBookGenre
            }
        }
    }
    };

export default ContextBook;

