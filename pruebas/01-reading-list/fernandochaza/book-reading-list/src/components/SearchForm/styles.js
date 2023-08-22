import styled from 'styled-components'
import AnimatedInput from './AnimatedInput'

const StyledAside = styled.aside`
  width: 100%;
  max-width: 400px;
  margin: 0 auto 1rem auto;
  padding: 1rem 2rem;
  padding-bottom: 1.5rem;
  border-radius: 16px;
  background-color: ${(props) => props.theme.mainBg};
  box-shadow: 0 0 16px -4px ${(props) => props.theme.secondaryTxt};
  position: relative;
  transition: box-shadow 0.5s ease, height 0.5s ease,
    background-color 0.25s ease;

  @media screen and (min-width: 576px) {
    height: ${(props) => (props.$displayFilters ? '226px' : '300px')};
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
    props.$displayFilters ? '0' : '.75rem 0 1rem 0'};
  transition: all 0.25s ease;

  & label {
    color: ${(props) => (props.$displayFilters ? 'transparent' : '')};
    height: ${(props) => (props.$displayFilters ? '0' : '16px')};
    display: ${(props) => (props.$displayFilters ? 'none' : '')};
    transition: all 0.25s ease;
  }

  & label::before {
    height: ${(props) => (props.$displayFilters ? '0' : '16px')};
    content: ${(props) => (props.$displayFilters ? 'none' : '')};
    transition: all 0.25s ease;
  }

  & > input {
    padding: ${(props) => (props.$displayFilters ? '0' : '')};
  }
`

const StyledFiltersButton = styled.button`
  border: none;
`

export {
  StyledAside,
  StyledForm,
  StyledAuthorInput,
  StyledFiltersButton
}
