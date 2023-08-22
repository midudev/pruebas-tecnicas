import SearchForm from '../../components/SearchForm'
import SuggestedBooks from './SuggestedBooks'

import { StyledMain } from '../RootLayoutStyles'
import { StyledText } from './styles'

const HomePage = () => {
  return (
    <>
      <StyledMain>
        <StyledText>
          <strong>Search</strong> a <em>title</em> or an <em>author</em> to look
          for your favorite Books
        </StyledText>
        <SearchForm />
        <SuggestedBooks />
      </StyledMain>
    </>
  )
}

export default HomePage
