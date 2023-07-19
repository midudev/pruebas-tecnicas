import { GENRES_ALLOWED } from '../constants'
import { useBook, useFilter } from '../hooks'
import { type GenresAllowed } from '../types'
import { Badge } from './Badge'

interface Props {
  genre: GenresAllowed
}

export const ButtonGenres: React.FC<Props> = ({ genre }) => {
  const { updateGenreFilter, genreFilter } = useFilter()
  const { filteredBooks } = useBook()

  const isActive = genreFilter === genre

  return (
		<button
			className={`flex justify-center items-center h-9 relative rounded-full border py-3 px-4 font-semibold border-gray-200 whitespace-nowrap ${
				isActive ? 'text-white bg-gray-800' : ' text-gray-800 bg-white'
			}`}
			onClick={() => { updateGenreFilter({ genre }) }}
		>
			{genre === '' ? 'All' : genre}
			{isActive && <Badge value={filteredBooks.length} />}
		</button>
  )
}

export const GenresFilter = () => {
  return (
		<div className="flex justify-start items-center gap-4 overflow-hidden overflow-x-scroll pt-2">
			<ButtonGenres genre="" />
			{Object.entries(GENRES_ALLOWED).map(([key, genre]) => <ButtonGenres key={key} genre={genre} />)}
		</div>
  )
}
