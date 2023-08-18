import { forwardRef } from 'react'
import propTypes from 'prop-types'

import { StyledInput, StyledInputContainer, StyledLabel } from './styles'

const AnimatedInput = forwardRef(
  ({ onChange, inputId, labelText, placeholder, className }, ref) => {
    return (
      <StyledInputContainer className={className}>
        <StyledInput
          autoComplete='off'
          ref={ref}
          id={inputId}
          type='text'
          placeholder={placeholder}
          onChange={onChange}
        />
        <StyledLabel htmlFor={inputId}>{labelText}</StyledLabel>
      </StyledInputContainer>
    )
  }
)

AnimatedInput.displayName = 'AnimatedInput'

AnimatedInput.propTypes = {
  inputId: propTypes.string.isRequired,
  labelText: propTypes.string.isRequired,
  placeholder: propTypes.string.isRequired,
  className: propTypes.string.isRequired,
  onChange: propTypes.func
}

export default AnimatedInput
