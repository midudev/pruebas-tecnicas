import { useEffect, useRef, useState } from "react"
import { useStore } from "../store/useStore"


export default function useBooks() {
    const { store, storeRead, addRead, removeRead } = useStore()

    const [books, setBooks] = useState(store)
    const genres = useRef([...new Set(store.map(({ book }) => book.genre))])


    useEffect(() => {
        setBooks(store)
        genres.current = [...new Set(store.map(({ book }) => book.genre))]
    }, [store])



    //Funcion para filtrar la store paandole un genero por parametro
    const filterByGenre = (genre: string) => {
        if (!genre) return setBooks(store)
        setBooks(store.filter(({ book }) => book.genre === genre))
    }

    return { store: books, storeRead, genres: genres.current, addRead, removeRead, filterByGenre }
}