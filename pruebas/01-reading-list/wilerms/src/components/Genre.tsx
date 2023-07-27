import { useEffect, type FC, useState } from 'react'
import { getImageAverageColor, removeTildes } from 'utils/utils'
import { genresIcons } from '@icons/genres'

interface Props {
  genre: string
}

const Genre: FC<Props> = ({ genre }) => {
  const [bgColor, setBgColor] = useState('#000')

  const genreIcon = genresIcons.get(removeTildes(genre.toLowerCase()))

  useEffect(() => {
    const getBookColor = () => {
      getImageAverageColor(genreIcon)
        .then(setBgColor)
        .catch(() => {})
    }
    getBookColor()
  }, [])

  return (
    <div className='w-[70px] cursor-pointer transition hover:scale-105 flex flex-col justify-center items-center' key={genre} title={genre}>
      <figure
        className="w-[40px] h-[60px] flex flex-col items-end rounded-r-md rounded-l-lg"
        style={{ background: bgColor }}
      >
        <div className='w-[calc(100%_-_6px)] h-[calc(100%_-_10px)] rounded-se-lg bg-[#ffffff24] flex items-center justify-center p-1'>
          <img
            className=" w-full h-full object-contain"
            src={genreIcon}
            alt={genre}
          />
        </div>
        <div className="relative w-full h-[10px] bg-black bg-opacity-30 pl-[0.15rem] py-[0.15rem] flex justify-end rounded-tl-full rounded-bl-full rounded-br-full">
          <div className="bg-gray-100 w-full h-full rounded-l-full" />
          <div className="ribbon absolute w-[10px] h-[15px] mr-2 bg-orange-300 shadow-bottom" />
        </div>
      </figure>
      <h3 className="w-[full] ml-1 mt-2 text-xs font-bold text-[#4c3c36] truncate">
        {genre}
      </h3>
    </div>
  )
}

export default Genre
