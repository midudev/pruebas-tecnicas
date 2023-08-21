import { useAtomValue } from 'jotai'
import { books } from '../../context/atoms'

import SearchForm from '../../components/SearchForm'
import BookCard from '../../components/BookCard'
import CardsContainer from './CardsContainer'

import { StyledMain } from '../RootLayoutStyles'
import { StyledText, StyledNoResults, StyledNotFoundSection } from './styles'

import notAvailable from '../../assets/cover-not-available.webp'

const SearchPage = () => {
  const booksData = useAtomValue(books)

  return (
    <StyledMain>
      <StyledText>
        <strong>Search</strong> a <em>title</em> or an <em>author</em> to look
        for your favorite Books
      </StyledText>
      <SearchForm />
      {booksData ? (
        <CardsContainer>
          {booksData.map((book) => (
            <BookCard
              bookData={book}
              key={book.id}
              imagePath={book.volumeInfo?.imageLinks?.thumbnail || notAvailable}
              title={book.volumeInfo?.title}
              author={book.volumeInfo?.authors?.[0] || 'Not Found'}
              bookId={book.id}
            />
          ))}
        </CardsContainer>
      ) : (
        <StyledNotFoundSection>
          <StyledNoResults>OOPS!</StyledNoResults>
          <StyledNoResults>
            Looks like we didn&apos;t find matching results...
          </StyledNoResults>
          <StyledNoResults>Please, try again.</StyledNoResults>
        </StyledNotFoundSection>
      )}
    </StyledMain>
  )
}

export default SearchPage
