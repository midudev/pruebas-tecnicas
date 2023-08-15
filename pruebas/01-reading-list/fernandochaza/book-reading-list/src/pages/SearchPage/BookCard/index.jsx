import propTypes from 'prop-types'
import { StyledCardContainer, StyledBookCover, BookTitle } from './styles'

const BookCard = ({ imagePath, title }) => {
  return (
    <StyledCardContainer>
      <StyledBookCover src={imagePath} width={128} height={189} />
      <BookTitle>{title}</BookTitle>
    </StyledCardContainer>
  )
}

BookCard.propTypes = {
  imagePath: propTypes.string.isRequired,
  title: propTypes.string.isRequired
}

export default BookCard
