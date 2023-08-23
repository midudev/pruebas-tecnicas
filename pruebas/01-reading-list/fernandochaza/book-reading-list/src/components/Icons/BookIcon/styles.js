import styled from 'styled-components'

const StyledSvg = styled.svg`
  color: ${(props) => props.theme.mainBg};
  transition: color 0.25s ease;
`

export { StyledSvg }
