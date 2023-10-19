import styled from 'styled-components'

const StyledSvg = styled.svg`
  &:nth-child(1) {
    filter: drop-shadow(1px 1px 4px ${(props) => props.theme.mainTxt});
  }

  @media screen and (max-width: ${(props) => props.theme.breakpointSm}) {
    width: 48px;
    height: 48px;
  }
`

export { StyledSvg }
