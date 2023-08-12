import styled from 'styled-components'

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.mainBg};
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (min-width: 576px) {
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
  border-radius: 8px;
`

const StyledTitle = styled.h1`
  padding-left: 0.3rem;
  font-size: 1.3rem;
  letter-spacing: 1px;
`

const StyledNav = styled.nav`
  display: flex;
  width: 100%;
  margin: 0 auto .5rem auto;
  justify-content: space-around;

  @media screen and (min-width: 576px) {
    margin: auto 1rem auto 0;
    width: auto;
    column-gap: 20px;
    padding: 0;
  }
`

export {
  StyledHeader,
  StyledTitleContainer,
  StyledLogo,
  StyledTitle,
  StyledNav
}
