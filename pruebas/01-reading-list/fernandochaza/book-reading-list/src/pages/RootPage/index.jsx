import { Outlet } from 'react-router-dom'

import Header from '../../components/Header'

import { StyledMainContainer } from '../RootLayoutStyles'

const RootPage = () => {
  return (
    <StyledMainContainer>
      <Header />
      <Outlet />
      <h2>Footer</h2>
    </StyledMainContainer>
  )
}

export default RootPage
