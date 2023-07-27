import { useState } from 'react'

import { IBookCard } from '../../interfaces/IBooks'

import { Arrow, Heart } from '../ui'

interface Props {
  book: IBookCard
  left: boolean
  MoveBook: ({ book, left }: { book: IBookCard; left: boolean }) => void
  isDragging?: boolean
}

const CardBook = ({ book, left, MoveBook, isDragging }: Props) => {
  const [viewMoreInfo, setViewMoreInfo] = useState(false)

  const moveBook = () => {
    MoveBook({ book, left })
  }

  const handleInfoExtra = (
    ev: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    ev.stopPropagation()
    setViewMoreInfo((prev) => !prev)
  }

  let stylesDrag = ''
  switch (isDragging) {
    case true:
      stylesDrag = 'bg-[#1c1b1b79]'
      break
    case false:
      stylesDrag = 'bg-[#87878745] border-[1px] border-gray-500 '
  }

  return (
    <section
      draggable
      id="Card"
      className={`sm:[&>#viewInfo]:hover:animate-pulse flex flex-col justify-center items-center border-opacity-20 relative rounded-[14px] w-full object-cover py-5 m-auto hover:scale-105 transition-transform duration-200  ${stylesDrag}`}
    >
      <h2 className="w-full p-3 font-semibold text-start">{book.title}</h2>
      <img
        loading="lazy"
        className="w-full h-[300px] m-auto"
        draggable={false}
        src={book.cover}
        alt={book.title}
      />
      <h3>{book.genre}</h3>
      <h4 className="absolute bottom-0 right-2">
        <img src="/book.svg" title="número de páginas" />
        {book.pages}
      </h4>

      {viewMoreInfo && (
        <ul className="px-3">
          <li>{book.year}</li>
          <li>{book.author.name}</li>
          <li className="text-xs">{book.synopsis}</li>
        </ul>
      )}

      <button
        id="viewInfo"
        data-testid="viewInfo"
        name={viewMoreInfo ? 'Ocultar' : 'Ver más'}
        onClick={(ev) => handleInfoExtra(ev)}
        className={`p-2 transition-transform duration-300  ${
          viewMoreInfo
            ? '-rotate-90  sm:hover:-rotate-45'
            : 'rotate-90  sm:hover:rotate-45'
        }  `}
      >
        <Arrow />
      </button>

      <button
        className={` bg-opacity-5 absolute top-0 right-0 p-3 rounded-tr-[14px] transition-colors duration-500 ${
          left
            ? 'text-white hover:text-red-700'
            : 'text-red-700 hover:text-white'
        }`}
        title={`${
          left
            ? 'Añadir a tu lista de lectura'
            : 'Eliminar de tu lista de lectura'
        }`}
        onClick={(ev) => {
          ev.stopPropagation()
          moveBook()
        }}
      >
        <Heart />
      </button>
    </section>
  )
}
export default CardBook
