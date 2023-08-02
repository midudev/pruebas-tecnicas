import { GenreOptionSelected } from './GenreOptionSelected'
import { GenreOptionUnselected } from './GenreOptionUnselected'

interface Props {
  genres: string[],
  selectedGenres: string[],
  toggleGenre: (genre: string) => void
}

export const BooksFilter = ({ genres, selectedGenres, toggleGenre }: Props) => {
  const isGenreSelected = (genre: string) => {
    return selectedGenres.indexOf(genre) !== -1
  }

  return (
    <section className='pt-4 flex flex-wrap gap-4 font-light text-xs'>
      {genres.map(genre => {
        return (
          isGenreSelected(genre)
            ? <GenreOptionSelected
                key={genre}
                genre={genre}
                toggleGenre={toggleGenre}
              />
            : <GenreOptionUnselected
                key={genre}
                genre={genre}
                toggleGenre={toggleGenre}
              />
        )
      }
      )}
    </section>
  )
}
