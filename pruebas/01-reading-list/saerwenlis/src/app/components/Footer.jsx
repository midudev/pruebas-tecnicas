'use client'
import { useEffect, useState } from "react";
import { useLibrary } from "../store/useLibrary";

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
        <footer className="fixed bottom-0 w-full h-2/12 mt-12 pl-24 flex pb-4">
            <section className="w-8/12 pl-12">
                <h3 className="text-sm font-light">Available books <span className="rounded-full bg-primary px-2 py-1 text-bgwarn text-xs font-medium">{availableBooks}</span></h3>
            </section>
            <section className="relative right-0 w-4/12 pl-4">
                <h3 className="text-sm font-light">My books <span className="rounded-full bg-primary px-2 py-1 text-bgwarn text-xs font-medium">{myBooks}</span></h3>          
            </section>
        </footer>
    )
}
  
