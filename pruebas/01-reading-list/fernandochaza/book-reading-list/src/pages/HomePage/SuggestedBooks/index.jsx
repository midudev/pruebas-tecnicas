import bestSellerBooks from '../../../data/bestSellerBooks.json'
import BookCard from '../../../components/BookCard'
import CardsContainer from '../../SearchPage/CardsContainer'
import { StyledMessage } from './styles'

const SuggestedBooks = () => {
  return (
    <CardsContainer>
      <StyledMessage>Check out some of our <strong>Best Sellers!</strong></StyledMessage>
      {bestSellerBooks.bestSellers.map((book) => (
        <BookCard
          key={book.id}
          imagePath={book.volumeInfo.imageLinks.thumbnail}
          title={book.volumeInfo.title}
          author={book.volumeInfo.authors[0]}
          bookId={book.id}
        />
      ))}
    </CardsContainer>
  )
}

export default SuggestedBooks
