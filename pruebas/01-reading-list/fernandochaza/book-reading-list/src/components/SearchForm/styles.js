import styled from 'styled-components'

const StyledAside = styled.aside`
  width: 100%;
  margin: 0 auto 1rem auto;
  padding: 1rem 2rem;
  border-radius: 16px;
  transition: all 1s ease;
  background-color: ${(props) => props.theme.mainBg};
  box-shadow: 0 0 20px -8px ${(props) => props.theme.accent1Color};

  @media screen and (min-width: 576px) {
    width: 240px;
    margin: 0 auto;
    box-shadow: 0 0 40px -8px ${(props) => props.theme.accent1Color};
  }
`

const StyledFormTitle = styled.h2`
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
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
  color: ${(props) => props.theme.mainTxt};
  border-radius: 4px;
  box-shadow: 0 0 2px ${(props) => props.theme.mainTxt};
  height: 40px;
  margin-top: 6px;
  margin-bottom: 1rem;
  padding-left: 1rem;
`

const PagesFilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  @media screen and (min-width: 576px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 12px;

    :not(:first-child) {
      place-items: center;
    }
  }
`

const StyledFilterTitle = styled.p`

@media screen and (min-width: 576px) {
  grid-row: 1;
  grid-column: 1/3;
}
`

const StyledRadioLabel = styled.label`
  display: flex;
  flex-direction: column;
  line-height: 1.5;
`

const StyledRadioInput = styled.input`

`

export {
  StyledAside,
  StyledFormTitle,
  StyledForm,
  StyledTextInput,
  PagesFilterContainer,
  StyledFilterTitle,
  StyledRadioLabel,
  StyledTextLabel,
  StyledRadioInput
}
