import styled from 'styled-components'

const StyledMainContainer = styled.div`
  height: 100vh;
  color: ${(props) => props.theme.mainTxt};
`

const StyledMain = styled.main`
  margin: 0 auto;
  padding: 1rem;
  max-width: 900px;
  display: flex;
  flex-direction: column;
`

const StyledImg = styled.img`
  background: ${(props) => props.theme.mainBg};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 100vw;
  height: 100%;
  z-index: -1;
`

export { StyledMainContainer, StyledMain, StyledImg }