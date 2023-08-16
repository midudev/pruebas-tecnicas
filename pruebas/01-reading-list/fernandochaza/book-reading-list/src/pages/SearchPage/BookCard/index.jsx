import propTypes from 'prop-types'
import {
  StyledCardContainer,
  StyledBookCover,
  BookTitle,
  StyledText
} from './styles'

const BookCard = ({ imagePath, title, author }) => {
  return (
    <StyledCardContainer>
      <StyledBookCover src={imagePath} width={128} height={189} />
      <BookTitle>{title}</BookTitle>
      <StyledText>({author})</StyledText>
    </StyledCardContainer>
  )
}

BookCard.propTypes = {
  imagePath: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  author: propTypes.string.isRequired
}

export default BookCard
