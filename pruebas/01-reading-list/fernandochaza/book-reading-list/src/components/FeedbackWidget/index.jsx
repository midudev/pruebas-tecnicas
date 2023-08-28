import { useEffect, useState } from 'react'

import { useSetAtom } from 'jotai'
import { displayFeedbackModal } from '../../context/atoms'

import MessageIcon from './MessageIcon'

import { StyledContainer } from './styles'

import { FEEDBACK_MESSAGES } from '../../constants/global'

const FeedbackWidget = () => {
  const [tooltipMessage, setTooltipMessage] = useState('')
  const [displayTooltip, setDisplayTooltip] = useState(false)
  const setDisplayForm = useSetAtom(displayFeedbackModal)

  const handleWindowResize = () => {
    const windowWidth = window.innerWidth
    if (windowWidth < 576) {
      setTooltipMessage('')
      setDisplayTooltip(false)
    } else {
      setTooltipMessage(FEEDBACK_MESSAGES.lg)
      setDisplayTooltip(true)
    }
  }

  useEffect(() => {
    handleWindowResize()
    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  const handleDisplayForm = () => {
    setDisplayForm(true)
  }

  return (
    <StyledContainer
      data-tooltip={displayTooltip ? tooltipMessage : ''}
      $display={displayTooltip}
      onClick={handleDisplayForm}
    >
      <MessageIcon></MessageIcon>
    </StyledContainer>
  )
}

export default FeedbackWidget
