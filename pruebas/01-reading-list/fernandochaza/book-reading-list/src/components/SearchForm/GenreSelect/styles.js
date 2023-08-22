import styled from 'styled-components'

const StyledFilterSelect = styled.select`
  grid-column: 1 / -1;
  font-family: system-ui, 'Open Sans', sans-serif;
  font-size: 1rem;
  height: 40px;
  padding-left: 6px;
  margin: 0.5rem 0 1rem 0;
  border-radius: 8px;
  border: none;
  outline: none;

  box-shadow: 0 0 3px ${(props) => props.theme.secondaryTxt};
  background-color: ${(props) => props.theme.contrastBg};
  color: ${(props) => props.theme.mainTxt};

  transition: background-color 0.25s ease, color 0.25s ease;

  &:focus {
    box-shadow: 0 0 4px 0 ${(props) => props.theme.accent1Color};
  }
`

export { StyledFilterSelect }
