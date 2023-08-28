import styled from 'styled-components'

const StyledModalBackground = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  z-index: 2;
  padding-right: 12px;

  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${(props) => props.theme.breakpointSm}) {
    padding: 0;
  }

`

const StyledModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 700px;
  min-width: 500px;
  height: max-content;
  border-radius: 12px;
  border: 1px solid ${(props) => props.theme.mainBorder};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background-color: ${(props) => props.theme.mainBg};

  @media screen and (max-width: ${(props) => props.theme.breakpointSm}) {
    min-width: 100%;
    max-height: 100vh;
  }

`

const StyledHeader = styled.h3`
  color: ${(props) => props.theme.mainTxt};
  font-size: 1.2rem;
  margin: 1rem 0;
`

const StyledFooter = styled.footer`
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.accentBg};
`

const StyledContainer = styled.div`
  width: 75%;
  display: grid;
  grid-template-columns: 50% repeat(3, 1fr);
  align-items: center;
  margin: 0 auto;
`

const StyledFooterMessage = styled.p`
  font-size: 0.95rem;
  text-align: center;
  grid-column: 1;
  grid-row: 1;
`

export {
  StyledModalBackground,
  StyledModalContainer,
  StyledHeader,
  StyledFooter,
  StyledFooterMessage,
  StyledContainer
}
