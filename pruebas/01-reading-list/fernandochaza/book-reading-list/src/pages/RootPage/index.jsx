import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { StyledPageContainer } from './styles'
import StatsBar from '../../components/StatsBar'

const RootPage = () => {
  const [scroll, setScroll] = useState(false)

  let lastKnownScrollPosition = 0
  let ticking = false

  document.addEventListener('scroll', () => {
    lastKnownScrollPosition = window.scrollY

    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (lastKnownScrollPosition > 1) {
          setScroll(true)
        } else {
          setScroll(false)
        } 
        ticking = false
      })

      ticking = true
    }
  })

  return (
    <>
      <StyledPageContainer>
        <Header scroll={scroll} />
        <StatsBar />
        <Outlet />
        <Footer />
      </StyledPageContainer>
    </>
  )
}

export default RootPage
