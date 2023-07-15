'use client'
import { useStore } from "@/store/zustand";
import { Button, Typography, Drawer } from "@material-tailwind/react";
import { useState } from "react"
import { IoMdClose } from 'react-icons/io'
import Book from "./Book";

export default function DrawerComponent() {
  const { readingList } = useStore()
  const [openRight, setOpenRight] = useState(false);
  const drawerRight = () => setOpenRight(!openRight);
  return (
    <>
      <Button className="self-baseline" onClick={drawerRight}>Open Drawer Right</Button>
      <Drawer
        size={400}
        placement="right"
        open={openRight}
        onClose={drawerRight}
        className="p-4 fixed"
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Lista de Lectura
          </Typography>
          <Button
            variant="text"
            color="blue-gray"
            onClick={drawerRight}
          >
            <IoMdClose strokeWidth={1} className="h-6 w-6" />
          </Button>
        </div>
        <section>
            {readingList.length === 0 ? <span>Lista vacía :(</span> : 
            <div className="flex flex-wrap">
                {readingList.map(book => (
                    <Book key={book.title} book={book} />
                ))}
            </div>}
        </section>
      </Drawer>
    </>
  )
}
