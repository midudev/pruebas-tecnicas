import styled from 'styled-components'

const StyledInputContainer = styled.div`
  display: flex;
  position: relative;
  padding: 0 8px;
  margin: 0.75rem 0;
  height: 48px;
  border-radius: 8px;
  box-shadow: 0 0 3px ${(props) => props.theme.secondaryTxt};
  background-color: ${(props) => props.theme.contrastBg};
  transition: background-color 0.75s ease;

  &:focus-within {
    box-shadow: 0 0 4px 0 ${(props) => props.theme.accent1Color};
    transition: border 0.7s ease;
  }
`

const StyledInput = styled.input`
  border: none;
  outline: none;
  padding-top: 6px;
  width: 100%;
  font-size: 1rem;
  background-color: ${(props) => props.theme.contrastBg};
  color: ${(props) => props.theme.mainTxt};
  transition: background-color 0.75s ease, color 0.75s ease;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-background-clip: text;
    -webkit-text-fill-color: ${(props) => props.theme.contrastBg};
    transition: background-color 5000s ease-in-out 0s;
    box-shadow: inset 0 0 20px 20px ${(props) => props.theme.contrastBg};
  }

  &::placeholder {
    color: ${(props) => props.theme.secondaryTxt};
    opacity: 0;
  }

  &:focus::placeholder {
    transition: opacity 0.3s ease-in;
    opacity: 1;
  }

  &:not(:placeholder-shown) + label,
  &:focus + label {
    transition: all 0.2s ease-in;
    content: '';
    top: -8px;
    font-size: 0.9rem;
    padding: 0 8px;

    &::after {
      content: '';
    }
  }

  &:not(:placeholder-shown) + label::before,
  &:focus + label::before {
    padding-bottom: 4px;
    background-color: ${(props) => props.theme.contrastBg};
    box-shadow: 0 0 4px 0 ${(props) => props.theme.accent1Color};
  }
`

const StyledLabel = styled.label`
  cursor: text;
  position: absolute;
  left: 8px;
  top: 16px;
  z-index: 1;
  color: ${(props) => props.theme.secondaryTxt};

  &::after {
    content: '...';
  }

  &::before {
    content: '';
    height: 16px;
    border-radius: 8px;
    background-color: ${(props) => props.theme.contrastBg};
    position: absolute;
    left: 0;
    top: -2px;
    width: 100%;
    z-index: -1;
  }
`

export { StyledInputContainer, StyledInput, StyledLabel }
