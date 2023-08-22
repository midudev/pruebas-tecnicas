import styled from 'styled-components'

const StyledPageContainer = styled.div`
  background: ${(props) => props.theme.mainBg};
  color: ${(props) => props.theme.mainTxt};
  height: auto;
  min-height: 100vh;

  transition: background 0.25s ease, color 0.25s ease;
`

export { StyledPageContainer }
