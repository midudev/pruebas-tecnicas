import styled from 'styled-components'

const StyledLink = styled.a`
  display: inline-block;
  border: none;
  background: none;
  cursor: pointer;
  width: fit-content;
  height: fit-content;
  margin: .75rem auto;
  grid-row: 1;
`

const StyledSvg = styled.svg`
  box-shadow: 0 0 2px black;
  border-radius: 8px;
`

export { StyledSvg, StyledLink }
