import { useAtomValue } from 'jotai'
import { loading, userReadingList } from '../../context/atoms'

import BookCard from '../../components/BookCard'
import CardsContainer from '../SearchPage/CardsContainer'

import { StyledText } from './styles'

import notAvailable from '../../assets/cover-not-available.webp'
import SuggestedBooks from '../HomePage/SuggestedBooks'

const ReadingList = () => {
  const booksData = useAtomValue(userReadingList)
  const isLoading = useAtomValue(loading)

  return (
    <>
      {isLoading ? (
        <></>
      ) : booksData.length > 0 ? (
        <>
          <StyledText>These are the books you have left to read.</StyledText>
          <CardsContainer>
            {booksData.map((book) => (
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
            Looks like you don&apos;t have books in your Reading List...{' '}
          </StyledText>
          <StyledText>
            Add a book to start planning your next reading!{' '}
          </StyledText>
          <SuggestedBooks></SuggestedBooks>
        </>
      )}
    </>
  )
}

export default ReadingList
