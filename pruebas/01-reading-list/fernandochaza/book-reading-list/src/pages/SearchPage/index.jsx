import { StyledMain } from '../RootLayoutStyles'
import SearchForm from '../../components/SearchForm'
import BookCard from './BookCard'
import CardsContainer from './CardsContainer'
import { useAtomValue } from 'jotai'
import { books } from '../../context/atoms'

import notAvailable from '../../assets/cover-not-available.webp'

const SearchPage = () => {
  const booksData = useAtomValue(books)

  return (
    <StyledMain>
      <SearchForm />
      <CardsContainer>
        {booksData &&
          booksData.map((book) => (
            <BookCard
              key={book.id}
              imagePath={book.volumeInfo?.imageLinks?.thumbnail || notAvailable}
              title={book.volumeInfo?.title}
              author={book.volumeInfo?.authors?.[0] || 'Not Found'}
              bookId={book.id}
            />
          ))}
      </CardsContainer>
    </StyledMain>
  )
}

export default SearchPage
