import { useStore } from "@nanostores/react";
import { map } from "nanostores";



const SAVED_BOOKS = map({});


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


export function useSavedBooks(){

    return useStore(SAVED_BOOKS);
}