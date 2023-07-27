import { getGenres } from '@services/books'
import Genre from './Genre'
import { HorizontalList } from './HorizontalList'

const genres = getGenres()

const Filters = () => {
  return (
    <section className="w-full h-full px-5 pb-5 flex items-center">
      <HorizontalList className='w-full' scrollSize={200}>
        <div className="grid grid-flow-col gap-5 max-w-full">
          {genres.map((genre) => (
            <Genre key={genre} genre={genre} />
          ))}
        </div>
      </HorizontalList>
    </section>
  )
}

export default Filters
