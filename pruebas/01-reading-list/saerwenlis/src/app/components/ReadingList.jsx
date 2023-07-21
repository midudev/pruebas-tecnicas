'use client'
import { useEffect, useState } from "react";
import { useLibrary } from "../store/useLibrary";
import { motion } from "framer-motion";

export default function ReadingList() {
    const {list, removeList } = useLibrary()
    console.log('list', list);

    const [ mounted, setMounted ] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <aside className="w-full min-h-screen flex flex-col pt-[54px] bg-bgcold">
            <h1 className="text-2xl font-bold pl-12">Reading List</h1>
            <ul className="h-[778px] flex flex-wrap justify-start items-start gap-8 px-12 pt-16 overflow-y-scroll">
                {list.map((book) => (
                    <li key={book.ISBN} className="m-auto h-56 cursor-pointer" onClick={() => removeList(book)}>                
                        <motion.img
                        layoutId={book}
                        src={book.cover}
                        alt={book.title}
                        width='auto'
                        height='auto'
                        className="h-auto w-auto max-h-56 rounded-r-lg shadow-lg cursor-pointer aspect-[inherit]"
                        />
                    </li>
                ))}
            </ul>
        </aside>
    )
  }
  