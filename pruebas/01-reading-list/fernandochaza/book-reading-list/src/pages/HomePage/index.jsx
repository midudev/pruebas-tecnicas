import SearchForm from '../../components/SearchForm'
import SuggestedBooks from './SuggestedBooks'

import { StyledMain } from '../RootLayoutStyles'

const HomePage = () => {
  return (
    <>
      <StyledMain>
        <SearchForm />
        <SuggestedBooks />
      </StyledMain>
    </>
  )
}

export default HomePage
