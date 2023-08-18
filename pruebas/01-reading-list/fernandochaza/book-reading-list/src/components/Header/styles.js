import styled from 'styled-components'

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.mainBg};
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
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

const StyledTitle = styled.h1`
  padding-left: 0.3rem;
  font-size: 1.3rem;
  font-weight: 500;
  letter-spacing: 1px;
`

const StyledNav = styled.nav`
  display: flex;
  width: 100%;
  margin: 0 auto .5rem auto;
  justify-content: space-around;

  @media screen and (min-width: 576px) {
    margin: auto 2.5rem auto 0;
    width: auto;
    column-gap: 20px;
    padding: 0;
    align-items: center;
  }
`

export {
  StyledHeader,
  StyledTitleContainer,
  StyledTitle,
  StyledNav
}
