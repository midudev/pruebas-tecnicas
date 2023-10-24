import { twMerge } from 'tailwind-merge'
import useGenreFilter from '../../hooks/useGenreFilter'
import { useBooksStore } from '../../store/books'
import { FilterValue } from '../../types'

interface Props {
  genre: FilterValue
}
const ButtonGenre = ({ genre }: Props) => {
  const filters = useBooksStore(state => state.filters)
  const { genres } = filters

  const { setFilterCategory } = useGenreFilter()

  const handleClick = () => {
    setFilterCategory(genre)
  }

  const lowerGenres = genres.map(n => n.toLowerCase())

  const variants = {
    selected:
      lowerGenres.includes(genre.toLowerCase()) &&
      'dark:bg-gray-300 text-slate-900 dark:hover:bg-gray-400',
  }

  return (
    <button
      onClick={handleClick}
      type='button'
      className={twMerge(
        'mb-2 mr-2 rounded-full bg-gray-800 px-5 py-1 text-sm font-medium text-white hover:bg-gray-900  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700',
        variants.selected,
      )}
    >
      {genre}
    </button>
  )
}

export default ButtonGenre
