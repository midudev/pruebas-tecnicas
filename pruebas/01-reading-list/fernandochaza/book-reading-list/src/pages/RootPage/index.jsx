import { Outlet } from 'react-router-dom'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { StyledPageContainer } from './styles'
import StatsBar from '../../components/StatsBar'

const RootPage = () => {
  return (
    <>
      <StyledPageContainer>
        <Header />
        <StatsBar />
        <Outlet />
        <Footer />
      </StyledPageContainer>
    </>
  )
}

export default RootPage
