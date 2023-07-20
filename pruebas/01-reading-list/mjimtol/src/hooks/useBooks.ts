import { useEffect, useState } from "preact/hooks";
import { Book, BookSelectable } from "../types";

import librosJSON from "../../../books.json";

export const useBooks = () => {
    const [librosDisponibles, setLibrosDisponibles] = useState<BookSelectable[]>([])
    const [librosLista, setLibrosLista] = useState<BookSelectable[]>([])

    const [generos, setGeneros] = useState<string[]>([])

    const addToList = (book: BookSelectable) => {
        const newBook = book;
        book.selected = true;
        const libros = [...librosLista, newBook]
        setLibrosLista(libros)
        localStorage.setItem("lectura", JSON.stringify(libros));
    }

    const removeFromList = (book: Book) => {
        const librosCopia = [...librosLista]
        const index = librosCopia.findIndex(libro => libro.ISBN === book.ISBN)

        if (index >= 0) {
            librosCopia[index].selected = false
            librosCopia.splice(index, 1)
            setLibrosLista(librosCopia)
            localStorage.setItem("lectura", JSON.stringify(librosCopia));
        }
    }

    const setearLista = (books: BookSelectable[]) => setLibrosLista(books)

    useEffect(()=>{
        const stgLectura = localStorage.getItem("lectura");

        const arr  = Object.keys(librosJSON.library).map(function f(key: any) {
            const book = librosJSON.library[key].book as BookSelectable;
            book.selected = false;
            
            return book;
        });
    
        if (stgLectura){
            JSON.parse(stgLectura).forEach((book: BookSelectable) => {
                const i = arr.findIndex(b => b.ISBN === book.ISBN)
                if (i >= 0) arr[i].selected = true;
            });
        }

        setLibrosDisponibles(arr)
        setGeneros(() =>{ return Array.from(new Set(arr.map((item) => item.genre)))})
    },[])
    
    return { librosDisponibles, librosLista, generos, addToList, removeFromList, setearLista };
}