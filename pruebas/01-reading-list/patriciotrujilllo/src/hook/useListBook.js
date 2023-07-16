import { useContext } from "react";
import { ReadingContext } from "../context/readinglistContext.js";

export const useListBook = () =>{
    const {read,addtoToListRead,removeToListRead} = useContext(ReadingContext)

    return {
        read,
        addtoToListRead,
        removeToListRead
    }
}