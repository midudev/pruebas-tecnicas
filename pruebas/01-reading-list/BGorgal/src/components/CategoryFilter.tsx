import { useBooksStore } from '../store/books'
import { FilterValue } from '../types'
import ButtonGenre from './Buttons/ButtonGenre'

const CategoryFilter = () => {
  const genres = useBooksStore(state => state.genres)
  return (
    <div className='mt-6 max-w-[20rem]'>
      <h3 className='mb-4 font-primary text-sm text-slate-500'>
        Filtrar por género
      </h3>
      <div className='flex flex-wrap gap-3 '>
        {genres.map(genre => {
          return <ButtonGenre key={genre} genre={genre as FilterValue} />
        })}
      </div>
    </div>
  )
}

export default CategoryFilter
