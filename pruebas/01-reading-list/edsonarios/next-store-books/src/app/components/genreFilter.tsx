
import { Dispatch, SetStateAction } from 'react'

interface Props {
  genres: string[]
  selectedGenre: string
  setSelectedGenre: Dispatch<SetStateAction<string>>
}

const GenreFilter = ({ genres, selectedGenre, setSelectedGenre }: Props) => {
  return (
    <div className='flex flex-wrap justify-center top-0'>
      <label>
        Genre:
        <select className='text-zinc-950' value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
          {genres.map((genre, index) => (
            <option key={index} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </label>
    </div>
  )
}

export default GenreFilter
