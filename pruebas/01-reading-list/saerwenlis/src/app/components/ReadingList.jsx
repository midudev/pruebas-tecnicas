'use client'
import { useEffect, useState } from "react";
import { useLibrary } from "../store/useLibrary";
import { motion } from "framer-motion";
import bookmark from "../../../public/assets/bookmark-on.svg";
import Image from "next/image";

export default function ReadingList() {
    const {list, removeList } = useLibrary()

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
            <ul className="h-[778px] grid grid-cols-3 content-start gap-8 px-12 pt-10 overflow-y-scroll">
                {list.map((book) => (
                    <li key={book.ISBN} className="h-52 w-auto cursor-pointer" onClick={() => removeList(book)}>  
                        <motion.div
                            initial={{opacity: 0}}
                            whileHover={{opacity: 0.8}}
                            className="h-52 w-36 m-auto text-center bg-bgwarn flex flex-col justify-center items-center absolute p-2">
                            <Image src={bookmark} width='auto' height='auto' alt="bookmark" className="h-[40px] pb-2" />
                            <h5 className="font-semibold text-xs text-black">Remove from reading list</h5>
                        </motion.div>              
                        <motion.img
                        layoutId={book}
                        src={book.cover}
                        alt={book.title}
                        width='auto'
                        height='auto'
                        className="h-auto w-auto max-h-52 rounded-r-lg shadow-lg cursor-pointer aspect-[inherit]"
                        />
                    </li>
                ))}
            </ul>
        </aside>
    )
  }
  