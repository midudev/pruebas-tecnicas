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
  height: auto;
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
  margin-bottom: 1rem;
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

  @media screen and (max-width: ${(props) => props.theme.breakpointSm}) {
    width: 90%;
  }
`

const StyledFooterMessage = styled.p`
  font-size: 0.95rem;
  text-align: center;
  grid-column: 1;
  grid-row: 1;
`

const StyledSuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  height: 445px;
  justify-content: center;
  align-items: center;
`

const StyledSuccessMessage = styled.p`
  font-size: 1.1rem;
  margin: 2rem 0;
  text-align: center;
`

const StyledCloseButton = styled.button`
  border: none;
  color: ${(props) => props.theme.mainTxt};
  cursor: pointer;
  background: none;
  font-size: 1.5rem;
  align-self: flex-end;
  padding-right: 0.5rem;
`

export {
  StyledModalBackground,
  StyledModalContainer,
  StyledHeader,
  StyledFooter,
  StyledFooterMessage,
  StyledContainer,
  StyledCloseButton,
  StyledSuccessContainer,
  StyledSuccessMessage
}
