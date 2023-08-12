import { Outlet } from 'react-router-dom'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { StyledMainContainer } from './styles'

const RootPage = () => {
  return (
    <>
      <StyledMainContainer>
        <Header />
        <Outlet />
        <Footer />
      </StyledMainContainer>
    </>
  )
}

export default RootPage
