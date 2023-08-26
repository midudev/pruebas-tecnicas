import { useEffect, useState } from 'react'
import MessageIcon from './MessageIcon'
import { StyledContainer } from './styles'
import { FEEDBACK_MESSAGES } from '../../constants/global'

const FeedbackWidget = () => {
  const [tooltipMessage, setTooltipMessage] = useState('')
  const [displayTooltip, setDisplayTooltip] = useState(false)

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

  return (
    <StyledContainer
      data-tooltip={displayTooltip ? tooltipMessage : ''}
      $display={displayTooltip}
    >
      <MessageIcon></MessageIcon>
    </StyledContainer>
  )
}

export default FeedbackWidget
