import styled from 'styled-components'

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;
  padding: 1rem;
  box-shadow: 0 -3px 4px ${(props) => props.theme.accentBg};
  color: ${(props) => props.theme.mainTxt};
  background-color: ${(props) => props.theme.mainBg};
  transition: background-color 0.75s ease, color 0.75s ease,
    box-shadow 0.75s ease;
`

const StyledLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.mainTxt};
  text-shadow: 1px 1px 4px ${(props) => props.theme.accent1Color};
  transition: color 0.75s ease;
`

const StyledSign = styled.p`
  font-size: 0.9rem;
  font-weight: 300;
`

const StyledContainer = styled.div`
  margin-top: 0.75rem;
`

export { StyledFooter, StyledLink, StyledSign, StyledContainer }
