import styled from 'styled-components'

const StyledContainer = styled.div`
  width: 100%;
  height: 67px;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${(props) => props.theme.mainBg};
  box-shadow: ${(props) =>
    props.$scroll === true ? `0 3px 3px -4px ${props.theme.mainTxt}` : ''};
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
`

const StyledHeader = styled.header`
  color: ${(props) => props.theme.mainTxt};
  background-color: ${(props) => props.theme.mainBg};
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;

  transition: background-color 0.25s ease, color 0.25s ease,
    box-shadow 0.25s ease;

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
  margin: 0 auto 0.5rem auto;
  justify-content: space-around;
  align-items: center;

  @media screen and (min-width: 576px) {
    margin: auto 2rem auto 0;
    width: auto;
    column-gap: 20px;
    padding: 0;
    align-items: center;
  }

  @media screen and (max-width: 387px) {
    flex-wrap: wrap;
  }
`

export {
  StyledHeader,
  StyledTitleContainer,
  StyledTitle,
  StyledNav,
  StyledContainer
}
