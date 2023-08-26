import MessageIcon from './MessageIcon'
import { StyledContainer } from './styles'
import { FEEDBACK_MESSAGE } from '../../constants/global'

const FeedbackWidget = () => {
  return (
    <StyledContainer data-tooltip={FEEDBACK_MESSAGE}>
      <MessageIcon></MessageIcon>
    </StyledContainer>
  )
}

export default FeedbackWidget
