import { memo, useCallback, useRef, useState } from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import {
  authorQuery,
  books,
  categoryFilter,
  loading,
  titleQuery
} from '../../context/atoms'

import ColoredButton from '../ColoredButton'
import ArrowIcon from './ArrowIcon'
import AnimatedInput from './AnimatedInput'
import GenreSelect from './GenreSelect'

import { useTheme } from 'styled-components'
import {
  StyledAside,
  StyledAuthorInput,
  StyledForm,
  StyledFiltersButton
} from './styles'

import { fetchBooks } from '../../Utils/fetchBooks'
import { getSearchParams } from '../../Utils/getSearchParams'
import { toast } from 'sonner'

const SearchForm = memo(() => {
  const theme = useTheme()

  const bookNameRef = useRef('')
  const authorRef = useRef('')

  const [displayAdvancedFilters, setDisplayAdvancedFilters] = useState(true)

  const setBooksCards = useSetAtom(books)
  const selectedGenre = useAtomValue(categoryFilter)
  const [currentTitle, setCurrentTitle] = useAtom(titleQuery)
  const [currentAuthor, setCurrentAuthor] = useAtom(authorQuery)
  const [, setIsLoading] = useAtom(loading)

  const navigate = useNavigate()

  const handleOnSubmit = useCallback(
    async (e) => {
      e.preventDefault()
      const bookQuery = bookNameRef.current.value
      const authorQuery = authorRef.current.value

      if (bookQuery === '' && authorQuery === '') {
        toast.error('Please, insert a Title or an Author')
        return
      }

      const genre = selectedGenre
      const booksData = await fetchBooks(bookQuery, authorQuery, genre)

      setBooksCards(booksData)

      const params = getSearchParams(bookQuery, authorQuery, genre)
      navigate({
        pathname: '/search',
        search: `?${createSearchParams(params)}`
      })
      setIsLoading(false)
    },
    [navigate, setBooksCards, selectedGenre, setIsLoading]
  )

  const handleCollapseFilters = useCallback(() => {
    setDisplayAdvancedFilters((prev) => !prev)
  }, [])

  const handleInput = () => {
    setCurrentTitle(bookNameRef.current.value)
    setCurrentAuthor(authorRef.current.value)
  }

  return (
    <StyledAside $displayFilters={displayAdvancedFilters}>
      <StyledForm onSubmit={handleOnSubmit}>
        <AnimatedInput
          className='book-title'
          inputId='book-title'
          labelText='Book Title'
          placeholder=''
          ref={bookNameRef}
          onInput={handleInput}
          value={currentTitle}
        />
        <StyledAuthorInput
          $displayFilters={displayAdvancedFilters}
          inputId='book-author'
          labelText='Book Author'
          placeholder=''
          ref={authorRef}
          onInput={handleInput}
          value={currentAuthor}
        />
        <GenreSelect />
        <ColoredButton type='submit' ariaLabel='Search books'>
          Search my books
        </ColoredButton>
      </StyledForm>
      <StyledFiltersButton
        onClick={handleCollapseFilters}
        aria-label='Display all filters'
      >
        <ArrowIcon
          strokeColor={theme.mainTxt}
          rotate={!displayAdvancedFilters}
        />
      </StyledFiltersButton>
    </StyledAside>
  )
})

SearchForm.displayName = 'SearchForm'

export default SearchForm
