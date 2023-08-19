import propTypes from 'prop-types'

import AddIcon from './AddIcon'
import CompletedIcon from './CompletedIcon'

import {
  StyledCardContainer,
  StyledBookCover,
  BookTitle,
  StyledText
} from './styles'

import { useAddToReadingList } from '../../hooks/useAddToReadingList'
import { useAddToCompletedBooks } from '../../hooks/useAddToCompletedBooks'

const BookCard = ({ imagePath, title, author, bookData }) => {
  const { isInReadingList, handleAddBook } = useAddToReadingList(bookData)
  const { isCompleted, handleCompletedBook } = useAddToCompletedBooks(bookData)

  return (
    <StyledCardContainer>
      <StyledBookCover src={imagePath} width={128} height={189} />
      <BookTitle>{title}</BookTitle>
      <StyledText>({author})</StyledText>
      <AddIcon
        onClick={() => handleAddBook(bookData)}
        isInReadingList={isInReadingList}
      />
      <CompletedIcon
        isCompleted={isCompleted}
        onClick={() => handleCompletedBook(bookData)}
      ></CompletedIcon>
    </StyledCardContainer>
  )
}

BookCard.propTypes = {
  imagePath: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
  bookData: propTypes.object
}

export default BookCard
