import { useEffect, useRef, useState } from "react"
import { useStore } from "../store/useStore"


export default function useBooks() {
    const { store, storeRead, addRead, removeRead } = useStore()

    const [books, setBooks] = useState(store)
    const genres = useRef([...new Set(store.map(({ book }) => book.genre))])

    // Creamos un state para cadaa posible filtro que se puede aplicar
    const [filterGenre, setFilterGenre] = useState<string>("")
    const [filterText, setFilterText] = useState<string>("")
    const [filterPages, setFilterPages] = useState<number>(1200)

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

        setBooks(newStore)
    }, [filterGenre, filterText, filterPages, store])

    useEffect(() => {
        genres.current = [...new Set(store.map(({ book }) => book.genre))]
    }, [store])


    return { books, booksRead: storeRead, genres: genres.current, nPages: filterPages, addRead, removeRead, filterByGenre: setFilterGenre, filterByText: setFilterText, filterByPages: setFilterPages }
}