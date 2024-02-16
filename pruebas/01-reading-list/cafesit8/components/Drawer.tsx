'use client'
import { useStore } from "@/store/zustand";
import { Button, Typography, Drawer, Badge } from "@material-tailwind/react";
import { useState } from "react"
import { IoMdClose } from 'react-icons/io'
import Book from "./Book";

export default function DrawerComponent() {
  const { readingList, animate } = useStore()
  const [openRight, setOpenRight] = useState(false);
  const drawerRight = () => setOpenRight(!openRight);
  return (
    <>
      <Badge content={readingList.length} color="green">
        <Button className={`self-baseline ${animate ? 'animate-shake animate-twice animate-duration-[350ms]' : ''}`} onClick={drawerRight}>Lista de Lectura</Button>
      </Badge>
      <Drawer
        size={500}
        placement="right"
        open={openRight}
        onClose={drawerRight}
        className="p-4 fixed overflow-y-scroll"
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Lista de Lectura
          </Typography>
          <Button
            variant="text"
            color="blue-gray"
            onClick={drawerRight}
            className="bg-blue-gray-500/10"
          >
            <IoMdClose strokeWidth={1} className="h-6 w-6" />
          </Button>
        </div>
        <section className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4">
            {readingList.length === 0 ? <span>Lista vacía :(</span> : 
            readingList.map(book => (
                <Book key={book.title} book={book} />
            ))}
        </section>
      </Drawer>
    </>
  )
}
