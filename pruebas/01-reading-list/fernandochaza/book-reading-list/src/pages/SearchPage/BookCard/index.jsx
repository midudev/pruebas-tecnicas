import { useCallback, useEffect, useState } from 'react'
import propTypes from 'prop-types'

import AddIcon from './AddIcon'

import { updateReadingList } from '../../../Utils/updateReadingList'
import { getUserReadingList } from '../../../Utils/getUserReadingList'

import {
  StyledCardContainer,
  StyledBookCover,
  BookTitle,
  StyledText
} from './styles'

const BookCard = ({ imagePath, title, author, bookId }) => {
  const [isInReadingList, setIsInReadingList] = useState()

  useEffect(() => {
    const readingList = getUserReadingList()
    const currentBookStatus = readingList.includes(bookId)
    setIsInReadingList(currentBookStatus)
  }, [bookId])

  const handleAddBook = useCallback((bookId) => {
    updateReadingList(bookId)
    setIsInReadingList((prev) => !prev)
  }, [])

  return (
    <StyledCardContainer>
      <StyledBookCover src={imagePath} width={128} height={189} />
      <BookTitle>{title}</BookTitle>
      <StyledText>({author})</StyledText>
      <AddIcon
        onClick={() => handleAddBook(bookId)}
        isInReadingList={isInReadingList}
      />
    </StyledCardContainer>
  )
}

BookCard.propTypes = {
  imagePath: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
  bookId: propTypes.string.isRequired
}

export default BookCard
