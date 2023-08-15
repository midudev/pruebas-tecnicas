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
  StyledTextLabel
} from './styles'

import { fetchBooks } from '../../Utils/fetchBooks'

const SearchForm = () => {
  const bookNameRef = useRef('')
  const authorRef = useRef('')

  const [selectedPages, setSelectedPages] = useState(null)
  const [disableSubmit, setDisableSubmit] = useState(true)
  const [, setBooksCards] = useAtom(books)

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
    console.log('handleOnSubmit')
    e.preventDefault()
    const bookQuery = bookNameRef.current.value
    console.log('bookQuery', bookQuery) 
    const authorQuery = authorRef.current.value

    console.log(bookQuery)

    const booksData = await fetchBooks(bookQuery, authorQuery)

    setBooksCards(booksData)
  }

  return (
    <StyledAside>
      <StyledFormTitle>Search</StyledFormTitle>
      <StyledForm onSubmit={handleOnSubmit}>
        <StyledTextLabel>
          Book name
          <StyledTextInput
            ref={bookNameRef}
            onChange={handleDisableSubmit}
            type='text'
            placeholder='Search a book...'
          />
        </StyledTextLabel>
        <StyledTextLabel>
          Author
          <StyledTextInput
            ref={authorRef}
            onChange={handleDisableSubmit}
            type='text'
            placeholder='Search an author...'
          />
        </StyledTextLabel>
        <PagesFilterContainer>
          <StyledFilterTitle>Max Pages</StyledFilterTitle>
          <StyledRadioLabel>
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
    </StyledAside>
  )
}

export default SearchForm
