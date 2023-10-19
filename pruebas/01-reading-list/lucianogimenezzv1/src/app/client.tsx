/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect, useMemo, useState } from 'react';
import type { Book } from '@/types'
import Books from '@/components/Books';
import { LOCALSTORAGE_KEY } from '../consts'
import SearchIcon from '@/components/Icon';

export default function Home({ books, genres }: { books: Book[], genres: Book['genre'][] }) {
 const [genre, setGenre] = useState("")
 const [search, setSearch] = useState("")
 const [pages, setPages] = useState(0)

 const [list, setList] = useState<Set<Book['ISBN']>>(() => new Set())

 const matches = useMemo(() => {
  if (!genre && pages === 0 && !search) return books

  let booksFiltered = books


  if (genre) {
    booksFiltered = booksFiltered.filter((book) => book.genre === genre)
  }

  if (pages > 0) {
    booksFiltered =  booksFiltered.filter((book) => book.pages < pages)
  }

  if (search) {
    booksFiltered = booksFiltered.filter(book => book.title.toLowerCase().includes(search.toLocaleLowerCase()))
  }


  return booksFiltered

 }, [genre, books, pages, search])

  const handleClick = (book: Book['ISBN']) => {
    const draft = structuredClone(list)

    if (draft.has(book)) {
      draft.delete(book)
    } else {
      draft.add(book)
    }

    setList(draft)

    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(Array.from(draft)))
  }

  useEffect(() => {
    const list = localStorage.getItem(LOCALSTORAGE_KEY)

    if (list) {
      setList(new Set(JSON.parse(list)))
    }
    
    const conectStorage = () => {
      const list = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY) as string)
      setList(new Set(list))
    }

    window.addEventListener('storage', conectStorage)

    return () => window.removeEventListener('storage', conectStorage)
  }, [])
 
  return (
    <article className='grid gap-4'>
      <nav className='w-full flex gap-4 justify-between items-center'>
        <div className='flex flex-grow-[1] basis-0 bg-[#3b3b3b] justify-center items-center  rounded-md'>
          <input 
            onChange={(event) => setSearch(event.target.value)}
            className='w-full text-white outline-none bg-transparent p-2 rounded-md' type='text' placeholder='Dune, Juego de tronos, etc..' />
          <button className='p-2 border-l-[1px] border-slate-300 cursor-pointer'>
             <SearchIcon/>
          </button>
        </div>
        <select className='h-8 w-[220px]' value={genre} onChange={(event) => setGenre(event.target.value)}>
         <option value="">Todos</option>  
         {genres.map((genre, index) => {
          return <option key={index} value={genre}>{genre}</option>
         })}
        </select> 
         <div className='flex flex-grow-[1] basis-0 flex-col justify-center  itesm-center gap-2'>
          <p className='text-sm'>Paginas: {pages}</p>
          <input 
            type='range' 
            min={0} max={1200} 
            value={pages} 
            onChange={(event) => { setPages(Number(event.target.value)) }}/>
          <i className='text-sm'>max paginas 1200</i>
         </div>
      </nav>
     <Books  matches={matches} handleClick={handleClick} list={list}/>
    </article>
    )
}
