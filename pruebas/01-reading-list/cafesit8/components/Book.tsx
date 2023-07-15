'use client'
import { useStore } from '@/store/zustand'
import { Book } from '@/types/books'
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader } from '@material-tailwind/react'
import Image from 'next/image'
import { useState } from 'react'

interface BookProps {
    book: Book
}

export default function Book({ book }: BookProps) {
  const { addReadingList, getAnimated } = useStore()
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  function handleAddBook() {
    handleOpen()
    addReadingList(book)
    getAnimated()
  }

  return (
    <>
      <article>
          <div onClick={handleOpen} className='w-full h-[350px] cursor-pointer'>
              <Image className='w-full h-full object-cover' src={book.cover} alt={`libro ${book.title}`} width={200} height={300} />
          </div>
      </article>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader><h4>{book.title}</h4></DialogHeader>
        <DialogBody divider>
          <section className='flex gap-4'>
            <article className='w-[30%] h-auto'>
              <Image className='w-full h-auto object-cover' width={200} height={300} src={book.cover} alt={`imagen de ${book.title}`} />
            </article>
            <article className='w-[70%]'>
              <p className='text-black'>Autor: <span className='text-gray-600'>{book.author.name}</span></p>
              {book.author.otherBooks.length !== 0 && <p className='text-black'>Libros del autor: <span className='text-gray-600'>{book.author.otherBooks.map(book => book).join(', ')}</span></p>}
              <p className='text-black'>Categoría: <span className='text-gray-600'>{book.genre}</span></p>
              <p className='text-black'>ISBN: <span className='text-gray-600'>{book.ISBN}</span></p>
              <p className='text-black'>Páginas: <span className='text-gray-600'>{book.pages}</span></p>
              <p className='text-black'>Resumen: <span className='text-gray-600'>{book.synopsis}</span></p>
            </article>
          </section>
        </DialogBody>
        <DialogFooter>
          <Button
            variant='text'
            color="red"
            onClick={handleOpen}
            className="mr-2"
          >
            <span>Cerrar</span>
          </Button>
          <Button
            variant='filled'
            color="green"
            onClick={handleAddBook}
          >
            <span>Agregar</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  )
}
