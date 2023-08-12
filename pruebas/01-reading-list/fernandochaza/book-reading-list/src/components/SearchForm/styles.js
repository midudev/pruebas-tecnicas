import styled from 'styled-components'

const StyledAside = styled.aside`
  width: 100%;
  border: 1px solid white;
  margin: 0 auto 1rem auto;
  padding: 1rem 2rem;
  border-radius: 16px;

  @media screen and (min-width: 576px) {
    .search {
      width: 240px;
      margin: 0 auto;
    }
  }
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`

const StyledTextLabel = styled.label`
  display: flex;
  flex-direction: column;
`

const StyledTextInput = styled.input`
  border: none;
  outline: none;
  background-color: ${(props) => props.theme.black};
  border-radius: 4px;
  box-shadow: 0 0 2px ${(props) => props.theme.mainTxt};
  height: 40px;
  margin-top: 6px;
  margin-bottom: 1rem;
  padding-left: 1rem;
`

const PagesFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledRadioLabel = styled.label`
  line-height: 2rem;
`

const StyledRadioInput = styled.input`
  margin-right: .5rem;
`

const StyledSubmitButton = styled.button`
  background-color: ${(props) => props.theme.mainBg};
  border: 1px solid ${(props) => props.theme.mainTxt};
  color: ${(props) => props.theme.mainTxt};
  border-radius: 4px;
  padding: 0.5rem;
  margin-top: 1rem;
`

export {
  StyledAside,
  StyledForm,
  StyledTextInput,
  PagesFilterContainer,
  StyledRadioLabel,
  StyledTextLabel,
  StyledSubmitButton,
  StyledRadioInput
}
