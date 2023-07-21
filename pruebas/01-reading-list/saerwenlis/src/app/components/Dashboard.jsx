'use client'
import { useEffect, useState } from "react";
import { useLibrary } from "../store/useLibrary";
import { motion, Reorder, useDragControls } from "framer-motion";

export default function Dashboard() {
    const {setList, books, setBooks } = useLibrary()
    console.log('books', books);

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
        <section className="w-full h-8/12 mt-12 pl-8">
            <Reorder.Group axis="x" values={items} onReorder={setItems} className="grid grid-cols-6 gap-8" onChange={() => setBooks(books)}>
                {books.map(book => (
                    <Reorder.Item 
                    key={book.ISBN} 
                    value={book} 
                    dragListener={false}
                    dragControls={controls}
                    className="m-auto h-52 cursor-pointer flex justify-start items-start" 
                    onClick={() => setList(book)}>                
                        <motion.img
                        draggable='false'
                        layoutId={book}
                        src={book.cover}
                        alt={book.title}
                        width='auto'
                        height='auto'
                        className="h-auto max-h-56 w-auto rounded-r-lg shadow-lg cursor-pointer aspect-[inherit]"
                        />
                    </Reorder.Item>
                ))}
            </Reorder.Group>
        </section>
    )
}
  
