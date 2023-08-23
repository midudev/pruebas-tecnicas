import propTypes from 'prop-types'
import { StyledButtonContainer, StyledButton } from './styles'

const ColoredButton = ({ children, type, ariaLabel }) => {
  return (
    <StyledButtonContainer>
      <StyledButton type={type} aria-label={ariaLabel}>
        {children}
      </StyledButton>
    </StyledButtonContainer>
  )
}

export default ColoredButton

ColoredButton.propTypes = {
  children: propTypes.string.isRequired,
  type: propTypes.string,
  disabled: propTypes.bool,
  ariaLabel: propTypes.string
}
