import styled from 'styled-components'

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.mainBg};
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;

  @media screen  and (min-width: 576px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const StyledTitleContainer = styled.section`
  display: flex;
  align-items: center;
`

const StyledLogo = styled.img`
  padding: 1rem;
  fill: white;
  border-radius: 8px;
`

const StyledTitle = styled.h1`
  padding-left: .3rem;
  margin: 0 auto;
  font-size: 1.4rem;
  letter-spacing: 1px;
`

const StyledNav = styled.nav`
  display: flex;
  column-gap: 20px;
  padding: 0 0 1rem 0;
  margin: 0 auto;

  @media screen  and (min-width: 576px) {
    margin: auto 1rem auto 0;
    padding: 0;
  }
`

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.mainBg};
  color: ${(props) => props.theme.mainTxt};
  border: 1px solid ${(props) => props.theme.mainTxt};
  padding: .5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 400;

  @media screen  and (min-width: 576px) {
  }
`

export { StyledHeader, StyledTitleContainer, StyledLogo, StyledTitle, StyledNav, StyledButton }