import { useEffect, useState } from "preact/hooks";
import { Book } from "../types";

import librosJSON from "../../../books.json";

export const useBooks = () => {
    const [librosDisponibles, setLibrosDisponibles] = useState<Book[]>([])
    const [librosLista, setLibrosLista] = useState<Book[]>([])

    const [generos, setGeneros] = useState<string[]>([])

    const addToList = (book: Book) => {
        const libros = [...librosLista, book]
        setLibrosLista(libros)
        localStorage.setItem("lectura", JSON.stringify(libros));
    }

    const removeFromList = (book: Book) => {
        const librosCopia = [...librosLista]        
        const index = librosCopia.findIndex(libro => libro.ISBN === book.ISBN)

        if (index >= 0) {
            librosCopia.splice(index, 1)
            setLibrosLista(librosCopia)
            localStorage.setItem("lectura", JSON.stringify(librosCopia));
        }
    }

    const setearLista = (books: Book[]) => setLibrosLista(books)

    useEffect(()=>{
        const arr  = Object.keys(librosJSON.library).map(function f(key: any) {
            return librosJSON.library[key].book; });
        setLibrosDisponibles(arr)
        setGeneros(() =>{ return Array.from(new Set(arr.map((item) => item.genre)))})
    },[])
    
    return { librosDisponibles, librosLista, generos, addToList, removeFromList, setearLista };
}