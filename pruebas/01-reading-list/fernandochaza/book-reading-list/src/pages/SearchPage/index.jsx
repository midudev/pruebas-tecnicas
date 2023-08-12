import { StyledMain } from '../RootLayoutStyles'
import SearchForm from '../../components/SearchForm'
import { StyledCardsSection } from './styles'
import BookCard from './BookCard'

const SearchPage = () => {
  return (
    <StyledMain>
      <SearchForm />
      <StyledCardsSection>
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </StyledCardsSection>
    </StyledMain>
  )
}

export default SearchPage
