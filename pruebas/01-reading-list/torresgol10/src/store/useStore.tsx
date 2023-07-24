import type { Library } from './../types';
/* importa del json books y extrae librery para no tener un dependencia de ellos, solo quiero el listado books*/
import { library } from '../../../books.json'
import { create } from 'zustand'

type Store = {
    store: Library,
    storeRead: Library,
    addRead: (ISBN: string) => void,
    removeRead: (ISBN: string) => void
    //filterByGenre: (genre: string) => void
}



export const useStore = create<Store>()((set) => ({
    store: library,
    //Variable para almacenar los libros leidos, inicialmente vacia
    storeRead: [],
    //Funcion para añadir libros leidos, recibe el ISBN del libro, lo busca en la lista de libros y lo añade a la lista de libros leidos, luego lo elimina de la lista de libros
    addRead: (ISBN) => set((state) => {
        return {
            storeRead: [...state.storeRead, state.store.find(({ book }) => book.ISBN === ISBN)],
            store: state.store.filter(({ book }) => book.ISBN !== ISBN)
        }
    }),
    //Funcion para eleminar un libro de la lista de libros leidos, recibe el ISBN del libro, lo busca en la lista de libros leidos y lo elimina de la lista y vuelve a la lista de libros
    removeRead: (ISBN) => set((state) => {
        return {
            store: [...state.store, state.storeRead.find(({ book }) => book.ISBN === ISBN)],
            storeRead: state.storeRead.filter(({ book }) => book.ISBN !== ISBN)
        }
    })
}))
