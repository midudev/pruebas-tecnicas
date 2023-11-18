import { useEffect, useRef, useState } from "react"
import { useStore } from "../store/useStore"
import { Library } from "../types"

/* Funcion para ordenar los libros una vez filtros la key siempre sera un string*/
const sortBooks: { [key: string]: (books: Library) => Library } = {
    title: (books) => [...books.sort((a, b) => a.book.title.localeCompare(b.book.title))],
    author: (books) => [...books.sort((a, b) => a.book.author.name.localeCompare(b.book.author.name))],
    pages: (books) => [...books.sort((a, b) => b.book.pages - a.book.pages)],
    year: (books) => [...books.sort((a, b) => b.book.year - a.book.year)],
}

export default function useBooks() {
    const { store, storeRead, addRead, removeRead } = useStore()

    const [books, setBooks] = useState(store)
    const genres = useRef([...new Set(store.map(({ book }) => book.genre))])

    // Creamos un state para cadaa posible filtro que se puede aplicar
    const [filterGenre, setFilterGenre] = useState<string>("")
    const [filterText, setFilterText] = useState<string>("")
    const [filterPages, setFilterPages] = useState<number>(1200)

    const [sortType, setSortType] = useState<string>("")


    /* Cada vez que cambie uno de los 3 posibles filtros tenemos que llamar a su funcion correspondiente, 
    teniendo en cuenta que si hay mas de un filtro activo tenemos que aplicar los todos los filtros y actualizar los books */

    useEffect(() => {
        let newStore = [...store]

        if (filterGenre !== "") {
            newStore = newStore.filter(({ book }) => book.genre === filterGenre)
        }
        if (filterText !== "") {
            newStore = newStore.filter(({ book }) => book.title.toLowerCase().includes(filterText.toLowerCase()))
        }
        if (filterPages < 1200) {
            newStore = [...newStore.filter(({ book }) => book.pages <= filterPages)]
        }

        if(sortType !== ""){
            newStore = sortBooks[sortType](newStore)
        }

        setBooks(newStore)
    }, [filterGenre, filterText, filterPages, sortType, store])

    useEffect(() => {
        genres.current = [...new Set(store.map(({ book }) => book.genre))]
    }, [store])


    return { books, booksRead: storeRead, genres: genres.current, nPages: filterPages, addRead, removeRead, filterGenre, filterByGenre: setFilterGenre, filterByText: setFilterText, filterByPages: setFilterPages, setSortType }
}