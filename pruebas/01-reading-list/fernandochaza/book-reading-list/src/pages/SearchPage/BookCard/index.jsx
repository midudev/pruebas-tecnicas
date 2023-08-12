import { StyledCardContainer, StyledBookCover, BookTitle } from './styles'

const BookCard = () => {

  return (
    <StyledCardContainer>
      <StyledBookCover src='https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg'/>
      <BookTitle>The lord of the Rings</BookTitle>
    </StyledCardContainer>
  )
}

export default BookCard
