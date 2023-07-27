'use client'
import { useEffect, useState } from "react";
import { useLibrary } from "../store/useLibrary";
import GenreButton from "./GenreButton";

export default function Dashboard() {
    const { books, list } = useLibrary()
    const availableBooks = books.length
    const myBooks = list.length

    const [ mounted, setMounted ] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <footer className="fixed bottom-0 h-20 w-full pl-24 flex items-center">
            <section className="w-[65.65%] h-full pl-12 flex justify-between items-center bg-white">
                <h3 className="text-sm font-light">Available books <span className="rounded-full bg-primary px-2 py-1 ml-1 text-bgwarn text-xs font-medium">{availableBooks}</span></h3>
                <section className="pr-[70px]">
                    <GenreButton /> 
                </section>
            </section>
            <section className="relative right-0 w-4/12 h-full pl-2 flex items-center 2xl:ml-10 bg-bgcold">
                <h3 className="text-sm font-light">My books <span className="rounded-full bg-primary px-2 py-1 ml-1 text-bgwarn text-xs font-medium">{myBooks}</span></h3>          
            </section>
        </footer>
    )
}
  
