import { useRef } from 'react'
import { useSetAtom } from 'jotai'
import { categoryFilter } from '../../../context/atoms'

import { StyledFilterSelect } from './styles'

import { GENRES } from '../../../constants/global'

const GenreSelect = () => {
  const selectRef = useRef()
  const setSelectedGenre = useSetAtom(categoryFilter)

  const genreFilters = GENRES

  const onChange = () => {
    setSelectedGenre(selectRef.current.value)
  }

  const defaultOption = 'Select a category'

  return (
    <>
      <StyledFilterSelect
        ref={selectRef}
        onChange={onChange}
        defaultValue={defaultOption}
      >
        <option value={defaultOption} disabled>
          Select a category
        </option>
        <option value=''>All categories</option>
        {genreFilters.map((genre) => (
          <option key={genre} value={genre.toLowerCase()}>
            {genre}
          </option>
        ))}
      </StyledFilterSelect>
    </>
  )
}

export default GenreSelect
