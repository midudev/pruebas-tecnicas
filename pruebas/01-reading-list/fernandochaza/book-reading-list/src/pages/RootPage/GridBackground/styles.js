import styled from 'styled-components'

const StyledSvg = styled.svg`
  position: fixed;
  width: 100vw;

  & g {
    stroke: ${(props) => props.theme.accent1Color};
  }

  & g circle {
    fill: ${(props) => props.theme.accent1Color};
  }
`

export { StyledSvg }
