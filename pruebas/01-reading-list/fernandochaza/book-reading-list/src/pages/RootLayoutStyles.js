import styled from 'styled-components'

const StyledMain = styled.main`
  color: ${(props) => props.theme.mainTxt};
  background-color: ${(props) => props.theme.mainBg};
  margin: 0 auto;
  padding: 2rem 1rem;
  max-width: 1100px;
  height: calc(100% - 104px);
  display: flex;
  justify-content: center;
  flex-direction: column;
  transition: background-color .25s ease,  .25s ease;

  @media screen and (min-width: ${(props) => props.theme.breakpointSm}) {
    column-gap: 20px;
    min-height: calc(100vh - 68px);
  }
`

export { StyledMain }
