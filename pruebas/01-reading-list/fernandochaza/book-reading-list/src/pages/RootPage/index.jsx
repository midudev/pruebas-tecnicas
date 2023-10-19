import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import { displayFeedbackModal } from '../../context/atoms'
import { useAtomValue } from 'jotai'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import StatsBar from '../../components/StatsBar'
import FeedbackWidget from '../../components/FeedbackWidget'
import FeedbackModal from '../../components/FeedbackModal'

import { StyledPageContainer, StyledMain } from './styles'

const RootPage = () => {
  const [scroll, setScroll] = useState(false)
  const isDisplayModal = useAtomValue(displayFeedbackModal)

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
    <StyledPageContainer>
      <Header scroll={scroll} />
      <StatsBar />
      <FeedbackWidget />
      {isDisplayModal && <FeedbackModal></FeedbackModal>}
      <StyledMain>
        <Outlet />
      </StyledMain>
      <Footer />
    </StyledPageContainer>
  )
}

export default RootPage
