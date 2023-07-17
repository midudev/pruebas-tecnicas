import { useEffect,useState } from "react";
import {useReadListStore} from "../stores/BookStore";

export const useBooks = () => {
    const [books,setBooks] = useState([])
    const {read_list} = useReadListStore()

    const getBooks = async () => {
        const res = await fetch('books.json');
        if(res.ok) {
            const {library} = await res.json()
            setBooks(library)
        } else {
            throw new Error("Cannot get the books")
        }
    }
    
    useEffect(()=>{
        getBooks()
    },[])

    return {
        books,
        availableBooks: books.length - read_list.length
    }
}