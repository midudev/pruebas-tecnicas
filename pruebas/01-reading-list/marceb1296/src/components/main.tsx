import { useEffect, useState, useMemo } from "react";
import { useAppSelector } from "../store";
import { useFilters } from "../hooks";
import { Books, NavSide } from ".";
import { getData } from "../mocks";
import { Filters } from "./filters";
import { IBooks, IInputValues} from "../interfaces";


export const Main = () => {
    
    const {list: bookList} = useAppSelector(state => state.bookListReducer);
    
    const [books, setBooks] = useState<IBooks[] | undefined>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
 
    const { 
        filterResult, 
        filterValues, 
        filterInputValues, 
        handleFilterChange
    } = useFilters(books);
    
    useEffect(() => {
        getData()
            .then(({library}) => setBooks(library))
            .finally(() => setIsLoading(false))
    }, [])
    
    const inBookList = useMemo(() => {
        return books ? books.filter(({book}) => bookList.includes(book.ISBN)) : []
    }, [books, bookList]);
    
    
    return(
        <>  
            <Filters filterValues={filterValues} filterInputValues={filterInputValues} handleFilters={handleFilterChange} />
            { isLoading &&
                <label style={{
                    width: "100%"
                }} className="with-color dp-block">Cargando...</label>
            }
            { books &&
                <Books books={filterResult} />
            }
            <NavSide books={inBookList}/>
        </>
    )
}