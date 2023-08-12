import { Outlet } from 'react-router-dom'

import Header from './Header'

import { StyledMainContainer } from './RootLayoutStyles'

const RootLayout = () => {
  return (
    <StyledMainContainer>
      <Header />
      <Outlet />
      <h2>Footer</h2>
    </StyledMainContainer>
  )
}

export default RootLayout
