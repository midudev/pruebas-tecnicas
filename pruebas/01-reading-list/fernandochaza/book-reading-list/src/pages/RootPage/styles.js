import styled from 'styled-components'

const StyledPageContainer = styled.div`
  background: ${(props) => props.theme.mainBg};
  color: ${(props) => props.theme.mainTxt};
  height: auto;
  min-height: 100vh;
`

export { StyledPageContainer }
