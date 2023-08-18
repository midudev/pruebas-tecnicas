import styled from 'styled-components'

const StyledAside = styled.aside`
  width: 100%;
  max-width: 400px;
  margin: 0 auto 1rem auto;
  padding: 1rem 2rem;
  padding-bottom: 1.5rem;
  border-radius: 16px;
  transition: box-shadow 0.5s ease-in-out, height 0.5s ease;
  background-color: ${(props) => props.theme.mainBg};
  box-shadow: 0 0 20px -8px ${(props) => props.theme.accent1Color};
  position: relative;

  @media screen and (min-width: 576px) {
    width: 240px;
    height: ${(props) => (props.$displayFilters ? '200px' : '420px')};
    margin: 0 auto;
    box-shadow: 0 0 16px -4px ${(props) => props.theme.accent1Color};

    &:hover {
      box-shadow: 0 0 24px -4px ${(props) => props.theme.accent1Color};
    }
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
  height: ${(props) => (props.$displayFilters ? 0 : '80px')};
  overflow: hidden;
  transition: height 0.5s ease;
`

const StyledTextInput = styled.input`
  border: 1px solid ${(props) => props.theme.accentBg};
  outline: none;
  background-color: ${(props) => props.theme.contrastBg};
  color: ${(props) => props.theme.mainTxt};
  border-radius: 4px;
  box-shadow: 0 1px 2px ${(props) => props.theme.accentBg};
  height: 40px;
  margin-top: 6px;
  margin-bottom: 1rem;
  padding-left: 1rem;
`

const PagesFilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${(props) => (props.$displayFilters ? 0 : '1rem')};
  height: ${(props) => (props.$displayFilters ? 0 : '64px')};
  overflow: hidden;
  transition: height .5s ease;

  @media screen and (min-width: 576px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 12px;
    height: ${(props) => (props.$displayFilters ? 0 : '120px')};

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

const StyledRadioInput = styled.input``

const StyledFiltersButton = styled.button`
  border: none;
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
  StyledRadioInput,
  StyledFiltersButton
}
