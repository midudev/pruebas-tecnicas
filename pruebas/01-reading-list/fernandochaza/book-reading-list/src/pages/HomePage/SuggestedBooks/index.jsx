import bestSellerBooks from '../../../data/bestSellerBooks.json'
import BookCard from '../../../components/BookCard'
import CardsContainer from '../../SearchPage/CardsContainer'

const SuggestedBooks = () => {
  return (
    <CardsContainer>
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
