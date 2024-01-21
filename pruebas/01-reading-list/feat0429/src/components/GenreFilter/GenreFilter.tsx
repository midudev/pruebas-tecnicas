import { FIELD_LABELS } from '../../constants/DOM-text.ts'
import { ARIA_LABELS } from '../../constants/aria-labels.ts'
import { Genre } from '../../constants/genres.ts'
import { useFilters } from '../../hooks/useFilters.ts'
import componentClasses from './GenreFilter.module.css'

export function GenreFilter () {
  const { updateGenreFilter } = useFilters()

  const handleChangeGenreFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedGenre = event.target.value as Genre

    updateGenreFilter(selectedGenre)
  }

  return (
        <label>
          {FIELD_LABELS.Genre}
          <select
            onChange={handleChangeGenreFilter}
            className={componentClasses.genreSelect}
            aria-label={ARIA_LABELS.GenreFilter}
          >
            {
              Object.values(Genre).map((genre, index) => {
                return (
                        <option
                          key={index}
                          value={genre}
                          aria-label={genre}
                        >
                          {genre}
                        </option>
                )
              })
            }
          </select>
        </label>
  )
}
