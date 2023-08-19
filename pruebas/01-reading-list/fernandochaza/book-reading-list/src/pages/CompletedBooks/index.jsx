import { useAtomValue } from 'jotai'
import { userCompletedBooks } from '../../context/atoms'

import BookCard from '../../components/BookCard'
import CardsContainer from '../SearchPage/CardsContainer'

import { StyledMain } from '../RootLayoutStyles'
import { StyledText } from './styles'

import notAvailable from '../../assets/cover-not-available.webp'

const CompletedBooks = () => {
  const completedBooksData = useAtomValue(userCompletedBooks)

  return (
    <StyledMain>
      {completedBooksData.length > 0 ? (
        <>
          <StyledText>
            These are the books you have completed. Good Job!
          </StyledText>
          <CardsContainer>
            {completedBooksData.map((book) => (
              <BookCard
                bookData={book}
                key={book.id}
                imagePath={
                  book.volumeInfo?.imageLinks?.thumbnail || notAvailable
                }
                title={book.volumeInfo?.title}
                author={book.volumeInfo?.authors[0]}
              />
            ))}
          </CardsContainer>
        </>
      ) : (
        <>
          <StyledText>
            Looks like you don&apos;t have books in your completed List...{' '}
          </StyledText>
        </>
      )}
    </StyledMain>
  )
}

export default CompletedBooks
