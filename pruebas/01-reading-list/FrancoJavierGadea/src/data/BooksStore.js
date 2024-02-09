import { useStore } from "@nanostores/react";
import { map } from "nanostores";
import { persistentAtom, persistentMap } from '@nanostores/persistent';


//const SAVED_BOOKS = map({});


const SAVED_BOOKS = persistentMap('book:', {}, {

    encode: (value) => {
        return JSON.stringify(value)
    },

    decode: (value) => {
        try {

            return JSON.parse(value);
        } 
        catch(err) {

            console.log(err);
        }
    }
});




export async function saveBook(key, book){

    const exist = SAVED_BOOKS.get()[key];

    if(!exist){

        SAVED_BOOKS.setKey(key, book);

        return {ok: true, message: 'Libro guardado'}
    }
    else {

        return {ok: false, message: 'Ya existe ese libro'}
    }
}


export async function getSavedBook(key){

    const book = SAVED_BOOKS.get()[key];

    if(book){

        return {ok: true, data: book}
    }
    else {

        return {ok: false, data: null}
    }
}


export async function removeBook(key){

    const exist = SAVED_BOOKS.get()[key];

    if(exist){

        SAVED_BOOKS.setKey(key, undefined);
        // const books = {...SAVED_BOOKS.get()};

        // delete books[key];

        // SAVED_BOOKS.set(books);

        return {ok: true, message: 'Libro removido'}
    }
    else {

        return {ok: false, message: 'El libro no existe'}
    }
}


export async function changeOrder(newOrderItems = []){

    //Aqui vendria bien un Object.groupBy

    const newState = newOrderItems.reduce((acc, [key, value], index) => {

        acc[key] = {
            ...value, order: index + 1
        }

        return acc;
    }, {});

    SAVED_BOOKS.set(newState);

    return {ok: true, message: 'Orden de los Libros cambiado'}
}


//? React Hook
export function useSavedBooks(){

    return useStore(SAVED_BOOKS);
}