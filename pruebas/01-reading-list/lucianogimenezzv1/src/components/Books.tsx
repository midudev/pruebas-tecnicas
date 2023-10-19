/* eslint-disable @next/next/no-img-element */
import style from '../app/styles/listBook.module.css'
import type { Book } from '@/types'

interface BooksProps {
    handleClick: (id: string) => void,
    matches: Book[] ,
    list: Set<Book['ISBN']>
}

export default function Books({ matches, handleClick, list }: BooksProps) {
    return (
    <ul className={style.containerBooks}>
        {matches.map((book) => (
          <li  
            className='relative'
            key={book.ISBN} onClick={() => handleClick(book['ISBN'])}>
            <img 
              className={`${list.has(book.ISBN) ? style.img : ''}  aspect-[9/14] object-cover`} 
              alt={book.title} src={book.cover}/>
          </li>
        ))}
      </ul>
    )
}