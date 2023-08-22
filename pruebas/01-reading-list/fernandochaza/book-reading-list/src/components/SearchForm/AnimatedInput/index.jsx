import { forwardRef } from 'react'
import propTypes from 'prop-types'

import { StyledInput, StyledInputContainer, StyledLabel } from './styles'

const AnimatedInput = forwardRef(
  ({ inputId, labelText, placeholder, className, value, onInput }, ref) => {
    return (
      <StyledInputContainer className={className}>
        <StyledInput
          autoComplete='off'
          ref={ref}
          id={inputId}
          type='text'
          placeholder={placeholder}
          onInput={onInput}
          value={value}
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
  value: propTypes.string,
  onInput: propTypes.func
}

export default AnimatedInput
