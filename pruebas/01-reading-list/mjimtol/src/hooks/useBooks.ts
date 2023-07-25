import { useEffect, useState } from "preact/hooks";
import { Book, BookSelectable } from "../types";

import librosJSON from "../../../books.json";

export const useBooks = () => {
    const [librosDisponibles, setLibrosDisponibles] = useState<BookSelectable[]>([])
    const [librosLista, setLibrosLista] = useState<BookSelectable[]>([])

    const [generos, setGeneros] = useState<string[]>([])

    const saveStorage = (list: BookSelectable[]) => localStorage.setItem("lectura", JSON.stringify(list));

    const addToList = (book: BookSelectable) => {
        const newBook = book;
        book.selected = true;
        const libros = [...librosLista, newBook]
        setLibrosLista(libros)
        
        saveStorage(libros)
    }

    const removeFromList = (book: Book) => {
        const librosCopia = [...librosLista]
        const index = librosCopia.findIndex(libro => libro.ISBN === book.ISBN)

        if (index >= 0) {
            librosCopia[index].selected = false
            librosCopia.splice(index, 1)
            for (let i = index ; i < librosCopia.length ; i++)
                librosCopia[i].priority -= 1;
            setLibrosLista(librosCopia)
            saveStorage(librosCopia)
        }
    }

    const addPriority = (book: BookSelectable) => {
        const librosCopia = [...librosLista]
        const index = librosCopia.findIndex(libro => libro.ISBN === book.ISBN)

        if (index > 0)
        {
            librosCopia[index] = librosCopia[index - 1];
            librosCopia[index - 1] = book;
            
            setLibrosLista(librosCopia)
            saveStorage(librosCopia)
        }
    }

    const reducePriority = (book: BookSelectable) => {
        const librosCopia = [...librosLista]
        const index = librosCopia.findIndex(libro => libro.ISBN === book.ISBN)
        
        if (index < librosCopia.length - 1){
            librosCopia[index] = librosCopia[index + 1];
            librosCopia[index + 1] = book;
            
            setLibrosLista(librosCopia)
            saveStorage(librosCopia)
        }
    }

    const setearLista = (books: BookSelectable[]) => setLibrosLista(books)
    const setearListaDisp = (books: BookSelectable[]) => setLibrosDisponibles(books)
    
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

    useEffect(()=>{
        if (librosLista && librosDisponibles.length > 0) {
            // Marcamos como seleccionados
            const libs = [...librosDisponibles];
            librosLista.forEach((book: BookSelectable) => {
                const i = libs.findIndex((b) => b.ISBN === book.ISBN);
                if (i >= 0) libs[i].selected = true;
            });
            // Desmarcamos los no seleccionados
            librosDisponibles.forEach((book: BookSelectable) => {
                const i = librosLista.findIndex((b) => b.ISBN === book.ISBN);
                if (i < 0) {
                    const newI = librosDisponibles.findIndex((b) => b.ISBN === book.ISBN)                    
                    libs[newI].selected = false;
                }
            });
            setearListaDisp(libs);
        }
    },[librosLista])
    
    return { librosDisponibles, librosLista, generos, addToList, removeFromList, setearLista, setearListaDisp, addPriority, reducePriority };
}