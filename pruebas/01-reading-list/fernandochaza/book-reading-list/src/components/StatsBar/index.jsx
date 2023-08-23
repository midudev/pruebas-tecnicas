import { useAtomValue } from 'jotai'
import { userCompletedBooks, userReadingList } from '../../context/atoms'

import {
  StyledStatsSection,
  StyledSectionField,
  StyledSectionFieldTitle,
  StyledContainer
} from './styles'
import BookIcon from '../Icons/BookIcon'
import CompletedIcon from '../Icons/CompletedIcon'

const StatsBar = () => {
  const readingList = useAtomValue(userReadingList)
  const completedBooks = useAtomValue(userCompletedBooks)

  const booksInReadingList = readingList.length
  const booksCompleted = completedBooks.length

  return (
    <StyledContainer>
      <StyledStatsSection>
        <StyledSectionField>
          <BookIcon></BookIcon>
          <StyledSectionFieldTitle>
            <strong>{booksInReadingList}</strong> Books in Reding List
          </StyledSectionFieldTitle>
        </StyledSectionField>
        <StyledSectionField>
          <CompletedIcon></CompletedIcon>
          <StyledSectionFieldTitle>
            <strong>{booksCompleted}</strong> Books Completed
          </StyledSectionFieldTitle>
        </StyledSectionField>
      </StyledStatsSection>
    </StyledContainer>
  )
}

export default StatsBar
