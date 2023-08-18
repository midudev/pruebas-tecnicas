import { Outlet } from 'react-router-dom'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { StyledPageContainer } from './styles'

const RootPage = () => {
  return (
    <>
      <StyledPageContainer>
        <Header />
        <Outlet />
        <Footer />
      </StyledPageContainer>
    </>
  )
}

export default RootPage
