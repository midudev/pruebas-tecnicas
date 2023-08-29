import propTypes from 'prop-types'
import { StyledButtonContainer, StyledButton } from './styles'

const ColoredButton = ({ children, type, ariaLabel, className }) => {
  return (
    <StyledButtonContainer className={className}>
      <StyledButton type={type} aria-label={ariaLabel} data-label={children}>
        <span>{children}</span>
      </StyledButton>
    </StyledButtonContainer>
  )
}

export default ColoredButton

ColoredButton.propTypes = {
  children: propTypes.string.isRequired,
  type: propTypes.string,
  disabled: propTypes.bool,
  ariaLabel: propTypes.string,
  className: propTypes.string
}
