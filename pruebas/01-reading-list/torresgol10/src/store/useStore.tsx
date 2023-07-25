import { create } from 'zustand'
import { persist, createJSONStorage, subscribeWithSelector } from 'zustand/middleware'
import { share } from "shared-zustand";

import type { Library } from './../types';
import { getBooks } from '../services/getBooks';

type Store = {
    store: Library,
    storeRead: Library,
    addRead: (ISBN: string) => void,
    removeRead: (ISBN: string) => void
}

export const useStore = create<Store>()(
    subscribeWithSelector(
        persist(
            (set) => ({
                store: getBooks(),
                //Variable para almacenar los libros leidos, inicialmente vacia
                storeRead: [],
                //Funcion para añadir libros leidos, recibe el ISBN del libro, lo busca en la lista de libros y lo añade a la lista de libros leidos, luego lo elimina de la lista de libros
                addRead: (ISBN) => set((state) => ({
                    storeRead: [...state.storeRead, state.store?.find(({ book }) => book.ISBN === ISBN)] as Library,
                    store: state.store.filter(({ book }) => book.ISBN !== ISBN) as Library
                })),
                //Funcion para eleminar un libro de la lista de libros leidos, recibe el ISBN del libro, lo busca en la lista de libros leidos y lo elimina de la lista y vuelve a la lista de libros
                removeRead: (ISBN) => set((state) => ({
                    store: [...state.store, state.storeRead?.find(({ book }) => book.ISBN === ISBN)] as Library,
                    storeRead: state.storeRead.filter(({ book }) => book.ISBN !== ISBN) as Library
                }))
            }),
            {
                name: 'books-storage', // nombre del elemento en el storage (debe ser único)
                storage: createJSONStorage(() => localStorage), // el storage a usar "localStorage"
            }
        )
    )
)

// Compartimos el estado con otros tabs
if ("BroadcastChannel" in globalThis) {
    share("store", useStore);
    share("storeRead", useStore);
}
