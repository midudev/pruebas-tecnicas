import { useBooks } from '@hooks/useBooks'
import { AddIcon, DeleteIcon } from '@icons/index'
import cn from 'classnames'
import { useEffect, type FC, useState } from 'react'
import { type Book as BookInterface } from 'types'
import { getImageAverageColor, hexToRgba } from 'utils/utils'

interface Props extends BookInterface {
  className?: string
  isFavorite: boolean
}

export const BookImage: FC<Pick<Props, 'className' | 'cover' | 'isFavorite'>> = ({
  className,
  cover,
  isFavorite
}) => {
  const [bgColor, setBgColor] = useState('#000')

  useEffect(() => {
    const getBookColor = () => {
      getImageAverageColor(cover)
        .then(setBgColor)
        .catch(() => {})
    }
    getBookColor()
  }, [])

  return (
    <figure
      className={cn(
        'w-[100%] min-w-[170px] max-w-[200px] flex flex-col items-end rounded-r-xl rounded-l-3xl relative hover:shadow-lg aspect-[5/7] select-none cursor-pointer',
        className
      )}
      style={{ background: bgColor }}
    >
      <img
        className="w-[calc(100%_-_22px)] h-[calc(100%_-_48px)] rounded-se-xl"
        src={cover}
        alt={cover}
      />
      <div className="relative w-full h-[48px] bg-black bg-opacity-30 pl-3 py-3 flex justify-end rounded-[9999px_0_300rem_9999px]">
        <div className="bg-gray-100 w-full h-full rounded-l-full" />
        <div className="ribbon absolute w-[35px] h-[50px] mr-7 bg-orange-300 shadow-bottom group-hover:h-[35px] transition-all" />
      </div>
      <div
        className="absolute w-full h-full items-center justify-center rounded-r-xl rounded-l-3xl flex opacity-0 group-hover:opacity-100 transition-all"
        style={{ background: !isFavorite ? hexToRgba(bgColor, 0.5) : '#99000059' }}
      >
        <span className='ml-6 mb-6'>
          {!isFavorite
            ? <AddIcon height={60} width={60} />
            : <DeleteIcon height={60} width={60} />
          }
        </span>
      </div>
    </figure>
  )
}

const Book: FC<Props> = ({
  className,
  title,
  cover,
  ISBN,
  isFavorite,
  author = { name: '' }
}) => {
  const { addFavoriteBook } = useBooks()

  const handleClickAddButton = () => {
    addFavoriteBook(ISBN)
  }

  return (
    <article
      key={ISBN}
      className={cn(
        'transition',
        isFavorite ? '' : 'hover:scale-105 group cursor-pointer'
      )}
      onClick={handleClickAddButton}
    >
      <BookImage
        cover={cover}
        className={`${isFavorite ? 'opacity-50 hover:shadow-none cursor-default' : ''}`}
        isFavorite={isFavorite}
      />
      <h2
        className="mt-3 ml-2 font-bold text-[#4c3c36] text-lg truncate"
        title={title}
      >
        {title}
      </h2>
      <h3 className="text-md ml-2 text-[#4c3c36cf]">{author?.name}</h3>
    </article>
  )
}

export default Book
