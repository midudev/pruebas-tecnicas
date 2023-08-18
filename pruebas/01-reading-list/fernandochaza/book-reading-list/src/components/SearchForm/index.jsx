import { useCallback, useRef, useState } from 'react'
import { useAtom } from 'jotai'
import { books } from '../../context/atoms'

import ColoredButton from '../ColoredButton'
import {
  PagesFilterContainer,
  StyledAside,
  StyledFilterTitle,
  StyledForm,
  StyledFormTitle,
  StyledRadioInput,
  StyledRadioLabel,
  StyledTextInput,
  StyledTextLabel,
  StyledFiltersButton
} from './styles'
import { useTheme } from 'styled-components'

import { fetchBooks } from '../../Utils/fetchBooks'
import ArrowIcon from './ArrowIcon'
import { useNavigate } from 'react-router-dom'

const SearchForm = () => {
  const bookNameRef = useRef('')
  const authorRef = useRef('')
  const theme = useTheme()

  const [selectedPages, setSelectedPages] = useState(null)
  const [disableSubmit, setDisableSubmit] = useState(true)
  const [displayAdvancedFilters, setDisplayAdvancedFilters] = useState(true)
  const [, setBooksCards] = useAtom(books)

  const navigate = useNavigate()

  const handleOptionChange = useCallback((e) => {
    setSelectedPages(e.target.value)
    setDisableSubmit(false)
  }, [])

  const handleDisableSubmit = useCallback(() => {
    setDisableSubmit(
      bookNameRef.current.value === '' &&
        authorRef.current.value === '' &&
        !selectedPages
    )
  }, [selectedPages])

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    const bookQuery = bookNameRef.current.value
    const authorQuery = authorRef.current.value

    const booksData = await fetchBooks(bookQuery, authorQuery)

    setBooksCards(booksData)
    navigate('/search')
  }

  const handleCollapseFilters = useCallback(() => {
    setDisplayAdvancedFilters((prev) => !prev)
  }, [])

  return (
    <StyledAside $displayFilters={displayAdvancedFilters}>
      <StyledFormTitle>Search</StyledFormTitle>
      <StyledForm onSubmit={handleOnSubmit}>
        <StyledTextLabel>
          Book name
          <StyledTextInput
            ref={bookNameRef}
            onChange={handleDisableSubmit}
            aria-label=''
            type='text'
            placeholder='Search a book...'
          />
        </StyledTextLabel>
        <StyledTextLabel $displayFilters={displayAdvancedFilters}>
          Author
          <StyledTextInput
            ref={authorRef}
            onChange={handleDisableSubmit}
            type='text'
            placeholder='Search an author...'
          />
        </StyledTextLabel>
        <PagesFilterContainer $displayFilters={displayAdvancedFilters}>
          <StyledFilterTitle>Max Pages</StyledFilterTitle>
          <StyledRadioLabel hidden={true}>
            <StyledRadioInput
              onChange={handleOptionChange}
              name='book-pages'
              type='radio'
              value='200'
            />{' '}
            200
          </StyledRadioLabel>
          <StyledRadioLabel>
            <StyledRadioInput
              onChange={handleOptionChange}
              name='book-pages'
              type='radio'
              value='500'
            />{' '}
            500
          </StyledRadioLabel>
          <StyledRadioLabel>
            <StyledRadioInput
              onChange={handleOptionChange}
              name='book-pages'
              type='radio'
              value='1000'
            />{' '}
            1000
          </StyledRadioLabel>
          <StyledRadioLabel>
            <StyledRadioInput
              onChange={handleOptionChange}
              name='book-pages'
              type='radio'
              value='2000'
            />{' '}
            2000
          </StyledRadioLabel>
        </PagesFilterContainer>
        <ColoredButton type='submit' disabled={disableSubmit}>
          Search my books
        </ColoredButton>
      </StyledForm>
      <StyledFiltersButton onClick={handleCollapseFilters}>
        <ArrowIcon
          strokeColor={theme.mainTxt}
          rotate={!displayAdvancedFilters}
        />
      </StyledFiltersButton>
    </StyledAside>
  )
}

export default SearchForm
