import styled from 'styled-components'

const StyledMainContainer = styled.div`
  height: 100vh;
  background: ${(props) => props.theme.mainBg};
  color: ${(props) => props.theme.mainTxt};
  /* background-image: radial-gradient(${(props) => props.theme.secondaryTxt} 1px, transparent 0);
  background-size: 48px 48px; */
`

const StyledMain = styled.main`
  margin: 0 auto;
  padding: 1rem;
  max-width: 900px;
  display: flex;
  flex-direction: column;
`

export { StyledMainContainer, StyledMain }