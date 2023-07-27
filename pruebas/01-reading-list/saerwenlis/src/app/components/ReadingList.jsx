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
            <ul className="h-[778px] grid 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-1 content-start gap-8 px-12 pt-10 overflow-y-scroll">
                {list.map((book) => (
                    <li key={book.ISBN} className="h-52 w-auto cursor-pointer" onClick={() => removeList(book)}>  
                        <motion.div
                            initial={{opacity: 0}}
                            whileHover={{opacity: 1}}
                            className="h-52 w-36 m-auto text-center bg-bgwarn flex flex-col justify-center items-center absolute p-2 rounded-r-lg">
                            <Image src={bookmark} width='auto' height='auto' alt="bookmark" className="h-[40px] pb-2" />
                            <h5 className="font-semibold text-xs text-black">Remove from reading list</h5>
                        </motion.div>              
                        <motion.img
                        layoutId={book}
                        src={book.cover}
                        alt={book.title}
                        width='auto'
                        height='auto'
                        className="w-36 min-w-[144px] h-[210px] max-h-52 rounded-r-lg shadow-lg cursor-pointer aspect-[inherit] object-cover"
                        />
                    </li>
                ))}
            </ul>
        </aside>
    )
  }
  