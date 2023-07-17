import { useState } from 'react'
import { Author, Genre, Pages } from './BooksLabelData'
import { IconBookmarkOff, IconBookmarkPlus } from '@tabler/icons-react'

export function BookInformation ({ book }) {
  const [isSaved, setIsSaved] = useState(false)
  return (
      <li className="rounded-b-md">
        <img
          src={book.cover}
          alt="libro"
          className="rounded-t-md"
        />
        <ul className=' rounded-b-md p-1'>
          <li className='font-bold'>{book.title}</li>
          <Pages pages={book.pages}/>
          <Author author={book.author.name}/>
          <Genre genre={book.genre}/>
        </ul>
        <ul className='flex gap-1'>
          <li>
            <IconBookmarkPlus className={`${isSaved ? 'fill-orange-600' : 'fill-[#f5ebe0]'} transition-colors duration-200 `} width={32} height={32} onClick={() => {
              setIsSaved(!isSaved)
            }}/>
          </li>
          {isSaved
            ? <IconBookmarkOff className='animate-jump animate-once animate-ease-linear' width={32} height={32} onClick={() => {
              setIsSaved(!isSaved)
            }}/>
            : null}
        </ul>
      </li>
  )
}
