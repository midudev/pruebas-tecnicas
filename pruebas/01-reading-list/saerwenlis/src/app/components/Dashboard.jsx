'use client'
import { useEffect, useState } from "react";
import { useLibrary } from "../store/useLibrary";
import { motion, Reorder, useDragControls } from "framer-motion";
import bookmark from "../../../public/assets/bookmark-off.svg";
import Image from "next/image";

export default function Dashboard() {
    const {setList, books } = useLibrary()
    const [items, setItems] = useState(books)
    const controls = useDragControls()

    const [ mounted, setMounted ] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <section className="w-full h-auto mt-8 pl-8">
            <Reorder.Group axis="x" values={items} onReorder={setItems} className="grid 2xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-3 gap-8 lg:overflow-hidden">
                {books.map(book => (
                    <Reorder.Item 
                    key={book.ISBN} 
                    value={book} 
                    dragListener={false}
                    dragControls={controls}
                    className="m-auto h-auto cursor-pointer flex justify-center items-start relative" 
                    onClick={() => setList(book)}>   
                        <motion.div
                        initial={{opacity: 0}}
                        whileHover={{opacity: 0.9}}
                        className="h-full w-full m-auto text-center bg-primary flex flex-col justify-center items-center absolute p-2 rounded-r-lg">
                            <Image src={bookmark} width='auto' height='auto' alt="bookmark" className="h-[40px] pb-2" />
                            <h5 className="font-bold text-xs text-bgwarn">{book.title}</h5>
                            <p className="font-semibold text-xs">{book.author.name}</p>
                        </motion.div>
                        <motion.img
                        draggable='false'
                        layoutId={book}
                        src={book.cover}
                        alt={book.title}
                        width='auto'
                        height='auto'
                        className="w-36 min-w-[144px] h-[210px] max-h-52 rounded-r-lg shadow-lg cursor-pointer aspect-[inherit] object-cover"
                        />
                    </Reorder.Item>
                ))}
            </Reorder.Group>
        </section>
    )
}
  
