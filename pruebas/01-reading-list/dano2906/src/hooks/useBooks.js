import { useEffect,useState } from "react";
import {useReadListStore} from "../stores/BookStore";

export const useBooks = () => {
    const [books,setBooks] = useState([])
    const {read_list} = useReadListStore()
    const loadStorage = useReadListStore(state => state.loadStorage)

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

    useEffect(() => {
        window.addEventListener("storage",(ev)=>{
            if(ev.key === "read_list") {
                const {state} = JSON.parse(ev.newValue);
                const {read_list} = state;
                loadStorage(read_list)
            }
        })
        return () => {
            window.removeEventListener("storage",()=>{
                
            })
        }
    }, [])

    return {
        books,
        availableBooks: books.length - read_list.length
    }
}