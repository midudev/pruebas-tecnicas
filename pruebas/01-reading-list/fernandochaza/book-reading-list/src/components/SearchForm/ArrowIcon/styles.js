import styled from 'styled-components'

const StyledSvg = styled.svg`
  cursor: pointer;
  position: absolute;
  bottom: 0;
  right: 0;
  transform: ${(props) => props.$rotate ? 'rotate(180deg)' : ''};
  transition: all .5s ease;
`

export { StyledSvg }
