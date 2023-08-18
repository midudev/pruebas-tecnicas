import { useAtomValue } from 'jotai'
import { books } from '../../context/atoms'

import SearchForm from '../../components/SearchForm'
import BookCard from '../../components/BookCard'
import CardsContainer from './CardsContainer'

import { StyledMain } from '../RootLayoutStyles'

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
