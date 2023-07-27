import { useRef } from 'react'
import { ItemBookProps } from '../types/book'
import { IconRemove } from './icons'

function ItemBook ({ book, removeItem, addBookUser, isRemove = false }: ItemBookProps): JSX.Element {
  const { ISBN, cover, title, genre, year } = book

  const buttonContainer = useRef<HTMLDivElement>(null)
  const action = (callback: () => void, back = false): void => {
    if (buttonContainer.current != null) {
      buttonContainer.current.style.zIndex = '1000'
      buttonContainer.current.animate({
        width: '100px',
        height: '100px',
        transform: back ? 'translate(-50vw,-50vh)' : 'translate(100vw,0px)'
      }, { duration: 300, easing: 'ease-in' }).finished.then(() => {
        callback()
      }).finally(() => {})
    }
  }

  return (
    <div
      title={isRemove ? title : `Add ${title}`}
      aria-label={title}
      role='row'
      key={ISBN}
      ref={buttonContainer}
      className={`group w-full ${isRemove ? 'h-[260px] cursor-auto' : 'h-[350px] cursor-pointer'} items-center flex flex-col relative border-2 border-white/20 rounded-lg transition-all duration-500`}
      onClick={() => {
        if (addBookUser != null) {
          action(() => addBookUser(book))
        }
      }}
    >
      {isRemove
        ? (
          <button
            type='button'
            aria-label='delete'
            title={`Eliminar ${title}`}
            className='absolute z-10 -top-3 -right-3 p-2 rounded-full bg-red-500'
            onClick={() => {
              if (removeItem != null) {
                action(() => removeItem(ISBN), true)
                // removeItem()
              }
            }}
          >
            <IconRemove />
          </button>
          )
        : null}
      <div className='flex w-full h-full relative overflow-hidden'>
        <img
          alt='title'
          src={cover}
          className='w-full aspect-square group-hover:scale-105 transition-all duration-500'
          loading='lazy'
        />
      </div>
      <div className='w-full absolute bottom-0 group-hover:h-[120px] h-[80px] transition-all duration-500 z-20'>
        <div className='w-full h-full bg-black/60 group-hover:bg-black/80 drop-shadow-2xl flex flex-col justify-center items-center rounded-t-lg group-hover:rounded-t-none transition-all duration-500'>
          <span className='text-white font-bold text-lg text-center group-hover:text-blue-600'>{title}</span>
          <span className='text-white font-bold text-sm text-center group-hover:text-blue-300 opacity-0 h-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-150'>
            {genre}
          </span>
          <span className='text-white font-bold text-[12px] text-center group-hover:text-white opacity-0 h-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-150'>
            {year}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ItemBook
