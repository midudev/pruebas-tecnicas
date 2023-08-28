import styled from 'styled-components'
import ColoredButton from '../../ColoredButton'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 75%;
  height: 406px;
`

const StyledInput = styled.input`
  height: 48px;
  width: 100%;
  border-radius: 8px;
  border: none;
  outline: none;
  box-shadow: 0 0 2px ${(props) => props.theme.mainTxt};
  margin-bottom: 1rem;
  padding: 1rem;
`

const StyledTextArea = styled.textarea`
  min-height: 120px;
  width: 100%;
  resize: none;
  border-radius: 8px;
  border: none;
  outline: none;
  box-shadow: 0 0 2px ${(props) => props.theme.mainTxt};
  margin-bottom: 1rem;
  padding: 1rem;
`

const StyledContactInfo = styled.p`
  margin-bottom: 0.5rem;
`

const StyledColoredButton = styled(ColoredButton)`
  width: 50%;
  margin-bottom: 1rem;

  @media screen and (max-width: ${(props) => props.theme.breakpointSm}) {
    width: 100%;
  }

`

export {
  StyledForm,
  StyledInput,
  StyledTextArea,
  StyledContactInfo,
  StyledColoredButton
}
