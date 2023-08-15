import propTypes from 'prop-types'
import { StyledButtonContainer, StyledButton } from './styles'

const ColoredButton = ({ children, type, disabled }) => {
  return (
    <StyledButtonContainer>
      <StyledButton type={type} disabled={disabled}>{children}</StyledButton>
    </StyledButtonContainer>
  )
}

export default ColoredButton

ColoredButton.propTypes = {
  children: propTypes.string.isRequired,
  type: propTypes.string,
  disabled: propTypes.bool
}
