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

  const secureImagePath = imagePath.replace('http://', 'https://')
  console.log(secureImagePath)

  return (
    <StyledCardContainer>
      <StyledBookCover
        src={secureImagePath}
        alt={`Cover image of the book ${title}, from ${author}`}
        width={128}
        height={189}
      />
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
