import { Outlet } from 'react-router-dom'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import glow from '../../assets/glow.png'
import { StyledMainContainer, StyledImg } from '../RootLayoutStyles'

const RootPage = () => {
  return (
    <>
      <StyledMainContainer>
        <Header />
        <Outlet />
        <Footer />
      </StyledMainContainer>
      <StyledImg src={glow} />
    </>
  )
}

export default RootPage
