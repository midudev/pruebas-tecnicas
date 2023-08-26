import SearchForm from '../../components/SearchForm'
import SuggestedBooks from './SuggestedBooks'

import { StyledText } from './styles'

const HomePage = () => {
  return (
    <>
      <StyledText>
        <strong>Search</strong> a <em>title</em> or an <em>author</em> to look
        for your favorite Books
      </StyledText>
      <SearchForm />
      <SuggestedBooks />
    </>
  )
}

export default HomePage
