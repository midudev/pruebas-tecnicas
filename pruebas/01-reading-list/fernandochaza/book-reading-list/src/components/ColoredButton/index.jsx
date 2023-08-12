import propTypes from 'prop-types'
import { StyledButtonContainer, StyledButton } from './styles'

const ColoredButton = ({ children }) => {
  return (
    <StyledButtonContainer>
      <StyledButton>{children}</StyledButton>
    </StyledButtonContainer>
  )
}

export default ColoredButton

ColoredButton.propTypes = {
  children: propTypes.string.isRequired
}
