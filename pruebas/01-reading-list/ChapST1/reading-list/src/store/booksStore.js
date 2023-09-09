/*
  * Primero creamos la store con el hook create de zustand
  * Luego creamos los estados que vamos a utilizar
  * Luego creamos las funciones que van a modificar los estados
  * Luego exportamos la store
  * Si queremos que los estados de la store se guarden en el localStorage, entonces usamos el middleware persist de zustand
*/

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useBookStore = create(persist(
  (set, get) => {
    /*
        * Para tener una sinconizacion de los estados entre las pestañas usando el localStorage
        * utilizamos el evento storage de window
        * Este evento se dispara cuando se modifica el localStorage
        * En este caso solo nos interesa cuando se modifica el localStorage con la key 'books-storage'
        * Cuando se dispara el evento storage, obtenemos el nuevo valor del localStorage y lo parseamos
        * Luego obtenemos el estado de la store y lo actualizamos con el nuevo valor del localStorage
        * Tutorial -> https://twitter.com/midudev/status/1679122063099846656
    */

    window.addEventListener('storage', (event) => {
      if (event.key === 'books-storage') {
        const { state } = JSON.parse(event.newValue)
        const storageState = { ...state }
        set({ ...storageState })
      }
    })

    /*
        * Si no hay nada en el localStorage, entonces creamos el estado inicial de la store 👇
    */

    return {
      books: [],
      readingList: [],
      category: 'Todas',

      updateBooks: (newBooks) => {
        /*
            * Lo primero obtenemos el estado readingList de la store usange el metodo get() de zustand
            * Luego obtenemos los ids de los libros que estan en el estado readingList
            * Luego filtramos los nuevos libros que llegan para que no se repitan con los que estan en el estado readingList
            * (removeCopyInReadingList) -> es un array con los nuevos libros filtrados pero ahora los libros que son repetidos estan como undefined
            * (filteredNewBooks) -> es un array con los nuevos libros filtrados pero sin los libros que son repetidos
            * Luego actualizamos el estado books con los nuevos libros filtrados
        */
        const { readingList } = get()

        const readingListIds = readingList.map(book => book.id)
        const removeCopyInReadingList = [...newBooks].map((book) => {
          const findBookInReadingList = readingListIds.find(id => id === book.id)
          if (findBookInReadingList) return undefined // si es true es porque ya esta en la lista de lectura por lo tanto no lo agregamos

          return book
        })

        const filteredNewBooks = Array.from(removeCopyInReadingList).filter((book) => book !== undefined)
        set({ books: filteredNewBooks })
      },

      updateCategory: (newCategory) => {
        /*
            * Lo primero obtenemos el estado books de la store usange el metodo get() de zustand
            * El updateCategory recibe como parametro la nueva categoria seleccionada
            * Luego filtramos los libros que estan en el estado books con la nueva categoria seleccionada
            * Luego actualizamos el estado category con la nueva categoria seleccionada y el estado books con los libros filtrados
        */
        const { books } = get()

        const newBooks = [...books].filter(book => book.bookGenre === newCategory)
        set({ category: newCategory, books: [...newBooks] })
      },

      addBookToReadingList: (bookId) => {
        /*
            * Lo primero obtenemos el estado books y readingList de la store usange el metodo get() de zustand
            * Luego buscamos el libro que se quiere agregar a la lista de lectura con la id que llega como parametro a la funcion addBookToReadingList
            * Luego filtramos los libros que estan en el estado books sin el libro que se quiere agregar a la lista de lectura para que no se repita
            * Luego agregamos el libro que se quiere agregar a la lista de lectura al estado readingList
            * Luego actualizamos el estado books con los nuevos libros filtrados y el estado readingList con el nuevo libro agregado
        */

        const { books, readingList } = get()

        const findBookById = books.find(book => book.id === bookId)
        const newBooks = books.filter(book => book.id !== bookId)
        const newReadingList = [...readingList, findBookById]

        set({ books: [...newBooks], readingList: [...newReadingList] })
      },

      removeToReadingList: (bookId) => {
        /*
            * Lo primero obtenemos el estado books y readingList de la store usange el metodo get() de zustand
            * Luego buscamos el libro que se quiere eliminar de la lista de lectura con la id que llega como parametro a la funcion removeToReadingList
            * Luego creamos (newBooks) donde agregamos el libro que se quiere eliminar de la lista de lectura al estado books
            * Luego filtramos los libros que estan en el estado readingList sin el libro que se quiere eliminar de la lista de lectura
            * Usando el (category) de estado filtramos todos los libros que estan en el estado books con la categoria seleccionada
            * si la categoria seleccionada es 'Todas' entonces no filtramos los libros
            * Luego actualizamos el estado books con los nuevos libros filtrados y el estado readingList con el nuevo libro eliminado
        */

        const { books, readingList, category } = get()
        const findBookById = readingList.find(book => book.id === bookId)

        const newBooks = [...books, findBookById]
        const newReadingList = readingList.filter(book => book.id !== bookId)

        const filteredBooks = newBooks.filter(book => book.bookGenre === category)

        if (category === 'Todas') return set({ books: [...newBooks], readingList: [...newReadingList] })

        set({ books: [...filteredBooks], readingList: [...newReadingList] })
      }

    }
  }
  , {
    name: 'books-storage'
  }))
