import { useCallback, useRef, useState } from 'react'
import { useAtom } from 'jotai'
import { books } from '../../context/atoms'

import ColoredButton from '../ColoredButton'
import {
  PagesFilterContainer,
  StyledAside,
  StyledAuthorInput,
  StyledFilterTitle,
  StyledForm,
  StyledRadioInput,
  StyledRadioLabel,
  StyledFiltersButton
} from './styles'
import { useTheme } from 'styled-components'

import { fetchBooks } from '../../Utils/fetchBooks'
import ArrowIcon from './ArrowIcon'
import { useNavigate } from 'react-router-dom'
import AnimatedInput from './AnimatedInput'

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
      <StyledForm onSubmit={handleOnSubmit}>
        <AnimatedInput
          className='book-title'
          inputId='book-title'
          labelText='Book Title'
          placeholder=''
          ref={bookNameRef}
          onChange={handleDisableSubmit}
        />
        <StyledAuthorInput
          $displayFilters={displayAdvancedFilters}
          inputId='book-author'
          labelText='Book Author'
          placeholder=''
          ref={authorRef}
          onChange={handleDisableSubmit}
        />
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
