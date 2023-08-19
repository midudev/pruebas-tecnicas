import styled from 'styled-components'
import AnimatedInput from './AnimatedInput'

const StyledAside = styled.aside`
  width: 100%;
  max-width: 400px;
  margin: 0 auto 1rem auto;
  padding: 1rem 2rem;
  padding-bottom: 1.5rem;
  border-radius: 16px;
  transition: box-shadow 0.5s ease-in-out, height 0.5s ease;
  background-color: ${(props) => props.theme.mainBg};
  box-shadow: 0 0 16px -4px ${(props) => props.theme.secondaryTxt};
  position: relative;

  @media screen and (min-width: 576px) {
    height: ${(props) => (props.$displayFilters ? '180px' : '320px')};
    margin: 0 auto;
    box-shadow: 0 0 16px -4px ${(props) => props.theme.secondaryTxt};

    &:hover {
      box-shadow: 0 0 24px -4px ${(props) => props.theme.accent1Color};
    }
  }
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`

const StyledAuthorInput = styled(AnimatedInput)`
  height: ${(props) => (props.$displayFilters ? '0' : '48px')};
  margin: ${(props) =>
    props.$displayFilters ? '.25rem 0' : '.75rem 0 1rem 0'};
  transition: all 0.5s ease;

  & label {
    color: ${(props) => (props.$displayFilters ? 'transparent' : '')};
    height: ${(props) => (props.$displayFilters ? '0' : '16px')};
    display: ${(props) => (props.$displayFilters ? 'none' : '')};
  }

  & label::before {
    height: ${(props) => (props.$displayFilters ? '0' : '16px')};
    content: ${(props) => (props.$displayFilters ? 'none' : '')};
    transition: all 0.2s ease-out;
  }

  & > input {
    padding: ${(props) => (props.$displayFilters ? '0' : '')};
  }
`

const PagesFilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${(props) => (props.$displayFilters ? 0 : '1rem')};
  height: ${(props) => (props.$displayFilters ? 0 : '64px')};
  overflow: hidden;
  transition: height 0.5s ease;
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
accent-color: ${(props) => props.theme.accent1Color};
`

const StyledFiltersButton = styled.button`
  border: none;
`

export {
  StyledAside,
  StyledForm,
  StyledAuthorInput,
  PagesFilterContainer,
  StyledFilterTitle,
  StyledRadioLabel,
  StyledRadioInput,
  StyledFiltersButton
}
